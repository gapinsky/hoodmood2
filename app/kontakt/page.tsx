import AnyQuestionsContact from "@/myComponents/common/AnyQuestionsContact";
import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import { data } from "./data";
import MainWrapper from "@/myComponents/common/MainWrapper";
import { Mail, MapPin, MessageSquareText, Phone, User } from "lucide-react";
import { a11y } from "@/public/styles";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { inputStyles } from "@/myComponents/pages/pricing/PricingFilterBar";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import LocalizationsMapTabs from "./LocalizationsMapTabs";
import { buttonPrimaryStyes } from "@/myComponents/common/ButtonPrimary";
export default function TermsAndConditions() {
  return (
    <MainWrapper>
      <SectionContainer>
        <SectionContent
          badge={data.badge}
          title={data.title}
          description={data.description}
        ></SectionContent>

        <div className=" grid grid-cols-1  gap-36 xl:grid-cols-[1fr_0.8fr] items-center">
          {/* <img src={"/assets/svg/contact/black_paperplane.svg"} /> */}
          {/* <img
              src={"/assets/svg/contact/white_paperplane.svg"}
              className="max-w-88 hidden dark:block"
            />
            <img
              src={"/assets/svg/contact/black_paperplane.svg"}
              className="max-w-88 dark:hidden"
            /> */}
          <LocalizationsMapTabs />

          <div className={sectionSurfaceStyles}>
            <form action="" className="flex flex-col gap-8">
              <Field className="flex flex-col gap-2.5">
                {/* <FieldLabel htmlFor="searchInput">Wyszukaj zajęć</FieldLabel> */}
                <FieldLabel
                  htmlFor="searchInput"
                  className="text-[11px] uppercase tracking-[0.16em] text-black/55 dark:text-white/55 font-semibold    pl-1  "
                >
                  Imię i nazwisko
                </FieldLabel>
                <InputGroup className={inputStyles}>
                  <InputGroupInput
                    id="input-field-username"
                    type="text"
                    placeholder="Wprowadź imię i nazwisko"
                  />
                  <InputGroupAddon>
                    <User className="text-black/35 dark:text-white/35" />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
              <div className="flex flex-col gap-8 md:flex-row">
                <Field className="flex flex-col gap-2.5">
                  {/* <FieldLabel htmlFor="searchInput">Wyszukaj zajęć</FieldLabel> */}
                  <FieldLabel
                    htmlFor="searchInput"
                    className="text-[11px] uppercase tracking-[0.16em] text-black/55 dark:text-white/55 font-semibold    pl-1  "
                  >
                    Adres e-mail
                  </FieldLabel>
                  <InputGroup className={inputStyles}>
                    <InputGroupInput
                      id="input-field-username"
                      type="text"
                      placeholder="Wprowadź imię i nazwisko"
                    />
                    <InputGroupAddon>
                      <Mail className="text-black/35 dark:text-white/35" />
                    </InputGroupAddon>
                  </InputGroup>
                </Field>
                <Field className="flex flex-col gap-2.5">
                  {/* <FieldLabel htmlFor="searchInput">Wyszukaj zajęć</FieldLabel> */}
                  <FieldLabel
                    htmlFor="searchInput"
                    className="text-[11px] uppercase tracking-[0.16em] text-black/55 dark:text-white/55 font-semibold    pl-1  "
                  >
                    Numer telefonu
                  </FieldLabel>
                  <InputGroup className={inputStyles}>
                    <InputGroupInput
                      id="input-field-username"
                      type="text"
                      placeholder="Wprowadź imię i nazwisko"
                    />
                    <InputGroupAddon>
                      <Phone className="text-black/35 dark:text-white/35" />
                    </InputGroupAddon>
                  </InputGroup>
                </Field>
              </div>
              <Field>
                <FieldLabel
                  htmlFor="input-field-textarea"
                  className="text-[11px] uppercase tracking-[0.16em] text-black/55 dark:text-white/55 font-semibold    pl-1  "
                >
                  Wiadomość
                </FieldLabel>
                <InputGroup className={inputStyles}>
                  <InputGroupTextarea
                    id="input-field-textarea"
                    placeholder="Treść wiadomości"
                    className="min-h-[200px]"
                  />
                  <InputGroupAddon align={"block-start"} className="border-b ">
                    <MessageSquareText className="text-black/35 dark:text-white/35" />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
              <FieldGroup>
                <Field orientation="horizontal">
                  <Checkbox id="terms-checkbox" name="terms-checkbox" />
                  <FieldLabel
                    htmlFor="terms-checkbox"
                    className="inline-flex max-w-full text-wrap"
                  >
                    <p>
                      Zapoznałem się z{" "}
                      <a
                        href="/regulamin"
                        className="underline"
                        target="_blank"
                        rel="noopener"
                      >
                        regulaminem
                      </a>{" "}
                      i akceptuję{" "}
                      <a
                        className="underline"
                        href="/polityka-prywatnosci"
                        target="_blank"
                        rel="noopener"
                      >
                        politykę prywatności
                      </a>
                    </p>
                  </FieldLabel>
                </Field>
              </FieldGroup>
              <button
                type="submit"
                className={buttonPrimaryStyes + "hover:cursor-pointer"}
              >
                Wyślij
              </button>
            </form>
          </div>
        </div>

        {/* <div className="mt-6 flex flex-col md:flex-row justify-evenly">
          <div className={infoCardStyles}>
            <h3 className="mb-4">Dane kontaktowe</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone /> 123 456 789
              </li>
              <li className="flex items-center gap-3">
                <Mail /> hoodmood.recepcja@gmail.com
              </li>
            </ul>
          </div>
          <div className={infoCardStyles}>
            <h3 className="mb-4">Lokalizacje</h3>
            <ul className="space-y-3 ">
              <li className="flex items-center gap-2">
                <MapPin />
                Koszalin, ul. Zwycięstwa 115 (siedziba)
              </li>
              <li className="flex items-center gap-2">
                <MapPin />
                Polanów, ul. Grabowe Wzgórze 5
              </li>
              <li className="flex items-center gap-2">
                <MapPin />
                Biały Bór, ul. Tamka 3{" "}
              </li>
            </ul>
          </div>
          <div className={infoCardStyles}>
            <h3 className="mb-4">Socialmedia</h3>
            <ul className="space-y-3 ">
              <li className="flex items-center gap-2">
                <img
                  width={24}
                  height={24}
                  alt={`instagram logo`}
                  src={`/icons/instagram.svg`}
                  className="dark:invert"
                />
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(a11y, "hover:underline")}
                >
                  @hoodmood
                </a>
              </li>
              <li className="flex items-center gap-2">
                <img
                  width={24}
                  height={24}
                  alt={`facebook logo`}
                  src={`/icons/facebook.svg`}
                  className="dark:invert"
                />
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(a11y, "hover:underline")}
                >
                  facebook.com/hoodmood
                </a>
              </li>
              <li className="flex items-center gap-2">
                <img
                  width={24}
                  height={24}
                  alt={`tik-tok logo`}
                  src={`/icons/tiktok.svg`}
                  className="dark:invert"
                />
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(a11y, "hover:underline")}
                >
                  @hoodmood
                </a>
              </li>
              <li className="flex items-center gap-2">
                <img
                  width={24}
                  height={24}
                  alt={`youtube logo`}
                  src={`/icons/youtube.svg`}
                  className="dark:invert"
                />
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(a11y, "hover:underline")}
                >
                  hoodmood
                </a>
              </li>
              <li className="flex items-center gap-2">
                <img
                  width={24}
                  height={24}
                  alt={`spotify logo`}
                  src={`/icons/spotify.svg`}
                  className="dark:invert"
                />
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(a11y, "hover:underline")}
                >
                  Hoodmood
                </a>
              </li>
            </ul>
          </div>
        </div> */}
        {/* <LocalizationsMapTabs /> */}

        <AnyQuestionsContact />
      </SectionContainer>
    </MainWrapper>
  );
}
const contactTextareaStyles =
  "min-h-[160px] rounded-2xl border border-black/[0.08] dark:border-white/[0.10] bg-white/80 dark:bg-white/[0.06] px-4 py-3 text-[#21191d] dark:text-white/92 placeholder:text-black/35 dark:placeholder:text-white/32 shadow-[0_8px_20px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.65)] dark:shadow-[0_8px_20px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-lg ring-1 ring-inset ring-black/[0.03] dark:ring-white/[0.05] transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#21191d]/20 dark:focus-visible:ring-white/85 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#21191d]";
const contactInputStyles =
  "h-12 rounded-2xl border border-black/[0.08] dark:border-white/[0.10] bg-white/80 dark:bg-white/[0.06] px-4 text-[#21191d] dark:text-white/92 placeholder:text-black/35 dark:placeholder:text-white/32 shadow-[0_8px_20px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.65)] dark:shadow-[0_8px_20px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-lg ring-1 ring-inset ring-black/[0.03] dark:ring-white/[0.05] transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#21191d]/20 dark:focus-visible:ring-white/85 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#21191d]";
const fieldLabelStyles =
  "pl-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-black/55 dark:text-white/55";
const infoCardStyles = "";
const sectionSurfaceStyles =
  "order-1 lg:order-2 rounded-lg border border-black/[0.06] bg-white/[0.72] p-5 shadow-[0_12px_40px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.55)] ring-1 ring-inset ring-white/50 backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.04] dark:shadow-[0_12px_40px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.06)] dark:ring-white/[0.05] md:p-6 xl:p-8";
