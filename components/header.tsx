"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "#servicios", label: "Servicios" },
    { href: "#trabajos", label: "Nuestros Trabajos" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#testimonios", label: "Testimonios" },
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm gap-2">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Palmira, Valle del Cauca, Colombia</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>+57 302 4511837</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex flex-col">
            <span className="text-2xl font-serif font-bold text-foreground">Hernández</span>
            <span className="text-sm tracking-widest text-muted-foreground uppercase">Tapicería & Diseño</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a
                href="https://wa.me/573024511837?text=Hola,%20me%20gustaría%20cotizar%20un%20trabajo%20de%20tapicería"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cotizar Ahora
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pt-4 pb-2 border-t border-border mt-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 w-full mt-2">
                <a
                  href="https://wa.me/573024511837?text=Hola,%20me%20gustaría%20cotizar%20un%20trabajo%20de%20tapicería"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cotizar Ahora
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
