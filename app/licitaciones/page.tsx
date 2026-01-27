"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, DollarSign, FileText, Calendar, Clock, Settings2, Download } from "lucide-react"

const FILTROS = [
  { id: "todas", label: "Todas" },
  { id: "mantenimiento", label: "Mantenimiento" },
  { id: "suministros", label: "Suministros" },
  { id: "obras", label: "Obras" },
  { id: "servicios", label: "Servicios" },
  { id: "tecnologia", label: "Tecnología" },
  { id: "logistica", label: "Logística" },
]

const LICITACIONES: Array<{
  id: number
  titulo: string
  descripcion: string
  estado: "abierta" | "cerrada" | "en-evaluacion" | "adjudicada" | "cancelada"
  tags: string[]
  monto: string
  moneda: "USD" | "ARS"
  archivos: number
  cierre: string
  publicada: string
  categoria: string
}> = [
  { id: 1, titulo: "Servicios de mantenimiento de grúas portuarias", descripcion: "Mantenimiento preventivo y correctivo de equipos de izaje y manipulación de cargas en terminal de contenedores.", estado: "abierta", tags: ["Privada", "Mantenimiento"], monto: "2.500.000", moneda: "USD", archivos: 2, cierre: "14/02/2024", publicada: "14/02/2024", categoria: "mantenimiento" },
  { id: 2, titulo: "Servicios de mantenimiento de grúas portuarias", descripcion: "Mantenimiento preventivo y correctivo de equipos de izaje y manipulación de cargas en terminal de contenedores.", estado: "cerrada", tags: ["Pública", "Mantenimiento"], monto: "2.500.000", moneda: "ARS", archivos: 2, cierre: "14/02/2024", publicada: "14/02/2024", categoria: "mantenimiento" },
  { id: 3, titulo: "Servicios de mantenimiento de grúas portuarias", descripcion: "Mantenimiento preventivo y correctivo de equipos de izaje y manipulación de cargas en terminal de contenedores.", estado: "en-evaluacion", tags: ["Privada", "Concurso de precios"], monto: "2.500.000", moneda: "USD", archivos: 2, cierre: "14/02/2024", publicada: "14/02/2024", categoria: "suministros" },
  { id: 4, titulo: "Servicios de mantenimiento de grúas portuarias", descripcion: "Mantenimiento preventivo y correctivo de equipos de izaje y manipulación de cargas en terminal de contenedores.", estado: "adjudicada", tags: ["Pública", "Obras"], monto: "2.500.000", moneda: "USD", archivos: 2, cierre: "14/02/2024", publicada: "14/02/2024", categoria: "obras" },
  { id: 5, titulo: "Servicios de mantenimiento de grúas portuarias", descripcion: "Mantenimiento preventivo y correctivo de equipos de izaje y manipulación de cargas en terminal de contenedores.", estado: "cancelada", tags: ["Privada", "Mantenimiento"], monto: "2.500.000", moneda: "ARS", archivos: 2, cierre: "14/02/2024", publicada: "14/02/2024", categoria: "mantenimiento" },
  { id: 6, titulo: "Servicios de mantenimiento de grúas portuarias", descripcion: "Mantenimiento preventivo y correctivo de equipos de izaje y manipulación de cargas en terminal de contenedores.", estado: "abierta", tags: ["Privada", "Tecnología"], monto: "2.500.000", moneda: "USD", archivos: 2, cierre: "14/02/2024", publicada: "14/02/2024", categoria: "tecnologia" },
]

const ESTADO_STYLES: Record<string, string> = {
  abierta: "bg-emerald-600 text-white",
  cerrada: "bg-plp-gray-700 text-white",
  "en-evaluacion": "bg-plp-secondary/90 text-white",
  adjudicada: "bg-plp-secondary/80 text-white",
  cancelada: "bg-red-600 text-white",
}

const ESTADO_LABEL: Record<string, string> = {
  abierta: "Abierta",
  cerrada: "Cerrada",
  "en-evaluacion": "En evaluación",
  adjudicada: "Adjudicada",
  cancelada: "Cancelada",
}

export default function LicitacionesPage() {
  const [busqueda, setBusqueda] = useState("")
  const [filtroActivo, setFiltroActivo] = useState("todas")
  const [paginaActual, setPaginaActual] = useState(1)
  const totalPaginas = 5

  const licitacionesFiltradas = LICITACIONES.filter((l) => {
    const cumpleFiltro = filtroActivo === "todas" || l.categoria === filtroActivo
    const cumpleBusqueda = !busqueda.trim() || l.titulo.toLowerCase().includes(busqueda.toLowerCase()) || l.descripcion.toLowerCase().includes(busqueda.toLowerCase())
    return cumpleFiltro && cumpleBusqueda
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Hero: Licitaciones publicadas — fondo gris, título izq */}
      <section className="w-full py-10 md:py-14 bg-plp-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-plp-primary">
              Licitaciones publicadas
            </h1>
          </div>
        </div>
      </section>

      {/* Barra de búsqueda + Filtros + Grid */}
      <section className="w-full py-8 md:py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Buscador */}
            <div className="relative">
              <Input
                type="search"
                placeholder="Buscar Licitaciones"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="h-12 pl-4 pr-12 rounded-xl border-plp-gray-200 bg-white shadow-sm text-base"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-plp-gray-500 pointer-events-none" />
            </div>

            {/* Filtros por chips */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-plp-gray-700 shrink-0">Filtrar por:</span>
              <div className="flex flex-wrap gap-2">
                {FILTROS.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setFiltroActivo(f.id)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      filtroActivo === f.id
                        ? "bg-plp-primary text-white"
                        : "bg-white text-plp-gray-700 border border-plp-gray-200 hover:bg-plp-gray-50"
                    }`}
                  >
                    <Settings2 className="h-4 w-4 shrink-0" />
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid de cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {licitacionesFiltradas.map((l) => (
                <Card
                  key={l.id}
                  className="p-5 bg-white rounded-xl shadow-sm border border-plp-gray-200 flex flex-col h-full"
                >
                  <div className="relative mb-4">
                    <span
                      className={`absolute top-0 right-0 text-xs font-semibold px-2.5 py-1 rounded ${ESTADO_STYLES[l.estado]}`}
                    >
                      {ESTADO_LABEL[l.estado]}
                    </span>
                    <h3 className="text-base font-bold text-plp-primary pr-20 line-clamp-2">
                      {l.titulo}
                    </h3>
                  </div>
                  <p className="text-sm text-plp-gray-600 leading-relaxed mb-4 line-clamp-3 flex-1">
                    {l.descripcion}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {l.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                          tag === "Privada" || tag === "Pública" || tag === "Concurso de precios"
                            ? "bg-plp-primary/10 text-plp-primary"
                            : "bg-plp-gray-200 text-plp-gray-700"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs text-plp-gray-600 mb-4">
                    <div className="flex items-center gap-1.5">
                      <DollarSign className="h-3.5 w-3.5 shrink-0" />
                      <span>Monto: {l.moneda} ${l.monto}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 shrink-0" />
                      <span>Cierre: {l.cierre}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FileText className="h-3.5 w-3.5 shrink-0" />
                      <span>Archivos: {l.archivos}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 shrink-0" />
                      <span>Publicada: {l.publicada}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-auto">
                    <Button size="sm" className="flex-1 bg-plp-primary hover:bg-plp-primary/90 text-white">
                      Contactar
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 border-plp-primary text-plp-primary hover:bg-plp-gray-50">
                      <Download className="h-3.5 w-3.5 mr-1" />
                      Descargar documentos
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Paginación */}
            <div className="flex items-center justify-center gap-2 pt-4">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-plp-gray-100 border border-plp-gray-200">
                <span className="text-sm text-plp-gray-700">Página {paginaActual} de {totalPaginas}</span>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setPaginaActual((p) => Math.max(1, p - 1))}
                    disabled={paginaActual <= 1}
                    className="p-1.5 rounded-md text-plp-gray-500 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-plp-gray-200 hover:text-plp-gray-700"
                    aria-label="Página anterior"
                  >
                    <span className="text-lg leading-none">&lt;</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaginaActual((p) => Math.min(totalPaginas, p + 1))}
                    disabled={paginaActual >= totalPaginas}
                    className="p-1.5 rounded-md text-plp-gray-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-plp-gray-200 hover:text-plp-gray-700"
                    aria-label="Página siguiente"
                  >
                    <span className="text-lg leading-none">&gt;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
