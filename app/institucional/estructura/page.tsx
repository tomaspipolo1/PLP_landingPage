"use client"

import { Card } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { useState, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Datos de ejemplo - luego se pueden mover a un archivo separado
const directores = [
  {
    nombre: "Director 1",
    cargo: "Director Titular",
    descripcion: "Representante del Poder Ejecutivo Provincial",
    imagen: "/placeholder-user.jpg"
  },
  {
    nombre: "Director 2",
    cargo: "Director Titular",
    descripcion: "Representante de los Trabajadores Portuarios",
    imagen: "/placeholder-user.jpg"
  },
  {
    nombre: "Director 3",
    cargo: "Director Titular",
    descripcion: "Representante de los Exportadores",
    imagen: "/placeholder-user.jpg"
  },
  {
    nombre: "Director 4",
    cargo: "Director Titular",
    descripcion: "Representante de los Importadores",
    imagen: "/placeholder-user.jpg"
  },
  {
    nombre: "Director 5",
    cargo: "Director Titular",
    descripcion: "Representante de los Armadores",
    imagen: "/placeholder-user.jpg"
  },
]

const gerentes = [
  {
    nombre: "Gerente de Administración",
    cargo: "Gerencia de Administración",
    descripcion: "Responsable de la gestión administrativa, financiera y contable del puerto.",
    imagen: "/placeholder-user.jpg"
  },
  {
    nombre: "Gerente de Obras",
    cargo: "Gerencia de Obras y Mantenimiento",
    descripcion: "A cargo de la infraestructura, mantenimiento y proyectos de obra portuaria.",
    imagen: "/placeholder-user.jpg"
  },
  {
    nombre: "Gerente Legal",
    cargo: "Gerencia de Legales",
    descripcion: "Responsable de asuntos jurídicos y cumplimiento normativo.",
    imagen: "/placeholder-user.jpg"
  },
  {
    nombre: "Gerente de Operaciones",
    cargo: "Gerencia de Operaciones",
    descripcion: "Gestión de las operaciones portuarias y logística.",
    imagen: "/placeholder-user.jpg"
  },
  {
    nombre: "Gerente de RRII",
    cargo: "Gerencia de Relaciones Institucionales",
    descripcion: "Comunicación institucional y relaciones con la comunidad.",
    imagen: "/placeholder-user.jpg"
  },
  {
    nombre: "Presidente",
    cargo: "Presidencia",
    descripcion: "Dirección ejecutiva y representación institucional del puerto.",
    imagen: "/placeholder-user.jpg"
  },
]

export default function Estructura() {
  const [directorApi, setDirectorApi] = useState<any>()
  const [gerenteApi, setGerenteApi] = useState<any>()
  const [emblaRefDirector, emblaApi] = useEmblaCarousel({ 
    align: "center",
    loop: true,
    containScroll: "keepSnaps",
    dragFree: false,
    startIndex: 1
  })
  const [emblaRefGerente, emblaApiGerente] = useEmblaCarousel({ 
    align: "center",
    loop: true,
    containScroll: "keepSnaps",
    dragFree: false,
    startIndex: 1
  })

  useEffect(() => {
    if (emblaApi) {
      setDirectorApi(emblaApi)
      emblaApi.on("select", () => {
        setDirectorApi({ ...emblaApi })
      })
    }
    if (emblaApiGerente) {
      setGerenteApi(emblaApiGerente)
      emblaApiGerente.on("select", () => {
        setGerenteApi({ ...emblaApiGerente })
      })
    }
  }, [emblaApi, emblaApiGerente])

  const isCardVisible = (index: number, api: any) => {
    if (!api) return false
    const selectedIndex = api.selectedScrollSnap()
    const slidesInView = api.slidesInView()
    return slidesInView.includes(index)
  }

  const isCardCentered = (index: number, api: any) => {
    if (!api) return false
    return api.selectedScrollSnap() === index
  }

  const scrollPrev = (api: any) => {
    if (api) api.scrollPrev()
  }

  const scrollNext = (api: any) => {
    if (api) api.scrollNext()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <div className="relative w-full h-[300px] bg-gradient-to-r from-plp-primary to-plp-secondary overflow-hidden -mt-[var(--header-height,80px)]">
         <div className="relative h-full container mx-auto px-4 flex items-center pt-[var(--header-height,80px)]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-shadow">
            Estructura Organizacional
          </h1>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-12">
        {/* Sección Directores */}
        <section className="mb-16">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-plp-primary mb-4 text-center">
              Estructura Organizacional
            </h2>
            <p className="text-plp-gray-600 text-center mb-8 leading-relaxed">
              El Puerto de Puerto Plata está dirigido por un Directorio compuesto por representantes de los diferentes sectores 
              que integran la comunidad portuaria. La gestión ejecutiva está a cargo de un equipo de gerentes especializados 
              que aseguran el funcionamiento eficiente y el desarrollo sostenible del puerto.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-plp-primary mb-8 text-center">
            Directorio
          </h2>
          
          <div className="relative max-w-4xl mx-auto px-8 py-6">
            <div className="overflow-hidden" ref={emblaRefDirector}>
              <div className="flex touch-pan-y backface-hidden">
                {directores.map((director, index) => (
                  <div key={index} className="relative flex-[0_0_33.333%] min-w-0 px-3 py-8">
                    <div className={`transition-all duration-300 h-full ${
                      isCardCentered(index, directorApi)
                        ? "opacity-100 scale-110 z-20"
                        : isCardVisible(index, directorApi)
                          ? "opacity-50 scale-90 z-10"
                          : "opacity-0 scale-75 z-0"
                    }`}>
                      <Card className="overflow-hidden">
                        <div className="aspect-[4/5] relative bg-plp-primary-light">
                          <Avatar className="w-full h-full rounded-none">
                            <img
                              src={director.imagen}
                              alt={director.nombre}
                              className="object-cover w-full h-full"
                            />
                          </Avatar>
                        </div>
                        <div className="p-3">
                          <h3 className="text-base font-semibold text-plp-primary mb-1">{director.nombre}</h3>
                          <p className="text-sm font-medium text-plp-secondary mb-1">{director.cargo}</p>
                          <p className="text-xs text-plp-gray-600">{director.descripcion}</p>
                        </div>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              className="absolute top-1/2 -translate-y-1/2 -left-12 md:-left-16 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
              onClick={() => scrollPrev(directorApi)}
            >
              <ChevronLeft className="h-6 w-6 text-plp-primary" />
            </button>
            <button
              className="absolute top-1/2 -translate-y-1/2 -right-12 md:-right-16 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
              onClick={() => scrollNext(directorApi)}
            >
              <ChevronRight className="h-6 w-6 text-plp-primary" />
            </button>
          </div>
        </section>

        {/* Sección Gerentes */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-plp-primary mb-8 text-center">
            Gerencias
          </h2>
          
          <div className="relative max-w-4xl mx-auto px-8 py-6">
            <div className="overflow-hidden" ref={emblaRefGerente}>
              <div className="flex touch-pan-y backface-hidden">
                {gerentes.map((gerente, index) => (
                  <div key={index} className="relative flex-[0_0_33.333%] min-w-0 px-3 py-8">
                    <div className={`transition-all duration-300 h-full ${
                      isCardCentered(index, gerenteApi)
                        ? "opacity-100 scale-110 z-20"
                        : isCardVisible(index, gerenteApi)
                          ? "opacity-50 scale-90 z-10"
                          : "opacity-0 scale-75 z-0"
                    }`}>
                      <Card className="overflow-hidden">
                        <div className="aspect-[4/5] relative bg-plp-primary-light">
                          <Avatar className="w-full h-full rounded-none">
                            <img
                              src={gerente.imagen}
                              alt={gerente.nombre}
                              className="object-cover w-full h-full"
                            />
                          </Avatar>
                        </div>
                        <div className="p-3">
                          <h3 className="text-base font-semibold text-plp-primary mb-1">{gerente.nombre}</h3>
                          <p className="text-sm font-medium text-plp-secondary mb-1">{gerente.cargo}</p>
                          <p className="text-xs text-plp-gray-600">{gerente.descripcion}</p>
                        </div>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              className="absolute top-1/2 -translate-y-1/2 -left-12 md:-left-16 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
              onClick={() => scrollPrev(gerenteApi)}
            >
              <ChevronLeft className="h-6 w-6 text-plp-primary" />
            </button>
            <button
              className="absolute top-1/2 -translate-y-1/2 -right-12 md:-right-16 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
              onClick={() => scrollNext(gerenteApi)}
            >
              <ChevronRight className="h-6 w-6 text-plp-primary" />
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}