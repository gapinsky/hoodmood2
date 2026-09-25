import { locations } from "@/data/locations";
import SectionContent from "@/myComponents/headers/SectionContent";
import SectionContainer from "@/myComponents/common/SectionContainer";
import LocationCard from "./LocationCard";

// Kolejność miast w sekcji na stronie głównej.
const displayedLocations = [
  locations.polanow,
  locations.koszalin,
  locations.bialyBor,
  locations.szczecinek,
];

export default function Localizations() {
  return (
    <SectionContainer>
      <SectionContent
        title="Hoodmood jest bliżej, niż myślisz"
        description="Prowadzimy zajęcia w Koszalinie, Polanowie, Białym Borze i Szczecinku. Niezależnie od tego, którą lokalizację wybierzesz, czeka na Ciebie ta sama energia, dobra zabawa i ludzie z zajawką. Znajdź swoje miejsce i wpadaj na salę."
      />

      <div className="grid grid-cols-1 gap-6 pb-3 md:grid-cols-2 xl:grid-cols-5 md:gap-8">
        {displayedLocations.map((location) =>
          location.venues.map((venue) => (
            <LocationCard key={venue.id} location={location} venue={venue} />
          )),
        )}
      </div>
    </SectionContainer>
  );
}
