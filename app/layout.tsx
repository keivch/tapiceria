import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Hernández Tapicería & Diseño | Tapicería en Palmira, Valle del Cauca",
  description:
    "Servicios profesionales de tapicería y restauración de muebles en Palmira, Valle del Cauca. Más de 20 años de experiencia. Sofás, sillas, tapicería automotriz. Cotiza gratis por WhatsApp.",
  keywords: [
    "tapicería Palmira",
    "tapicería Valle del Cauca",
    "restauración de muebles Palmira",
    "tapizado de sofás Palmira",
    "tapicería automotriz Valle del Cauca",
    "reparación de muebles Palmira",
    "tapicero Palmira",
    "retapizado Cali",
    "restauración de sillas",
  ],
  authors: [{ name: "Hernández Tapicería & Diseño" }],
  openGraph: {
    title: "Hernández Tapicería & Diseño | Tapicería en Palmira",
    description:
      "Transformamos tus muebles en obras de arte. Más de 20 años de experiencia en tapicería y restauración en Palmira, Valle del Cauca.",
    locale: "es_CO",
    type: "website",
    siteName: "Hernández Tapicería & Diseño",
    url: "https://hernandeztapiceria.shop",
    images: [
      {
        url: "https://hernandeztapiceria.shop/elegant-restored-antique-sofa-with-velvet-upholste.jpg",
        width: 1200,
        height: 630,
        alt: "Sofá restaurado por Hernández Tapicería & Diseño",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hernández Tapicería & Diseño | Palmira",
    description: "Servicios profesionales de tapicería en Palmira, Valle del Cauca. Cotiza gratis por WhatsApp.",
    images: ["https://hernandeztapiceria.shop/elegant-restored-antique-sofa-with-velvet-upholste.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://hernandeztapiceria.shop",
  },
}

export const viewport: Viewport = {
  themeColor: "#5C4033",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://hernandeztapiceria.shop",
              name: "Hernández Tapicería & Diseño",
              description: "Servicios profesionales de tapicería y restauración de muebles en Palmira, Valle del Cauca. Más de 20 años de experiencia transformando muebles en obras de arte.",
              image: "https://hernandeztapiceria.shop/elegant-restored-antique-sofa-with-velvet-upholste.jpg",
              telephone: "+573024511837",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Palmira",
                addressRegion: "Valle del Cauca",
                addressCountry: "CO",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 3.5394,
                longitude: -76.3036,
              },
              url: "https://hernandeztapiceria.shop",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "08:00",
                  closes: "18:00",
                },
              ],
              priceRange: "$$",
              areaServed: [
                {
                  "@type": "City",
                  name: "Palmira",
                },
                {
                  "@type": "City",
                  name: "Cali",
                },
                {
                  "@type": "State",
                  name: "Valle del Cauca",
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios de Tapicería",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Tapizado de Sofás",
                      description: "Restauración y tapizado profesional de sofás",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Tapizado de Sillas",
                      description: "Tapizado y restauración de sillas de comedor y oficina",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Tapicería Automotriz",
                      description: "Tapizado de asientos y interiores de vehículos",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Restauración de Muebles",
                      description: "Restauración completa de muebles antiguos y modernos",
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127",
                bestRating: "5",
                worstRating: "1",
              },
              sameAs: ["https://www.facebook.com/hernandeztapiceria", "https://www.instagram.com/hernandeztapiceria"],
            }),
          }}
        />
      </head>
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
