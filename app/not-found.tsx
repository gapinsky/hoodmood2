import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import ButtonSecondary from "@/myComponents/common/ButtonSecondary";
import SectionContainer from "@/myComponents/common/SectionContainer";

export default function error() {
  return (
    <main className="">
      <SectionContainer>
        <div className="flex flex-col items-center w-fit mx-auto gap-4 my-42">
          <h1 className="text-xl">Ups, ta scena jest pusta!</h1>
          <p>
            Strona której szukasz nie istnieje lub zmieniła adres. W Hoodmood
            dużo się dzieję, wróć na stronę główna i złap odpowiedni rytm!
          </p>
          <div className="space-x-8 mt-4">
            <ButtonSecondary href="/oferta">oferta</ButtonSecondary>
            <ButtonSecondary href="/grafik">grafik</ButtonSecondary>
            <ButtonSecondary href="/">Strona główna</ButtonSecondary>
          </div>
        </div>
        <AnyQuestionsContact />
      </SectionContainer>
    </main>
  );
}
