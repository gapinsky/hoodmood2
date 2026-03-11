import ToggleButtons from "./ToggleButtons";
import PricingTable from "@/myComponents/pages/pricing/PricingTable";
import Filters from "@/myComponents/pages/pricing/Filters";
import { PriceItem, PricingTableProps } from "@/app/cennik/koszalin/data";

type Props = {
  data: PriceItem[];
};

const PricingTabs = ({ data }: Props) => {
  return (
    <div>
      <ToggleButtons />
      <PricingTable items={data} />
    </div>
  );
};

export default PricingTabs;
