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
  Anchor
} from "lucide-react"
import Link from "next/link"

const servicios = [
  {
    id: 1,
    titulo: "Almacenaje de mercadería",
    descripcion: "Servicios de almacenaje seguro y eficiente de cargas con certificación IRAM-ISO-2015 en todos sus procesos.",
    icon: Warehouse,
    caracteristicas: ["Almacenaje seguro", "Certificación IRAM-ISO", "Procesos certificados", "Eficiencia operativa"]
  },
  {
    id: 2,
    titulo: "Operaciones de ingreso y egreso",
    descripcion: "Gestión completa de operaciones de ingreso, egreso y movimientos internos de mercadería.",
    icon: Package,
    caracteristicas: ["Ingreso de mercadería", "Egreso de mercadería", "Movimientos internos", "Normativa vigente"]
  },
  {
    id: 3,
    titulo: "Ventajas impositivas",
    descripcion: "Beneficios fiscales para actividades industriales y comerciales dentro del régimen de zona franca.",
    icon: DollarSign,
    caracteristicas: ["Actividad industrial", "Actividad comercial", "Beneficios fiscales", "Régimen especial"]
  },
  {
    id: 4,
    titulo: "Ventajas logísticas",
    descripcion: "Infraestructura logística estratégica con conectividad multimodal y servicios especializados.",
    icon: Car,
    caracteristicas: ["Conectividad multimodal", "Infraestructura estratégica", "Servicios especializados", "Ubicación privilegiada"]
  }
]

const estadisticas = [
  { valor: "Mayor", unidad: "emprendimiento", descripcion: "Zona franca en Argentina" },
  { valor: "IRAM-ISO", unidad: "2015", descripcion: "Certificación en todos los procesos" },
  { valor: "Ensenada", unidad: "Buenos Aires", descripcion: "Ubicación estratégica" },
  { valor: "Líneas", unidad: "rotativas", descripcion: "Atención telefónica" },
  { valor: "Edificio", unidad: "Usos Múltiples", descripcion: "Infraestructura moderna" },
  { valor: "B1925CKA", unidad: "Código postal", descripcion: "Ensenada, Buenos Aires" }
]

const ventajas = [
  {
    titulo: "Ventajas impositivas",
    descripcion: "Beneficios fiscales especiales para empresas que operan dentro del régimen de zona franca.",
    icon: DollarSign,
    beneficios: ["Exención de impuestos", "Régimen especial", "Actividad industrial", "Actividad comercial"]
  },
  {
    titulo: "Ventajas logísticas",
    descripcion: "Infraestructura logística de vanguardia con conectividad multimodal y servicios especializados.",
    icon: Car,
    beneficios: ["Conectividad multimodal", "Infraestructura estratégica", "Servicios especializados", "Ubicación privilegiada"]
  },
  {
    titulo: "Seguridad y eficiencia",
    descripcion: "Almacenaje seguro y eficiente de cargas con los más altos estándares de calidad y seguridad.",
    icon: Shield,
    beneficios: ["Almacenaje seguro", "Eficiencia operativa", "Estándares de calidad", "Seguridad integral"]
  }
]

const procedimientos = [
  {
    titulo: "Operaciones",
    descripcion: "Gestión completa de operaciones de ingreso, egreso y movimientos internos de mercadería.",
    fecha: "Vigente",
    impacto: "Normativa actualizada"
  },
  {
    titulo: "Seguridad e Higiene",
    descripcion: "Instructivos IMO y normativa de seguridad e higiene para todas las operaciones.",
    fecha: "Vigente",
    impacto: "Estándares de seguridad"
  },
  {
    titulo: "Digesto Normativo",
    descripcion: "Compilación completa de normativas y procedimientos operativos vigentes.",
    fecha: "Actualizado",
    impacto: "Marco regulatorio"
  }
]

const novedades = [
  {
    titulo: "Ronda de negocios Multisectorial Ensenada 2025",
    fecha: "22 de julio de 2025",
    descripcion: "Evento organizado por el Ministerio de Producción, Ciencia e Innovación Tecnológica de la Provincia de Buenos Aires y la Secretaría de Hacienda y Producción del Municipio de Ensenada.",
    detalles: "Fecha: Jueves 31 de julio – 9:30 hs. Lugar: Edificio Malvinas, La Merced 133, Ensenada"
  },
  {
    titulo: "Capacitación: Seguridad en la Operación de Autoelevadores",
    fecha: "11 de julio de 2025",
    descripcion: "Curso a cargo del Ing. Pablo Alejandro Billordo en el Edificio de Usos Múltiples.",
    detalles: "Viernes 18 de julio - 9:00 hs - Duración: 3 hs - Costo: $15.000"
  },
  {
    titulo: "Curso: Primeros auxilios y RCP",
    fecha: "8 de julio de 2025",
    descripcion: "Curso gratuito de RCP y primeros auxilios en el salón del Edificio de Usos Múltiples.",
    detalles: "Viernes 11 de julio - 14:30 hs - Duración: 2 hs - Gratuito"
  }
]

export default function OperadoresZonaFranca() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative w-full h-[400px] bg-gradient-to-r from-plp-primary to-plp-secondary overflow-hidden -mt-[var(--header-height,80px)]">
        <div className="absolute inset-0 bg-plp-overlay-light" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-plp-overlay/10 backdrop-blur-sm" />
        <div className="relative h-full container mx-auto px-4 flex items-center pt-[var(--header-height,80px)]">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-shadow mb-4">Buenos Aires Zona Franca La Plata</h1>
            <p className="text-xl text-white/90 mb-6">
              El mayor emprendimiento de este tipo en Argentina tanto en operaciones y volumen manejados 
              como en obras de infraestructura, certificado IRAM-ISO-2015.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-white/10">
                <ExternalLink className="mr-2 h-5 w-5" />
                Visitar sitio web
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
              <h2 className="text-3xl font-semibold text-plp-primary mb-6">Buenos Aires Zona Franca La Plata</h2>
              <p className="text-lg text-plp-gray-700 mb-6 leading-relaxed">
                La <strong>Buenos Aires Zona Franca La Plata (BAZFLP)</strong> es el mayor emprendimiento de este tipo en Argentina, 
                tanto en operaciones y volumen manejados como en obras de infraestructura. 
                Está certificada bajo los requerimientos de <strong>IRAM-ISO-2015</strong> en todos sus procesos.
              </p>
              <p className="text-plp-gray-700 mb-6 leading-relaxed">
                Ofrece servicios de almacenaje seguro y eficiente de cargas, operaciones de ingreso y egreso de mercadería, 
                y ventajas impositivas y logísticas para empresas que operan dentro del régimen de zona franca.
              </p>
              <div className="flex items-center gap-4">
                <Badge className="bg-green-100 text-green-700">
                  <Award className="mr-1 h-3 w-3" />
                  IRAM-ISO 2015
                </Badge>
                <Badge className="bg-blue-100 text-blue-700">
                  <Building className="mr-1 h-3 w-3" />
                  Zona Franca
                </Badge>
                <Badge className="bg-purple-100 text-purple-700">
                  <Shield className="mr-1 h-3 w-3" />
                  Seguridad
                </Badge>
              </div>
            </div>
            <div className="relative">
              <img
                src="/puerto-plata-satellite.png"
                alt="Buenos Aires Zona Franca La Plata"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg">
                <p className="text-sm font-medium text-plp-primary">BAZFLP</p>
                <p className="text-xs text-plp-gray-600">Ensenada, Buenos Aires, Argentina</p>
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
                La Buenos Aires Zona Franca La Plata opera en estrecha colaboración con el Consorcio de Gestión 
                del Puerto La Plata (CGPLP), proporcionando servicios complementarios de almacenaje, 
                operaciones logísticas y ventajas impositivas que potencian las capacidades del complejo portuario.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="mx-auto mb-4 p-3 bg-plp-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <Warehouse className="h-8 w-8 text-plp-primary" />
                </div>
                <h3 className="text-lg font-semibold text-plp-primary mb-2">Servicios complementarios</h3>
                <p className="text-sm text-plp-gray-600">
                  Almacenaje y operaciones logísticas que complementan las capacidades portuarias del CGPLP.
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="mx-auto mb-4 p-3 bg-plp-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <DollarSign className="h-8 w-8 text-plp-primary" />
                </div>
                <h3 className="text-lg font-semibold text-plp-primary mb-2">Ventajas impositivas</h3>
                <p className="text-sm text-plp-gray-600">
                  Régimen de zona franca que ofrece beneficios fiscales para operaciones portuarias.
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="mx-auto mb-4 p-3 bg-plp-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-plp-primary" />
                </div>
                <h3 className="text-lg font-semibold text-plp-primary mb-2">Desarrollo conjunto</h3>
                <p className="text-sm text-plp-gray-600">
                  Proyectos de expansión e inversión en infraestructura logística y portuaria.
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
              <h2 className="text-2xl font-semibold mb-2">BAZFLP en números</h2>
              <p className="text-white/90">Datos destacados de la zona franca</p>
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

        {/* Ventajas */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-plp-primary mb-8 text-center">Ventajas para operar</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {ventajas.map((ventaja, index) => (
              <Card key={index} className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-plp-primary/10 rounded-lg">
                    <ventaja.icon className="h-6 w-6 text-plp-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-plp-primary">{ventaja.titulo}</h3>
                </div>
                <p className="text-sm text-plp-gray-700 mb-4">{ventaja.descripcion}</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-xs font-medium text-plp-gray-600 mb-2">BENEFICIOS:</p>
                    <ul className="space-y-1">
                      {ventaja.beneficios.map((beneficio, idx) => (
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

        {/* Procedimientos */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-plp-primary mb-8 text-center">Procedimientos y normativa</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {procedimientos.map((procedimiento, index) => (
              <Card key={index} className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <Badge className="bg-green-100 text-green-700 text-xs">
                    {procedimiento.fecha}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold text-plp-primary mb-3">{procedimiento.titulo}</h3>
                <p className="text-sm text-plp-gray-700 mb-4">{procedimiento.descripcion}</p>
                <div className="p-3 bg-plp-primary/5 rounded-lg">
                  <p className="text-xs font-medium text-plp-primary">IMPACTO:</p>
                  <p className="text-sm font-semibold text-plp-gray-700">{procedimiento.impacto}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Novedades */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-plp-primary mb-8 text-center">Novedades y eventos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {novedades.map((novedad, index) => (
              <Card key={index} className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <Badge className="bg-blue-100 text-blue-700 text-xs">
                    {novedad.fecha}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold text-plp-primary mb-3">{novedad.titulo}</h3>
                <p className="text-sm text-plp-gray-700 mb-4">{novedad.descripcion}</p>
                <div className="p-3 bg-plp-primary/5 rounded-lg">
                  <p className="text-xs font-medium text-plp-primary">DETALLES:</p>
                  <p className="text-sm font-semibold text-plp-gray-700">{novedad.detalles}</p>
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
                      <p className="text-sm text-plp-gray-600">Juan Domingo Perón e Hipólito Yrigoyen S/Nº</p>
                      <p className="text-sm text-plp-gray-600">Edificio de Usos Múltiples, Piso 1 (B1925CKA)</p>
                      <p className="text-sm text-plp-gray-600">Ensenada – Buenos Aires – Argentina</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-plp-primary" />
                    <div>
                      <p className="font-medium text-plp-gray-900">Teléfonos (Líneas Rotativas)</p>
                      <p className="text-sm text-plp-gray-600">(+54) 0221 512 - 9600</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-plp-primary" />
                    <div>
                      <p className="font-medium text-plp-gray-900">Email</p>
                      <p className="text-sm text-plp-gray-600">info@bazflp.com</p>
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
                <h3 className="text-xl font-semibold text-plp-primary mb-4">Sobre BAZFLP</h3>
                <p className="text-plp-gray-700 mb-4 leading-relaxed">
                  Buenos Aires Zona Franca La Plata es el mayor emprendimiento de este tipo en Argentina, 
                  tanto en operaciones y volumen manejados como en obras de infraestructura. 
                  Está certificada bajo los requerimientos de IRAM-ISO-2015 en todos sus procesos.
                </p>
                <p className="text-plp-gray-700 mb-6 leading-relaxed">
                  Ofrece servicios de almacenaje seguro y eficiente de cargas, operaciones de ingreso y egreso de mercadería, 
                  y ventajas impositivas y logísticas para empresas que operan dentro del régimen de zona franca.
                </p>
                <div className="p-4 bg-plp-primary/5 rounded-lg">
                  <p className="text-sm font-medium text-plp-primary mb-2">CERTIFICACIÓN:</p>
                  <p className="text-sm font-semibold text-plp-gray-700">IRAM-ISO-2015 en todos sus procesos</p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* CTA final */}
        <section>
          <Card className="p-8 bg-gradient-to-r from-plp-primary to-plp-secondary text-white text-center">
            <h3 className="text-2xl font-bold mb-4">¿Interesado en operar en la Zona Franca?</h3>
            <p className="text-lg mb-6 opacity-90">
              Conecta con nuestro equipo para conocer más sobre las ventajas impositivas, 
              servicios logísticos y oportunidades de negocio en la zona franca.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-white/10">
                <ExternalLink className="mr-2 h-4 w-4" />
                Visitar sitio web oficial
              </Button>
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
