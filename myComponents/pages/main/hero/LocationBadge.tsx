import { locationList } from "@/data/locations";
import { MapPin } from "lucide-react";

export default function LocationBadge() {
  return (
    <div className="inline-flex  h-9.5 items-center gap-2 rounded-full bg-black/30 backdrop-blur-2xl border border-black/35 px-4 text-white">
      <MapPin className="h-4 w-4 shrink-0" />

      <div className="relative h-5 overflow-hidden">
        <div className="animate-location-slide">
          {locationList.map((location) => (
            <div key={location.id} className="h-5 text-[13px] font-bold uppercase leading-5 tracking-[0.16em]">
              {location.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
