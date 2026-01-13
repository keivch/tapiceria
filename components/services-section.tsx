import { Sofa, Armchair, Car, Scissors, Palette, Wrench } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Sofa,
    title: "Tapizado de Sofás",
    description: "Renovamos tus sofás con las mejores telas y espumas de alta densidad para máxima comodidad.",
  },
  {
    icon: Armchair,
    title: "Sillas y Sillones",
    description: "Restauración completa de sillas de comedor, oficina y sillones antiguos.",
  },
  {
    icon: Car,
    title: "Tapicería Automotriz",
    description: "Renovación de interiores de vehículos: asientos, techos, paneles y más.",
  },
  {
    icon: Scissors,
    title: "Corte y Confección",
    description: "Fabricación de cortinas, cojines decorativos y accesorios textiles a medida.",
  },
  {
    icon: Palette,
    title: "Diseño Personalizado",
    description: "Asesoría en selección de telas, colores y estilos para combinar con tu espacio.",
  },
  {
    icon: Wrench,
    title: "Reparación de Estructura",
    description: "Reforzamos y reparamos estructuras de madera dañadas o debilitadas.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium uppercase tracking-widest text-sm">Nuestros Servicios</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4 text-balance">
            Soluciones completas en tapicería
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Ofrecemos una amplia gama de servicios de tapicería y restauración en Palmira y todo el Valle del Cauca.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30"
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
