import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { BeforeAfterGallery } from "@/components/before-after-gallery"
import { WhyChooseUs } from "@/components/why-choose-us"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { WhatsAppButton } from "@/components/whatsapp-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hernández Tapicería & Diseño | Tapicería Profesional en Palmira, Valle del Cauca",
  description:
    "Servicios profesionales de tapicería y restauración de muebles en Palmira, Valle del Cauca. Más de 20 años de experiencia. Sofás, sillas, tapicería automotriz. Cotiza gratis por WhatsApp +57 302 4511837.",
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
    "tapicería profesional",
    "tapicero en Palmira",
    "tapizado de muebles",
  ],
  alternates: {
    canonical: "https://hernandeztapiceria.shop",
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <BeforeAfterGallery />
      <WhyChooseUs />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
