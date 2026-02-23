import { Badge } from "@/components/ui/badge";

type Props = {
  badge: string;
  title: string;
  description: string;
};

export default function SectionContent({ badge, title, description }: Props) {
  return (
    <div className="max-w-2xl  flex flex-col items-start xl:gap-2">
      <Badge className="bg-(--brand-700) text-(--brand-200) uppercase">
        {badge}
      </Badge>
      <h2 className="xl:text-5xl">{title}</h2>
      <p className="xl:text-xl">{description}</p>
    </div>
  );
}
