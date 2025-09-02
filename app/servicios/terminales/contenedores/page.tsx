"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { 
  Ship,
  Container,
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
  ArrowRight
} from "lucide-react"
import Link from "next/link"

const servicios = [
  {
    id: 1,
    titulo: "Operaciones de contenedores",
    descripcion: "Manejo eficiente de contenedores con tecnología de última generación y equipamiento moderno.",
    icon: Container,
    caracteristicas: ["Grúas de alta capacidad", "Sistemas automatizados", "Operaciones 24/7"]
  },
  {
    id: 2,
    titulo: "Conectividad multimodal",
    descripcion: "Integración perfecta entre transporte marítimo, ferroviario y terrestre para optimizar la logística.",
    icon: Train,
    caracteristicas: ["Conexión ferroviaria directa", "Acceso a rutas nacionales", "Interconexión regional"]
  },
  {
    id: 3,
    titulo: "Servicios logísticos",
    descripcion: "Soluciones integrales de logística que incluyen almacenamiento, distribución y gestión de inventarios.",
    icon: Truck,
    caracteristicas: ["Almacenamiento seguro", "Distribución eficiente", "Trazabilidad completa"]
  },
  {
    id: 4,
    titulo: "Tecnología avanzada",
    descripcion: "Sistemas informáticos de vanguardia para la gestión y control de operaciones portuarias.",
    icon: Zap,
    caracteristicas: ["Sistemas TOS avanzados", "Tecnología RFID", "Monitoreo en tiempo real"]
  }
]

const estadisticas = [
  { valor: "45.200", unidad: "TEU/año", descripcion: "Capacidad operativa" },
  { valor: "24/7", unidad: "", descripcion: "Operaciones continuas" },
  { valor: "32", unidad: "pies", descripcion: "Calado máximo" },
  { valor: "8", unidad: "posiciones", descripcion: "Sitios de atraque" }
]

const certificaciones = [
  {
    titulo: "Primer Puerto Argentino Carbono Neutro",
    descripcion: "Certificación internacional por operaciones sostenibles y compromiso ambiental.",
    fecha: "Julio 2025",
    icon: Leaf
  },
  {
    titulo: "ISO 14001",
    descripcion: "Gestión ambiental certificada con estándares internacionales.",
    fecha: "Vigente",
    icon: Award
  },
  {
    titulo: "ISO 9001",
    descripcion: "Sistema de gestión de calidad certificado.",
    fecha: "Vigente",
    icon: Award
  }
]

const noticiasRecientes = [
  {
    titulo: "ONE, Newsan y TecPlata inauguran el servicio River Plate Express",
    fecha: "23 Mayo 2025",
    descripcion: "Nuevo servicio de conexión directa que mejora la conectividad regional."
  },
  {
    titulo: "Bitrenes de Yusen Logistics operando en TecPlata por primera vez",
    fecha: "20 Mayo 2025",
    descripcion: "Innovación en transporte multimodal con equipos especializados."
  },
  {
    titulo: "Visita del Director Ejecutivo de la Agencia Nacional de Puertos",
    fecha: "26 Marzo 2025",
    descripcion: "Reconocimiento a las operaciones y estándares de calidad."
  }
]

export default function TerminalesContenedores() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
             <div className="relative w-full h-[400px] bg-gradient-to-r from-plp-primary to-plp-secondary overflow-hidden -mt-[var(--header-height,80px)]">
        <div className="absolute inset-0 bg-plp-overlay-light" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-plp-overlay/10 backdrop-blur-sm" />
        <div className="relative h-full container mx-auto px-4 flex items-center pt-[var(--header-height,80px)]">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-shadow mb-4">Terminales de contenedores</h1>
            <p className="text-xl text-white/90 mb-6">
              Una nueva conexión de Argentina con el mundo a través de modernas instalaciones portuarias 
              operadas por TecPlata S.A., filial de ICTSI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://www.tecplata.com/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-plp-primary hover:bg-gray-100">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Visitar TecPlata
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="bg-color-blue border-white text-white hover:bg-white/10">
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
              <h2 className="text-3xl font-semibold text-plp-primary mb-6">TecPlata S.A.</h2>
              <p className="text-lg text-plp-gray-700 mb-6 leading-relaxed">
                En el estratégico Puerto La Plata, <strong>INTERNATIONAL CONTAINER TERMINAL SERVICES INC. (ICTSI)</strong> 
                ha construido y opera a través de TecPlata S.A. una moderna terminal de contenedores provista de la última 
                tecnología en materia de equipamiento, diseño, infraestructura y sistemas informáticos.
              </p>
              <p className="text-plp-gray-700 mb-6 leading-relaxed">
                Nuestro propósito es convertir a nuestra terminal en un motor de crecimiento positivo y sostenible, 
                trabajando incansablemente para desarrollar y operar una instalación portuaria eficiente que ofrezca 
                los mayores beneficios a nuestros clientes, socios, colaboradores y a la comunidad.
              </p>
              <div className="flex items-center gap-4">
                <Badge className="bg-green-100 text-green-700">
                  <Leaf className="mr-1 h-3 w-3" />
                  Carbono Neutro
                </Badge>
                <Badge className="bg-blue-100 text-blue-700">
                  <Award className="mr-1 h-3 w-3" />
                  Certificaciones ISO
                </Badge>
              </div>
            </div>
            <div className="relative">
              <img
                src="/puerto-plata-satellite.png"
                alt="Terminal TecPlata - Puerto La Plata"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg">
                <p className="text-sm font-medium text-plp-primary">Terminal TecPlata</p>
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
                TecPlata opera en estrecha colaboración con el Consorcio de Gestión del Puerto La Plata (CGPLP), 
                coordinando operaciones, infraestructura y servicios para garantizar la eficiencia portuaria y 
                el desarrollo sostenible del complejo.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="mx-auto mb-4 p-3 bg-plp-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <Ship className="h-8 w-8 text-plp-primary" />
                </div>
                <h3 className="text-lg font-semibold text-plp-primary mb-2">Coordinación operativa</h3>
                <p className="text-sm text-plp-gray-600">
                  Gestión coordinada de atraques, servicios auxiliares y operaciones portuarias.
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="mx-auto mb-4 p-3 bg-plp-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-plp-primary" />
                </div>
                <h3 className="text-lg font-semibold text-plp-primary mb-2">Desarrollo conjunto</h3>
                <p className="text-sm text-plp-gray-600">
                  Proyectos de expansión e inversión en infraestructura portuaria compartida.
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="mx-auto mb-4 p-3 bg-plp-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <Users className="h-8 w-8 text-plp-primary" />
                </div>
                <h3 className="text-lg font-semibold text-plp-primary mb-2">Servicios integrados</h3>
                <p className="text-sm text-plp-gray-600">
                  Oferta de servicios portuarios complementarios y especializados.
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
              <h2 className="text-2xl font-semibold mb-2">Capacidad operativa</h2>
              <p className="text-white/90">Datos actualizados de la terminal TecPlata</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {estadisticas.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold mb-1">{stat.valor}</div>
                  <div className="text-sm opacity-90">{stat.unidad}</div>
                  <div className="text-xs opacity-75">{stat.descripcion}</div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Certificaciones y logros */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-plp-primary mb-8 text-center">Certificaciones y logros</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {certificaciones.map((cert, index) => (
              <Card key={index} className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <cert.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-plp-primary">{cert.titulo}</h3>
                    <p className="text-xs text-plp-gray-600">{cert.fecha}</p>
                  </div>
                </div>
                <p className="text-sm text-plp-gray-700">{cert.descripcion}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Noticias recientes */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-plp-primary mb-8 text-center">Noticias recientes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {noticiasRecientes.map((noticia, index) => (
              <Card key={index} className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <Badge className="bg-blue-100 text-blue-700 text-xs">
                    {noticia.fecha}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold text-plp-primary mb-3 line-clamp-2">{noticia.titulo}</h3>
                <p className="text-sm text-plp-gray-700 line-clamp-3">{noticia.descripcion}</p>
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
                      <p className="text-sm text-plp-gray-600">Puerto La Plata, Provincia de Buenos Aires, Argentina</p>
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
                      <p className="text-sm text-plp-gray-600">info@tecplata.com</p>
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
                <h3 className="text-xl font-semibold text-plp-primary mb-4">Sobre ICTSI</h3>
                <p className="text-plp-gray-700 mb-4 leading-relaxed">
                  Establecida en diciembre de 1987 en Filipinas, ICTSI se ha convertido en un operador líder, 
                  innovador y pionero en su campo. Actualmente operamos en muchos países del mundo, 
                  empleando a más de 7.000 personas.
                </p>
                <p className="text-plp-gray-700 mb-6 leading-relaxed">
                  Desarrollamos la primera instalación de manipulación de contenedores totalmente automatizada 
                  del mundo en Victoria International Container Terminal (Melbourne, Australia).
                </p>
                <Link href="https://www.ictsi.com/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Conocer más sobre ICTSI
                  </Button>
                </Link>
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
              y oportunidades de negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://www.tecplata.com/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-plp-primary hover:bg-gray-100">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visitar sitio web oficial
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
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
