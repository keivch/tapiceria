import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <span className="text-2xl font-serif font-bold">Hernández</span>
              <p className="text-sm tracking-widest uppercase text-background/70">Tapicería & Diseño</p>
            </div>
            <p className="text-background/70 leading-relaxed">
              Transformando muebles y hogares en Palmira y el Valle del Cauca desde 2003. Calidad artesanal en cada
              puntada.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {[
                { href: "#servicios", label: "Servicios" },
                { href: "#trabajos", label: "Nuestros Trabajos" },
                { href: "#nosotros", label: "Sobre Nosotros" },
                { href: "#testimonios", label: "Testimonios" },
                { href: "#contacto", label: "Contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Servicios</h4>
            <ul className="space-y-3 text-background/70">
              <li>Tapizado de Sofás</li>
              <li>Restauración de Sillas</li>
              <li>Tapicería Automotriz</li>
              <li>Cabeceras de Cama</li>
              <li>Cojines y Cortinas</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-background/70">Palmira, Valle del Cauca, Colombia</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-background/70">+57 302 4511837</span>
              </li>
              {/* <li className="flex gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-background/70">info@hernandeztapiceria.shop</span>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © 2026 Hernández Tapicería & Diseño. Todos los derechos reservados.
          </p>
          <p className="text-background/60 text-sm">Tapicería en Palmira, Valle del Cauca | Restauración de Muebles</p>
        </div>
      </div>
    </footer>
  )
}
