import type { Metadata } from "next";
import { Anton, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/myComponents/themeProvider/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/myComponents/navbar/Navbar";
import Footer from "@/myComponents/footer/Footer";
import NextTopLoader from "nextjs-toploader";
import Toaster from "@/components/ui/sonner";

const fontAnton = Anton({
  variable: "--anton",
  subsets: ["latin-ext"],
  weight: "400",
  fallback: ["system-ui", "Segoe UI", "Arial"],
});

const fontRoboto = Roboto_Condensed({
  variable: "--roboto-condensed",
  subsets: ["latin-ext"],
  weight: ["400", "700"],
  fallback: ["system-ui", "Segoe UI", "Arial"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hoodmood.vercel.app"),
  title: {
    default: "Hoodmood | Szkoła tańca i akrobatyki",
    template: "%s | Hoodmood",
  },
  description:
    "Hoodmood to szkoła tańca i akrobatyki w Koszalinie, Polanowie i Białym Borze. Zajęcia dla dzieci, młodzieży i dorosłych.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: "Hoodmood",
    title: "Hoodmood | Szkoła tańca i akrobatyki",
    description:
      "Szkoła tańca i akrobatyki w Koszalinie, Polanowie i Białym Borze.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hoodmood | Szkoła tańca i akrobatyki",
    description:
      "Szkoła tańca i akrobatyki w Koszalinie, Polanowie i Białym Borze.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body
        className={`${fontAnton.variable} ${fontRoboto.variable} w-full relative bg-transparent`}
      >
        <div className="fixed inset-0 -z-40 overflow-hidden ">
          <div className="absolute inset-0 bg-[url('/assets/images/static_bg.jpg')] dark:bg-[url('/assets/images/static_bg_dark.jpg')] bg-cover bg-center bg-no-repeat " />

          <div className="absolute inset-0 bg-white/50 dark:bg-black/80" />
        </div>
        <NextTopLoader
          color="#ac4967"
          height={3}
          easing="ease"
          initialPosition={0.08}
          crawlSpeed={200}
          crawl={true}
          speed={200}
          showSpinner={false}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <TooltipProvider>
            <Navbar />
          </TooltipProvider>
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
