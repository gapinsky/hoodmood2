type Props = {
  title: string;
  description: string;
  video: string;
};
export default function PreviousEvents({ title, description, video }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
      <div className="relative w-full aspect-video overflow-hidden rounded-xl  ">
        <iframe
          className="absolute inset-0 h-full w-full  "
          src={video}
          title="Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      <div>
        <h3 className="text-xl mb-2 lg:text-3xl">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
