"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Sofá Clásico Restaurado",
    category: "Sofás",
    image: "/sofa.jpeg",
    description: "Restauración completa de primera calidad.",
  },
  {
    id: 2,
    title: "Juego de Comedor Renovado",
    category: "Sillas",
    image: "/silla.jpeg",
    description: "sillas de comedor con tapizado en tela antimanchas.",
  },
  {
    id: 3,
    title: "Sillón Vintage",
    category: "Sillones",
    image: "/sillones2.jpeg",
    description: "Restauración de sillón con espuma de alta densidad.",
  },
  {
    id: 5,
    title: "Sofá Modular",
    category: "Sofás",
    image: "/sfoa2.jpeg",
    description: "Tapizado completo con tela importada resistente a mascotas.",
  },
  {
    id: 7,
    title: "Poltrona Ejecutiva",
    category: "Sillones",
    image: "/sillon3.jpeg",
    description: "Tapizado en cuero genuino con acabado premium.",
  },
  {
    id: 8,
    title: "Banca de consultorio",
    category: "Comercial",
    image: "/banca.jpeg",
    description: "Tapizado comercial de alta resistencia para negocio local.",
  },
]

const categories = ["Todos", "Sofás", "Sillas", "Sillones", "Comercial"]

export function BeforeAfterGallery() {
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const filteredProjects = activeCategory === "Todos" ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="trabajos" className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent font-medium uppercase tracking-widest text-sm">Nuestro Portafolio</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4 text-balance">
            Trabajos Realizados
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Cada proyecto refleja nuestro compromiso con la calidad y la atención al detalle. Más de 500 trabajos
            realizados en Palmira y el Valle del Cauca.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category ? "bg-primary text-primary-foreground" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`group relative cursor-pointer overflow-hidden rounded-xl bg-background shadow-md hover:shadow-xl transition-all duration-300 ${
                index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className={`relative ${index === 0 || index === 5 ? "aspect-square" : "aspect-[4/5]"}`}>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content on hover */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-lg md:text-xl font-serif font-semibold text-background mt-1">{project.title}</h3>
                  <p className="text-background/80 mt-1 text-sm line-clamp-2 hidden md:block">{project.description}</p>
                </div>

                {/* Category badge always visible */}
                <div className="absolute top-3 left-3 md:top-4 md:left-4">
                  <span className="bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium px-2 py-1 md:px-3 md:py-1.5 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background">
            <DialogTitle className="sr-only">{selectedProject?.title}</DialogTitle>
            {selectedProject && (
              <div className="relative">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl font-serif font-semibold text-foreground mt-2">{selectedProject.title}</h3>
                  <p className="text-muted-foreground mt-2">{selectedProject.description}</p>
                  <Button asChild className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                    <a
                      href={`https://wa.me/573001234567?text=Hola,%20me%20interesa%20un%20trabajo%20similar%20a:%20${encodeURIComponent(selectedProject.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Cotizar Trabajo Similar
                    </a>
                  </Button>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                >
                  <X className="h-5 w-5 text-foreground" />
                </button>
              </div>
            )}
          </DialogContent>
        </Dialog>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a
              href="https://wa.me/573001234567?text=Hola,%20vi%20sus%20trabajos%20y%20me%20gustaría%20cotizar%20un%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cotiza Tu Proyecto
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
