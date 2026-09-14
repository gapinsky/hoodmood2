import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Info } from "lucide-react";
import type { PricingItem } from "@/data/pricingData";

export default function PricingFrequency({ item, compact = false }: { item: PricingItem; compact?: boolean }) {
  const numeric = /^\d+(?:[,.]\d+)?$/.test(item.frequency);
  const description = item.frequencyDescription || (numeric
    ? `Na wybrane zajęcia można wejść maksymalnie ${item.frequency} raz(y) w tygodniu.`
    : null);

  return (
    <span className="inline-flex items-center">
      {numeric ? `${item.frequency}x/tyg` : item.frequency}
      {description && (
        <HoverCard openDelay={20} closeDelay={20}>
          <HoverCardTrigger asChild>
            <button type="button" aria-label="Szczegóły częstotliwości zajęć" className={`ui-focus-ring rounded-sm ${compact ? "px-1" : "px-2"}`}>
              <Info className="w-4 text-muted-foreground" />
            </button>
          </HoverCardTrigger>
          <HoverCardContent className="text-sm" align="center">{description}</HoverCardContent>
        </HoverCard>
      )}
    </span>
  );
}
