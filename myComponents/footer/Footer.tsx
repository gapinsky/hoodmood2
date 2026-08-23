import Image from "next/image";
import logo from "../../public/assets/svg/mainLogo/logo.svg";
import Link from "next/link";
import { a11y } from "@/public/styles";
import { cn } from "@/lib/utils";
import SocialLinks from "@/myComponents/common/SocialLinks";

export default function Footer() {
  const date = new Date();
  return (
    <footer className="  w-full text-sm border-black/10 dark:border-white/20 border-t-2">
      <div className="max-w-380 mx-auto px-8 md:px-12 lg:px-16">
        <div className="flex flex-col gap-8 md:flex-row  md:justify-between lg:items-stretch border-b-2 border-black/10 dark:border-white/20 py-4 lg:py-8 ">
          {/* LEFT COL */}
          <div className="space-y-4">
            <Image
              src={logo}
              alt="Hoodmood"
              width={120}
              height={97}
              className="h-auto w-[120px]"
            />
            <div className="space-y-1">
              <p className="font-semibold">Adres siedziby:</p>
              <p className="opacity-80">Zwycięstwa 115, 75-211 Koszalin</p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold">Kontakt:</p>
              <p className="opacity-80">+48 577 198 599</p>
              <p className="opacity-80">hoodmood.recepcja@gmail.com</p>
            </div>
            <SocialLinks className="pt-2" />
          </div>

          {/* RIGHT COL */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-8 md:flex-row h-full">
              <div className="">
                <p className="font-semibold mb-2">Nawigacja:</p>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/oferta/koszalin"
                      className={cn(a11y, "ui-link-subtle opacity-80")}
                    >
                      Oferta
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/grafik/koszalin"
                      className={cn(a11y, "ui-link-subtle opacity-80")}
                    >
                      Grafik
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cennik/koszalin/zajecia"
                      className={cn(a11y, "ui-link-subtle opacity-80")}
                    >
                      Cennik
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/kadra"
                      className={cn(a11y, "ui-link-subtle opacity-80")}
                    >
                      Kadra
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/kolonie"
                      className={cn(a11y, "ui-link-subtle opacity-80")}
                    >
                      Kolonie
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/aktualnosci"
                      className={cn(a11y, "ui-link-subtle opacity-80")}
                    >
                      Aktualności
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="">
                <p className="font-semibold mb-2">Dokumenty do pobrania:</p>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/assets/pdf/standardy-ochrony-dzieci-przed-krzywdzeniem.pdf"
                      download={true}
                      className={cn(a11y, "ui-link-subtle opacity-80")}
                    >
                      Standardy ochrony dzieci przed krzywdzeniem
                    </a>
                  </li>
                  <li>
                    <a
                      href="/assets/pdf/potwierdzenie-uczestnictwa-w-zajeciach.pdf"
                      className={cn(a11y, "ui-link-subtle opacity-80")}
                      download={true}
                    >
                      Potwierdzenie uczestnictwa w zajęciach
                    </a>
                  </li>
                  <li>
                    <a
                      href="/assets/pdf/umowa-uczestnictwa.pdf"
                      className={cn(a11y, "ui-link-subtle opacity-80")}
                      download={true}
                    >
                      Umowa uczestnictwa
                    </a>
                  </li>
                  <li>
                    <a
                      href="/assets/pdf/regulamin-studia-tanca-hoodmood.pdf"
                      className={cn(a11y, "ui-link-subtle opacity-80")}
                      download={true}
                    >
                      Regulamin studia tańca Hoodmood
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <Link
              href={"/dofinansowanie"}
              className={cn(a11y, "ui-link-subtle text-xs")}
            >
              Dofinansowano ze środków Funduszu rozwoju Kultury fizycznej
            </Link>
          </div>
        </div>
        <div className="flex  justify-between  md:justify-between lg:items-center py-4 lg:py-8 text-xs">
          <p>Hoodmood&copy; {date.getFullYear()}</p>
          <div className="flex  md:flex-row gap-4 xl:flex-row xl:gap-8">
            <Link href={"/faq"} className={cn(a11y, "ui-link-subtle")}>
              F.A.Q.
            </Link>
            <Link href={"/regulamin"} className={cn(a11y, "ui-link-subtle")}>
              Regulamin
            </Link>
            <Link
              href="/polityka-prywatnosci"
              className={cn(a11y, "ui-link-subtle")}
            >
              Polityka prywatności
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
