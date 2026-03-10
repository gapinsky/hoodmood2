export const data = {
  badge: "Dofinansowanie",
  title:
    "Dofinansowano ze środków budżetu państwa - rządowy program 'KLUB' - edycja 2025 ",
  description:
    "Dofinansowano ze środków Funduszu Rozwoju Kultury Fizycznej. Program 'Klub' 2025 realizowany przez Klub Sportowy Hoodmood Dance Studio",
};

const info = {
  program: 'Rządowy Program "KLUB" - edycja 2025',
  task: "Realizacja zajęć sportowych w tym taniec i akrobatyka w KS HOODMOOD DANCE STUDIO w 2025 roku",
  fundingValue: "17 000,00 zł",
  totalValue: "17 900,00 zł",
  agreementDate: "06.05.2025",
  description:
    "Zadanie polega na zakupie nowego sprzętu sportowego (nadmuchiwana skośna mata do ćwiczeń, trampoliny gimnastyczne, puzzle do akrobatyki) oraz organizacji regularnych treningów tanecznych i akrobatycznych dla dzieci i młodzieży.",
};

export const items = [
  { label: "Nazwa programu lub funduszu", value: info.program },
  { label: "Nazwa zadania", value: info.task },
  {
    label: "Wartość dofinansowania",
    value: info.fundingValue,
    highlight: true,
  },
  { label: "Całkowita wartość zadania", value: info.totalValue },
  { label: "Data podpisania umowy", value: info.agreementDate },
  { label: "Krótki opis zadania", value: info.description, full: true },
];
