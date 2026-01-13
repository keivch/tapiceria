import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "María Fernanda López",
    location: "Palmira, Valle del Cauca",
    rating: 5,
    text: "Increíble trabajo con mi sofá de 3 puestos. Quedó como nuevo y el servicio fue excelente. Muy recomendados para cualquier trabajo de tapicería en Palmira.",
    initial: "ML",
    bgColor: "bg-primary",
  },
  {
    name: "Andrés Mejía",
    location: "Cali, Valle del Cauca",
    rating: 5,
    text: "Llevé las sillas de comedor de mi abuela que estaban muy deterioradas. El resultado superó todas mis expectativas. Excelente calidad y precio justo.",
    initial: "AM",
    bgColor: "bg-accent",
  },
  {
    name: "Laura Martínez",
    location: "Palmira, Valle del Cauca",
    rating: 5,
    text: "La atención por WhatsApp fue muy rápida y profesional. Vinieron a recoger mis muebles y me los entregaron restaurados en tiempo récord. ¡Feliz!",
    initial: "LM",
    bgColor: "bg-primary/80",
  },
  {
    name: "Roberto Sánchez",
    location: "Pradera, Valle del Cauca",
    rating: 5,
    text: "Excelente trabajo en el interior de mi camioneta. Los asientos quedaron espectaculares. Sin duda los mejores tapiceros de la región.",
    initial: "RS",
    bgColor: "bg-accent/80",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium uppercase tracking-widest text-sm">Testimonios</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4 text-balance">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            La satisfacción de nuestros clientes en Palmira y el Valle del Cauca es nuestra mejor carta de presentación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background border-border">
              <CardContent className="p-8">
                <Quote className="h-10 w-10 text-accent/30 mb-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6">{testimonial.text}</p>
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-full ${testimonial.bgColor} flex items-center justify-center text-background font-semibold text-sm`}
                  >
                    {testimonial.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
