"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Cpu, Satellite, Radar, Smartphone, Waves, Network, ChevronRight } from "lucide-react"

const proyectos = [
  { id: 1, icon: Cpu, titulo: "Plataforma integral de operaciones (TOS Cloud)", desc: "Unifica la programación de buques, patio y gate en una sola capa cloud, con tableros en tiempo real.", tags: ["SaaS", "APIs", "Realtime"] },
  { id: 2, icon: Radar, titulo: "Sensorización IoT del frente de atraque", desc: "Red de sensores para condiciones meteo-oceánicas, ocupación de muelles, vibración y estado de defensas.", tags: ["IoT", "Edge", "Mantenimiento"] },
  { id: 3, icon: Smartphone, titulo: "Aplicativo móvil para transportistas y agentes", desc: "Turnos, pre-gate, avisos y seguimiento de cargas con notificaciones y credenciales digitales.", tags: ["Mobile", "Turnos", "UX"] },
  { id: 4, icon: Waves, titulo: "Gemelo digital del puerto", desc: "Modelo 3D con datos en vivo para simular escenarios, flujos y capacidad en picos de demanda.", tags: ["Digital Twin", "Simulación"] },
  { id: 5, icon: Network, titulo: "Interoperabilidad con organismos", desc: "Mensajería estandarizada para Prefectura, Aduana y terminales. Menos papeles, más trazabilidad.", tags: ["EDI", "Integraciones"] },
  { id: 6, icon: Satellite, titulo: "Monitoreo ambiental inteligente", desc: "Captura y análisis de emisiones, calidad de aire y agua con alertas y reportes automáticos.", tags: ["ML", "Sostenibilidad"] },
]

export default function DigitalizacionTecnologia() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative w-full h-[300px] bg-gradient-to-r from-plp-primary to-plp-secondary overflow-hidden -mt-[var(--header-height,80px)]">
        
         <div className="relative h-full container mx-auto px-4 flex items-center pt-[var(--header-height,80px)]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-shadow">Digitalización y tecnología</h1>
          </div>
      </div>

      {/* Intro + Chips */}
      <div className="container mx-auto px-4 py-10">
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {["Software & Apps", "IoT & Sensores", "Interoperabilidad", "Gemelo Digital", "Sostenibilidad"].map((t) => (
              <Badge key={t} variant="outline" className="border-plp-primary text-plp-primary">{t}</Badge>
            ))}
          </div>
        </div>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {proyectos.map((p) => (
            <Card key={p.id} className="relative p-5 bg-white rounded-md border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <p.icon className="h-6 w-6 text-plp-primary" />
                <div>
                  <h2 className="text-lg font-semibold text-plp-primary mb-1">{p.titulo}</h2>
                  <p className="text-sm text-plp-gray-700 leading-relaxed">{p.desc}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((tg) => (
                  <Badge key={tg} className="bg-plp-primary/10 text-plp-primary">{tg}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>


        {/* CTA */}
        <section className="text-center">
          <p className="text-plp-gray-700 mb-4">¿Sos proveedor tecnológico o tenés una propuesta de innovación?</p>
          <Button className="bg-plp-primary hover:bg-plp-primary/90">Postular solución</Button>
        </section>
      </div>
    </div>
  )
}
