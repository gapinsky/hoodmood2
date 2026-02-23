import Localizations from "@/myComponents/sections/localizations/Localizations";
import Offer from "../myComponents/sections/offer/Offer";

export default function Home() {
  return (
    <main className="space-y-12">
      <Offer />
      <Localizations />
    </main>
  );
}
