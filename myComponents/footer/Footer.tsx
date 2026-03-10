import Image from "next/image";
import logo from "../../public/assets/svg/mainLogo/logo.svg";
import Link from "next/link";
const icons = ["facebook", "spotify", "instagram", "tiktok", "youtube"];
import { a11y } from "@/public/styles";
import { cn } from "@/lib/utils";
export default function Footer() {
  const date = new Date();
  return (
    <footer className=" border-t   w-full text-sm">
      <div className="max-w-380 mx-auto px-8 md:px-12 lg:px-16">
        <div className="flex flex-col gap-8 md:flex-row  md:justify-between lg:items-stretch border-b py-4 lg:py-8 ">
          {/* LEFT COL */}
          <div className="space-y-4">
            <Image src={logo} alt="logo" width={120} height={60} />
            <div className="space-y-1">
              <p className="font-semibold">Adres siedziby:</p>
              <p>Zwycięstwa 115, 75-211 Koszalin</p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold">Kontakt:</p>
              <p>+48 577 198 599</p>
              <p>hoodmood.recepcja@gmail.com</p>
            </div>
            <div className="flex gap-4 pt-2">
              {icons.map((icon) => (
                <Link href={"/hello"} key={icon}>
                  <img
                    width={24}
                    height={24}
                    alt={`${icon} logo`}
                    src={`/icons/${icon}.svg`}
                    className={cn("dark:invert", a11y)}
                  />
                </Link>
              ))}
            </div>
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
                      className={cn(a11y, "hover:underline")}
                    >
                      Oferta
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/grafik/koszalin"
                      className={cn(a11y, "hover:underline")}
                    >
                      Grafik
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cennik/koszalin"
                      className={cn(a11y, "hover:underline")}
                    >
                      Cennik
                    </Link>
                  </li>
                  <li>
                    <Link href="/kadra" className={cn(a11y, "hover:underline")}>
                      Kadra
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/kolonie"
                      className={cn(a11y, "hover:underline")}
                    >
                      Kolonie
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/aktualnosci"
                      className={cn(a11y, "hover:underline")}
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
                      className={cn(a11y, "hover:underline")}
                    >
                      Standardy ochrony dzieci przed krzywdzeniem
                    </a>
                  </li>
                  <li>
                    <a
                      href="/assets/pdf/potwierdzenie-uczestnictwa-w-zajeciach.pdf"
                      className={cn(a11y, "hover:underline")}
                      download={true}
                    >
                      Potwierdzenie uczestnictwa w zajęciach
                    </a>
                  </li>
                  <li>
                    <a
                      href="/assets/pdf/umowa-uczestnictwa.pdf"
                      className={cn(a11y, "hover:underline")}
                      download={true}
                    >
                      Umowa uczestnictwa
                    </a>
                  </li>
                  <li>
                    <a
                      href="/assets/pdf/regulamin-studia-tanca-hoodmood.pdf"
                      className={cn(a11y, "hover:underline")}
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
              className={cn(a11y, "hover:underline text-xs")}
            >
              Dofinansowano ze środków Funduszu rozwoju Kultury fizycznej
            </Link>
          </div>
        </div>
        <div className="flex  justify-between  md:justify-between lg:items-center py-4 lg:py-8 text-xs">
          <p>Hoodmood&copy; {date.getFullYear()}</p>
          <div className="flex  md:flex-row gap-4 xl:flex-row xl:gap-8">
            <Link href={"/regulamin"} className={cn(a11y, "hover:underline")}>
              Regulamin
            </Link>
            <Link
              href="/polityka-prywatnosci"
              className={cn(a11y, "hover:underline")}
            >
              Polityka prywatności
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
