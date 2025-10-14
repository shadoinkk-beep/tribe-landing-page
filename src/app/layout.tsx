import type { Metadata } from "next";
import "./globals.css";
import { Bricolage_Grotesque } from "next/font/google";
import Navbar from "@/components/common/Navbar";
import ContactForm from "@/components/common/Contact";
import Footer from "@/components/common/Footer";
import Script from "next/script";
import GoogleAnalytics from "./providers";
import { Suspense } from "react";
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  title: {
    default: "Tribe",
    template: "%s | Tribe",
  },
  description:
    "Find luxury apartments, villas, and premium projects with Tribe across India.",
  keywords: [
    "real estate",
    "apartments",
    "villas",
    "luxury homes",
    "properties in India",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tribegroup.in",
    siteName: "Tribe",
    images: [
      {
        url: "https://tribegroup.in/HeroMainBg.png",
        width: 1200,
        height: 630,
        alt: "Tribe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@tribe_group",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Tribe",
    "url": "https://tribegroup.in",
    "logo": "https://tribegroup.in/tribe_logo.png",
    "sameAs": [
      "https://facebook.com/tribeestates",
      "https://instagram.com/tribeestates",
      "https://linkedin.com/company/tribeestates"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "403, Baani Address One, Sector 56, Golf Course Road",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "postalCode": "122011",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 70300 62277",
      "contactType": "Customer Service",
      "areaServed": "IN"
    }
  };

  return (
    <html lang="en" className={bricolage.variable}>
      <head>
                <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body>
                <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        {/* <header className="p-4 shadow-md">Navbar</header> */}
        <Navbar/>
        <main>{children}</main>
            <ContactForm/>
    <Footer/>
        {/* <footer className="p-4 text-center">
          © 2025 Tribe
        </footer> */}

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </body>
    </html>
  );
}
