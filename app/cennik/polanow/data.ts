import { PricingItem } from "../koszalin/[category]/data";

export const data = {
  badge: "Cennik",
  title: "Cennik - Polanów",
  description:
    "Sprawdź, ile kosztują zajęcia grupowe, lekcje indywidualne oraz zajęcia w naszych filiach. Płatności rozliczamy w systemie miesięcznym za wyjątkiem lekcji indywidualnych. Chcesz chodzić na więcej niż jedne zajęcia? Sprawdź pakiety promocyjne - zestawy kilku zajęć w promocyjnych cenach!",
};

export const pricingData: PricingItem[] = [
  {
    name: "Taniec dla 4–6 latków",
    price: "120",
    frequency: "1x/tyg",
    trending: false,
    minAge: "4",
    maxAge: "6",
    category: "kidsDance",
  },
  {
    name: "Hip-Hop",
    price: "150",
    frequency: "1x/tyg",
    trending: false,
    minAge: "7",
    maxAge: "14",
    category: "hiphop",
  },
];
