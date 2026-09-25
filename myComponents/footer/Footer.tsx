import DownloadLink from "@/myComponents/common/DownloadLink";
import { mainContact, locations, studioAddress } from "@/data/locations";
import Image from "next/image";
import logo from "../../public/assets/images/branding/logo.png";
import Link from "next/link";
import { a11y } from "@/myComponents/common/interactionStyles";
import { cn } from "@/lib/utils";
import SocialLinks from "@/myComponents/common/SocialLinks";

import { footerLinks, footerDownloads } from "./footerData";

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
              className="h-auto w-30"
            />
            <div className="space-y-1">
              <p className="font-semibold">Adres studia:</p>
              <p className="opacity-80">{studioAddress(locations.koszalin)}</p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold">Kontakt:</p>
              <p className="opacity-80">{mainContact.phone}</p>
              <p className="opacity-80">{mainContact.email}</p>
            </div>
            <SocialLinks className="pt-2" />
          </div>

          {/* RIGHT COL */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-8 md:flex-row h-full">
              <div className="">
                <p className="font-semibold mb-2">Nawigacja:</p>
                <ul className="space-y-2">
                  {footerLinks.navigation.map(({ label, href }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className={cn(a11y, "ui-link-subtle opacity-80")}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <p className="font-semibold mb-2">Dokumenty do pobrania:</p>
                <ul className="space-y-2">
                  {footerDownloads.map(({ label, href }) => (
                    <li key={href}>
                      <DownloadLink
                        href={href}
                        className={cn(a11y, "ui-link-subtle opacity-80")}
                      >
                        {label}
                      </DownloadLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Link
              href={footerLinks.funding.href}
              className={cn(a11y, "ui-link-subtle text-xs")}
            >
              {footerLinks.funding.label}
            </Link>
          </div>
        </div>
        <div className="flex  justify-between  md:justify-between lg:items-center py-4 lg:py-8 text-xs">
          <p>Hoodmood&copy; {date.getFullYear()}</p>
          <div className="flex  md:flex-row gap-4 xl:flex-row xl:gap-8">
            {footerLinks.legal.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={cn(a11y, "ui-link-subtle")}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
