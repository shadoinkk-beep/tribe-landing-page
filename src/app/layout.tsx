import type { Metadata } from "next";
import "./globals.css";
import { Bricolage_Grotesque } from "next/font/google";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  title: {
    default: "DreamHomes Realty",
    template: "%s | DreamHomes Realty",
  },
  description:
    "Find luxury apartments, villas, and premium projects with DreamHomes Realty across India.",
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
    url: "https://dreamhomes.com",
    siteName: "DreamHomes Realty",
    images: [
      {
        url: "https://dreamhomes.com/og/home.jpg",
        width: 1200,
        height: 630,
        alt: "DreamHomes Realty",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@dreamhomes",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "DreamHomes Realty",
    "url": "https://dreamhomes.com",
    "logo": "https://dreamhomes.com/logo.png",
    "sameAs": [
      "https://facebook.com/dreamhomes",
      "https://instagram.com/dreamhomes",
      "https://linkedin.com/company/dreamhomes"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 MG Road",
      "addressLocality": "Mumbai",
      "addressRegion": "MH",
      "postalCode": "400001",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9876543210",
      "contactType": "Customer Service",
      "areaServed": "IN"
    }
  };

  return (
    <html lang="en" className={bricolage.variable}>
      <body>
        {/* <header className="p-4 shadow-md">Navbar</header> */}
        <main>{children}</main>
        {/* <footer className="p-4 text-center">
          © 2025 DreamHomes Realty
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
