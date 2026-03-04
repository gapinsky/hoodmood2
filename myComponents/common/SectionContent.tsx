import { Badge } from "@/components/ui/badge";

type Props = {
  badge: string;
  title: string;
  description: string;
};

export default function SectionContent({ badge, title, description }: Props) {
  return (
    <div className="max-w-140  flex flex-col items-start gap-4 xl:gap-2">
      <div className="space-y-2">
        <Badge className="bg-(--brand-700) text-(--brand-200) uppercase">
          {badge}
        </Badge>
        <h2 className="text-2xl xl:text-3xl">{title}</h2>
      </div>
      <p className="leading-6 text-(--muted-foreground)">{description}</p>
    </div>
  );
}
