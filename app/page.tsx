import type { Metadata } from "next";
import Localizations from "@/myComponents/sections/localizations/Localizations";
import Offer from "../myComponents/sections/offer/Offer";
import Team from "@/myComponents/sections/team/Team";
import ProofBento from "@/myComponents/sections/proofBento/ProofBento";
import HowToJoin from "@/myComponents/sections/howToJoin/HowToJoin";
import Opinions from "@/myComponents/sections/opinions/Opinions";
import Faq from "@/myComponents/sections/faq/Faq";
import Player from "@/myComponents/sections/player/Player";
import Hero from "@/myComponents/sections/hero/Hero";

export const metadata: Metadata = {
  title: "Szkoła tańca i akrobatyki | Koszalin, Polanów, Biały Bór",
  description:
    "Hoodmood to szkoła tańca i akrobatyki w Koszalinie, Polanowie i Białym Borze. Prowadzimy zajęcia dla dzieci, młodzieży i dorosłych. Sprawdź ofertę, grafik i zapisz się online.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hoodmood – szkoła tańca i akrobatyki",
    description:
      "Zajęcia dla dzieci, młodzieży i dorosłych w Koszalinie, Polanowie i Białym Borze.",
    url: "/",
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hoodmood – szkoła tańca i akrobatyki",
    description:
      "Zajęcia dla dzieci, młodzieży i dorosłych w Koszalinie, Polanowie i Białym Borze.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DanceSchool",
  name: "Hoodmood",
  url: "https://hoodmood.vercel.app/",
  description:
    "Szkoła tańca i akrobatyki w Koszalinie, Polanowie i Białym Borze. Zajęcia dla dzieci, młodzieży i dorosłych.",
  telephone: "+48 577 198 599",
  email: "hoodmood.recepcja@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Zwycięstwa 115",
    addressLocality: "Koszalin",
    postalCode: "75-211",
    addressCountry: "PL",
  },
  areaServed: [
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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="space-y-36 mb-36">
        <Hero />
        <Offer />
        <Localizations />
        <Player />
        <Team />
        <ProofBento />
        <HowToJoin />
        <Opinions />
        <Faq />
      </main>
    </>
  );
}
