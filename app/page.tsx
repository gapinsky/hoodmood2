import { locations, locationList, mainContact } from "@/data/locations";
import { createMetadata, SITE_URL } from "@/lib/seo";
import { staticSeoPages } from "@/lib/seo-pages";
import dynamic from "next/dynamic";
import Localizations from "@/myComponents/sections/localizations/Localizations";
import Offer from "../myComponents/sections/offer/Offer";
import Hero from "@/myComponents/sections/hero/Hero";
import LifeAtHoodmood from "@/myComponents/sections/lifeAtHoodmood/LifeAtHoodmood";
// import CrewStory from "@/myComponents/sections/editorial/CrewStory";
import MasterclassFeature from "@/myComponents/sections/editorial/MasterclassFeature";

const Player = dynamic(() => import("@/myComponents/sections/player/Player"));
const Team = dynamic(() => import("@/myComponents/sections/team/Team"));
const ProofBento = dynamic(
  () => import("@/myComponents/sections/proofBento/ProofBento"),
);
const HowToJoin = dynamic(
  () => import("@/myComponents/sections/howToJoin/HowToJoin"),
);
const Opinions = dynamic(
  () => import("@/myComponents/sections/opinions/Opinions"),
);
const Faq = dynamic(() => import("@/myComponents/sections/faq/Faq"));


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hoodmood",
  url: SITE_URL,
  description:
    "Szkoła tańca i akrobatyki w Koszalinie, Polanowie, Białym Borze i Szczecinku. Zajęcia dla dzieci, młodzieży i dorosłych.",
  telephone: mainContact.phone,
  email: mainContact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: `ul. ${locations.koszalin.address.street}`,
    addressLocality: locations.koszalin.address.city,
    postalCode: locations.koszalin.address.postalCode,
    addressCountry: "PL",
  },
  areaServed: [
    { "@type": "City", name: "Szczecinek" },
    {
      "@type": "City",
      name: "Koszalin",
    },
    {
      "@type": "City",
      name: "Polanów",
    },
    {
      "@type": "City",
      name: "Biały Bór",
    },
  ],
  sameAs: [
    "https://www.facebook.com/profile.php?id=100070445546249",
    "https://www.instagram.com/hoodmood_dancestudio/",
    "https://www.youtube.com/@hoodmooddancestudio9404",
    "https://www.tiktok.com/@hoodmood_dancestudio",
  ],
  location: locationList.map((location) => ({
    "@type": "Place",
    name: location.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address.street ? `ul. ${location.address.street}` : undefined,
      addressLocality: location.address.city,
      postalCode: location.address.postalCode || undefined,
      addressCountry: "PL",
    },
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Oferta zajęć Hoodmood",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Balet",
          serviceType: "Zajęcia baletowe",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Hip-hop",
          serviceType: "Zajęcia hip-hop",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "K-POP",
          serviceType: "Zajęcia taneczne K-POP",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Taniec współczesny",
          serviceType: "Zajęcia tańca współczesnego",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Akrobatyka",
          serviceType: "Zajęcia akrobatyczne",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Zajęcia taneczne dla dzieci",
          serviceType: "Zajęcia taneczne dla dzieci",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Zajęcia dla dorosłych",
          serviceType: "Zajęcia taneczne dla dorosłych",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Formacje i grupy zaawansowane",
          serviceType: "Formacje taneczne i grupy zaawansowane",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Partnerowanie akrobatyczne",
          serviceType: "Zajęcia partnerowania w akrobatyce",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Lekcje indywidualne",
          serviceType: "Indywidualne zajęcia taneczne i akrobatyczne",
        },
      },
    ],
  },
};

export const metadata = createMetadata({ path: "/", ...staticSeoPages["/"] });

export default function Home() {
  return (
    <>
      <script
        id="hoodmood-dance-school-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <main className="mb-36 space-y-[clamp(5rem,8vw,8rem)]">
        <Hero />
        <Offer />
        <LifeAtHoodmood />
        <Localizations />
        <MasterclassFeature />
        <Player />
        {/* <CrewStory /> */}
        <Team />
        <ProofBento />
        <HowToJoin />
        <Opinions />
        <Faq />
      </main>
    </>
  );
}
