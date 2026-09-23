import TrainerCard from "@/myComponents/pages/team/TeamCard";
import type { Trainer } from "@/data/trainers";

type Props = Pick<Trainer, "slug" | "name" | "styles" | "image">;

export default function TeamCard({ slug, name, styles, image }: Props) {
  return (
    <TrainerCard
      slug={slug}
      image={image}
      name={name}
      styles={styles}
      variant="carousel"
    />
  );
}
