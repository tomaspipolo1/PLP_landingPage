"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { NavigationAids } from "@/components/navigation-aids"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Skeleton } from "@/components/ui/skeleton"
import { 
  Ship,
  Anchor,
  MapPin,
  TrendingUp,
  BarChart3,
  Download,
  Navigation,
  Clock,
  Users,
  Globe
} from "lucide-react"
import Link from "next/link"

const indicadores = [
  {
    id: 1,
    titulo: "Calado",
    valor: "32 pies",
    descripcion: "Profundidad máxima disponible para embarcaciones",
    icon: Anchor,
    color: "text-blue-600"
  },
  {
    id: 2,
    titulo: "Sitios de atraque",
    valor: "8 posiciones",
    descripcion: "Capacidad operativa simultánea",
    icon: Ship,
    color: "text-green-600"
  },
  {
    id: 3,
    titulo: "Canales de acceso",
    valor: "2 canales",
    descripcion: "Vías navegables principales y secundarias",
    icon: Navigation,
    color: "text-purple-600"
  },
  {
    id: 4,
    titulo: "Tiempo de espera",
    valor: "< 24 horas",
    descripcion: "Promedio de tiempo de espera para atraque",
    icon: Clock,
    color: "text-amber-600"
  }
]

const caracteristicas = [
  {
    titulo: "Ubicación estratégica",
    descripcion: "Situado en el corazón del corredor bioceánico, conectando el Atlántico con el Pacífico a través de la región central de América del Sur.",
    icon: MapPin,
    beneficios: ["Acceso directo a rutas comerciales", "Conexión multimodal", "Red ferroviaria integrada"]
  },
  {
    titulo: "Infraestructura moderna",
    descripcion: "Equipamiento de última generación con grúas de alta capacidad, sistemas automatizados y tecnología de punta para operaciones eficientes.",
    icon: Ship,
    beneficios: ["Grúas de hasta 65 toneladas", "Sistemas automatizados", "Tecnología RFID"]
  },
  {
    titulo: "Servicios especializados",
    descripcion: "Ofrecemos servicios integrales que incluyen bunkering, reparaciones menores, servicios de remolque y asistencia técnica especializada.",
    icon: Users,
    beneficios: ["Bunkering 24/7", "Reparaciones menores", "Asistencia técnica"]
  }
]

const estadisticas = [
  { año: "2023", contenedores: "45.200", toneladas: "2.8M", crecimiento: "+12%" },
  { año: "2022", contenedores: "40.300", toneladas: "2.5M", crecimiento: "+8%" },
  { año: "2021", contenedores: "37.400", toneladas: "2.3M", crecimiento: "+15%" }
]

export default function VentajasCompetitivas() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative w-full h-[300px] bg-gradient-to-r from-plp-primary to-plp-secondary overflow-hidden -mt-[var(--header-height,80px)]">
         <div className="relative h-full container mx-auto px-4 flex items-center pt-[var(--header-height,80px)]">
          <h1 className="text-4xl md:text-5xl lg:text-1xl font-bold text-white text-shadow">Ventajas competitivas</h1>
          </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Introducción con video (esqueleto) */}
        <section className="mb-12">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-plp-primary mb-6 text-left">¿Por qué elegir el Puerto La Plata?</h2>
              <p className="text-lg text-plp-gray-700 leading-relaxed">
                Nuestro puerto se destaca por su ubicación estratégica, infraestructura de vanguardia y servicios
                especializados que garantizan operaciones eficientes y competitivas. Conectamos el mundo a través
                de una red multimodal que optimiza tiempos y costos para tu negocio.
              </p>
            </div>
            <div className="max-w-xl md:ml-auto w-full">
              <AspectRatio ratio={16/9}>
                <Skeleton className="w-full h-full rounded-md bg-plp-gray-200/60" />
              </AspectRatio>
            </div>
          </div>
        </section>

        {/* Indicadores principales */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-plp-primary mb-8 text-center">Indicadores técnicos</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {indicadores.map((indicador) => (
              <Card key={indicador.id} className="p-6 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className={`mx-auto mb-4 p-3 bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center`}>
                  <indicador.icon className={`h-8 w-8 ${indicador.color}`} />
                </div>
                <h4 className="text-xl font-bold text-plp-primary mb-2">{indicador.valor}</h4>
                <h5 className="text-sm font-semibold text-plp-gray-700 mb-2">{indicador.titulo}</h5>
                <p className="text-xs text-plp-gray-600">{indicador.descripcion}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Características principales */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-plp-primary mb-8 text-center">Características destacadas</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {caracteristicas.map((caracteristica, index) => (
              <Card key={index} className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-plp-primary/10 rounded-lg">
                    <caracteristica.icon className="h-6 w-6 text-plp-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-plp-primary">{caracteristica.titulo}</h4>
                </div>
                <p className="text-plp-gray-700 mb-4 leading-relaxed">{caracteristica.descripcion}</p>
                <ul className="space-y-2">
                  {caracteristica.beneficios.map((beneficio, idx) => (
                    <li key={idx} className="text-sm text-plp-gray-600 flex items-center gap-2">
                      <div className="w-1 h-1 bg-plp-primary rounded-full" />
                      {beneficio}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Estadísticas de tráfico */}
        <section className="mb-12">
          <Card className="p-8 bg-gradient-to-r from-plp-primary/5 to-plp-secondary/5 border border-plp-primary/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-plp-primary mb-2">Estadísticas de tráfico y operaciones</h3>
              <p className="text-plp-gray-700">Crecimiento sostenido en los últimos años</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {estadisticas.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-plp-primary mb-1">{stat.año}</div>
                  <div className="space-y-2">
                    <div>
                      <div className="text-lg font-semibold text-plp-gray-700">{stat.contenedores}</div>
                      <div className="text-sm text-plp-gray-600">Contenedores</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-plp-gray-700">{stat.toneladas}</div>
                      <div className="text-sm text-plp-gray-600">Toneladas</div>
                    </div>
                    <Badge className={`${stat.crecimiento.includes('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {stat.crecimiento}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button className="bg-plp-primary hover:bg-plp-primary-hover">
                <BarChart3 className="mr-2 h-4 w-4" />
                Ver estadísticas completas
              </Button>
            </div>
          </Card>
        </section>



        {/* CTA final */}
        <section>
          <Card className="p-8 bg-gradient-to-r from-plp-primary to-plp-secondary text-white text-center">
            <h3 className="text-2xl font-bold mb-4">¿Listo para operar con nosotros?</h3>
            <p className="text-lg mb-6 opacity-90">
              Nuestro equipo comercial está disponible para analizar tus necesidades 
              y encontrar la mejor solución para tu operación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-plp-primary hover:bg-gray-100">
                Contactar equipo comercial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Solicitar cotización
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  )
}
