import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import { data, items } from "./data";

export default function Subsidy() {
  return (
    <main className="">
      <SectionContainer>
        <SectionContent
          badge={data.badge}
          title={data.title}
          description={data.description}
        ></SectionContent>
        <div className="">
          <dl className="grid gap-4 sm:gap-5">
            {items.map((item) => (
              <div
                key={item.label}
                className={`rounded-2xl border p-4 transition-all sm:p-5 ${
                  item.highlight
                    ? "border-rose-200 bg-gradient-to-br from-rose-50 to-white"
                    : "border-neutral-200 bg-neutral-50/70"
                }`}
              >
                <dt className="text-sm font-semibold text-neutral-500 sm:text-[15px]">
                  {item.label}
                </dt>
                <dd
                  className={`mt-2 text-sm leading-7 text-neutral-900 sm:text-base ${
                    item.highlight ? "font-bold text-rose-700" : "font-medium"
                  } ${item.full ? "max-w-4xl font-normal text-neutral-700" : ""}`}
                >
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </SectionContainer>
    </main>
  );
}
