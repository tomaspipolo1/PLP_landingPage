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
  Container,
  Sailboat,
  Passport,
  UserCheck,
  Navigation,
  Compass,
  Waves,
  LifeBuoy,
  Eye,
  Fish,
  AlertTriangle,
  Lock,
  ShipWheel,
  AnchorIcon
} from "lucide-react"
import Link from "next/link"

const servicios = [
  {
    id: 1,
    titulo: "Seguridad en la navegación",
    descripcion: "Garantía de la seguridad marítima a través de control de tráfico, señalización y supervisión de operaciones portuarias.",
    icon: ShipWheel,
    caracteristicas: ["Control de tráfico marítimo", "Señalización náutica", "Supervisión portuaria", "Normativa marítima"]
  },
  {
    id: 2,
    titulo: "Protección ambiental",
    descripcion: "Protección del medio ambiente marino y recursos pesqueros mediante control y fiscalización ambiental.",
    icon: Fish,
    caracteristicas: ["Control ambiental", "Protección marina", "Recursos pesqueros", "Fiscalización ecológica"]
  },
  {
    id: 3,
    titulo: "Control de actividades ilícitas",
    descripcion: "Prevención y control de narcotráfico, contrabando y otras actividades ilícitas en el ámbito marítimo.",
    icon: Shield,
    caracteristicas: ["Prevención de narcotráfico", "Control de contrabando", "Actividades ilícitas", "Seguridad marítima"]
  },
  {
    id: 4,
    titulo: "Auxilio y salvamento",
    descripcion: "Servicios de auxilio de la vida humana en el agua y operaciones de salvamento marítimo.",
    icon: LifeBuoy,
    caracteristicas: ["Auxilio marítimo", "Salvamento", "Rescate acuático", "Emergencias marítimas"]
  }
]

const estadisticas = [
  { valor: "Autoridad", unidad: "Marítima", descripcion: "Puerto La Plata" },
  { valor: "Seguridad", unidad: "Navegación", descripcion: "Garantizada" },
  { valor: "Protección", unidad: "Ambiental", descripcion: "Marina y pesquera" },
  { valor: "Control", unidad: "Ilícitas", descripcion: "Narcotráfico y contrabando" },
  { valor: "Auxilio", unidad: "Marítimo", descripcion: "Vida humana en el agua" },
  { valor: "Fiscalización", unidad: "Portuaria", descripcion: "Instalaciones seguras" }
]

const funciones = [
  {
    titulo: "Seguridad marítima",
    descripcion: "Garantía de la seguridad en la navegación a través de control de tráfico y supervisión portuaria.",
    icon: ShipWheel,
    beneficios: ["Control de tráfico", "Supervisión portuaria", "Seguridad náutica", "Normativa vigente"]
  },
  {
    titulo: "Protección ambiental",
    descripcion: "Protección del medio ambiente marino y recursos pesqueros mediante fiscalización especializada.",
    icon: Fish,
    beneficios: ["Control ambiental", "Protección marina", "Recursos pesqueros", "Fiscalización ecológica"]
  },
  {
    titulo: "Control de ilícitos",
    descripcion: "Prevención y control de actividades ilícitas como narcotráfico y contrabando en el ámbito marítimo.",
    icon: Shield,
    beneficios: ["Prevención de ilícitos", "Control de narcotráfico", "Contrabando", "Seguridad integral"]
  }
]

const serviciosEspecializados = [
  {
    titulo: "Fiscalización portuaria",
    descripcion: "Control y fiscalización de instalaciones portuarias para garantizar la seguridad operativa.",
    fecha: "Obligatorio",
    impacto: "Seguridad portuaria"
  },
  {
    titulo: "Gestión de trámites",
    descripcion: "Gestión de trámites marítimos y portuarios para operadores del sector.",
    fecha: "Disponible",
    impacto: "Eficiencia operativa"
  },
  {
    titulo: "Auxilio marítimo",
    descripcion: "Servicios de auxilio y salvamento para emergencias en el ámbito marítimo.",
    fecha: "24/7",
    impacto: "Seguridad de vida"
  }
]

const recursos = [
  {
    titulo: "Normativa marítima",
    fecha: "Actualizada",
    descripcion: "Información sobre normativa marítima vigente y procedimientos de seguridad.",
    detalles: "Incluye reglamentaciones de navegación, seguridad portuaria y protección ambiental"
  },
  {
    titulo: "Procedimientos de fiscalización",
    fecha: "Vigente",
    descripcion: "Procedimientos de fiscalización portuaria y control marítimo.",
    detalles: "Información detallada sobre controles, inspecciones y requisitos de seguridad"
  },
  {
    titulo: "Servicios de auxilio",
    fecha: "Disponible",
    descripcion: "Información sobre servicios de auxilio marítimo y procedimientos de emergencia.",
    detalles: "Protocolos de rescate, contactos de emergencia y procedimientos de auxilio"
  }
]

export default function OperadoresPrefectura() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative w-full h-[400px] bg-gradient-to-r from-plp-primary to-plp-secondary overflow-hidden -mt-[var(--header-height,80px)]">
        <div className="absolute inset-0 bg-plp-overlay-light" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-plp-overlay/10 backdrop-blur-sm" />
        <div className="relative h-full container mx-auto px-4 flex items-center pt-[var(--header-height,80px)]">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-shadow mb-4">Prefectura Naval Argentina</h1>
            <p className="text-xl text-white/90 mb-6">
              Autoridad Marítima en Puerto La Plata, garantizando la seguridad en la navegación, 
              protección ambiental y control de actividades ilícitas en el ámbito marítimo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-white/10">
                <Shield className="mr-2 h-5 w-5" />
                Consultar servicios
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-white/10">
                <Phone className="mr-2 h-5 w-5" />
                Contactar
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
              <h2 className="text-3xl font-semibold text-plp-primary mb-6">Prefectura Naval Argentina - Autoridad Marítima</h2>
              <p className="text-lg text-plp-gray-700 mb-6 leading-relaxed">
                En <strong>Puerto La Plata</strong>, la <strong>Prefectura Naval Argentina (PNA)</strong> actúa como la Autoridad Marítima, 
                garantizando la seguridad en la navegación, la protección del medio ambiente y los recursos pesqueros, 
                el control de actividades ilícitas y el auxilio de la vida humana en el agua.
              </p>
              <p className="text-plp-gray-700 mb-6 leading-relaxed">
                A través de sus servicios especializados, proporciona fiscalización en el ámbito portuario y marítimo, 
                incluyendo la seguridad de las instalaciones portuarias y la gestión de trámites para operadores del sector.
              </p>
              <div className="flex items-center gap-4">
                <Badge className="bg-green-100 text-green-700">
                  <ShipWheel className="mr-1 h-3 w-3" />
                  Seguridad Marítima
                </Badge>
                <Badge className="bg-blue-100 text-blue-700">
                  <Fish className="mr-1 h-3 w-3" />
                  Protección Ambiental
                </Badge>
                <Badge className="bg-purple-100 text-purple-700">
                  <Shield className="mr-1 h-3 w-3" />
                  Control de Ilícitos
                </Badge>
              </div>
            </div>
            <div className="relative">
              <img
                src="/puerto-plata-satellite.png"
                alt="Prefectura Naval Argentina - Autoridad Marítima"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg">
                <p className="text-sm font-medium text-plp-primary">PNA</p>
                <p className="text-xs text-plp-gray-600">Autoridad Marítima Puerto La Plata</p>
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
                La Prefectura Naval Argentina opera en estrecha colaboración con el Consorcio de Gestión del Puerto La Plata (CGPLP), 
                proporcionando servicios de seguridad marítima, fiscalización portuaria y control ambiental 
                que garantizan la operatividad segura del complejo portuario.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="mx-auto mb-4 p-3 bg-plp-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <ShipWheel className="h-8 w-8 text-plp-primary" />
                </div>
                <h3 className="text-lg font-semibold text-plp-primary mb-2">Seguridad marítima</h3>
                <p className="text-sm text-plp-gray-600">
                  Garantía de la seguridad en la navegación y operaciones portuarias del complejo.
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="mx-auto mb-4 p-3 bg-plp-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <Fish className="h-8 w-8 text-plp-primary" />
                </div>
                <h3 className="text-lg font-semibold text-plp-primary mb-2">Protección ambiental</h3>
                <p className="text-sm text-plp-gray-600">
                  Protección del medio ambiente marino y recursos pesqueros en la zona portuaria.
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="mx-auto mb-4 p-3 bg-plp-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-plp-primary" />
                </div>
                <h3 className="text-lg font-semibold text-plp-primary mb-2">Fiscalización</h3>
                <p className="text-sm text-plp-gray-600">
                  Control y fiscalización de instalaciones portuarias para garantizar la seguridad operativa.
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
              <h2 className="text-2xl font-semibold mb-2">Prefectura Naval en números</h2>
              <p className="text-white/90">Servicios y funciones como Autoridad Marítima</p>
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

        {/* Funciones principales */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-plp-primary mb-8 text-center">Funciones principales</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {funciones.map((funcion, index) => (
              <Card key={index} className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-plp-primary/10 rounded-lg">
                    <funcion.icon className="h-6 w-6 text-plp-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-plp-primary">{funcion.titulo}</h3>
                </div>
                <p className="text-sm text-plp-gray-700 mb-4">{funcion.descripcion}</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-xs font-medium text-plp-gray-600 mb-2">BENEFICIOS:</p>
                    <ul className="space-y-1">
                      {funcion.beneficios.map((beneficio, idx) => (
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
                      <p className="text-sm text-plp-gray-600">Oficinas de Prefectura en Puerto La Plata</p>
                      <p className="text-sm text-plp-gray-600">Presencia en instalaciones portuarias</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-plp-primary" />
                    <div>
                      <p className="font-medium text-plp-gray-900">Teléfonos</p>
                      <p className="text-sm text-plp-gray-600">Líneas de emergencia marítima</p>
                      <p className="text-sm text-plp-gray-600">Consultas y asesoramiento</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-plp-primary" />
                    <div>
                      <p className="font-medium text-plp-gray-900">Email</p>
                      <p className="text-sm text-plp-gray-600">consultas@prefecturanaval.gob.ar</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-plp-primary" />
                    <div>
                      <p className="font-medium text-plp-gray-900">Horarios de atención</p>
                      <p className="text-sm text-plp-gray-600">Lunes a Viernes: 8:00 - 18:00 hs</p>
                      <p className="text-sm text-plp-gray-600">Servicios de emergencia 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-plp-primary mb-4">Sobre Prefectura Naval Argentina</h3>
                <p className="text-plp-gray-700 mb-4 leading-relaxed">
                  En Puerto La Plata, la Prefectura Naval Argentina (PNA) actúa como la Autoridad Marítima, 
                  garantizando la seguridad en la navegación, la protección del medio ambiente y los recursos pesqueros, 
                  el control de actividades ilícitas y el auxilio de la vida humana en el agua.
                </p>
                <p className="text-plp-gray-700 mb-6 leading-relaxed">
                  A través de sus servicios especializados, proporciona fiscalización en el ámbito portuario y marítimo, 
                  incluyendo la seguridad de las instalaciones portuarias y la gestión de trámites para operadores del sector.
                </p>
                <div className="p-4 bg-plp-primary/5 rounded-lg">
                  <p className="text-sm font-medium text-plp-primary mb-2">ESPECIALIDAD:</p>
                  <p className="text-sm font-semibold text-plp-gray-700">Autoridad Marítima y seguridad portuaria</p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* CTA final */}
        <section>
          <Card className="p-8 bg-gradient-to-r from-plp-primary to-plp-secondary text-white text-center">
            <h3 className="text-2xl font-bold mb-4">¿Necesitas servicios de Prefectura?</h3>
            <p className="text-lg mb-6 opacity-90">
              Conecta con nuestro equipo para conocer más sobre los servicios de seguridad marítima, 
              fiscalización portuaria y control ambiental disponibles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-white/10">
                <Shield className="mr-2 h-4 w-4" />
                Consultar servicios
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-white/10">
                <Phone className="mr-2 h-4 w-4" />
                Contactar
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  )
}
