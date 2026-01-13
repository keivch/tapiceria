import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="pt-32 lg:pt-40 pb-16 lg:pb-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
              <MapPin className="h-4 w-4" />
              Sirviendo a Palmira y el Valle del Cauca
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight text-balance">
              Transformamos tus muebles en <span className="text-primary">obras de arte</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Más de 20 años de experiencia en tapicería y restauración de muebles en Palmira, Valle del Cauca. Dale
              nueva vida a tus sofás, sillas y muebles favoritos con acabados de primera calidad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
                <a
                  href="https://wa.me/573001234567?text=Hola,%20me%20gustaría%20cotizar%20un%20trabajo%20de%20tapicería"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cotiza Gratis por WhatsApp
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                <a href="#trabajos">Ver Nuestros Trabajos</a>
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted overflow-hidden">
                    <Image
                      src={`/satisfied-customer-portrait-.jpg?height=40&width=40&query=satisfied customer portrait ${i}`}
                      alt="Cliente satisfecho"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">+500 clientes satisfechos</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/elegant-restored-antique-sofa-with-velvet-upholste.jpg"
                alt="Sofá restaurado por Hernández Tapicería"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-xl shadow-lg max-w-xs">
              <p className="font-serif text-lg font-semibold text-foreground">
                {'"Artesanía que transforma tu hogar"'}
              </p>
              <p className="text-sm text-muted-foreground mt-2">— Familia Hernández, desde 2003</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MapPin({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
