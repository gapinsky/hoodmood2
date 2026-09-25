export default function PlayerEmbed() {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-xl">
      <iframe
        className="absolute inset-0 h-full w-full"
        src="https://www.youtube.com/embed/cRFh3wTlvas?si=8hGkj0z5HXb9CL3K"
        title="Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
