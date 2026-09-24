import PageIntro from "./PageIntro";
import LocationTabs from "../navigation/LocationTabs";

type Props = {
  title: string;
  description: string;
  eyebrow: string;
  navigationLabel: string;
};

export default function LocationPageHeader({ title, description, eyebrow, navigationLabel }: Props) {
  return (
    <PageIntro title={title} description={description} eyebrow={eyebrow}>
      <div className="space-y-4 border-b border-foreground/10 pb-8">
        <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">01 / Wybierz lokalizację</p>
        <LocationTabs label={navigationLabel} />
      </div>
    </PageIntro>
  );
}
