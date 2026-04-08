import type { Metadata } from "next";
import "./globals.css";
import { siteIdentity } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteIdentity.siteUrl),
  title: siteIdentity.metaTitle,
  description: siteIdentity.metaDescription,
  applicationName: siteIdentity.businessName,
  keywords: [
    "bookkeeping",
    "small business bookkeeping",
    "book cleanup",
    "financial reporting",
    "bookkeeping services",
  ],
  openGraph: {
    title: siteIdentity.metaTitle,
    description: siteIdentity.metaDescription,
    url: siteIdentity.siteUrl,
    siteName: siteIdentity.businessName,
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteIdentity.businessName} social preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteIdentity.metaTitle,
    description: siteIdentity.metaDescription,
    images: ["/twitter-image"],
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
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
