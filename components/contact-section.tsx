import { MapPin, Phone, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: MapPin,
    title: "Ubicación",
    content: "Palmira, Valle del Cauca, Colombia",
    detail: "Servicio a domicilio en todo el Valle del Cauca",
  },
  {
    icon: Phone,
    title: "Teléfono",
    content: "+57 302 4511837",
    detail: "Llámanos o escríbenos por WhatsApp",
  },
  {
    icon: Clock,
    title: "Horario",
    content: "Lun - Sáb: 8:00 AM - 6:00 PM",
    detail: "Domingos con cita previa",
  },
]

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <span className="text-accent font-medium uppercase tracking-widest text-sm">Contacto</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-4 text-balance">
                ¿Listo para transformar tus muebles?
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80 leading-relaxed">
                Contáctanos por WhatsApp y recibe una cotización gratuita. Atendemos en Palmira y realizamos entregas en
                todo el Valle del Cauca.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-primary-foreground/90">{item.content}</p>
                    <p className="text-sm text-primary-foreground/70">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary-foreground/10 p-8 md:p-12 rounded-2xl backdrop-blur-sm">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto">
                <MessageCircle className="h-10 w-10 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-serif font-bold">Cotiza por WhatsApp</h3>
              <p className="text-primary-foreground/80">
                Envíanos fotos de tus muebles y te respondemos en menos de 1 hora con un presupuesto detallado. ¡Sin
                compromiso!
              </p>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full text-lg">
                <a
                  href="https://wa.me/573024511837?text=Hola,%20me%20gustaría%20cotizar%20un%20trabajo%20de%20tapicería.%20Les%20envío%20fotos%20de%20mis%20muebles."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 mr-2">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Escribir por WhatsApp
                </a>
              </Button>
              <p className="text-sm text-primary-foreground/60">
                Respuesta garantizada en menos de 1 hora en horario laboral
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
