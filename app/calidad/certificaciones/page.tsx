"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, ExternalLink } from "lucide-react"

const certificados = [
  {
    id: 1,
    titulo: "ISO 9001:2015 - Sistema de Gestión de la Calidad",
    entidad: "Organismo Certificador Marítimo (OCM)",
    fecha: "Vigente hasta 12/2026",
    pdf: "/docs/certificados/iso-9001-2015-plp.pdf",
  },
  {
    id: 2,
    titulo: "ISO 14001:2015 - Gestión Ambiental",
    entidad: "Bureau Portuario Internacional",
    fecha: "Vigente hasta 05/2027",
    pdf: "/docs/certificados/iso-14001-2015-plp.pdf",
  },
  {
    id: 3,
    titulo: "OHSAS 18001 / ISO 45001 - Seguridad y Salud en el Trabajo",
    entidad: "Global Ports Certification",
    fecha: "Vigente hasta 09/2026",
    pdf: "/docs/certificados/iso-45001-plp.pdf",
  },
]

export default function Certificaciones() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative w-full h-[300px] bg-gradient-to-r from-plp-primary to-plp-secondary overflow-hidden -mt-[var(--header-height,80px)]">
         <div className="relative h-full container mx-auto px-4 flex items-center pt-[var(--header-height,80px)]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-shadow">Certificaciones</h1>
          </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificados.map((c) => (
            <Card key={c.id} className="p-5 flex flex-col justify-between bg-white rounded-md border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div>
                <h2 className="text-lg font-semibold text-plp-primary mb-1">{c.titulo}</h2>
                <p className="text-sm text-plp-gray-600">{c.entidad}</p>
                <p className="text-xs text-plp-gray-500 mt-1">{c.fecha}</p>
              </div>
              <div className="mt-4 flex gap-2">
                <Button asChild variant="outline" className="border-plp-primary text-plp-primary">
                  <a href={c.pdf} download>
                    <FileText className="h-4 w-4 mr-2" /> Descargar PDF
                  </a>
                </Button>
                <Button asChild variant="ghost" className="text-plp-primary">
                  <a href={c.pdf} target="_blank" rel="noopener noreferrer">
                    Ver online <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
