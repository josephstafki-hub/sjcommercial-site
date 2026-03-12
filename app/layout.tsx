import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
export const metadata: Metadata = {
  metadataBase: new URL("https://commercial.sjcarpentryllc.com"),
  title: {
    default: "SJCommercial, a division of SJCarpentry",
    template: "%s | SJCommercial",
  },
  description:
    "SJCommercial provides tenant improvements, build-outs, and turnover work across Minnesota.",
  openGraph: {
    title: "SJCommercial, a division of SJCarpentry",
    description:
      "Tenant improvements, build-outs, and turnover work across Minnesota.",
    url: "https://commercial.sjcarpentryllc.com",
    siteName: "SJCommercial",
    type: "website",
  },
  alternates: {
    canonical: "https://commercial.sjcarpentryllc.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SJCommercial",
    url: "https://commercial.sjcarpentryllc.com",
    logo: "https://commercial.sjcarpentryllc.com/logo.png",
    parentOrganization: {
      "@type": "Organization",
      name: "SJCarpentry",
      url: "https://www.sjcarpentryllc.com",
    },
    areaServed: {
      "@type": "State",
      name: "Minnesota",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-612-361-6585",
      contactType: "customer service",
      areaServed: "US",
    },
  };

  return (
    <html lang="en">
      <body>
        <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-5JW3NCKFED"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-5JW3NCKFED');
  `}
</Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}