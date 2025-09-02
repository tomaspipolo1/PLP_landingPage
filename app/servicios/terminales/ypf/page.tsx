"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { 
  Factory,
  Fuel,
  Droplets,
  Truck,
  Ship,
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
  Settings
} from "lucide-react"
import Link from "next/link"

const servicios = [
  {
    id: 1,
    titulo: "Combustibles",
    descripcion: "Producción de naftas, gasoil y otros combustibles que abastecen el 50% del AMBA.",
    icon: Fuel,
    caracteristicas: ["Naftas G2 y G3", "Gasoil", "Cumplimiento NEC", "300k m³/mes"]
  },
  {
    id: 2,
    titulo: "Lubricantes",
    descripcion: "Fabricación de lubricantes especializados para diferentes aplicaciones industriales.",
    icon: Droplets,
    caracteristicas: ["Aceites industriales", "Lubricantes automotrices", "Especialidades", "Calidad premium"]
  },
  {
    id: 3,
    titulo: "Asfaltos",
    descripcion: "Producción de asfaltos para la construcción y mantenimiento de infraestructura vial.",
    icon: Truck,
    caracteristicas: ["Asfaltos modificados", "Mezclas asfálticas", "Control de calidad", "Logística especializada"]
  },
  {
    id: 4,
    titulo: "Petroquímica",
    descripcion: "Desarrollo de productos petroquímicos especializados para diversas industrias.",
    icon: Factory,
    caracteristicas: ["Aromáticos", "Intermedios químicos", "Especialidades", "Innovación tecnológica"]
  }
]

const estadisticas = [
  { valor: "1.470", unidad: "empleados", descripcion: "Personal directo" },
  { valor: "4.000", unidad: "personas/día", descripcion: "Ingreso aproximado" },
  { valor: "400", unidad: "hectáreas", descripcion: "Superficie total" },
  { valor: "50%", unidad: "AMBA", descripcion: "Parque circulante abastecido" },
  { valor: "+200", unidad: "empresas", descripcion: "Proveedores contratistas" },
  { valor: "4", unidad: "unidades", descripcion: "De negocio principales" }
]

const iniciativas = [
  {
    titulo: "Plan 4x4",
    descripcion: "Estrategia para cuadruplicar el valor de la compañía en cuatro años.",
    icon: TrendingUp,
    pilares: ["Producción", "Gestión", "Eficiencia", "Argentina LNG"]
  },
  {
    titulo: "Real Time Intelligence Center",
    descripcion: "Centro de operaciones en tiempo real único en el Downstream de Argentina.",
    icon: Zap,
    beneficios: ["Optimización de procesos", "Anticipación de desvíos", "Estándares globales", "Mejora continua"]
  },
  {
    titulo: "Modernización NEC",
    descripcion: "Adecuación a las Nuevas Especificaciones de Combustibles.",
    icon: Shield,
    logros: ["Reducción de azufre", "Cumplimiento G2/G3", "Menor impacto ambiental", "Tecnología avanzada"]
  }
]

const proyectos = [
  {
    titulo: "Revamp Topping 4",
    descripcion: "Incremento del 40% en procesamiento de crudo de Vaca Muerta.",
    fecha: "2024",
    impacto: "27K barriles diarios"
  },
  {
    titulo: "Revamp Topping D",
    descripcion: "Capacidad de procesamiento aumentada a 210K barriles por día.",
    fecha: "2024",
    impacto: "70% crudo Vaca Muerta"
  },
  {
    titulo: "Reformado Catalítico",
    descripcion: "Incremento del 10% en carga y producción de aromáticos.",
    fecha: "2024",
    impacto: "133 m³/h capacidad"
  }
]

export default function TerminalesYPF() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
                    <div className="relative w-full h-[400px] bg-gradient-to-r from-plp-primary to-plp-secondary overflow-hidden -mt-[var(--header-height,80px)]">
        <div className="absolute inset-0 bg-plp-overlay-light" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-plp-overlay/10 backdrop-blur-sm" />
        <div className="relative h-full container mx-auto px-4 flex items-center pt-[var(--header-height,80px)]">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-shadow mb-4">Complejo Industrial La Plata</h1>
            <p className="text-xl text-white/90 mb-6">
              Visión global, energía local. Combinamos escala operativa, tecnología e innovación 
              para liderar la transformación de YPF en el Puerto La Plata.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://lacompania.ypf.com/complejo-industrial-la-plata/index.html" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-plp-primary hover:bg-gray-100">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Visitar YPF
                </Button>
              </Link>
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
              <h2 className="text-3xl font-semibold text-plp-primary mb-6">YPF - Complejo Industrial La Plata</h2>
              <p className="text-lg text-plp-gray-700 mb-6 leading-relaxed">
                El <strong>Complejo Industrial La Plata</strong> es una de las instalaciones más importantes de YPF, 
                donde combinamos escala operativa, tecnología e innovación para liderar la transformación de la compañía. 
                Con una visión estratégica alineada al Plan 4x4, avanzamos hacia una industria más eficiente, 
                segura y sustentable.
              </p>
              <p className="text-plp-gray-700 mb-6 leading-relaxed">
                Nuestro complejo abastece el 50% del parque circulante del AMBA, procesando crudo de Vaca Muerta 
                y produciendo combustibles, lubricantes, asfaltos y productos petroquímicos con los más altos 
                estándares de calidad y seguridad.
              </p>
              <div className="flex items-center gap-4">
                <Badge className="bg-green-100 text-green-700">
                  <Leaf className="mr-1 h-3 w-3" />
                  Sustentable
                </Badge>
                <Badge className="bg-blue-100 text-blue-700">
                  <Award className="mr-1 h-3 w-3" />
                  Calidad ISO
                </Badge>
                <Badge className="bg-purple-100 text-purple-700">
                  <Zap className="mr-1 h-3 w-3" />
                  Tecnología Avanzada
                </Badge>
              </div>
            </div>
            <div className="relative">
              <img
                src="/puerto-plata-satellite.png"
                alt="Complejo Industrial La Plata - YPF"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg">
                <p className="text-sm font-medium text-plp-primary">Complejo Industrial La Plata</p>
                <p className="text-xs text-plp-gray-600">YPF - Puerto La Plata, Argentina</p>
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
                El Complejo Industrial La Plata opera en estrecha colaboración con el Consorcio de Gestión del Puerto La Plata (CGPLP), 
                coordinando operaciones logísticas, servicios portuarios y desarrollo de infraestructura para garantizar 
                la eficiencia operativa y el crecimiento sostenible del complejo portuario.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="mx-auto mb-4 p-3 bg-plp-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <Ship className="h-8 w-8 text-plp-primary" />
                </div>
                <h3 className="text-lg font-semibold text-plp-primary mb-2">Logística portuaria</h3>
                <p className="text-sm text-plp-gray-600">
                  Coordinación de embarques, descargas y servicios auxiliares portuarios especializados.
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="mx-auto mb-4 p-3 bg-plp-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-plp-primary" />
                </div>
                <h3 className="text-lg font-semibold text-plp-primary mb-2">Desarrollo conjunto</h3>
                <p className="text-sm text-plp-gray-600">
                  Proyectos de expansión e inversión en infraestructura portuaria y logística.
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="mx-auto mb-4 p-3 bg-plp-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <Users className="h-8 w-8 text-plp-primary" />
                </div>
                <h3 className="text-lg font-semibold text-plp-primary mb-2">Servicios integrados</h3>
                <p className="text-sm text-plp-gray-600">
                  Oferta de servicios portuarios y logísticos complementarios para la industria.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Servicios */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-plp-primary mb-8 text-center">Unidades de negocio</h2>
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
              <h2 className="text-2xl font-semibold mb-2">Complejo Industrial La Plata en números</h2>
              <p className="text-white/90">Datos actualizados del complejo YPF</p>
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
                  {iniciativa.pilares ? (
                    <div>
                      <p className="text-xs font-medium text-plp-gray-600 mb-2">PILARES:</p>
                      <div className="flex flex-wrap gap-1">
                        {iniciativa.pilares.map((pilar, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs bg-plp-primary/10 text-plp-primary">
                            {pilar}
                          </Badge>
                        ))}
                      </div>
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
                        {iniciativa.logros.map((logro, idx) => (
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
                      <p className="text-sm text-plp-gray-600">Complejo Industrial La Plata, Puerto La Plata, Provincia de Buenos Aires</p>
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
                      <p className="text-sm text-plp-gray-600">complejolaplata@ypf.com</p>
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
                <h3 className="text-xl font-semibold text-plp-primary mb-4">Sobre YPF</h3>
                <p className="text-plp-gray-700 mb-4 leading-relaxed">
                  YPF es la empresa líder en la exploración y producción de petróleo y gas en Argentina. 
                  Con más de 100 años de historia, somos protagonistas del desarrollo energético del país.
                </p>
                <p className="text-plp-gray-700 mb-6 leading-relaxed">
                  El Complejo Industrial La Plata es una de nuestras instalaciones más importantes, 
                  donde procesamos crudo de Vaca Muerta y producimos combustibles que abastecen 
                  el 50% del parque circulante del AMBA.
                </p>
                <Link href="https://www.ypf.com/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Conocer más sobre YPF
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </section>

        {/* CTA final */}
        <section>
          <Card className="p-8 bg-gradient-to-r from-plp-primary to-plp-secondary text-white text-center">
            <h3 className="text-2xl font-bold mb-4">¿Interesado en nuestros productos?</h3>
            <p className="text-lg mb-6 opacity-90">
              Conecta con nuestro equipo comercial para conocer más sobre nuestras capacidades 
              y oportunidades de negocio en combustibles, lubricantes y productos petroquímicos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://lacompania.ypf.com/complejo-industrial-la-plata/index.html" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-plp-primary hover:bg-gray-100">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visitar sitio web oficial
                </Button>
              </Link>
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
