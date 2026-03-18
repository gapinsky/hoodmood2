export const data = {
  badge: "Cennik",
  title: "Cennik - Koszalin",
  description:
    "Sprawdź, ile kosztują zajęcia grupowe, lekcje indywidualne oraz zajęcia w naszych filiach. Płatności rozliczamy w systemie miesięcznym za wyjątkiem lekcji indywidualnych. Chcesz chodzić na więcej niż jedne zajęcia? Sprawdź pakiety promocyjne - zestawy kilku zajęć w promocyjnych cenach!",
};

// export type PricingTableProps = {
//   title?: string;
//   items: PriceItem[];
//   ctaHref?: string;
// };
export const tabs = [
  {
    label: "ZAJĘCIA",
    href: "/cennik/koszalin/zajecia",
    segment: "/cennik/koszalin/zajecia",
  },
  {
    label: "PAKIETY ZAJĘĆ",
    href: "/cennik/koszalin/pakiety-zajec",
    segment: "/cennik/koszalin/pakiety-zajec",
  },
  {
    label: "ZAJĘCIA INDYWIDUALNE",
    href: "/cennik/koszalin/zajecia-indywidualne",
    segment: "/cennik/koszalin/zajecia-indywidualne",
  },
];


export type PriceItem = {
  name: string;
  price: string;
  frequency: string;
  trending: boolean;
  minAge: string;
  frequencyDescription?: string;
  maxAge: string;
  category:
    | "kidsDance"
    | "youngGeneration"
    | "ballet"
    | "acrobatics"
    | "breakdance"
    | "partnerAcro"
    | "modernDance"
    | "kpop"
    | "hiphop"
    | "adults"
    | "foundation"
    | "individual"
    | "wedding";
};

// type PackageEntry = {
//   name: string;
//   frequency?: string;
// };

// type PackageItem = {
//   title: string;
//   price: string;
//   age?: string;
//   trending: boolean;
//   category:
//     | "kidsPackages"
//     | "balletPackages"
//     | "youngGenerationPackages"
//     | "foundationPackages"
//     | "hiphopPackages"
//     | "modernDancePackages";
//   entries: PackageEntry[];
// };

// export const packageList: PackageItem[] = [
//   {
//     title: "Pakiet 4–6 lat + balet",
//     price: "230 zł",
//     age: "4–6 lat",
//     trending: false,
//     category: "kidsPackages",
//     entries: [
//       { name: "Taniec dla 4–6 latków" },
//       { name: "Balet", frequency: "1x/tyg" },
//     ],
//   },
//   {
//     title: "Pakiet 13–18 lat + partnerowanie",
//     price: "380 zł",
//     age: "13–18 lat",
//     trending: false,
//     category: "modernDancePackages",
//     entries: [
//       { name: "Taniec współczesny", frequency: "2x/tyg" },
//       { name: "Partnerowanie akro", frequency: "1x/tyg" },
//     ],
//   },
// ];
