import ButtonPrimary from "@/myComponents/common/ButtonPrimary";
import ButtonSecondary from "@/myComponents/common/ButtonSecondary";
import { Phone } from "lucide-react";

export default function NoQuestion() {
  return (
    <div className=" mx-auto w-fit text-center space-y-2 mt-12">
      <p>Niestety nie znaleźliśmy pasujących pytań</p>
      <div className="mt-2 space-x-4 inline-flex ">
        <ButtonSecondary href="/kontakt">
          <Phone /> 123 456 789
        </ButtonSecondary>
        <ButtonPrimary href="/kontakt">Napisz do nas</ButtonPrimary>
      </div>
    </div>
  );
}
