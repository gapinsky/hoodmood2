import { PricingItem } from "../koszalin/[category]/data";

export const data = {
  badge: "Cennik",
  title: "Cennik - Biały Bór",
  description:
    "Sprawdź, ile kosztują zajęcia grupowe, lekcje indywidualne oraz zajęcia w naszych filiach. Płatności rozliczamy w systemie miesięcznym za wyjątkiem lekcji indywidualnych. Chcesz chodzić na więcej niż jedne zajęcia? Sprawdź pakiety promocyjne - zestawy kilku zajęć w promocyjnych cenach!",
};

export const pricingData: PricingItem[] = [
  {
    name: "Zajęcia taneczne",
    price: "80",
    frequency: "1x/tyg",
    trending: false,
    minAge: "4",
    maxAge: "7",
    category: "kidsDance",
  },
  {
    name: "Hip-Hop",
    price: "80",
    frequency: "1x/tyg",
    trending: false,
    minAge: "8",
    maxAge: "13",
    category: "hiphop",
  },
];
