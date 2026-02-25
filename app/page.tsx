import Localizations from "@/myComponents/sections/localizations/Localizations";
import Offer from "../myComponents/sections/offer/Offer";
import Team from "@/myComponents/sections/team/Team";
import ProofBento from "@/myComponents/sections/proofBento/ProofBento";
import HowToJoin from "@/myComponents/sections/howToJoin/HowToJoin";
import Opinions from "@/myComponents/sections/opinions/Opinions";
import Faq from "@/myComponents/sections/faq/Faq";

export default function Home() {
  return (
    <main className=" space-y-36 my-36">
      <Offer />
      <Localizations />
      <Team />
      <ProofBento />
      <HowToJoin />
      <Opinions />
      <Faq />
    </main>
  );
}
