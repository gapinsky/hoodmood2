import { mainContact } from "@/data/locations";
import Link from "next/link";
import ButtonSecondary from "./ButtonSecondary";
import { Mail, Phone } from "lucide-react";

export default function AnyQuestionsContact() {
  return (
    <div className="max-w-140  flex flex-col items-start gap-4 xl:gap-2">
      <h4 className="text-xl md:text-2xl font-anton">Masz pytania?</h4>
      <p className="leading-6">
        W pierwszej kolejności sprawdź stronę 
        <Link href={"/faq"} className="text-(--brand-700) underline">
          F.A.Q.
        </Link>
        , gdzie znajdziesz najczęściej zadawane pytania. Jeżeli nie będzie
        tam satysfakcjonującej odpowiedzi, napisz do nas, albo zadzwoń pod podany poniżej numer.
      </p>
      <div className="space-x-4 mt-4 space-y-4">
        <ButtonSecondary href="/kontakt">
          <Mail /> Napisz do nas
        </ButtonSecondary>
        <ButtonSecondary href="/kontakt">
          <Phone /> {mainContact.phone}
        </ButtonSecondary>
      </div>
    </div>
  );
}
