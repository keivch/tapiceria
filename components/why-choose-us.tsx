import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const features = [
  "Más de 20 años de experiencia en tapicería",
  "Materiales de primera calidad importados",
  "Garantía de satisfacción en todos los trabajos",
  "Servicio de recogida y entrega a domicilio",
  "Presupuestos sin compromiso",
  "Atención personalizada y asesoría gratuita",
]

export function WhyChooseUs() {
  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/professional-upholsterer-working-on-sofa-in-worksh.jpg"
                alt="Maestro tapicero trabajando en taller"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-xl overflow-hidden shadow-xl hidden md:block">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Muestras de telas"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -top-4 -left-4 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg">
              <span className="text-4xl font-bold font-serif">20+</span>
              <p className="text-sm mt-1">Años de experiencia</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <span className="text-accent font-medium uppercase tracking-widest text-sm">Por qué elegirnos</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4 text-balance">
                Calidad artesanal en cada puntada
              </h2>
              <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
                En Hernández Tapicería & Diseño nos enorgullecemos de ofrecer un servicio de calidad excepcional a las
                familias de Palmira y todo el Valle del Cauca. Cada proyecto es tratado con el mismo cuidado y
                dedicación que pondríamos en nuestros propios muebles.
              </p>
            </div>

            <ul className="grid gap-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="bg-secondary p-6 rounded-xl">
              <p className="text-muted-foreground italic">
                {
                  '"Nuestro compromiso es devolverte un mueble mejor de lo que lo imaginaste. No solo restauramos tapicería, creamos piezas que se convierten en el corazón de tu hogar."'
                }
              </p>
              <div className="flex items-center gap-4 mt-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Oscar Hernández"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Oscar Hernández</p>
                  <p className="text-sm text-muted-foreground">Fundador y Maestro Tapicero</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
