import Image from "next/image";
import logo from "../../public/assets/svg/mainLogo/logo.svg";
import Link from "next/link";
const icons = ["facebook", "spotify", "instagram", "tiktok", "youtube"];
import { a11y } from "@/public/styles";
export default function Footer() {
  const date = new Date();
  return (
    <footer className="border    w-full ">
      <div className="max-w-380 mx-auto px-8 md:px-12 lg:px-16">
        <div className="flex flex-col gap-8  lg:flex-row lg:justify-between lg:items-center border-b py-4 ">
          {/* LEFT COL */}
          <div className="space-y-2">
            <Image src={logo} alt="logo" width={120} height={60} />
            <div className="">
              <p className="font-semibold">Adres siedziby:</p>
              <p>Zwycięstwa 115, 75-211 Koszalin</p>
            </div>
            <div>
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
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT COL */}
          <div className="flex flex-col gap-8 lg:flex-row">
            <div>
              <p className="font-semibold mb-2">Nawigacja:</p>
              <ul className="space-y-1">
                <li>
                  <Link href="/kadra">Oferta</Link>
                </li>
                <li>
                  <Link href="/kadra">Grafik</Link>
                </li>
                <li>
                  <Link href="/kadra">Cennik</Link>
                </li>
                <li>
                  <Link href="/kadra">Kadra</Link>
                </li>
                <li>
                  <Link href="/kadra">Kolonie</Link>
                </li>
                <li>
                  <Link href="/kadra">Aktualności</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Dokumenty do pobrania:</p>
              <ul className="space-y-1">
                <li>Standardy ochrony dzieci przed krzywdzeniem</li>
                <li>Potwierdzenie uczestnictwa w zajęciach</li>
                <li>Regulamin</li>
                <li>Umowa uczestnictwa</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex lg:flex-row  lg:justify-between lg:items-center py-4 lg:py-8">
          <p>Hoodmood&copy; {date.getFullYear()}</p>
          <div className="flex flex-col gap-1 xl:flex-row xl:gap-8">
            <Link href="/polityka-prywatnosci" className={a11y}>
              Polityka prywatności
            </Link>{" "}
            <Link href={"/dofinansowanie"} className={a11y}>
              Dofinansowano ze środków Funduszu rozwoju Kultury fizycznej
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
