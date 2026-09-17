import { createMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { getClassOffers } from "@/lib/data/class-offer";
import { LocationPageTemplate } from "./LocationPageTemplate";
import { locationList, isCitySlug } from "@/data/locations";

type Props = {
  params: Promise<{
    city: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locationList.map(({ id }) => ({ city: id }));
}
export async function generateMetadata({ params }: Props) {
  const { city } = await params;
  if (!isCitySlug(city)) notFound();
  const location = locationList.find((location) => location.id === city);
  if (!location) notFound();
  return createMetadata({
    path: `/oferta/${city}`,
    title: `Oferta zajęć tanecznych — ${location.name}`,
    description: `Poznaj ofertę zajęć Hoodmood — ${location.name}. Zobacz dostępne treningi i wybierz zajęcia tańca lub akrobatyki dla siebie lub swojego dziecka.`,
  });
}

export default async function Offer({ params }: Props) {
  const { city } = await params;
  if (!isCitySlug(city)) {
    notFound();
  }
  const location = locationList.find((location) => location.id === city);
  if (!location) {
    notFound();
  }
  const headerContent = {
    title: `Oferta - ${location.name}`,
    description: "Wybierz zajęcia dla siebie lub swojego dziecka.",
  };
  const offerContent = getClassOffers(city);
  return (
    <LocationPageTemplate header={headerContent} offerContent={offerContent} />
  );
}
