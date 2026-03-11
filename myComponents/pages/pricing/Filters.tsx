import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

type AgeGroupFilter = "all" | "kidsAndTeens" | "adults";
type PriceSort = "default" | "price-asc" | "price-desc";

type OffersFilterBarProps = {
  search: string;
  onSearchChange: (value: string) => void;
  ageGroup: AgeGroupFilter;
  onAgeGroupChange: (value: AgeGroupFilter) => void;
  sort: PriceSort;
  onSortChange: (value: PriceSort) => void;
  participantAge: string;
  onParticipantAgeChange: (value: string) => void;
};

export default function Filters() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm sm:p-5">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-[minmax(0,1.4fr)_220px_220px_180px]">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
          <Input
            placeholder="Szukaj zajęć lub stylu tańca"
            className="h-11 border-white/10 bg-white/5 pl-10 text-white placeholder:text-white/40 focus-visible:ring-1 focus-visible:ring-white/20"
          />
        </div>

        <Select>
          <SelectTrigger className="h-11 border-white/10 bg-white/5 text-white focus:ring-1 focus:ring-white/20">
            <SelectValue placeholder="Wybierz grupę wiekową" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Wszystkie grupy</SelectItem>
            <SelectItem value="kidsAndTeens">4-6 lat</SelectItem>
            <SelectItem value="adults">6-8 lat</SelectItem>
            <SelectItem value="adults">6-8 lat</SelectItem>
            <SelectItem value="adults">6-8 lat</SelectItem>
            <SelectItem value="adults">6-8 lat</SelectItem>
            <SelectItem value="adults">6-8 lat</SelectItem>
          </SelectContent>
        </Select>
        <Input
          type="number"
          min="0"
          inputMode="numeric"
          placeholder="Wiek uczestnika"
          className="h-11 border-white/10 bg-white/5 text-white placeholder:text-white/40 focus-visible:ring-1 focus-visible:ring-white/20"
        />
      </div>
    </div>
  );
}

export type { AgeGroupFilter, PriceSort };

// Example usage:
// const [search, setSearch] = useState("");
// const [ageGroup, setAgeGroup] = useState<AgeGroupFilter>("all");
// const [sort, setSort] = useState<PriceSort>("default");
// const [participantAge, setParticipantAge] = useState("");
//
// <OffersFilterBar
//   search={search}
//   onSearchChange={setSearch}
//   ageGroup={ageGroup}
//   onAgeGroupChange={setAgeGroup}
//   sort={sort}
//   onSortChange={setSort}
//   participantAge={participantAge}
//   onParticipantAgeChange={setParticipantAge}
// />;
