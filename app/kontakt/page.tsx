import PageStructuredData from "@/myComponents/common/PageStructuredData";
import { mainContact } from "@/data/locations";
import { createMetadata } from "@/lib/seo";
import { staticSeoPages } from "@/lib/seo-pages";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import SectionContainer from "@/myComponents/common/SectionContainer";
import PageIntro from "@/myComponents/headers/PageIntro";
import MainWrapper from "@/myComponents/common/MainWrapper";
import SocialLinks from "@/myComponents/common/SocialLinks";
import { data } from "./data";
import Form from "./_components/Form";
import Toaster from "@/components/ui/sonner";

const contactMethods = [
  { label: "Zadzwoń", value: mainContact.phone, href: mainContact.phoneHref, icon: Phone },
  { label: "Napisz e-mail", value: mainContact.email, href: `mailto:${mainContact.email}`, icon: Mail },
];

export const metadata = createMetadata({ path: "/kontakt", ...staticSeoPages["/kontakt"] });

export default function ContactPage() {
  return (
    <MainWrapper>
      <PageStructuredData metadata={metadata} pageType="ContactPage" />
      <SectionContainer>
        <PageIntro eyebrow="Porozmawiajmy / Hoodmood" title={data.title} description={data.description} />
        <div className="grid items-start gap-10 border-t border-foreground/10 pt-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 xl:gap-20">
          <section aria-labelledby="contact-details-title" className="min-w-0 space-y-8">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">01 / Bądźmy w kontakcie</p>
              <h2 id="contact-details-title" className="font-anton text-3xl uppercase sm:text-4xl">Tu zaczyna się rozmowa</h2>
            </div>
            <div className="divide-y divide-foreground/10 border-y border-foreground/10">
              {contactMethods.map(({ label, value, href, icon: Icon }) => (
                <a key={href} href={href} className="ui-focus-ring group flex min-w-0 items-center gap-4 rounded-sm py-5">
                  <Icon className="size-5 shrink-0 text-(--brand-700) dark:text-(--brand-400)" aria-hidden="true" />
                  <div className="min-w-0">
                    <p className="mb-1 text-xs uppercase tracking-[0.12em] text-muted-foreground">{label}</p>
                    <p className="wrap-break-word text-base font-medium sm:text-lg">{value}</p>
                  </div>
                  <ArrowUpRight className="ml-auto size-4 shrink-0 text-muted-foreground transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              ))}
            </div>
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.16em] text-muted-foreground">Hoodmood poza salą</p>
              <SocialLinks />
            </div>
            <Link href="/faq" className="ui-focus-ring group block rounded-md border border-foreground/10 bg-foreground/2.5 p-5 transition-colors hover:bg-foreground/5">
              <span className="flex items-center justify-between gap-3 font-medium">Może odpowiedź już tu jest?<ArrowUpRight className="size-4 shrink-0" aria-hidden="true" /></span>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">Sprawdź najczęstsze pytania o zajęcia, zapisy i pierwszą wizytę.</p>
            </Link>
          </section>
          <section aria-labelledby="contact-form-title" className="min-w-0 rounded-md border border-foreground/10 bg-foreground/2.5 p-5 sm:p-8">
            <p className="mb-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">02 / Twoja wiadomość</p>
            <h2 id="contact-form-title" className="mb-8 font-anton text-3xl uppercase sm:text-4xl">W czym możemy pomóc?</h2>
            <Form />
          </section>
        </div>
        <Toaster />
      </SectionContainer>
    </MainWrapper>
  );
}
