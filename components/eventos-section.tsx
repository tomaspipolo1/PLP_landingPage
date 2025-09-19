"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock } from "lucide-react"
import Link from "next/link"

const eventos = [
  {
    id: 1,
    titulo: "Visita guiada al área histórica del puerto",
    fecha: "14/9/2025",
    hora: "10:00",
    descripcion: "Recorrido por espacios emblemáticos con guía especializada. Cupos limitados. Duración estimada 60 minutos.",
    imagen: "/placeholder.jpg"
  },
  {
    id: 2,
    titulo: "Jornada de puertas abiertas: innovación y tecnología",
    fecha: "2/10/2025",
    hora: "14:00",
    descripcion: "Charlas y demostraciones sobre digitalización y logística portuaria. Actividad para todo público.",
    imagen: "/placeholder.jpg"
  },
  {
    id: 3,
    titulo: "Encuentro con la comunidad: pasado y futuro del puerto",
    fecha: "19/10/2025",
    hora: "16:00",
    descripcion: "Conversatorio con especialistas e integrantes de la comunidad portuaria. Entrada gratuita con inscripción.",
    imagen: "/placeholder.jpg"
  }
]

export function EventosSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-medium text-center text-plp-primary mb-4">PRÓXIMOS EVENTOS</h2>
        <p className="text-center text-plp-gray-600 mb-8 max-w-2xl mx-auto">
          Participá de nuestros eventos y actividades. Mantenete informado sobre las próximas jornadas, seminarios y visitas guiadas.
        </p>

        {/* Grid de eventos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 max-w-5xl mx-auto">
          {eventos.map((evento) => (
            <Card key={evento.id} className="overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              {/* Imagen del evento */}
              <div className="relative h-32">
                <img
                  src={evento.imagen}
                  alt={evento.titulo}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Contenido del evento */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-plp-primary mb-2">
                  {evento.titulo}
                </h3>
                
                {/* Fecha y hora */}
                <div className="flex items-center text-sm text-plp-gray-600 mb-3">
                  <Calendar className="h-4 w-4 mr-2 text-plp-primary" />
                  <span>{evento.fecha}</span>
                  <Clock className="h-4 w-4 ml-4 mr-2 text-plp-primary" />
                  <span>{evento.hora} hs</span>
                </div>
                
                <p className="text-plp-gray-700 mb-4 text-sm flex-1">
                  {evento.descripcion}
                </p>

                {/* Botón de inscripción */}
                <Button className="w-full bg-plp-primary hover:bg-plp-primary/90 mt-auto">
                  Inscribirse
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Botón para ver todos los eventos */}
        <div className="text-center">
          <Link href="/comunidad/eventos">
            <Button variant="outline" className="border-plp-primary text-plp-primary hover:bg-plp-primary/10">
              Ver todos los eventos disponibles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
