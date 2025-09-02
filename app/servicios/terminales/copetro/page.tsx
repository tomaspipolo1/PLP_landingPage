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
  Warehouse
} from "lucide-react"
import Link from "next/link"

const servicios = [
  {
    id: 1,
    titulo: "Distribución de carbón de petróleo",
    descripcion: "Procesamiento y distribución de carbón de petróleo producto de la refinación para mercado interno y exportación.",
    icon: Package,
    caracteristicas: ["Carbón de petróleo", "Mercado interno", "Exportación", "Procesamiento especializado"]
  },
  {
    id: 2,
    titulo: "Terminal de graneles sólidos",
    descripcion: "Operación de terminal especializada en el manejo y almacenamiento de graneles sólidos con tecnología avanzada.",
    icon: Warehouse,
    caracteristicas: ["Almacenamiento seguro", "Cintas transportadoras", "Sistema de carga", "Capacidad 55.000 ton"]
  },
  {
    id: 3,
    titulo: "Abastecimiento industrial",
    descripcion: "Suministro de carbón calcinado a industrias nacionales e internacionales, destacándose Aluar en Puerto Madryn.",
    icon: Factory,
    caracteristicas: ["Carbón calcinado", "Industrias nacionales", "Mercado internacional", "Aluar Puerto Madryn"]
  },
  {
    id: 4,
    titulo: "Gestión ambiental",
    descripcion: "Compromiso con el medio ambiente mediante sistemas de aislamiento y tecnología de vanguardia.",
    icon: Leaf,
    caracteristicas: ["Celda de acopio aislada", "Cintas cubiertas", "Sistema innovador", "Protección ambiental"]
  }
]

const estadisticas = [
  { valor: "115.909", unidad: "m²", descripcion: "Superficie total" },
  { valor: "55.000", unidad: "toneladas", descripcion: "Capacidad de acopio" },
  { valor: "1.200", unidad: "metros", descripcion: "Cintas transportadoras" },
  { valor: "400", unidad: "metros", descripcion: "Muelles Sitios 7 y 8" },
  { valor: "3", unidad: "refinerías", descripcion: "YPF La Plata, YPF Luján, Shell Dock Sud" },
  { valor: "Grupo", unidad: "Oxbow", descripcion: "Operador principal" }
]

const iniciativas = [
  {
    titulo: "Compromiso ambiental",
    descripcion: "Fuerte compromiso con el medio ambiente mediante sistemas de aislamiento y tecnología de vanguardia.",
    icon: Leaf,
    logros: ["Celda de acopio aislada", "Cintas transportadoras cubiertas", "Sistema de carga innovador", "Protección ambiental integral"]
  },
  {
    titulo: "Valor estratégico",
    descripcion: "Posicionamiento estratégico como receptor de carbón de las principales refinerías del país.",
    icon: TrendingUp,
    beneficios: ["Recepción de YPF La Plata", "Recepción de YPF Luján de Cuyo", "Recepción de Shell Dock Sud", "Distribución nacional e internacional"]
  },
  {
    titulo: "Tecnología avanzada",
    descripcion: "Implementación de sistemas tecnológicos de vanguardia para el manejo eficiente de graneles sólidos.",
    icon: Zap,
    logros: ["Sistema de carga de buques", "Cintas transportadoras cubiertas", "Celda de acopio aislada", "Operaciones automatizadas"]
  }
]

const proyectos = [
  {
    titulo: "Expansión de capacidad",
    descripcion: "Ampliación de la capacidad de almacenamiento y procesamiento de carbón de petróleo.",
    fecha: "2024",
    impacto: "55.000 toneladas capacidad"
  },
  {
    titulo: "Modernización de muelles",
    descripcion: "Actualización de los muelles de los Sitios 7 y 8 para optimizar operaciones portuarias.",
    fecha: "2024",
    impacto: "400 metros de muelle"
  },
  {
    titulo: "Sistema de carga innovador",
    descripcion: "Implementación de tecnología de vanguardia para la carga eficiente de buques.",
    fecha: "2024",
    impacto: "Operaciones optimizadas"
  }
]

export default function TerminalesCopetro() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative w-full h-[400px] bg-gradient-to-r from-plp-primary to-plp-secondary overflow-hidden -mt-[var(--header-height,80px)]">
        <div className="absolute inset-0 bg-plp-overlay-light" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-plp-overlay/10 backdrop-blur-sm" />
        <div className="relative h-full container mx-auto px-4 flex items-center pt-[var(--header-height,80px)]">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-shadow mb-4">Terminal de Graneles Sólidos</h1>
            <p className="text-xl text-white/90 mb-6">
              Operada por el Grupo Oxbow (Copetro), especializada en la distribución y procesamiento 
              de carbón de petróleo con compromiso ambiental y tecnología de vanguardia.
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
              <h2 className="text-3xl font-semibold text-plp-primary mb-6">Copetro - Terminal de Graneles Sólidos</h2>
              <p className="text-lg text-plp-gray-700 mb-6 leading-relaxed">
                El <strong>Grupo Oxbow (Copetro)</strong> opera la terminal del Puerto La Plata dedicada a la distribución 
                y procesamiento de carbón de petróleo producto de la refinación del mismo, con la cual abastece 
                la demanda del mercado interno y exporta el excedente a mercados extranjeros.
              </p>
              <p className="text-plp-gray-700 mb-6 leading-relaxed">
                La firma asume un fuerte compromiso con el medio ambiente, razón por la cual cuenta con una celda 
                de acopio para 55.000 toneladas de materia prima completamente aislada del exterior, más de 1.200 m 
                de cintas transportadoras cubiertas y un innovador sistema de carga de buques.
              </p>
              <div className="flex items-center gap-4">
                <Badge className="bg-green-100 text-green-700">
                  <Leaf className="mr-1 h-3 w-3" />
                  Compromiso Ambiental
                </Badge>
                <Badge className="bg-blue-100 text-blue-700">
                  <Award className="mr-1 h-3 w-3" />
                  Tecnología Avanzada
                </Badge>
                <Badge className="bg-purple-100 text-purple-700">
                  <Package className="mr-1 h-3 w-3" />
                  Graneles Sólidos
                </Badge>
              </div>
            </div>
            <div className="relative">
              <img
                src="/puerto-plata-satellite.png"
                alt="Terminal Copetro - Puerto La Plata"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg">
                <p className="text-sm font-medium text-plp-primary">Terminal Copetro</p>
                <p className="text-xs text-plp-gray-600">Grupo Oxbow - Puerto La Plata, Argentina</p>
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
                Copetro opera en estrecha colaboración con el Consorcio de Gestión del Puerto La Plata (CGPLP), 
                coordinando operaciones portuarias, servicios de muelle y desarrollo de infraestructura para garantizar 
                la eficiencia operativa y el crecimiento sostenible del complejo portuario.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="mx-auto mb-4 p-3 bg-plp-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <Ship className="h-8 w-8 text-plp-primary" />
                </div>
                <h3 className="text-lg font-semibold text-plp-primary mb-2">Operaciones portuarias</h3>
                <p className="text-sm text-plp-gray-600">
                  Coordinación de carga, descarga y servicios auxiliares portuarios especializados en graneles sólidos.
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="mx-auto mb-4 p-3 bg-plp-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-plp-primary" />
                </div>
                <h3 className="text-lg font-semibold text-plp-primary mb-2">Desarrollo conjunto</h3>
                <p className="text-sm text-plp-gray-600">
                  Proyectos de expansión e inversión en infraestructura portuaria y logística de graneles.
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="mx-auto mb-4 p-3 bg-plp-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <Users className="h-8 w-8 text-plp-primary" />
                </div>
                <h3 className="text-lg font-semibold text-plp-primary mb-2">Servicios integrados</h3>
                <p className="text-sm text-plp-gray-600">
                  Oferta de servicios portuarios y logísticos complementarios para la industria de graneles.
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
              <h2 className="text-2xl font-semibold mb-2">Terminal Copetro en números</h2>
              <p className="text-white/90">Datos actualizados de la terminal de graneles sólidos</p>
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
                      <p className="text-sm text-plp-gray-600">Terminal Copetro, Sitios 7 y 8, Puerto La Plata, Provincia de Buenos Aires</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-plp-primary" />
                    <div>
                      <p className="font-medium text-plp-gray-900">Teléfono</p>
                      <p className="text-sm text-plp-gray-600">+54 221 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-plp-primary" />
                    <div>
                      <p className="font-medium text-plp-gray-900">Email</p>
                      <p className="text-sm text-plp-gray-600">info@copetro.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-plp-primary" />
                    <div>
                      <p className="font-medium text-plp-gray-900">Horarios de atención</p>
                      <p className="text-sm text-plp-gray-600">Lunes a Viernes: 8:00 - 18:00 hs</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-plp-primary mb-4">Sobre Copetro</h3>
                <p className="text-plp-gray-700 mb-4 leading-relaxed">
                  Copetro, operada por el Grupo Oxbow, es una terminal especializada en el manejo de graneles sólidos, 
                  particularmente carbón de petróleo, con un fuerte compromiso con el medio ambiente y la tecnología de vanguardia.
                </p>
                <p className="text-plp-gray-700 mb-6 leading-relaxed">
                  Posee un valor productivo estratégico al recibir el carbón de las refinerías YPF de La Plata y Luján de Cuyo 
                  en Mendoza y de la refinería Shell de Dock Sud, abasteciendo a diferentes industrias nacionales e internacionales.
                </p>
                <div className="p-4 bg-plp-primary/5 rounded-lg">
                  <p className="text-sm font-medium text-plp-primary mb-2">CLIENTE DESTACADO:</p>
                  <p className="text-sm font-semibold text-plp-gray-700">Aluar - Planta de procesamiento de aluminio en Puerto Madryn, Chubut</p>
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
              y oportunidades de negocio en graneles sólidos y carbón de petróleo.
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
