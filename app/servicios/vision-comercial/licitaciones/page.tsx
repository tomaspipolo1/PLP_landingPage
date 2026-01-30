"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Calendar, FileText, Download, Clock, DollarSign, Settings2 } from "lucide-react"
import Link from "next/link"

const licitaciones = [
  {
    id: 1,
    titulo: "Servicios de mantenimiento de grúas portuarias",
    descripcion: "Mantenimiento preventivo y correctivo de equipos de izaje y manipulación de cargas en terminal de contenedores.",
    categoria: "Mantenimiento",
    monto: "$2.500.000",
    fechaPublicacion: "2024-01-15",
    fechaCierre: "2024-02-15",
    estado: "Abierta",
    archivos: ["Pliego_tecnico.pdf", "Anexos.zip", "Formularios.xlsx"]
  },
  {
    id: 2,
    titulo: "Suministro de combustible marino",
    descripcion: "Provisión de combustible para embarcaciones que operan en el puerto, incluyendo logística y almacenamiento.",
    categoria: "Suministros",
    monto: "$8.750.000",
    fechaPublicacion: "2024-01-10",
    fechaCierre: "2024-02-10",
    estado: "Cerrada",
    archivos: ["Especificaciones.pdf", "Condiciones_comerciales.pdf"]
  },
  {
    id: 3,
    titulo: "Obras de pavimentación en área de patios",
    descripcion: "Pavimentación y señalización de áreas de almacenamiento y circulación de vehículos pesados.",
    categoria: "Obras",
    monto: "$15.200.000",
    fechaPublicacion: "2024-01-08",
    fechaCierre: "2024-02-08",
    estado: "En evaluación",
    archivos: ["Pliego_obras.pdf", "Planos.zip", "Memoria_calculo.pdf"]
  },
  {
    id: 4,
    titulo: "Servicios de limpieza y desinfección",
    descripcion: "Servicios integrales de limpieza, desinfección y mantenimiento de áreas comunes y sanitarios.",
    categoria: "Servicios",
    monto: "$1.800.000",
    fechaPublicacion: "2024-01-05",
    fechaCierre: "2024-02-05",
    estado: "Adjudicada",
    archivos: ["Especificaciones_servicios.pdf", "Cronograma.pdf"]
  },
  {
    id: 5,
    titulo: "Equipamiento informático y software",
    descripcion: "Adquisición de equipos informáticos, software de gestión y sistemas de seguridad digital.",
    categoria: "Tecnología",
    monto: "$3.500.000",
    fechaPublicacion: "2024-01-03",
    fechaCierre: "2024-02-03",
    estado: "Cancelada",
    archivos: ["Especificaciones_tecnicas.pdf", "Software_requerido.pdf"]
  },
  {
    id: 6,
    titulo: "Transporte de personal y servicios de seguridad",
    descripcion: "Servicios de transporte de personal y vigilancia privada para instalaciones portuarias.",
    categoria: "Servicios",
    monto: "$4.200.000",
    fechaPublicacion: "2024-01-01",
    fechaCierre: "2024-02-01",
    estado: "Abierta",
    archivos: ["Pliego_seguridad.pdf", "Rutas_transporte.pdf"]
  }
]

const categorias = ["Todas", "Mantenimiento", "Suministros", "Obras", "Servicios", "Tecnología", "Logística"]

const ESTADO_STYLES: Record<string, string> = {
  Abierta: "bg-emerald-600 text-white",
  Cerrada: "bg-plp-gray-700 text-white",
  "En evaluación": "bg-plp-secondary/90 text-white",
  Adjudicada: "bg-plp-secondary/80 text-white",
  Cancelada: "bg-red-600 text-white",
}

const FILTROS = categorias.map((cat) => ({ id: cat === "Todas" ? "todas" : cat.toLowerCase(), label: cat }))

export default function LicitacionesPublicadas() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategoria, setSelectedCategoria] = useState("Todas")
  const [paginaActual, setPaginaActual] = useState(1)
  const totalPaginas = 5

  const filteredLicitaciones = licitaciones.filter((lic) => {
    const matchesSearch = lic.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lic.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategoria = selectedCategoria === "Todas" || lic.categoria === selectedCategoria
    return matchesSearch && matchesCategoria
  })

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("es-AR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Banner gris: título + barra de búsqueda + filtros en la misma sección */}
      <section className="w-full py-10 md:py-14 bg-plp-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-plp-primary">
              Licitaciones publicadas
            </h1>
            {/* Buscador */}
            <div className="relative">
              <Input
                type="search"
                placeholder="Buscar Licitaciones"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
                    onClick={() => setSelectedCategoria(f.label)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategoria === f.label
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
          </div>
        </div>
      </section>

      {/* Grid de cards + paginación — 2 por fila, cards anchas con gris tenue */}
      <section className="w-full py-8 md:py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-6">
            {filteredLicitaciones.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="h-16 w-16 text-plp-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-plp-gray-600 mb-2">No se encontraron licitaciones</h3>
                <p className="text-plp-gray-500">Intenta ajustar los filtros de búsqueda</p>
              </div>
            ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredLicitaciones.map((lic) => (
                <Card
                  key={lic.id}
                  className="p-5 bg-plp-gray-100/40 rounded-xl shadow-sm border border-plp-gray-200 flex flex-col h-full"
                >
                  <div className="relative mb-4">
                    <span
                      className={`absolute top-0 right-0 text-xs font-semibold px-2.5 py-1 rounded ${ESTADO_STYLES[lic.estado] ?? "bg-plp-gray-600 text-white"}`}
                    >
                      {lic.estado}
                    </span>
                    <h3 className="text-base font-bold text-plp-primary pr-20 line-clamp-2">
                      {lic.titulo}
                    </h3>
                  </div>
                  <p className="text-sm text-plp-gray-600 leading-relaxed mb-4 line-clamp-3 flex-1">
                    {lic.descripcion}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-plp-primary/10 text-plp-primary">
                      {lic.categoria}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs text-plp-gray-600 mb-4">
                    <div className="flex items-center gap-1.5">
                      <DollarSign className="h-3.5 w-3.5 shrink-0" />
                      <span>Monto: {lic.monto}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 shrink-0" />
                      <span>Cierre: {formatDate(lic.fechaCierre)}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FileText className="h-3.5 w-3.5 shrink-0" />
                      <span>Archivos: {lic.archivos.length}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 shrink-0" />
                      <span>Publicada: {formatDate(lic.fechaPublicacion)}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-auto">
                    <Link
                      href={`/contacto?tipoConsulta=licitacion&departamento=compras&asunto=${encodeURIComponent(`Consulta licitacion ${lic.titulo}`)}&mensaje=${encodeURIComponent(`Me gustaría contactarlos por la licitación "${lic.titulo}" para la posibilidad de inscribirme y recibir más información.`)}`}
                      className="flex-1"
                    >
                      <Button size="sm" className="w-full bg-plp-primary hover:bg-plp-primary/90 text-white">
                        Contactar
                      </Button>
                    </Link>
                    <Button size="sm" variant="outline" className="flex-1 border-plp-primary text-plp-primary hover:bg-plp-gray-50">
                      <Download className="h-3.5 w-3.5 mr-1" />
                      Descargar documentos
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
            )}

            {/* Paginación — mismo ancho que el grid de cards */}
            {filteredLicitaciones.length > 0 && (
            <div className="w-full pt-4">
              <div className="w-full flex items-center justify-end gap-3 px-4 py-3 rounded-xl bg-plp-gray-100 border border-plp-gray-200">
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
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
