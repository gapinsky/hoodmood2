"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

export default function Toaster(props: ToasterProps) {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      position="top-center"
      richColors
      toastOptions={{
        classNames: {
          toast:
            "ui-floating ui-outline rounded-2xl border px-4 py-3 text-sm shadow-none",
          title: "text-sm font-semibold",
          description: "text-sm opacity-90",
          success: "!bg-emerald-600 !text-white !border-emerald-500",
          error: "!bg-red-600 !text-white !border-red-500",
        },
      }}
      {...props}
    />
  );
}
