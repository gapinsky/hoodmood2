import { createMetadata } from "@/lib/seo";
import { staticSeoPages } from "@/lib/seo-pages";
import SectionContainer from "@/myComponents/common/SectionContainer";
import PageIntro from "@/myComponents/common/headers/PageIntro";
import { data } from "./data";
import { activeTrainers } from "@/data/trainers";
import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import MainWrapper from "@/myComponents/common/MainWrapper";
import TeamCard from "@/myComponents/pages/team/TeamCard";

export const metadata = createMetadata({ path: "/kadra", ...staticSeoPages["/kadra"] });

export default function Team() {
  const groups = [
    {
      id: "core-crew",
      title: "Kadra",
      label: "Core crew",
      trainers: activeTrainers.filter((trainer) => !trainer.specialGuest),
    },
    {
      id: "special-guests",
      title: "Goście specjalni",
      label: "Special guests",
      trainers: activeTrainers.filter((trainer) => trainer.specialGuest),
    },
  ];

  return (
    <MainWrapper>
      <SectionContainer>
        <PageIntro title={data.title} description={data.description} eyebrow="Meet the crew / Hoodmood" titleWidth="normal">
          <nav aria-label="Grupy trenerów" className="flex flex-wrap gap-3 border-b border-foreground/10 pb-8">
            {groups.map((group) => (
              <a key={group.id} href={`#${group.id}`} className="ui-focus-ring inline-flex items-center gap-4 rounded-full border border-foreground/10 bg-foreground/2.5 px-5 py-3 text-sm transition-colors hover:bg-foreground/[0.07]">
                {group.title}
                <span className="text-xs tabular-nums text-muted-foreground">{String(group.trainers.length).padStart(2, "0")}</span>
              </a>
            ))}
          </nav>
        </PageIntro>
        {groups.map((group, index) => (
          <section key={group.id} id={group.id} aria-labelledby={`${group.id}-title`} className="scroll-mt-28 space-y-8">
            <div className="flex items-end justify-between gap-4 border-b border-foreground/10 pb-5">
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">0{index + 1} / {group.label}</p>
                <h2 id={`${group.id}-title`} className="font-anton text-3xl uppercase sm:text-4xl">{group.title}</h2>
              </div>
              <span aria-label={`Liczba osób: ${group.trainers.length}`} className="font-anton text-4xl tabular-nums text-foreground/20 sm:text-5xl">{String(group.trainers.length).padStart(2, "0")}</span>
            </div>
            <div className="grid grid-cols-1 gap-x-5 gap-y-9 sm:grid-cols-2 md:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
              {group.trainers.map((instructor) => (
                <TeamCard
                  key={instructor.id}
                  name={instructor.name}
                  role={instructor.role}
                  image={instructor.image}
                  localizations={instructor.localizations}
                  slug={instructor.slug}
                  styles={instructor.styles}
                />
              ))}
            </div>
          </section>
        ))}
        <AnyQuestionsContact />
      </SectionContainer>
    </MainWrapper>
  );
}
