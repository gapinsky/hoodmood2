import { socialLinks } from "@/data/socials";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { a11y } from "@/myComponents/common/interactionStyles";


export default function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap gap-4", className)}>
      {Object.values(socialLinks).map((social) => (
        <Link
          href={social.href}
          key={social.name}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Hoodmood na ${social.label}`}
          className="group ui-icon-button size-10 border border-black/8 bg-white/50 shadow-[0_8px_20px_rgba(0,0,0,0.06)] backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
        >
          <img
            width={24}
            height={24}
            alt=""
            aria-hidden="true"
            src={`/assets/images/svg/${social.name}.svg`}
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
