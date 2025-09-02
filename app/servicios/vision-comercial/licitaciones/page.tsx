"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  Search, 
  Filter, 
  Calendar, 
  FileText, 
  Download,
  Eye,
  Clock,
  DollarSign
} from "lucide-react"
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
    estado: "Publicada",
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
    estado: "Publicada",
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
    estado: "Publicada",
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
    estado: "Publicada",
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
    estado: "Publicada",
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
    estado: "Publicada",
    archivos: ["Pliego_seguridad.pdf", "Rutas_transporte.pdf"]
  }
]

const categorias = ["Todas", "Mantenimiento", "Suministros", "Obras", "Servicios", "Tecnología"]

export default function LicitacionesPublicadas() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategoria, setSelectedCategoria] = useState("Todas")

  const filteredLicitaciones = licitaciones.filter(lic => {
    const matchesSearch = lic.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lic.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategoria = selectedCategoria === "Todas" || lic.categoria === selectedCategoria
    return matchesSearch && matchesCategoria
  })

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-AR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative w-full h-[300px] bg-gradient-to-r from-plp-primary to-plp-secondary overflow-hidden -mt-[var(--header-height,80px)]">
         <div className="relative h-full container mx-auto px-4 flex items-center pt-[var(--header-height,80px)]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-shadow">
            Licitaciones públicas</h1>
          </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Filtros y búsqueda */}
        <section className="mb-8">
          <Card className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Buscar licitaciones..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <Select value={selectedCategoria} onValueChange={setSelectedCategoria}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    {categorias.map((cat) => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>
        </section>

        {/* Estadísticas */}
        <section className="mb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-plp-primary">{licitaciones.length}</div>
              <div className="text-sm text-gray-600">Licitaciones activas</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">6</div>
              <div className="text-sm text-gray-600">Categorías</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">15 días</div>
              <div className="text-sm text-gray-600">Promedio plazo</div>
            </Card>
          </div>
        </section>

        {/* Lista de licitaciones */}
        <section>
          <div className="grid gap-6">
            {filteredLicitaciones.map((lic) => (
              <Card key={lic.id} className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  {/* Información principal */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-plp-primary">{lic.titulo}</h3>
                      <Badge className="bg-green-100 text-green-700">{lic.estado}</Badge>
                    </div>
                    <p className="text-sm text-plp-gray-700 mb-4 leading-relaxed">{lic.descripcion}</p>
                    
                    {/* Detalles */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-plp-primary" />
                        <span><strong>Monto:</strong> {lic.monto}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-plp-primary" />
                        <span><strong>Cierre:</strong> {formatDate(lic.fechaCierre)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-plp-primary" />
                        <span><strong>Archivos:</strong> {lic.archivos.length}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-plp-primary" />
                        <span><strong>Publicada:</strong> {formatDate(lic.fechaPublicacion)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Acciones */}
                  <div className="flex flex-col gap-2 lg:w-48">
                    <Link href={`/servicios/vision-comercial/licitaciones/${lic.id}`}>
                      <Button className="w-full bg-plp-primary hover:bg-plp-primary-hover">
                        <Eye className="mr-2 h-4 w-4" />
                        Ver detalle
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Descargar pliego
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Sin resultados */}
        {filteredLicitaciones.length === 0 && (
          <section className="text-center py-12">
            <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No se encontraron licitaciones</h3>
            <p className="text-gray-500">Intenta ajustar los filtros de búsqueda</p>
          </section>
        )}
      </div>
    </div>
  )
}
