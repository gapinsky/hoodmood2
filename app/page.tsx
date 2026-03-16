import Localizations from "@/myComponents/sections/localizations/Localizations";
import Offer from "../myComponents/sections/offer/Offer";
import Team from "@/myComponents/sections/team/Team";
import ProofBento from "@/myComponents/sections/proofBento/ProofBento";
import HowToJoin from "@/myComponents/sections/howToJoin/HowToJoin";
import Opinions from "@/myComponents/sections/opinions/Opinions";
import Faq from "@/myComponents/sections/faq/Faq";
import Player from "@/myComponents/sections/player/Player";
import Hero from "@/myComponents/sections/hero/Hero";

export default function Home() {
  return (
    <main className="space-y-36 ">
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
  );
}
