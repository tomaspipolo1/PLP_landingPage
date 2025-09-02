"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarDays } from "lucide-react"

// Mock events - replace with data source later
const eventos = [
  {
    id: 1,
    titulo: "Visita guiada al área histórica del puerto",
    fecha: "2025-09-15",
    descripcion:
      "Recorrido por espacios emblemáticos con guía especializada. Cupos limitados. Duración estimada 60 minutos.",
  },
  {
    id: 2,
    titulo: "Jornada de puertas abiertas: innovación y tecnología",
    fecha: "2025-10-03",
    descripcion:
      "Charlas y demostraciones sobre digitalización y logística portuaria. Actividad para todo público.",
  },
  {
    id: 3,
    titulo: "Encuentro con la comunidad: pasado y futuro del puerto",
    fecha: "2025-10-20",
    descripcion:
      "Conversatorio con especialistas e integrantes de la comunidad portuaria. Entrada gratuita con inscripción.",
  },
  {
    id: 4,
    titulo: "Taller para docentes: el puerto como recurso didáctico",
    fecha: "2025-11-05",
    descripcion:
      "Propuestas para trabajar contenidos de historia, geografía y ciudadanía a partir del caso del puerto.",
  },
  {
    id: 5,
    titulo: "Visita técnica: operaciones de contenedores",
    fecha: "2025-11-12",
    descripcion:
      "Recorrido guiado para estudiantes de carreras afines a logística e ingeniería. Requisitos de seguridad vigentes.",
  },
  {
    id: 6,
    titulo: "Ciclo de charlas: sustentabilidad portuaria",
    fecha: "2025-11-22",
    descripcion:
      "Panel con referentes de ambiente y universidades sobre economía circular, emisiones y monitoreo ambiental.",
  },
  {
    id: 7,
    titulo: "Feria de la comunidad portuaria",
    fecha: "2025-12-07",
    descripcion:
      "Muestras, stands y propuestas culturales de instituciones y organizaciones del entorno del puerto.",
  },
]

export default function Eventos() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative w-full h-[300px] bg-gradient-to-r from-plp-primary to-plp-secondary overflow-hidden -mt-[var(--header-height,80px)]">
         <div className="relative h-full container mx-auto px-4 flex items-center pt-[var(--header-height,80px)]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-shadow">Eventos</h1>
          </div>
        </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-4">
          {eventos.map((e) => (
            <Card key={e.id} className="p-5 flex flex-col justify-between bg-white rounded-md border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div>
                <h2 className="text-lg font-semibold text-plp-primary mb-2 line-clamp-2">{e.titulo}</h2>
                <div className="flex items-center gap-2 text-xs text-plp-gray-600 mb-3">
                  <CalendarDays className="h-4 w-4" />
                  <span>{new Date(e.fecha).toLocaleDateString()}</span>
                </div>
                <p className="text-sm text-plp-gray-700 line-clamp-3">{e.descripcion}</p>
              </div>
              <div className="mt-4">
                <Button className="w-full bg-plp-primary hover:bg-plp-primary/90">Inscribirse</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
