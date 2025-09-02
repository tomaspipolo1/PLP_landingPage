"use client"

import { use } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { 
  ArrowLeft,
  Calendar,
  DollarSign,
  FileText,
  Download,
  User,
  Tag,
  Clock,
  Building
} from "lucide-react"
import Link from "next/link"

const licitacionesDetalle = [
  {
    id: 1,
    titulo: "Servicios de mantenimiento de grúas portuarias",
    categoria: "Mantenimiento",
    tipo: "Pública",
    descripcion: "Mantenimiento preventivo y correctivo de equipos de izaje y manipulación de cargas en terminal de contenedores. Incluye inspecciones técnicas, reparaciones menores, lubricación y ajustes de sistemas de seguridad.",
    responsableTecnico: "ingenieria@puertolaplata.com",
    presupuestoEstimado: 2500000,
    moneda: "ARS",
    fechaCierre: "2024-02-15",
    fechaApertura: "2024-02-20",
    pliego: "Pliego_tecnico_licitacion_001.pdf",
    circulares: ["Circular_001_especificaciones.pdf", "Circular_002_anexos.pdf"]
  },
  {
    id: 2,
    titulo: "Suministro de combustible marino",
    categoria: "Suministros",
    tipo: "Pública",
    descripcion: "Provisión de combustible para embarcaciones que operan en el puerto, incluyendo logística y almacenamiento. Servicios de bunkering, control de calidad y cumplimiento de normativas ambientales.",
    responsableTecnico: "compras@puertolaplata.com",
    presupuestoEstimado: 8750000,
    moneda: "ARS",
    fechaCierre: "2024-02-10",
    fechaApertura: "2024-02-15",
    pliego: "Pliego_combustible_marino_002.pdf",
    circulares: ["Circular_003_especificaciones.pdf", "Circular_004_condiciones.pdf"]
  },
  {
    id: 3,
    titulo: "Obras de pavimentación en área de patios",
    categoria: "Obras",
    tipo: "Pública",
    descripcion: "Pavimentación y señalización de áreas de almacenamiento y circulación de vehículos pesados. Incluye preparación de terreno, pavimento de hormigón, señalización horizontal y vertical.",
    responsableTecnico: "obras@puertolaplata.com",
    presupuestoEstimado: 15200000,
    moneda: "ARS",
    fechaCierre: "2024-02-08",
    fechaApertura: "2024-02-13",
    pliego: "Pliego_obras_pavimentacion_003.pdf",
    circulares: ["Circular_005_planos.pdf", "Circular_006_memoria.pdf"]
  },
  {
    id: 4,
    titulo: "Servicios de limpieza y desinfección",
    categoria: "Servicios",
    tipo: "Pública",
    descripcion: "Servicios integrales de limpieza, desinfección y mantenimiento de áreas comunes y sanitarios. Incluye limpieza diaria, desinfección especializada y gestión de residuos.",
    responsableTecnico: "servicios@puertolaplata.com",
    presupuestoEstimado: 1800000,
    moneda: "ARS",
    fechaCierre: "2024-02-05",
    fechaApertura: "2024-02-10",
    pliego: "Pliego_limpieza_desinfeccion_004.pdf",
    circulares: ["Circular_007_cronograma.pdf", "Circular_008_protocolos.pdf"]
  },
  {
    id: 5,
    titulo: "Equipamiento informático y software",
    categoria: "Tecnología",
    tipo: "Pública",
    descripcion: "Adquisición de equipos informáticos, software de gestión y sistemas de seguridad digital. Incluye servidores, estaciones de trabajo, licencias de software y sistemas de respaldo.",
    responsableTecnico: "sistemas@puertolaplata.com",
    presupuestoEstimado: 3500000,
    moneda: "ARS",
    fechaCierre: "2024-02-03",
    fechaApertura: "2024-02-08",
    pliego: "Pliego_equipamiento_informatico_005.pdf",
    circulares: ["Circular_009_especificaciones.pdf", "Circular_010_software.pdf"]
  },
  {
    id: 6,
    titulo: "Transporte de personal y servicios de seguridad",
    categoria: "Servicios",
    tipo: "Pública",
    descripcion: "Servicios de transporte de personal y vigilancia privada para instalaciones portuarias. Incluye flota de vehículos, personal de seguridad y sistemas de monitoreo.",
    responsableTecnico: "seguridad@puertolaplata.com",
    presupuestoEstimado: 4200000,
    moneda: "ARS",
    fechaCierre: "2024-02-01",
    fechaApertura: "2024-02-06",
    pliego: "Pliego_transporte_seguridad_006.pdf",
    circulares: ["Circular_011_rutas.pdf", "Circular_012_protocolos.pdf"]
  }
]

export default function DetalleLicitacion({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const licitacion = licitacionesDetalle.find(lic => lic.id === parseInt(resolvedParams.id))

  if (!licitacion) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-600 mb-2">Licitación no encontrada</h1>
          <p className="text-gray-500 mb-4">La licitación solicitada no existe</p>
          <Link href="/servicios/vision-comercial/licitaciones">
            <Button>Volver a licitaciones</Button>
          </Link>
        </div>
      </div>
    )
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-AR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  }

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative w-full h-[220px] bg-gradient-to-r from-plp-primary to-plp-secondary overflow-hidden">
        <div className="absolute inset-0 bg-plp-overlay-light" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-plp-overlay/10 backdrop-blur-sm" />
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="w-full">
            <Link href="/servicios/vision-comercial/licitaciones">
              <Button variant="ghost" className="text-white hover:bg-white/10 mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver a licitaciones
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white text-shadow">{licitacion.titulo}</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Información principal */}
          <div className="lg:col-span-2">
            <Card className="p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-plp-primary/10 text-plp-primary">{licitacion.categoria}</Badge>
                <Badge className="bg-green-100 text-green-700">{licitacion.tipo}</Badge>
              </div>
              
              <h2 className="text-2xl font-semibold text-plp-primary mb-4">Descripción</h2>
              <p className="text-plp-gray-700 leading-relaxed mb-6">{licitacion.descripcion}</p>

              <Separator className="my-6" />

              <h3 className="text-xl font-semibold text-plp-primary mb-4">Información técnica</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-plp-primary" />
                  <div>
                    <span className="text-sm text-gray-600">Responsable técnico</span>
                    <p className="font-medium">{licitacion.responsableTecnico}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="h-5 w-5 text-plp-primary" />
                  <div>
                    <span className="text-sm text-gray-600">Presupuesto estimado</span>
                    <p className="font-medium">{formatCurrency(licitacion.presupuestoEstimado, licitacion.moneda)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-plp-primary" />
                  <div>
                    <span className="text-sm text-gray-600">Fecha de cierre</span>
                    <p className="font-medium">{formatDate(licitacion.fechaCierre)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-plp-primary" />
                  <div>
                    <span className="text-sm text-gray-600">Fecha de apertura</span>
                    <p className="font-medium">{formatDate(licitacion.fechaApertura)}</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Documentos */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-plp-primary mb-4">Documentación</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-plp-primary mb-2">Pliego de bases y condiciones</h4>
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Download className="mr-2 h-4 w-4" />
                    {licitacion.pliego}
                  </Button>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium text-plp-primary mb-2">Circulares y anexos</h4>
                  <div className="space-y-2">
                    {licitacion.circulares.map((circular, index) => (
                      <Button key={index} variant="outline" className="w-full sm:w-auto">
                        <Download className="mr-2 h-4 w-4" />
                        {circular}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>

                     {/* Sidebar */}
           <div className="lg:col-span-1">
             <Card className="p-6">
               <h3 className="text-lg font-semibold text-plp-primary mb-4">Resumen</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Tag className="h-4 w-4 text-plp-primary" />
                  <div>
                    <span className="text-sm text-gray-600">Categoría</span>
                    <p className="font-medium">{licitacion.categoria}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Building className="h-4 w-4 text-plp-primary" />
                  <div>
                    <span className="text-sm text-gray-600">Tipo</span>
                    <p className="font-medium">{licitacion.tipo}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <DollarSign className="h-4 w-4 text-plp-primary" />
                  <div>
                    <span className="text-sm text-gray-600">Presupuesto</span>
                    <p className="font-medium">{formatCurrency(licitacion.presupuestoEstimado, licitacion.moneda)}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-plp-primary" />
                  <div>
                    <span className="text-sm text-gray-600">Cierre</span>
                    <p className="font-medium">{formatDate(licitacion.fechaCierre)}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <FileText className="h-4 w-4 text-plp-primary" />
                  <div>
                    <span className="text-sm text-gray-600">Documentos</span>
                    <p className="font-medium">{licitacion.circulares.length + 1} archivos</p>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="text-center">
                <Button className="w-full bg-plp-primary hover:bg-plp-primary-hover">
                  Consultar dudas
                </Button>
                                 <p className="text-xs text-gray-500 mt-2">
                   Contacto: mesaentradasplp@puertolaplata.com
                 </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
