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
  UserCheck,
  Navigation,
  Compass,
  Waves
} from "lucide-react"
import Link from "next/link"

const servicios = [
  {
    id: 1,
    titulo: "Registro de embarcaciones",
    descripcion: "Servicios de registro y habilitación de embarcaciones particulares para navegación en aguas argentinas.",
    icon: Sailboat,
    caracteristicas: ["Registro de embarcaciones", "Habilitación para navegación", "Documentación náutica", "Cumplimiento normativo"]
  },

  {
    id: 3,
    titulo: "Autorizaciones de navegación",
    descripcion: "Gestión de autorizaciones especiales para navegación de embarcaciones particulares y comerciales.",
    icon: Navigation,
    caracteristicas: ["Autorizaciones especiales", "Permisos de navegación", "Rutas autorizadas", "Condiciones operativas"]
  },
  {
    id: 4,
    titulo: "Asesoramiento náutico",
    descripcion: "Servicios de asesoramiento y consultas sobre normativa migratoria y requisitos para navegación.",
    icon: Compass,
    caracteristicas: ["Asesoramiento especializado", "Normativa vigente", "Consultas náuticas", "Requisitos operativos"]
  }
]

const estadisticas = [
  { valor: "Control", unidad: "Migratorio", descripcion: "Portuario integral" },
  { valor: "Registro", unidad: "Embarcaciones", descripcion: "Particulares y comerciales" },
  { valor: "Autorizaciones", unidad: "Navegación", descripcion: "Especiales y rutas" },
  { valor: "Documentación", unidad: "Tripulación", descripcion: "Y pasajeros" },
  { valor: "Asesoramiento", unidad: "Náutico", descripcion: "Especializado" },
  { valor: "Integración", unidad: "Portuaria", descripcion: "Operaciones eficientes" }
]

const funciones = [
  {
    titulo: "Registro de embarcaciones particulares",
    descripcion: "Proceso de registro y habilitación de embarcaciones particulares para navegación en aguas argentinas.",
    icon: Sailboat,
    beneficios: ["Registro oficial", "Habilitación náutica", "Documentación vigente", "Cumplimiento legal"]
  },
  {
    titulo: "Control de tripulaciones",
    descripcion: "Gestión y control de documentación migratoria para tripulaciones de embarcaciones comerciales.",
    icon: UserCheck,
    beneficios: ["Control migratorio", "Documentación vigente", "Gestión de tripulaciones", "Procedimientos simplificados"]
  },
  {
    titulo: "Autorizaciones especiales",
    descripcion: "Gestión de autorizaciones especiales para navegación en rutas específicas y condiciones particulares.",
    icon: Navigation,
    beneficios: ["Autorizaciones especiales", "Rutas específicas", "Condiciones particulares", "Gestión eficiente"]
  }
]

const serviciosEspecializados = [
  {
    titulo: "Registro de embarcaciones particulares",
    descripcion: "Servicios de registro y habilitación para embarcaciones particulares que desean navegar en aguas argentinas.",
    fecha: "Disponible",
    impacto: "Navegación habilitada"
  },
  {
    titulo: "Control migratorio portuario",
    descripcion: "Control y gestión de documentación migratoria para operaciones portuarias y navegación comercial.",
    fecha: "Obligatorio",
    impacto: "Cumplimiento normativo"
  },
  {
    titulo: "Asesoramiento náutico",
    descripcion: "Servicios de asesoramiento sobre requisitos migratorios y normativa para navegación.",
    fecha: "Disponible",
    impacto: "Información especializada"
  }
]

const recursos = [
  {
    titulo: "Normativa migratoria náutica",
    fecha: "Actualizada",
    descripcion: "Información sobre normativa migratoria vigente para navegación en aguas argentinas.",
    detalles: "Incluye requisitos, procedimientos y documentación necesaria para navegación"
  },
  {
    titulo: "Procedimientos de registro",
    fecha: "Disponible",
    descripcion: "Guías y procedimientos para el registro de embarcaciones particulares.",
    detalles: "Información detallada sobre trámites y requisitos para registro de embarcaciones"
  },
  {
    titulo: "Autorizaciones especiales",
    fecha: "Vigente",
    descripcion: "Información sobre autorizaciones especiales para navegación en rutas específicas.",
    detalles: "Procedimientos y requisitos para autorizaciones de navegación especial"
  }
]

export default function OperadoresMigraciones() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative w-full h-[400px] bg-gradient-to-r from-plp-primary to-plp-secondary overflow-hidden -mt-[var(--header-height,80px)]">
        <div className="absolute inset-0 bg-plp-overlay-light" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-plp-overlay/10 backdrop-blur-sm" />
        <div className="relative h-full container mx-auto px-4 flex items-center pt-[var(--header-height,80px)]">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-shadow mb-4">Migraciones</h1>
            <p className="text-xl text-white/90 mb-6">
              Control migratorio portuario y registro de embarcaciones particulares, 
              facilitando la navegación y operaciones marítimas en aguas argentinas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-white/10">
                <Sailboat className="mr-2 h-5 w-5" />
                Registrar embarcación
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-white/10">
                <Phone className="mr-2 h-5 w-5" />
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
              <h2 className="text-3xl font-semibold text-plp-primary mb-6">Migraciones - Control Migratorio Portuario</h2>
              <p className="text-lg text-plp-gray-700 mb-6 leading-relaxed">
                La <strong>Dirección Nacional de Migraciones</strong> es el organismo responsable del control migratorio 
                en operaciones portuarias, proporcionando servicios esenciales para el registro de embarcaciones 
                particulares y la gestión de documentación migratoria en el ámbito marítimo.
              </p>
              <p className="text-plp-gray-700 mb-6 leading-relaxed">
                A través de sus servicios especializados, facilita la navegación de embarcaciones particulares, 
                controla la documentación de tripulaciones y pasajeros, y proporciona asesoramiento náutico 
                para operaciones marítimas en aguas argentinas.
              </p>
              <div className="flex items-center gap-4">
                <Badge className="bg-green-100 text-green-700">
                  <Sailboat className="mr-1 h-3 w-3" />
                  Registro Embarcaciones
                </Badge>
                <Badge className="bg-blue-100 text-blue-700">
                  
                  Control Migratorio
                </Badge>
                <Badge className="bg-purple-100 text-purple-700">
                  <Navigation className="mr-1 h-3 w-3" />
                  Autorizaciones
                </Badge>
              </div>
            </div>
            <div className="relative">
              <img
                src="/puerto-plata-satellite.png"
                alt="Migraciones - Control Migratorio Portuario"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg">
                <p className="text-sm font-medium text-plp-primary">Migraciones</p>
                <p className="text-xs text-plp-gray-600">Control Migratorio Portuario</p>
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
                La Dirección Nacional de Migraciones opera en estrecha colaboración con el Consorcio de Gestión del Puerto La Plata (CGPLP), 
                proporcionando servicios de control migratorio, registro de embarcaciones y autorizaciones de navegación 
                que facilitan las operaciones portuarias y la navegación marítima en la región.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="mx-auto mb-4 p-3 bg-plp-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <Sailboat className="h-8 w-8 text-plp-primary" />
                </div>
                <h3 className="text-lg font-semibold text-plp-primary mb-2">Registro de embarcaciones</h3>
                <p className="text-sm text-plp-gray-600">
                  Registro y habilitación de embarcaciones particulares para navegación en aguas del puerto.
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="mx-auto mb-4 p-3 bg-plp-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                  
                </div>
                <h3 className="text-lg font-semibold text-plp-primary mb-2">Control migratorio</h3>
                <p className="text-sm text-plp-gray-600">
                  Gestión de documentación migratoria para tripulaciones y pasajeros en operaciones portuarias.
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="mx-auto mb-4 p-3 bg-plp-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <Navigation className="h-8 w-8 text-plp-primary" />
                </div>
                <h3 className="text-lg font-semibold text-plp-primary mb-2">Autorizaciones</h3>
                <p className="text-sm text-plp-gray-600">
                  Gestión de autorizaciones especiales para navegación y operaciones marítimas específicas.
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
              <h2 className="text-2xl font-semibold mb-2">Migraciones en números</h2>
              <p className="text-white/90">Servicios y funciones disponibles</p>
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
                      <p className="text-sm text-plp-gray-600">Oficinas migratorias en puertos</p>
                      <p className="text-sm text-plp-gray-600">Presencia en terminales portuarias</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-plp-primary" />
                    <div>
                      <p className="font-medium text-plp-gray-900">Teléfonos</p>
                      <p className="text-sm text-plp-gray-600">Líneas de atención migratoria</p>
                      <p className="text-sm text-plp-gray-600">Consultas y asesoramiento</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-plp-primary" />
                    <div>
                      <p className="font-medium text-plp-gray-900">Email</p>
                      <p className="text-sm text-plp-gray-600">consultas@migraciones.gob.ar</p>
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
                <h3 className="text-xl font-semibold text-plp-primary mb-4">Sobre Migraciones</h3>
                <p className="text-plp-gray-700 mb-4 leading-relaxed">
                  La Dirección Nacional de Migraciones es el organismo responsable del control migratorio 
                  en operaciones portuarias, proporcionando servicios esenciales para el registro de embarcaciones 
                  particulares y la gestión de documentación migratoria en el ámbito marítimo.
                </p>
                <p className="text-plp-gray-700 mb-6 leading-relaxed">
                  A través de sus servicios especializados, facilita la navegación de embarcaciones particulares, 
                  controla la documentación de tripulaciones y pasajeros, y proporciona asesoramiento náutico 
                  para operaciones marítimas en aguas argentinas.
                </p>
                <div className="p-4 bg-plp-primary/5 rounded-lg">
                  <p className="text-sm font-medium text-plp-primary mb-2">ESPECIALIDAD:</p>
                  <p className="text-sm font-semibold text-plp-gray-700">Control migratorio portuario y registro de embarcaciones</p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* CTA final */}
        <section>
          <Card className="p-8 bg-gradient-to-r from-plp-primary to-plp-secondary text-white text-center">
            <h3 className="text-2xl font-bold mb-4">¿Necesitas registrar tu embarcación?</h3>
            <p className="text-lg mb-6 opacity-90">
              Conecta con nuestro equipo para conocer más sobre los servicios migratorios, 
              registro de embarcaciones y autorizaciones de navegación disponibles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-white/10">
                <Sailboat className="mr-2 h-4 w-4" />
                Registrar embarcación
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-white/10">
                <Phone className="mr-2 h-4 w-4" />
                Consultar servicios
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  )
}
