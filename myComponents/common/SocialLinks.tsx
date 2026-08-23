import Link from "next/link";

import { cn } from "@/lib/utils";
import { a11y } from "@/public/styles";

const socialLinks = [
  {
    name: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100070445546249",
  },
  {
    name: "spotify",
    label: "Spotify",
    href: "https://open.spotify.com/show/4N6jAzHxOv5S8bAmo9v2dE",
  },
  {
    name: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/hoodmood_dancestudio/",
  },
  {
    name: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@hoodmood_dancestudio",
  },
  {
    name: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@hoodmooddancestudio9404",
  },
] as const;

export default function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap gap-4", className)}>
      {socialLinks.map((social) => (
        <Link
          href={social.href}
          key={social.name}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Hoodmood na ${social.label}`}
          className="group ui-icon-button size-10 border border-black/8 bg-white/50 shadow-[0_8px_20px_rgba(0,0,0,0.06)] backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.05]"
        >
          <img
            width={24}
            height={24}
            alt=""
            aria-hidden="true"
            src={`/icons/${social.name}.svg`}
            className={cn(
              "transition-transform duration-300 ease-out group-hover:scale-105 dark:invert",
              a11y,
            )}
          />
        </Link>
      ))}
    </div>
  );
}
