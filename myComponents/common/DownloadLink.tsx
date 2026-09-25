"use client";

import { useCallback, type ComponentProps } from "react";

type Props = Omit<ComponentProps<"a">, "onClick" | "download">;

export default function DownloadLink(props: Props) {
  const downloadRef = useCallback((anchor: HTMLAnchorElement | null) => {
    if (!anchor) return;

    const handleClick = (event: MouseEvent) => event.stopPropagation();
    anchor.addEventListener("click", handleClick);
    return () => anchor.removeEventListener("click", handleClick);
  }, []);

  return (
    <a
      {...props}
      ref={downloadRef}
      download
    />
  );
}
