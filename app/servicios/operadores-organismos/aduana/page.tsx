"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { 
  Factory,
  Ship,
  Truck,
  Train,
  Globe,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Clock,
  Users,
  Award,
  Leaf,
  Zap,
  ArrowRight,
  TrendingUp,
  Shield,
  Settings,
  Package,
  Warehouse,
  Building,
  FileText,
  CheckCircle,
  DollarSign,
  Car,
  Anchor,
  Search,
  FileCheck,
  Scale,
  Gavel,
  Database,
  Plane,
  Container
} from "lucide-react"
import Link from "next/link"

const servicios = [
  {
    id: 1,
    titulo: "Control aduanero",
    descripcion: "Servicios integrales de control y fiscalización de mercaderías en operaciones de importación y exportación.",
    icon: Shield,
    caracteristicas: ["Fiscalización integral", "Control de mercaderías", "Prevención de contrabando", "Cumplimiento normativo"]
  },
  {
    id: 2,
    titulo: "Despacho de aduana",
    descripcion: "Gestión completa de trámites aduaneros para agilizar las operaciones portuarias y comerciales.",
    icon: FileCheck,
    caracteristicas: ["Trámites aduaneros", "Documentación", "Procedimientos simplificados", "Asesoramiento especializado"]
  },
  {
    id: 3,
    titulo: "Agentes de carga",
    descripcion: "Servicios de agentes de carga autorizados para la gestión logística y documental de mercaderías.",
    icon: Package,
    caracteristicas: ["Agentes autorizados", "Gestión logística", "Documentación comercial", "Seguimiento de cargas"]
  },
  {
    id: 4,
    titulo: "Información y consultas",
    descripcion: "Centro de información integral con herramientas y recursos para operadores del comercio exterior.",
    icon: Search,
    caracteristicas: ["Información actualizada", "Herramientas digitales", "Consultas especializadas", "Recursos informativos"]
  }
]

const estadisticas = [
  { valor: "Centro", unidad: "Integral", descripcion: "Información aduanera" },
  { valor: "Múltiples", unidad: "servicios", descripcion: "Aduaneros especializados" },
  { valor: "Herramientas", unidad: "digitales", descripcion: "Para operadores" },
  { valor: "Información", unidad: "actualizada", descripcion: "Normativa vigente" },
  { valor: "Soporte", unidad: "especializado", descripcion: "Comercio exterior" },
  { valor: "Integración", unidad: "portuaria", descripcion: "Operaciones eficientes" }
]

const herramientas = [
  {
    titulo: "Rastreo de cargas",
    descripcion: "Sistema de seguimiento en tiempo real de mercaderías en tránsito aduanero.",
    icon: Search,
    beneficios: ["Seguimiento en tiempo real", "Información actualizada", "Transparencia operativa", "Control de estado"]
  },
  {
    titulo: "Información de referencia",
    descripcion: "Base de datos integral con información sobre puertos, aeropuertos, líneas marítimas y aéreas.",
    icon: Database,
    beneficios: ["Base de datos completa", "Información de puertos", "Líneas marítimas y aéreas", "Recursos actualizados"]
  },
  {
    titulo: "Normativa vigente",
    descripcion: "Acceso a la normativa actualizada y procedimientos aduaneros vigentes.",
    icon: FileText,
    beneficios: ["Normativa actualizada", "Procedimientos vigentes", "Información legal", "Cumplimiento normativo"]
  }
]

const serviciosEspecializados = [
  {
    titulo: "Despachantes de Aduana",
    descripcion: "Servicios de despachantes autorizados para la gestión de trámites aduaneros.",
    fecha: "Autorizados",
    impacto: "Gestión profesional"
  },
  {
    titulo: "Alquiler y Venta de Contenedores",
    descripcion: "Servicios de alquiler y venta de contenedores para operaciones portuarias.",
    fecha: "Disponible",
    impacto: "Logística optimizada"
  },
  {
    titulo: "Cursos y Carreras de Comercio Exterior",
    descripcion: "Capacitación especializada en comercio exterior y operaciones aduaneras.",
    fecha: "Disponible",
    impacto: "Formación profesional"
  }
]

const recursos = [
  {
    titulo: "Puertos Marítimos Argentinos",
    fecha: "Actualizado",
    descripcion: "Información completa sobre puertos marítimos argentinos y sus capacidades operativas.",
    detalles: "Incluye datos de infraestructura, servicios y conectividad de todos los puertos del país"
  },
  {
    titulo: "Terminales Portuarias",
    fecha: "Disponible",
    descripcion: "Directorio de terminales portuarias con información operativa y de servicios.",
    detalles: "Información detallada sobre capacidades, servicios y conectividad de terminales"
  },
  {
    titulo: "Líneas Marítimas",
    fecha: "Actualizado",
    descripcion: "Información sobre líneas marítimas que operan en puertos argentinos.",
    detalles: "Directorio completo de líneas marítimas con rutas y servicios disponibles"
  }
]

export default function OperadoresAduana() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative w-full h-[400px] bg-gradient-to-r from-plp-primary to-plp-secondary overflow-hidden -mt-[var(--header-height,80px)]">
        <div className="absolute inset-0 bg-plp-overlay-light" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-plp-overlay/10 backdrop-blur-sm" />
        <div className="relative h-full container mx-auto px-4 flex items-center pt-[var(--header-height,80px)]">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-shadow mb-4">Aduana Argentina</h1>
            <p className="text-xl text-white/90 mb-6">
              Centro de Información Integral para operadores del comercio exterior, 
              facilitando la gestión aduanera y operaciones portuarias eficientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-white/10">
                <ExternalLink className="mr-2 h-5 w-5" />
                Visitar sitio web
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-white/10">
                <Search className="mr-2 h-5 w-5" />
                Consultar servicios
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Introducción */}
        <section className="mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-plp-primary mb-6">Aduana Argentina - Centro de Información Integral</h2>
              <p className="text-lg text-plp-gray-700 mb-6 leading-relaxed">
                La <strong>Aduana Argentina</strong> es el organismo responsable del control y fiscalización de las operaciones 
                de comercio exterior, proporcionando servicios integrales que facilitan las operaciones portuarias 
                y comerciales en todo el país.
              </p>
              <p className="text-plp-gray-700 mb-6 leading-relaxed">
                A través de su Centro de Información Integral, ofrece herramientas digitales, servicios especializados 
                y recursos informativos que optimizan la gestión aduanera y potencian la eficiencia operativa del 
                complejo portuario.
              </p>
              <div className="flex items-center gap-4">
                <Badge className="bg-green-100 text-green-700">
                  <Shield className="mr-1 h-3 w-3" />
                  Control Aduanero
                </Badge>
                <Badge className="bg-blue-100 text-blue-700">
                  <FileCheck className="mr-1 h-3 w-3" />
                  Despacho Aduanero
                </Badge>
                <Badge className="bg-purple-100 text-purple-700">
                  <Search className="mr-1 h-3 w-3" />
                  Información Integral
                </Badge>
              </div>
            </div>
            <div className="relative">
              <img
                src="/puerto-plata-satellite.png"
                alt="Aduana Argentina - Centro de Información Integral"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg">
                <p className="text-sm font-medium text-plp-primary">Aduana Argentina</p>
                <p className="text-xs text-plp-gray-600">Centro de Información Integral</p>
              </div>
            </div>
          </div>
        </section>

        {/* Conexión con CGPLP */}
        <section className="mb-12">
          <Card className="p-8 bg-gradient-to-r from-plp-primary/5 to-plp-secondary/5 border border-plp-primary/20">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-plp-primary mb-4">Conexión con el CGPLP</h2>
              <p className="text-plp-gray-700 max-w-3xl mx-auto">
                La Aduana Argentina opera en estrecha colaboración con el Consorcio de Gestión del Puerto La Plata (CGPLP), 
                proporcionando servicios de control aduanero, despacho de mercaderías y herramientas informativas 
                que agilizan las operaciones portuarias y facilitan el comercio exterior.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="mx-auto mb-4 p-3 bg-plp-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-plp-primary" />
                </div>
                <h3 className="text-lg font-semibold text-plp-primary mb-2">Control aduanero</h3>
                <p className="text-sm text-plp-gray-600">
                  Fiscalización y control de mercaderías que transitan por el puerto, garantizando el cumplimiento normativo.
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="mx-auto mb-4 p-3 bg-plp-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <FileCheck className="h-8 w-8 text-plp-primary" />
                </div>
                <h3 className="text-lg font-semibold text-plp-primary mb-2">Despacho aduanero</h3>
                <p className="text-sm text-plp-gray-600">
                  Gestión de trámites aduaneros que agiliza las operaciones portuarias y facilita el comercio exterior.
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="mx-auto mb-4 p-3 bg-plp-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <Search className="h-8 w-8 text-plp-primary" />
                </div>
                <h3 className="text-lg font-semibold text-plp-primary mb-2">Información integral</h3>
                <p className="text-sm text-plp-gray-600">
                  Herramientas y recursos informativos que optimizan la gestión operativa del complejo portuario.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Servicios */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-plp-primary mb-8 text-center">Servicios especializados</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {servicios.map((servicio) => (
              <Card key={servicio.id} className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-plp-primary/10 rounded-lg">
                    <servicio.icon className="h-6 w-6 text-plp-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-plp-primary">{servicio.titulo}</h3>
                </div>
                <p className="text-plp-gray-700 mb-4 leading-relaxed">{servicio.descripcion}</p>
                <ul className="space-y-2">
                  {servicio.caracteristicas.map((caracteristica, index) => (
                    <li key={index} className="text-sm text-plp-gray-600 flex items-center gap-2">
                      <div className="w-1 h-1 bg-plp-primary rounded-full" />
                      {caracteristica}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Estadísticas */}
        <section className="mb-12">
          <Card className="p-8 bg-gradient-to-r from-plp-primary to-plp-secondary text-white">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-2">Aduana Argentina en números</h2>
              <p className="text-white/90">Servicios y herramientas disponibles</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {estadisticas.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold mb-1">{stat.valor}</div>
                  <div className="text-sm opacity-90">{stat.unidad}</div>
                  <div className="text-xs opacity-75">{stat.descripcion}</div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Herramientas */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-plp-primary mb-8 text-center">Herramientas digitales</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {herramientas.map((herramienta, index) => (
              <Card key={index} className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-plp-primary/10 rounded-lg">
                    <herramienta.icon className="h-6 w-6 text-plp-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-plp-primary">{herramienta.titulo}</h3>
                </div>
                <p className="text-sm text-plp-gray-700 mb-4">{herramienta.descripcion}</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-xs font-medium text-plp-gray-600 mb-2">BENEFICIOS:</p>
                    <ul className="space-y-1">
                      {herramienta.beneficios.map((beneficio, idx) => (
                        <li key={idx} className="text-xs text-plp-gray-600 flex items-center gap-1">
                          <div className="w-1 h-1 bg-plp-primary rounded-full" />
                          {beneficio}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Servicios especializados */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-plp-primary mb-8 text-center">Servicios especializados</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {serviciosEspecializados.map((servicio, index) => (
              <Card key={index} className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <Badge className="bg-green-100 text-green-700 text-xs">
                    {servicio.fecha}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold text-plp-primary mb-3">{servicio.titulo}</h3>
                <p className="text-sm text-plp-gray-700 mb-4">{servicio.descripcion}</p>
                <div className="p-3 bg-plp-primary/5 rounded-lg">
                  <p className="text-xs font-medium text-plp-primary">IMPACTO:</p>
                  <p className="text-sm font-semibold text-plp-gray-700">{servicio.impacto}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Recursos informativos */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-plp-primary mb-8 text-center">Recursos informativos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {recursos.map((recurso, index) => (
              <Card key={index} className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <Badge className="bg-blue-100 text-blue-700 text-xs">
                    {recurso.fecha}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold text-plp-primary mb-3">{recurso.titulo}</h3>
                <p className="text-sm text-plp-gray-700 mb-4">{recurso.descripcion}</p>
                <div className="p-3 bg-plp-primary/5 rounded-lg">
                  <p className="text-xs font-medium text-plp-primary">DETALLES:</p>
                  <p className="text-sm font-semibold text-plp-gray-700">{recurso.detalles}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Información de contacto */}
        <section className="mb-12">
          <Card className="p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold text-plp-primary mb-6">Información de contacto</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-plp-primary" />
                    <div>
                      <p className="font-medium text-plp-gray-900">Ubicación</p>
                      <p className="text-sm text-plp-gray-600">Oficinas aduaneras en todo el país</p>
                      <p className="text-sm text-plp-gray-600">Presencia en puertos y aeropuertos</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-plp-primary" />
                    <div>
                      <p className="font-medium text-plp-gray-900">Teléfonos</p>
                      <p className="text-sm text-plp-gray-600">Líneas de atención especializada</p>
                      <p className="text-sm text-plp-gray-600">Consultas y asesoramiento</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-plp-primary" />
                    <div>
                      <p className="font-medium text-plp-gray-900">Email</p>
                      <p className="text-sm text-plp-gray-600">consultas@aduanaargentina.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-plp-primary" />
                    <div>
                      <p className="font-medium text-plp-gray-900">Horarios de atención</p>
                      <p className="text-sm text-plp-gray-600">Lunes a Viernes: 8:00 - 18:00 hs</p>
                      <p className="text-sm text-plp-gray-600">Servicios 24/7 en puertos</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-plp-primary mb-4">Sobre Aduana Argentina</h3>
                <p className="text-plp-gray-700 mb-4 leading-relaxed">
                  La Aduana Argentina es el organismo responsable del control y fiscalización de las operaciones 
                  de comercio exterior, proporcionando servicios integrales que facilitan las operaciones portuarias 
                  y comerciales en todo el país.
                </p>
                <p className="text-plp-gray-700 mb-6 leading-relaxed">
                  A través de su Centro de Información Integral, ofrece herramientas digitales, servicios especializados 
                  y recursos informativos que optimizan la gestión aduanera y potencian la eficiencia operativa del 
                  complejo portuario.
                </p>
                <div className="p-4 bg-plp-primary/5 rounded-lg">
                  <p className="text-sm font-medium text-plp-primary mb-2">ESPECIALIDAD:</p>
                  <p className="text-sm font-semibold text-plp-gray-700">Control aduanero y facilitación del comercio exterior</p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* CTA final */}
        <section>
          <Card className="p-8 bg-gradient-to-r from-plp-primary to-plp-secondary text-white text-center">
            <h3 className="text-2xl font-bold mb-4">¿Necesitas información aduanera?</h3>
            <p className="text-lg mb-6 opacity-90">
              Conecta con nuestro equipo para conocer más sobre los servicios aduaneros, 
              herramientas digitales y recursos disponibles para optimizar tus operaciones portuarias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-white/10">
                <ExternalLink className="mr-2 h-4 w-4" />
                Visitar sitio web oficial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-white/10">
                <Search className="mr-2 h-4 w-4" />
                Consultar servicios
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  )
}
