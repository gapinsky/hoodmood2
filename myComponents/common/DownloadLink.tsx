"use client";

import { useCallback, type ComponentProps } from "react";

type Props = Omit<ComponentProps<"a">, "onClick" | "download">;

export default function DownloadLink(props: Props) {
  const downloadRef = useCallback((anchor: HTMLAnchorElement | null) => {
    if (!anchor) return;
    // Stop at the anchor, before document-level listeners (including React's).
    // Do not preventDefault: the browser must still download the file.
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
