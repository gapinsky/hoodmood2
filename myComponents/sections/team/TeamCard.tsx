import TrainerCard from "@/myComponents/pages/team/TeamCard";

type Props = {
  id: string;
  name: string;
  styles: string[];
  images: string[];
};

export default function TeamCard({ id, name, styles, images }: Props) {
  return (
    <TrainerCard
      id={id}
      images={images}
      name={name}
      styles={styles}
      variant="carousel"
    />
  );
}
