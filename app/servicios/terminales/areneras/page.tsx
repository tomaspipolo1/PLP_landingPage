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
  Mountain,
  Construction
} from "lucide-react"
import Link from "next/link"

const servicios = [
  {
    id: 1,
    titulo: "Extracción de arena",
    descripcion: "Operaciones de extracción y procesamiento de arena para uso industrial y construcción.",
    icon: Mountain,
    caracteristicas: ["Extracción sostenible", "Procesamiento industrial", "Control de calidad", "Logística especializada"]
  },
  {
    id: 2,
    titulo: "Terminal de graneles",
    descripcion: "Operación de terminal especializada en el manejo y almacenamiento de graneles sólidos.",
    icon: Warehouse,
    caracteristicas: ["Almacenamiento seguro", "Cintas transportadoras", "Sistema de carga", "Capacidad optimizada"]
  },
  {
    id: 3,
    titulo: "Suministro industrial",
    descripcion: "Abastecimiento de arena procesada para industrias de construcción y manufactura.",
    icon: Factory,
    caracteristicas: ["Arena industrial", "Industrias nacionales", "Mercado local", "Servicio continuo"]
  },
  {
    id: 4,
    titulo: "Gestión ambiental",
    descripcion: "Compromiso con el medio ambiente mediante prácticas sostenibles y tecnología avanzada.",
    icon: Leaf,
    caracteristicas: ["Prácticas sostenibles", "Control ambiental", "Tecnología verde", "Certificaciones"]
  }
]

const estadisticas = [
  { valor: "TBD", unidad: "m²", descripcion: "Superficie total" },
  { valor: "TBD", unidad: "toneladas", descripcion: "Capacidad de almacenamiento" },
  { valor: "TBD", unidad: "metros", descripcion: "Cintas transportadoras" },
  { valor: "TBD", unidad: "metros", descripcion: "Muelles disponibles" },
  { valor: "TBD", unidad: "clientes", descripcion: "Industrias abastecidas" },
  { valor: "TBD", unidad: "años", descripcion: "Experiencia operativa" }
]

const iniciativas = [
  {
    titulo: "Sostenibilidad ambiental",
    descripcion: "Compromiso con prácticas sostenibles y protección del medio ambiente en todas las operaciones.",
    icon: Leaf,
    logros: ["Extracción responsable", "Control de emisiones", "Gestión de residuos", "Certificaciones ambientales"]
  },
  {
    titulo: "Innovación tecnológica",
    descripcion: "Implementación de tecnología de vanguardia para optimizar procesos y mejorar la eficiencia.",
    icon: Zap,
    logros: ["Automatización de procesos", "Sistemas de control", "Tecnología de monitoreo", "Optimización operativa"]
  },
  {
    titulo: "Desarrollo local",
    descripcion: "Contribución al desarrollo económico local y regional mediante la generación de empleo y servicios.",
    icon: TrendingUp,
    beneficios: ["Generación de empleo", "Desarrollo regional", "Servicios locales", "Integración comunitaria"]
  }
]

const proyectos = [
  {
    titulo: "Expansión de capacidad",
    descripcion: "Ampliación de la capacidad de extracción y procesamiento de arena para satisfacer la demanda creciente.",
    fecha: "TBD",
    impacto: "TBD"
  },
  {
    titulo: "Modernización de equipos",
    descripcion: "Actualización de maquinaria y equipos para mejorar la eficiencia y seguridad operativa.",
    fecha: "TBD",
    impacto: "TBD"
  },
  {
    titulo: "Sistema de control ambiental",
    descripcion: "Implementación de sistemas avanzados de monitoreo y control ambiental.",
    fecha: "TBD",
    impacto: "TBD"
  }
]

export default function TerminalesAreneras() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative w-full h-[400px] bg-gradient-to-r from-plp-primary to-plp-secondary overflow-hidden -mt-[var(--header-height,80px)]">
        <div className="absolute inset-0 bg-plp-overlay-light" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-plp-overlay/10 backdrop-blur-sm" />
        <div className="relative h-full container mx-auto px-4 flex items-center pt-[var(--header-height,80px)]">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-shadow mb-4">Terminal de Areneras</h1>
            <p className="text-xl text-white/90 mb-6">
              Especializada en la extracción, procesamiento y distribución de arena para uso industrial 
              y construcción, con compromiso ambiental y tecnología de vanguardia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
              <h2 className="text-3xl font-semibold text-plp-primary mb-6">Terminal de Areneras - Puerto La Plata</h2>
              <p className="text-lg text-plp-gray-700 mb-6 leading-relaxed">
                [INFORMACIÓN PENDIENTE] La terminal de areneras del Puerto La Plata se especializa en la extracción, 
                procesamiento y distribución de arena para uso industrial y construcción, operando con los más altos 
                estándares de calidad y compromiso ambiental.
              </p>
              <p className="text-plp-gray-700 mb-6 leading-relaxed">
                [INFORMACIÓN PENDIENTE] Nuestras operaciones incluyen la extracción sostenible de arena, 
                procesamiento industrial especializado, y distribución eficiente a clientes locales y regionales, 
                contribuyendo al desarrollo de la industria de la construcción.
              </p>
              <div className="flex items-center gap-4">
                <Badge className="bg-green-100 text-green-700">
                  <Leaf className="mr-1 h-3 w-3" />
                  Sostenibilidad
                </Badge>
                <Badge className="bg-blue-100 text-blue-700">
                  <Award className="mr-1 h-3 w-3" />
                  Calidad
                </Badge>
                <Badge className="bg-purple-100 text-purple-700">
                  <Mountain className="mr-1 h-3 w-3" />
                  Extracción
                </Badge>
              </div>
            </div>
            <div className="relative">
              <img
                src="/puerto-plata-satellite.png"
                alt="Terminal de Areneras - Puerto La Plata"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg">
                <p className="text-sm font-medium text-plp-primary">Terminal de Areneras</p>
                <p className="text-xs text-plp-gray-600">Puerto La Plata, Argentina</p>
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
                [INFORMACIÓN PENDIENTE] La terminal de areneras opera en estrecha colaboración con el Consorcio de Gestión 
                del Puerto La Plata (CGPLP), coordinando operaciones portuarias, servicios de muelle y desarrollo de 
                infraestructura para garantizar la eficiencia operativa y el crecimiento sostenible del complejo portuario.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="mx-auto mb-4 p-3 bg-plp-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <Ship className="h-8 w-8 text-plp-primary" />
                </div>
                <h3 className="text-lg font-semibold text-plp-primary mb-2">Operaciones portuarias</h3>
                <p className="text-sm text-plp-gray-600">
                  [INFORMACIÓN PENDIENTE] Coordinación de carga, descarga y servicios auxiliares portuarios especializados.
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="mx-auto mb-4 p-3 bg-plp-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-plp-primary" />
                </div>
                <h3 className="text-lg font-semibold text-plp-primary mb-2">Desarrollo conjunto</h3>
                <p className="text-sm text-plp-gray-600">
                  [INFORMACIÓN PENDIENTE] Proyectos de expansión e inversión en infraestructura portuaria y logística.
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="mx-auto mb-4 p-3 bg-plp-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <Users className="h-8 w-8 text-plp-primary" />
                </div>
                <h3 className="text-lg font-semibold text-plp-primary mb-2">Servicios integrados</h3>
                <p className="text-sm text-plp-gray-600">
                  [INFORMACIÓN PENDIENTE] Oferta de servicios portuarios y logísticos complementarios.
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
              <h2 className="text-2xl font-semibold mb-2">Terminal de Areneras en números</h2>
              <p className="text-white/90">Datos actualizados de la terminal (información pendiente de implementar)</p>
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

        {/* Iniciativas estratégicas */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-plp-primary mb-8 text-center">Iniciativas estratégicas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {iniciativas.map((iniciativa, index) => (
              <Card key={index} className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-plp-primary/10 rounded-lg">
                    <iniciativa.icon className="h-6 w-6 text-plp-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-plp-primary">{iniciativa.titulo}</h3>
                </div>
                <p className="text-sm text-plp-gray-700 mb-4">{iniciativa.descripcion}</p>
                <div className="space-y-2">
                  {iniciativa.logros ? (
                    <div>
                      <p className="text-xs font-medium text-plp-gray-600 mb-2">LOGROS:</p>
                      <ul className="space-y-1">
                        {iniciativa.logros.map((logro, idx) => (
                          <li key={idx} className="text-xs text-plp-gray-600 flex items-center gap-1">
                            <div className="w-1 h-1 bg-plp-primary rounded-full" />
                            {logro}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : iniciativa.beneficios ? (
                    <div>
                      <p className="text-xs font-medium text-plp-gray-600 mb-2">BENEFICIOS:</p>
                      <ul className="space-y-1">
                        {iniciativa.beneficios.map((beneficio, idx) => (
                          <li key={idx} className="text-xs text-plp-gray-600 flex items-center gap-1">
                            <div className="w-1 h-1 bg-plp-primary rounded-full" />
                            {beneficio}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div>
                      <p className="text-xs font-medium text-plp-gray-600 mb-2">LOGROS:</p>
                      <ul className="space-y-1">
                        {iniciativa.logros?.map((logro, idx) => (
                          <li key={idx} className="text-xs text-plp-gray-600 flex items-center gap-1">
                            <div className="w-1 h-1 bg-plp-primary rounded-full" />
                            {logro}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Proyectos recientes */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-plp-primary mb-8 text-center">Proyectos de modernización</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {proyectos.map((proyecto, index) => (
              <Card key={index} className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <Badge className="bg-green-100 text-green-700 text-xs">
                    {proyecto.fecha}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold text-plp-primary mb-3">{proyecto.titulo}</h3>
                <p className="text-sm text-plp-gray-700 mb-4">{proyecto.descripcion}</p>
                <div className="p-3 bg-plp-primary/5 rounded-lg">
                  <p className="text-xs font-medium text-plp-primary">IMPACTO:</p>
                  <p className="text-sm font-semibold text-plp-gray-700">{proyecto.impacto}</p>
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
                      <p className="text-sm text-plp-gray-600">[INFORMACIÓN PENDIENTE] Terminal de Areneras, Puerto La Plata, Provincia de Buenos Aires</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-plp-primary" />
                    <div>
                      <p className="font-medium text-plp-gray-900">Teléfono</p>
                      <p className="text-sm text-plp-gray-600">[INFORMACIÓN PENDIENTE] +54 221 XXX-XXXX</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-plp-primary" />
                    <div>
                      <p className="font-medium text-plp-gray-900">Email</p>
                      <p className="text-sm text-plp-gray-600">[INFORMACIÓN PENDIENTE] info@areneras.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-plp-primary" />
                    <div>
                      <p className="font-medium text-plp-gray-900">Horarios de atención</p>
                      <p className="text-sm text-plp-gray-600">[INFORMACIÓN PENDIENTE] Lunes a Viernes: 8:00 - 18:00 hs</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-plp-primary mb-4">Sobre la Terminal de Areneras</h3>
                <p className="text-plp-gray-700 mb-4 leading-relaxed">
                  [INFORMACIÓN PENDIENTE] La terminal de areneras es una instalación especializada en la extracción, 
                  procesamiento y distribución de arena para uso industrial y construcción, operando con los más altos 
                  estándares de calidad y compromiso ambiental.
                </p>
                <p className="text-plp-gray-700 mb-6 leading-relaxed">
                  [INFORMACIÓN PENDIENTE] Nuestras operaciones incluyen la extracción sostenible de arena, 
                  procesamiento industrial especializado, y distribución eficiente a clientes locales y regionales.
                </p>
                <div className="p-4 bg-plp-primary/5 rounded-lg">
                  <p className="text-sm font-medium text-plp-primary mb-2">ESPECIALIDAD:</p>
                  <p className="text-sm font-semibold text-plp-gray-700">[INFORMACIÓN PENDIENTE] Extracción y procesamiento de arena industrial</p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* CTA final */}
        <section>
          <Card className="p-8 bg-gradient-to-r from-plp-primary to-plp-secondary text-white text-center">
            <h3 className="text-2xl font-bold mb-4">¿Interesado en nuestros servicios?</h3>
            <p className="text-lg mb-6 opacity-90">
              Conecta con nuestro equipo comercial para conocer más sobre nuestras capacidades 
              y oportunidades de negocio en extracción y distribución de arena.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-white/10">
                <Phone className="mr-2 h-4 w-4" />
                Contactar comercial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-white/10">
                <ArrowRight className="mr-2 h-4 w-4" />
                Solicitar cotización
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  )
}
