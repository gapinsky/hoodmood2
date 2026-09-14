"use client";

import { useEffect, useState } from "react";
import Confetti from "react-confetti";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

export default function SeasonLaunchDialog() {
  const [open, setOpen] = useState(false);
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const dismissed =
      typeof window !== "undefined" &&
      window.sessionStorage.getItem("hoodmood-season-launch-dismissed") === "true";

    if (!dismissed) {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    function updateMotionPreference() {
      setReduceMotion(mediaQuery.matches);
    }

    function updateViewport() {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    }

    updateMotionPreference();
    updateViewport();
    mediaQuery.addEventListener("change", updateMotionPreference);
    window.addEventListener("resize", updateViewport);

    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);
      window.removeEventListener("resize", updateViewport);
    };
  }, []);

  const closeDialog = () => {
    setOpen(false);
    window.sessionStorage.setItem("hoodmood-season-launch-dismissed", "true");
  };

  return (
    <>
      {open &&
      !reduceMotion &&
      viewport.width > 0 &&
      viewport.height > 0 ? (
        <Confetti
          width={viewport.width}
          height={viewport.height}
          recycle={false}
          numberOfPieces={260}
          gravity={0.28}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            pointerEvents: "none",
          }}
        />
      ) : null}

      <Dialog open={open} onOpenChange={(nextOpen) => {
        if (!nextOpen) {
          closeDialog();
          return;
        }
        setOpen(true);
      }}>
        <DialogContent
          onInteractOutside={(event) => event.preventDefault()}
          onEscapeKeyDown={(event) => event.preventDefault()}
          className="max-w-5xl cursor-pointer overflow-hidden px-6 py-16 text-center duration-300 data-[state=open]:slide-in-from-bottom-4 sm:px-10 sm:py-20 lg:px-16 lg:py-24"
        >
          <div className="relative z-10 flex flex-col items-center gap-6">
            <DialogTitle className="max-w-5xl font-anton text-5xl font-normal uppercase leading-[0.88] tracking-wide text-foreground sm:text-7xl lg:text-8xl dark:text-white">
              Sezon 26/27 wystartował!
            </DialogTitle>
            <DialogDescription className="text-lg font-semibold text-muted-foreground sm:text-2xl dark:text-white/80">
              Sprawdź co dla Ciebie przygotowaliśmy!
            </DialogDescription>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
