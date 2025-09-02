"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { 
  Ship,
  Truck,
  Train,
  Phone,
  Mail,
  MapPin,
  Clock,
  Package,
  Warehouse,
  FileText,
  Wrench,
  Download,
  CreditCard,
  AlertCircle
} from "lucide-react"
import Link from "next/link"

// Categorías de tarifas
const categoriasTarifas = [
  {
    id: "uso-puerto",
    titulo: "Tarifa de Uso del Puerto",
    descripcion: "Tarifas por utilización de instalaciones y servicios portuarios",
    icon: Ship,
    color: "bg-blue-500",
    archivos: [
      {
        nombre: "Tarifa de Uso del Puerto 2024",
        tipo: "PDF",
        tamaño: "2.3 MB",
        fecha: "Enero 2024",
        descripcion: "Tarifas vigentes para uso de instalaciones portuarias"
      },
      {
        nombre: "Tarifa de Uso del Puerto - Anexo I",
        tipo: "PDF",
        tamaño: "1.8 MB",
        fecha: "Enero 2024",
        descripcion: "Detalle de tarifas por tipo de buque y operación"
      },
      {
        nombre: "Tarifa de Uso del Puerto - Anexo II",
        tipo: "PDF",
        tamaño: "1.5 MB",
        fecha: "Enero 2024",
        descripcion: "Tarifas especiales y descuentos aplicables"
      }
    ]
  },
  {
    id: "importacion",
    titulo: "Tarifa de Importación",
    descripcion: "Tarifas y aranceles para operaciones de importación",
    icon: Package,
    color: "bg-green-500",
    archivos: [
      {
        nombre: "Tarifa de Importación 2024",
        tipo: "PDF",
        tamaño: "3.1 MB",
        fecha: "Enero 2024",
        descripcion: "Aranceles y tarifas para mercancías de importación"
      },
      {
        nombre: "Tarifa de Importación - Categorías",
        tipo: "PDF",
        tamaño: "2.7 MB",
        fecha: "Enero 2024",
        descripcion: "Clasificación arancelaria y tarifas por categoría"
      },
      {
        nombre: "Tarifa de Importación - Procedimientos",
        tipo: "PDF",
        tamaño: "1.9 MB",
        fecha: "Enero 2024",
        descripcion: "Procedimientos y documentación requerida"
      }
    ]
  },
  {
    id: "exportacion",
    titulo: "Tarifa de Exportación",
    descripcion: "Tarifas y aranceles para operaciones de exportación",
    icon: Truck,
    color: "bg-orange-500",
    archivos: [
      {
        nombre: "Tarifa de Exportación 2024",
        tipo: "PDF",
        tamaño: "2.8 MB",
        fecha: "Enero 2024",
        descripcion: "Aranceles y tarifas para mercancías de exportación"
      },
      {
        nombre: "Tarifa de Exportación - Incentivos",
        tipo: "PDF",
        tamaño: "1.6 MB",
        fecha: "Enero 2024",
        descripcion: "Incentivos y beneficios para exportadores"
      },
      {
        nombre: "Tarifa de Exportación - Documentación",
        tipo: "PDF",
        tamaño: "2.1 MB",
        fecha: "Enero 2024",
        descripcion: "Documentación y procedimientos de exportación"
      }
    ]
  },
  {
    id: "servicios-especiales",
    titulo: "Tarifa de Servicios Especiales",
    descripcion: "Tarifas por servicios especializados y adicionales",
    icon: Wrench,
    color: "bg-purple-500",
    archivos: [
      {
        nombre: "Tarifa de Servicios Especiales 2024",
        tipo: "PDF",
        tamaño: "2.5 MB",
        fecha: "Enero 2024",
        descripcion: "Tarifas por servicios especializados portuarios"
      },
      {
        nombre: "Tarifa de Servicios Especiales - Remolque",
        tipo: "PDF",
        tamaño: "1.4 MB",
        fecha: "Enero 2024",
        descripcion: "Tarifas de remolque y asistencia portuaria"
      },
      {
        nombre: "Tarifa de Servicios Especiales - Emergencias",
        tipo: "PDF",
        tamaño: "1.2 MB",
        fecha: "Enero 2024",
        descripcion: "Tarifas por servicios de emergencia"
      }
    ]
  },
  {
    id: "almacenamiento",
    titulo: "Tarifa de Almacenamiento",
    descripcion: "Tarifas por almacenamiento y custodia de mercancías",
    icon: Warehouse,
    color: "bg-red-500",
    archivos: [
      {
        nombre: "Tarifa de Almacenamiento 2024",
        tipo: "PDF",
        tamaño: "2.9 MB",
        fecha: "Enero 2024",
        descripcion: "Tarifas por almacenamiento en terminales portuarias"
      },
      {
        nombre: "Tarifa de Almacenamiento - Zona Franca",
        tipo: "PDF",
        tamaño: "2.2 MB",
        fecha: "Enero 2024",
        descripcion: "Tarifas especiales para zona franca"
      },
      {
        nombre: "Tarifa de Almacenamiento - Contenedores",
        tipo: "PDF",
        tamaño: "1.8 MB",
        fecha: "Enero 2024",
        descripcion: "Tarifas específicas para contenedores"
      }
    ]
  },
  {
    id: "transporte",
    titulo: "Tarifa de Transporte",
    descripcion: "Tarifas por servicios de transporte intermodal",
    icon: Train,
    color: "bg-indigo-500",
    archivos: [
      {
        nombre: "Tarifa de Transporte Terrestre 2024",
        tipo: "PDF",
        tamaño: "2.4 MB",
        fecha: "Enero 2024",
        descripcion: "Tarifas por transporte terrestre desde/hacia el puerto"
      },
      {
        nombre: "Tarifa de Transporte Ferroviario 2024",
        tipo: "PDF",
        tamaño: "2.0 MB",
        fecha: "Enero 2024",
        descripcion: "Tarifas por transporte ferroviario"
      },
      {
        nombre: "Tarifa de Transporte Intermodal 2024",
        tipo: "PDF",
        tamaño: "2.6 MB",
        fecha: "Enero 2024",
        descripcion: "Tarifas combinadas para transporte intermodal"
      }
    ]
  }
 ]

// Información adicional
const informacionAdicional = [
  {
    titulo: "Actualizaciones de Tarifas",
    descripcion: "Las tarifas se actualizan anualmente y pueden estar sujetas a modificaciones durante el año según las regulaciones vigentes.",
    icon: AlertCircle
  },
  {
    titulo: "Consultas Especiales",
    descripcion: "Para consultas sobre tarifas especiales o casos particulares, contactar directamente con el departamento de tarifas.",
    icon: Phone
  },
  {
    titulo: "Documentación Requerida",
    descripcion: "Cada operación requiere documentación específica. Consulte los manuales de procedimientos para más detalles.",
    icon: FileText
  },
  {
    titulo: "Medios de Pago",
    descripcion: "Aceptamos diversos medios de pago: transferencias bancarias, tarjetas de crédito y débito, y otros medios autorizados.",
    icon: CreditCard
  }
]

export default function Tarifario() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative w-full h-[400px] bg-gradient-to-r from-plp-primary to-plp-secondary overflow-hidden -mt-[var(--header-height,80px)]">
        <div className="absolute inset-0 bg-plp-overlay-light" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-plp-overlay/10 backdrop-blur-sm" />
        <div className="relative h-full container mx-auto px-4 flex items-center pt-[var(--header-height,80px)]">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-shadow mb-4">Tarifario</h1>
            <p className="text-xl text-white/90 mb-6">
              Tarifas unificadas del Puerto La Plata. Descarga de archivos PDF y herramientas de cálculo 
              para estimar costos de operaciones portuarias.
            </p>
                         <div className="flex flex-col sm:flex-row gap-4">
               <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-white/10">
                 <Download className="mr-2 h-5 w-5" />
                 Descargar tarifas
               </Button>
             </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Introducción */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-plp-primary mb-4">Tarifas Unificadas del Puerto La Plata</h2>
            <p className="text-lg text-plp-gray-700 max-w-3xl mx-auto">
              Acceda a todas las tarifas vigentes del Puerto La Plata organizadas por categorías. 
              Descargue los archivos PDF correspondientes y utilice nuestras herramientas de cálculo 
              para estimar los costos de sus operaciones portuarias.
            </p>
          </div>
        </section>

        {/* Categorías de tarifas */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-plp-primary mb-8 text-center">Categorías de Tarifas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoriasTarifas.map((categoria) => (
              <Card key={categoria.id} className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 ${categoria.color} rounded-lg`}>
                    <categoria.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-plp-primary">{categoria.titulo}</h3>
                </div>
                <p className="text-plp-gray-700 mb-4">{categoria.descripcion}</p>
                <div className="space-y-3">
                  <p className="text-sm font-medium text-plp-gray-600">ARCHIVOS DISPONIBLES:</p>
                  {categoria.archivos.map((archivo, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-plp-primary" />
                          <span className="text-sm font-medium text-plp-gray-900">{archivo.nombre}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {archivo.tipo}
                        </Badge>
                      </div>
                      <p className="text-xs text-plp-gray-600 mb-2">{archivo.descripcion}</p>
                      <div className="flex items-center justify-between text-xs text-plp-gray-500">
                        <span>{archivo.tamaño}</span>
                        <span>{archivo.fecha}</span>
                      </div>
                      <Button size="sm" className="w-full mt-2">
                        <Download className="mr-1 h-3 w-3" />
                        Descargar
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
                 </section>

         {/* Información adicional */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-plp-primary mb-8 text-center">Información Adicional</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {informacionAdicional.map((info, index) => (
              <Card key={index} className="p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-plp-primary/10 rounded-lg">
                    <info.icon className="h-6 w-6 text-plp-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-plp-primary">{info.titulo}</h3>
                </div>
                <p className="text-plp-gray-700">{info.descripcion}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Descarga masiva */}
        <section className="mb-12">
          <Card className="p-8 bg-gradient-to-r from-plp-primary/5 to-plp-secondary/5 border border-plp-primary/20">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-plp-primary mb-4">Descarga Completa de Tarifas</h2>
              <p className="text-plp-gray-700 max-w-3xl mx-auto">
                Descargue el paquete completo de tarifas en formato ZIP que incluye todos los archivos PDF 
                organizados por categorías para su consulta offline.
              </p>
            </div>
            <div className="text-center">
              <Button size="lg" className="bg-plp-primary hover:bg-plp-primary/90">
                <Download className="mr-2 h-5 w-5" />
                Descargar Tarifario Completo (ZIP)
              </Button>
              <p className="text-sm text-plp-gray-600 mt-2">Tamaño: 45.2 MB | Última actualización: Enero 2024</p>
            </div>
          </Card>
        </section>

        {/* Contacto */}
        <section className="mb-12">
          <Card className="p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold text-plp-primary mb-6">Contacto para Consultas</h2>
                <div className="space-y-4">
                                     <div className="flex items-center gap-3">
                     <Phone className="h-5 w-5 text-plp-primary" />
                     <div>
                       <p className="font-medium text-plp-gray-900">Comercial</p>
                       <p className="text-sm text-plp-gray-600">+54 221 123-4567</p>
                     </div>
                   </div>
                   <div className="flex items-center gap-3">
                     <Mail className="h-5 w-5 text-plp-primary" />
                     <div>
                       <p className="font-medium text-plp-gray-900">Email</p>
                       <p className="text-sm text-plp-gray-600">comercial@puertolaplata.com</p>
                     </div>
                   </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-plp-primary" />
                    <div>
                      <p className="font-medium text-plp-gray-900">Horarios de atención</p>
                      <p className="text-sm text-plp-gray-600">Lunes a Viernes: 8:00 - 18:00 hs</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-plp-primary" />
                    <div>
                      <p className="font-medium text-plp-gray-900">Ubicación</p>
                      <p className="text-sm text-plp-gray-600">Oficinas del CGPLP</p>
                      <p className="text-sm text-plp-gray-600">Puerto La Plata, Buenos Aires</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-plp-primary mb-4">Sobre las Tarifas</h3>
                <p className="text-plp-gray-700 mb-4 leading-relaxed">
                  Las tarifas del Puerto La Plata están reguladas por el Consorcio de Gestión y se actualizan 
                  periódicamente según las normativas vigentes y las condiciones del mercado.
                </p>
                <p className="text-plp-gray-700 mb-6 leading-relaxed">
                  Todas las tarifas incluyen los impuestos correspondientes y están sujetas a modificaciones 
                  según las regulaciones gubernamentales aplicables.
                </p>
                <div className="p-4 bg-plp-primary/5 rounded-lg">
                  <p className="text-sm font-medium text-plp-primary mb-2">IMPORTANTE:</p>
                  <p className="text-sm font-semibold text-plp-gray-700">
                    Las tarifas mostradas son las vigentes al momento de la publicación. 
                    Para operaciones específicas, consulte directamente con el departamento de tarifas.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* CTA final */}
        <section>
          <Card className="p-8 bg-gradient-to-r from-plp-primary to-plp-secondary text-white text-center">
            <h3 className="text-2xl font-bold mb-4">¿Necesitas ayuda con las tarifas?</h3>
            <p className="text-lg mb-6 opacity-90">
              Nuestro equipo de tarifas está disponible para ayudarte con cualquier consulta 
              sobre costos y procedimientos portuarios.
            </p>
                         <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-white/10">
                 <Phone className="mr-2 h-4 w-4" />
                 Contactar comercial
               </Button>
             </div>
          </Card>
        </section>
      </div>
    </div>
  )
}
