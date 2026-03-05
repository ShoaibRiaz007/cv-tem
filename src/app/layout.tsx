import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "@/assets/css/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/global/footer";
import Navbar from "@/components/global/navbar";
import ThemeProvider from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { SITE_URL } from "@/lib/constants";
import {
  PERSON_SCHEMA_ID,
  safeJsonLdStringify,
  toAbsoluteUrl,
  WEBSITE_SCHEMA_ID,
} from "@/lib/json-ld";
import { cn } from "@/lib/utils";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const rootJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": PERSON_SCHEMA_ID,
      name: "Shoaib Riaz",
      url: SITE_URL,
      image: toAbsoluteUrl("/og-image.png"),
      jobTitle: "Senior Game Engineer | Unity | Unreal",
      description:
        "Senior Game Engineer with 5+ years of experience building immersive gaming experiences using Unity and Unreal Engine across mobile, PC, and console platforms.",
      knowsAbout: [
        "Unity",
        "Unreal Engine",
        "C#",
        "Game Development",
        "AR/VR",
      ],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_SCHEMA_ID,
      url: SITE_URL,
      name: "Shoaib Riaz",
      description:
        "Portfolio of Shoaib Riaz — Senior Game Engineer specializing in Unity and Unreal Engine game development.",
      inLanguage: "en-US",
      publisher: { "@id": PERSON_SCHEMA_ID },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Shoaib Riaz | Senior Game Engineer",
    template: "%s | Shoaib Riaz",
  },
  description:
    "Senior Game Engineer with 5+ years of experience building immersive gaming experiences using Unity and Unreal Engine across mobile, PC, and console platforms.",
  abstract:
    "Senior Game Engineer specializing in Unity and Unreal Engine game development, AR/VR experiences, and cross-platform builds.",
  alternates: {
    canonical: SITE_URL,
  },
  applicationName: "Shoaib Riaz",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    other: {
      "msvalidate.01": "A1C10078467FC563779FE013C977698A",
    },
  },
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Shoaib Riaz | Senior Game Engineer | Unity & Unreal",
    description:
      "Building immersive gaming experiences, AR/VR applications, and cross-platform games using Unity, Unreal Engine, and modern game development pipelines.",
    url: SITE_URL,
    siteName: "Shoaib Riaz",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shoaib Riaz - Senior Game Engineer",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoaib Riaz | Senior Game Engineer | Unity & Unreal",
    description:
      "Senior Game Engineer crafting immersive gaming experiences, AR/VR applications, and cross-platform games with Unity and Unreal Engine.",
    images: ["/og-image.png"],
  },
  keywords: [
    "Senior Game Engineer",
    "Unity Developer",
    "Unreal Engine Developer",
    "Game Development",
    "C# Developer",
    "C++ Developer",
    "AR/VR Developer",
    "Mobile Game Developer",
    "Cross-Platform Game Development",
    "Metaverse Developer",
    "Game Optimization",
    "3D Game Developer",
    "Game Engineer Pakistan",
    "Remote Game Developer",
  ],
  publisher: "Shoaib Riaz",
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={cn(syne.variable, dmSans.variable, "antialiased font-sans")}
      >
        <script type="application/ld+json">
          {safeJsonLdStringify(rootJsonLd)}
        </script>
        <Analytics />
        <SpeedInsights />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <Navbar />
          <Toaster richColors duration={1500} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ? (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      ) : null}
    </html>
  );
}
