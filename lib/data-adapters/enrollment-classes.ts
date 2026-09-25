import { classList } from "@/data/classess";
import { locationList, type CitySlug } from "@/data/locations";
import { trainers } from "@/data/trainers";
import { pricingCategories, type PricingItem } from "@/myComponents/pricing/types";
import { dayOrder } from "@/myComponents/schedule/types";
import type { EnrollmentRequest, SelectedClassItem } from "@/lib/schemas/enrollmentSchema";
import { getClassPricing } from "./class-pricing";

export type EnrollmentClassItem = PricingItem & {
  locationId: CitySlug;
  locationName: string;
  type: "class" | "package";
  billingPeriod: "monthly" | "one-time";
  scheduleLabel: string;
  instructorLabel: string;
  specialInstructorLabel: string;
};

export const enrollmentLocationOptions = locationList.map((location) => ({
  id: location.id,
  label: location.name,
}));

export function getEnrollmentClasses(): EnrollmentClassItem[] {
  return locationList.flatMap((location) =>
    pricingCategories.flatMap((category) =>
      getClassPricing(location.id, category)
        .filter((row) => row.enrollmentEnabled)
        .map((row) => {
          const item = classList.find((item) => item.id === row.classId)!;
          const isPackage = category === "pakiety-zajec";
          const scheduleLabel = [...item.schedule]
            .sort((a, b) => a.dayOfWeek - b.dayOfWeek || a.startTime.localeCompare(b.startTime))
            .map((entry) => `${dayOrder[entry.dayOfWeek - 1]} ${entry.startTime}–${entry.endTime}${entry.venue ? ` · ${entry.venue}` : ""}`)
            .join("; ");
          return {
            ...row,
            locationId: location.id,
            locationName: location.name,
            type: isPackage ? "package" as const : "class" as const,
            billingPeriod: item.pricing.billingUnit === "month" ? "monthly" as const : "one-time" as const,
            scheduleLabel: scheduleLabel || (isPackage ? "Terminy zgodnie z wybranymi zajęciami" : "Termin do ustalenia"),
            instructorLabel: item.trainerIds.map((id) => trainers[id].name).join(" / "),
            specialInstructorLabel: item.specialTrainerIds.map((id) => trainers[id].name).join(" / "),
          };
        }),
    ),
  );
}

export const enrollmentClasses = getEnrollmentClasses();

export const getClassAgeLabel = (item: EnrollmentClassItem) =>
  item.minAge === 0 && item.maxAge === null ? "Wiek do ustalenia"
    : item.maxAge === null ? `${item.minAge}+ lat` : `${item.minAge}-${item.maxAge} lat`;

export function matchesEnrollmentParticipant(
  item: EnrollmentClassItem,
  participantType: "youth" | "adult",
  participantAge: string,
): boolean {
  const age = Number(participantAge);
  if (!participantAge.trim() || !Number.isSafeInteger(age) || age <= 0) return false;
  if (participantType === "adult" ? age < 18 : age > 18) return false;
  return age >= item.minAge && (item.maxAge === null || age <= item.maxAge);
}

export const getEnrollmentClassPrice = (item: EnrollmentClassItem, isHoodmoodMember: boolean) =>
  (isHoodmoodMember ? item.memberPrice : item.nonMemberPrice) ?? item.price;

export const getEnrollmentFrequencyLabel = (frequency: string) =>
  /^\d+(?:[,.]\d+)?$/.test(frequency) ? `${frequency}x/tyg` : frequency;

export function createSelectedClass(
  item: EnrollmentClassItem,
  isHoodmoodMember: boolean,
  clientId: string,
): SelectedClassItem {
  return {
    clientId,
    locationId: item.locationId,
    locationName: item.locationName,
    classTypeId: item.id,
    classTypeName: item.name,
    billingPeriod: item.billingPeriod,
    scheduleId: item.classId,
    dayLabel: getEnrollmentFrequencyLabel(item.frequency),
    timeLabel: getClassAgeLabel(item),
    price: getEnrollmentClassPrice(item, isHoodmoodMember),
    priceUnit: item.priceUnit,
    scheduleLabel: item.scheduleLabel,
    instructorLabel: item.instructorLabel,
    specialInstructorLabel: item.specialInstructorLabel,
    currency: "PLN",
  };
}

export function resolveEnrollmentSelection(data: EnrollmentRequest): SelectedClassItem[] | null {
  const available = new Map(getEnrollmentClasses().map((item) => [item.id, item]));
  const seen = new Set<string>();
  const selected: SelectedClassItem[] = [];
  for (const entry of data.selectedClasses) {
    const item = available.get(entry.classId);
    if (!item || seen.has(item.classId) || item.locationId !== data.selectedLocationId ||
      !matchesEnrollmentParticipant(item, data.participantType, data.participantAge)) return null;
    seen.add(item.classId);
    selected.push(createSelectedClass(item, data.isHoodmoodMember, item.id));
  }
  return selected.length ? selected : null;
}
