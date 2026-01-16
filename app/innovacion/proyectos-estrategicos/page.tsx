"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, ChevronRight, ShieldAlert } from "lucide-react"

const iniciativas = [
  { id: 1, titulo: "Ampliación y modernización de muelles", desc: "Optimización de posiciones de atraque y defensas para mayor seguridad y disponibilidad.", etapa: "En diseño" },
  { id: 2, titulo: "Mejoras de accesos viales al puerto", desc: "Flujos de ingreso/egreso más eficientes con señalización y coordinación logística.", etapa: "En gestión" },
  { id: 3, titulo: "Centro de visitantes y museo", desc: "Espacio cultural y educativo para fortalecer el vínculo con la comunidad.", etapa: "En planificación" },
  { id: 4, titulo: "Energía y eficiencia", desc: "Plan de iluminación LED y uso racional de energía en áreas operativas.", etapa: "Ejecución" },
  { id: 5, titulo: "Programa de seguridad operativa", desc: "Capacitaciones, simulacros y nueva señalética para prevención de incidentes.", etapa: "Continuo" },
]

export default function ProyectosEstrategicos() {
  return (
    <div className="min-h-screen bg-white">


      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Aviso de confidencialidad */}
        <Card className="p-4 flex items-start gap-3 mb-8 border-amber-200 bg-amber-50">
          <ShieldAlert className="h-5 w-5 text-amber-600 shrink-0" />
          <p className="text-sm text-amber-800">
            Algunas iniciativas de expansión se encuentran en análisis técnico y sujetas a acuerdos de confidencialidad
            con terceros. La información publicada es de carácter general y puede actualizarse.
          </p>
        </Card>
        {/* Timeline resumida */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-plp-primary mb-4">Hitos</h2>
          <div className="relative overflow-hidden rounded-md border border-gray-100 shadow-sm">
            <div className="relative grid md:grid-cols-3">
              {[
                { fecha: "2025", items: ["Proyecto ejecutivo muelles", "Licitación accesos viales"] },
                { fecha: "2026", items: ["Inicio obras de iluminación LED", "Centro de visitantes - obra"] },
                { fecha: "2027", items: ["Ampliación muelles - entrega 1", "Programa seguridad - fase avanzada"] },
              ].map((col) => (
                <div key={col.fecha} className="p-6 border-t md:border-t-0 md:border-l border-gray-100 first:border-0">
                  <div className="flex items-center gap-2 mb-2">
                    <CalendarDays className="h-5 w-5 text-plp-primary" />
                    <h3 className="text-lg font-semibold text-plp-primary">{col.fecha}</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-plp-gray-700">
                    {col.items.map((it) => (
                      <li key={it} className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-plp-primary" /> {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Obras de expansión (futuro) */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-plp-primary mb-4">Obras de expansión</h2>
          <div className="grid md:grid-cols-3 gap-5">
            <Card className="p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-plp-primary mb-1">Nuevos muelles</h3>
              <p className="text-sm text-plp-gray-700 leading-relaxed mb-3">
                Incorporación de posiciones de atraque para incrementar capacidad operativa y diversificar cargas.
                Optimización de accesos náuticos y defensas.
              </p>
              <Badge className="bg-plp-primary/10 text-plp-primary">Anteproyecto</Badge>
            </Card>
            <Card className="p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-plp-primary mb-1">Interconexión ferroviaria</h3>
              <p className="text-sm text-plp-gray-700 leading-relaxed mb-3">
                Mejora de vinculación ferroviaria para ingreso de trenes a áreas operativas, reduciendo tiempos y
                emisiones del transporte.
              </p>
              <Badge className="bg-plp-primary/10 text-plp-primary">En evaluación</Badge>
            </Card>
            <Card className="p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-plp-primary mb-1">Ampliación de patios</h3>
              <p className="text-sm text-plp-gray-700 leading-relaxed mb-3">
                Reconfiguración y ampliación de superficies para almacenamiento y circulación, con criterios de
                seguridad y eficiencia.
              </p>
              <Badge className="bg-plp-primary/10 text-plp-primary">Planeamiento</Badge>
            </Card>
          </div>
        </section>

        {/* Cards de iniciativas */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {iniciativas.map((i) => (
            <Card key={i.id} className="p-5 bg-white rounded-md border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-plp-primary mb-1">{i.titulo}</h3>
              <p className="text-sm text-plp-gray-700 leading-relaxed mb-3">{i.desc}</p>
              <Badge className="bg-plp-primary/10 text-plp-primary">{i.etapa}</Badge>
            </Card>
          ))}
        </section>
      </div>
    </div>
  )
}
