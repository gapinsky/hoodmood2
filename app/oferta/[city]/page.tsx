import { notFound } from "next/navigation";
import { offerHeaderData, classesOffer, CitySlug } from "@/data/ofertaData";
import { LocationPageTemplate } from "./LocationPageTemplate";

type Props = {
  params: Promise<{
    city: string;
  }>;
};

function isCitySlug(value: string): value is CitySlug {
  return value === "bialy-bor" || value === "koszalin" || value === "polanow";
}
export default async function Offer({ params }: Props) {
  const { city } = await params;
  if (!isCitySlug(city)) {
    notFound();
  }
  const headerContent = offerHeaderData[city];
  const offerContent = classesOffer[city];
  if (!headerContent || !offerContent) {
    notFound();
  }
  return (
    <LocationPageTemplate header={headerContent} offerContent={offerContent} />
  );
}
