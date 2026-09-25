import type { ClassLevel, DanceClass } from "@/data/classess";
import type { TrainerId } from "@/data/trainers";

export type OfferInstructor = {
  id: TrainerId;
  name: string;
  href?: string;
};

export type ClassOffer = Pick<DanceClass,
  "id" | "name" | "image" | "minAge" | "maxAge" | "level" | "sortOrder" | "enrollmentEnabled"
> & {
  description: string;
  logo?: { src: string; alt: string };
  instructors: OfferInstructor[];
  specialInstructors: OfferInstructor[];
  scheduleSrc?: string;
  pricingSrc: string;
  ageLabel?: string;
  priceLabel?: string;
  enrollmentLabel?: string;
};

export const classLevelLabels: Record<ClassLevel, string> = {
  beginner: "Początkujący",
  intermediate: "Średniozaawansowani",
  advanced: "Zaawansowani",
  all: "Dla każdego",
};

export type ExperienceFilterValue = ClassLevel;
export type OfferSortingValue = "default" | "alphabetical-asc" | "alphabetical-desc" | "age-asc";
