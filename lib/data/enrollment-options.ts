export type ScheduleOption = {
  id: string;
  dayLabel: string;
  timeLabel: string;
  price: number;
};

export type ClassTypeOption = {
  id: string;
  name: string;
  schedules: ScheduleOption[];
};

export type LocationOption = {
  id: string;
  name: string;
  classTypes: ClassTypeOption[];
};

export const participantLevelOptions = [
  { value: "beginner", label: "Początkujący" },
  { value: "intermediate", label: "Średniozaawansowany" },
  { value: "advanced", label: "Zaawansowany" },
];

export const enrollmentLocations: LocationOption[] = [
  {
    id: "koszalin",
    name: "Koszalin",
    classTypes: [
      {
        id: "hip-hop",
        name: "Hip-Hop",
        schedules: [
          { id: "hh-kos-1", dayLabel: "Wtorek", timeLabel: "17:15", price: 159 },
          { id: "hh-kos-2", dayLabel: "Czwartek", timeLabel: "18:15", price: 159 },
        ],
      },
      {
        id: "modern",
        name: "Taniec nowoczesny",
        schedules: [
          { id: "mod-kos-1", dayLabel: "Poniedziałek", timeLabel: "16:30", price: 149 },
          { id: "mod-kos-2", dayLabel: "Środa", timeLabel: "17:00", price: 149 },
        ],
      },
    ],
  },
  {
    id: "polanow",
    name: "Polanów",
    classTypes: [
      {
        id: "jazz",
        name: "Jazz",
        schedules: [
          { id: "jaz-pol-1", dayLabel: "Wtorek", timeLabel: "16:45", price: 139 },
        ],
      },
      {
        id: "kids-dance",
        name: "Kids Dance",
        schedules: [
          { id: "kid-pol-1", dayLabel: "Piątek", timeLabel: "17:30", price: 129 },
        ],
      },
    ],
  },
];