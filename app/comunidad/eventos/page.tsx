"use client"

import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock } from "lucide-react"

const SUBTITLE_PROXIMOS =
  "En esta sección encontrarás enlaces para poder inscribirte a nuestros eventos."

const SUBTITLE_PASADOS = "Eventos ya realizados por el Puerto La Plata."

const formatFecha = (fecha: string) => {
  const d = new Date(fecha)
  return d.toLocaleDateString("es-AR", { day: "numeric", month: "long", year: "numeric" })
}

// Próximos eventos — cards horizontales con botón Inscribirse
const proximosEventos = [
  {
    id: 1,
    titulo: "Visita guiada al área histórica del puerto",
    fecha: "2025-09-15",
    hora: "10:00 hs",
    descripcion:
      "Recorrido por espacios emblemáticos con guía especializada. Cupos limitados. Duración estimada 60 minutos.",
    imagen: "/social/Visita-Puerto-LP.jpeg",
  },
  {
    id: 2,
    titulo: "Jornada de puertas abiertas: innovación y tecnología",
    fecha: "2025-10-03",
    hora: "10:00 hs",
    descripcion:
      "Charlas y demostraciones sobre digitalización y logística portuaria. Actividad para todo público.",
    imagen: "/social/Visita-Puerto-LP.jpeg",
  },
  {
    id: 3,
    titulo: "Encuentro con la comunidad: pasado y futuro del puerto",
    fecha: "2025-10-20",
    hora: "10:00 hs",
    descripcion:
      "Conversatorio con especialistas e integrantes de la comunidad portuaria. Entrada gratuita con inscripción.",
    imagen: "/social/Visita-Puerto-LP.jpeg",
  },
]

// Eventos pasados — sin botón de inscribirse
const eventosPasados = [
  {
    id: 4,
    titulo: "Taller para docentes: el puerto como recurso didáctico",
    fecha: "2024-11-05",
    hora: "10:00 hs",
    descripcion:
      "Propuestas para trabajar contenidos de historia, geografía y ciudadanía a partir del caso del puerto.",
    imagen: "/social/Visita-Puerto-LP.jpeg",
  },
  {
    id: 5,
    titulo: "Visita técnica: operaciones de contenedores",
    fecha: "2024-10-12",
    hora: "10:00 hs",
    descripcion:
      "Recorrido guiado para estudiantes de carreras afines a logística e ingeniería. Requisitos de seguridad vigentes.",
    imagen: "/colorful-harbor-town.png",
  },
  {
    id: 6,
    titulo: "Ciclo de charlas: sustentabilidad portuaria",
    fecha: "2024-09-22",
    hora: "10:00 hs",
    descripcion:
      "Panel con referentes de ambiente y universidades sobre economía circular, emisiones y monitoreo ambiental.",
    imagen: "/diverse-group-city.png",
  },
  {
    id: 7,
    titulo: "Feria de la comunidad portuaria",
    fecha: "2024-08-07",
    hora: "10:00 hs",
    descripcion:
      "Muestras, stands y propuestas culturales de instituciones y organizaciones del entorno del puerto.",
    imagen: "/social/Visita-Puerto-LP.jpeg",
  },
  {
    id: 8,
    titulo: "Visita guiada al muelle",
    fecha: "2024-07-15",
    hora: "10:00 hs",
    descripcion:
      "Breve descripción de 2 líneas. Breve descripción de 2 líneas.",
    imagen: "/banner.jpg",
  },
  {
    id: 9,
    titulo: "Jornada de puertas abiertas",
    fecha: "2024-06-10",
    hora: "10:00 hs",
    descripcion:
      "Breve descripción de 2 líneas. Breve descripción de 2 líneas.",
    imagen: "/social/port-sunrise.png",
  },
]

export default function Eventos() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Próximos eventos — título, subtítulo, cards horizontales con Inscribirse */}
        <section className="mb-16">
          <h2 className="text-center text-2xl font-bold text-plp-primary md:text-3xl">
            Próximos eventos
          </h2>
          <p className="mt-2 text-center text-plp-gray-600 max-w-2xl mx-auto">
            {SUBTITLE_PROXIMOS}
          </p>
          <div className="mt-8 space-y-6 max-w-4xl mx-auto">
            {proximosEventos.map((e) => (
              <Card
                key={e.id}
                className="overflow-hidden rounded-lg border border-plp-gray-200 shadow-sm flex flex-col md:flex-row"
              >
                <div className="relative w-full md:w-2/5 aspect-video md:aspect-auto md:min-h-[200px] shrink-0">
                  <Image
                    src={e.imagen}
                    alt={e.titulo}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
                <div className="p-5 md:p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{e.titulo}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-plp-gray-600 mb-3">
                      <span className="flex items-center gap-1.5">
                        <CalendarDays className="h-4 w-4" />
                        {formatFecha(e.fecha)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        {e.hora}
                      </span>
                    </div>
                    <p className="text-sm text-plp-gray-600 line-clamp-2">{e.descripcion}</p>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button asChild className="bg-plp-primary hover:bg-plp-primary/90 text-white">
                      <Link href="/comunidad/eventos/1">Inscribirse</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Eventos pasados — título, subtítulo, grid de cards verticales SIN botón */}
        <section>
          <h2 className="text-center text-2xl font-bold text-plp-primary md:text-3xl">
            Eventos pasados
          </h2>
          <p className="mt-2 text-center text-plp-gray-600 max-w-2xl mx-auto">
            {SUBTITLE_PASADOS}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {eventosPasados.map((e) => (
              <Card
                key={e.id}
                className="overflow-hidden rounded-lg border border-plp-gray-200 shadow-sm flex flex-col"
              >
                <div className="relative w-full aspect-[4/3] shrink-0">
                  <Image
                    src={e.imagen}
                    alt={e.titulo}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col min-w-0">
                  <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2">{e.titulo}</h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-plp-gray-600 mb-2">
                    <span className="flex items-center gap-1">
                      <CalendarDays className="h-4 w-4 shrink-0" />
                      {formatFecha(e.fecha)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4 shrink-0" />
                      {e.hora}
                    </span>
                  </div>
                  <p className="text-sm text-plp-gray-600 line-clamp-3 leading-relaxed">{e.descripcion}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
