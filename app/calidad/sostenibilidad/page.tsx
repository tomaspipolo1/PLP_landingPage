"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Factory, Droplets, Wind } from "lucide-react"

export default function Sostenibilidad() {
  return (
    <div className="min-h-screen bg-white">


      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Puerto Verde */}
        <section className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-5 md:col-span-2">
            <div className="flex items-center gap-2 mb-2">
              <Leaf className="h-5 w-5 text-green-600" />
              <h2 className="text-2xl font-semibold text-plp-primary">Puerto Verde</h2>
            </div>
            <p className="text-plp-gray-600 leading-relaxed">
              Impulsamos prácticas de gestión ambiental que promueven la eficiencia energética, la economía circular y
              la protección de la biodiversidad. Trabajamos con la comunidad portuaria y organismos públicos para
              alcanzar metas medibles y auditables.
            </p>
          </Card>
          <Card className="p-5 flex items-center justify-center">
            <Badge className="bg-green-700/90 hover:bg-green-700">Programa activo</Badge>
          </Card>
        </section>

        {/* Reducción de emisiones */}
        <section className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-5">
            <div className="flex items-center gap-2 mb-2">
              <Factory className="h-5 w-5 text-plp-primary" />
              <h3 className="text-lg font-semibold text-plp-primary">Inventario de GEI</h3>
            </div>
            <p className="text-sm text-plp-gray-600">Medición anual de emisiones (alcances 1 y 2) y plan de reducción.</p>
          </Card>
          <Card className="p-5">
            <div className="flex items-center gap-2 mb-2">
              <Wind className="h-5 w-5 text-plp-primary" />
              <h3 className="text-lg font-semibold text-plp-primary">Eficiencia energética</h3>
            </div>
            <p className="text-sm text-plp-gray-600">Modernización de equipos e iluminación; energías renovables.</p>
          </Card>
          <Card className="p-5">
            <div className="flex items-center gap-2 mb-2">
              <Droplets className="h-5 w-5 text-plp-primary" />
              <h3 className="text-lg font-semibold text-plp-primary">Gestión de efluentes</h3>
            </div>
            <p className="text-sm text-plp-gray-600">Monitoreo de calidad, planes de contingencia y capacitación.</p>
          </Card>
        </section>

       
      </div>
    </div>
  )
}
