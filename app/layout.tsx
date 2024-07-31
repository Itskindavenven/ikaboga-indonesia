import "@/styles/tailwind.css";
import { Providers } from "./providers";
import { cx } from "@/utils/all";
import { Inter, Lora } from "next/font/google";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Padukuhan Bengle",
    template: "%s - Bengle Village"
  },
  description: "Situs Resmi Padukuhan Bengle.",
  metadataBase: new URL("https://www.padukuhanBengle.my.id"),
  keywords: [
    "Padukuhan Bengle",
    "Bengle",
    "Bengle Gunungkidul",
    "Bengle Gunung Kidul",
    "Padukuhan Bengle Gunungkidul",
    "Padukuhan Bengle Gunung Kidul",
  ],
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "Padukuhan Bengle",
    description: "Situs Resmi Padukuhan Bengle",
    url: "https://www.benglevillage.site",
    type: "website",
    locale: "id_ID",
    siteName: "Padukuhan Bengle",
    images: [
      {
        url: "https://www.benglevillage.site",
        width: 1200,
        height: 630,
        alt: "Padukuhan Bengle"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Padukuhan Bengle",
    description: "Situs Resmi Padukuhan Bengle",
    images: [
      {
        url: "https://www.benglevillage.site",
        alt: "Padukuhan Bengle"
      }
    ]
  },
  alternates: {
    canonical: "https://www.benglevillage.site",
    languages: {
      "id-ID": "https://www.benglevillage.site",
      "en-US": "https://www.benglevillage.site/en"
    }
  }
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora"
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(inter.variable, lora.variable)}>
      <body className="antialiased text-gray-800 dark:bg-black dark:text-gray-400">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
