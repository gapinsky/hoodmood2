import Title from "./Title";
import Description from "./Description";
import { Badge } from "@/components/ui/badge";

export default function SectionContent() {
  return (
    <div>
      <Badge className="bg-(--brand-700) text-(--brand-200)">Oferta</Badge>
      <Title>Jakie zajęcia prowadzimy w Hoodmood?</Title>
      <Description>
        W Hoodmood każdy jest mile widziany! Prowadzimy zajęcia dla dzieci,
        młodzieży i dorosłych - od pierwszych kroków po zaawansowane
        choreografie. Wybierz grupę dopasowaną do wieku i poziomu, a jeśli
        lubisz mocniejsze wejście w technikę, dołącz też na akrobatykę - idealną
        jako uzupełnienie hip hopu, street dance i tańca współczesnego.
      </Description>
    </div>
  );
}
