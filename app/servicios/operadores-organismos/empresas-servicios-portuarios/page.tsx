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
  Waves,
  LifeBuoy,
  Eye,
  Fish,
  AlertTriangle,
  Lock,
  ShipWheel,
  AnchorIcon,
  Map,
  Route,
  Target,
  Zap as Lightning,
  Wrench,
  HardHat,
  Palette,
  Droplets,
  Fuel,
  Cable,
  Radio,
  Camera,
  Carrot,
  Coffee,
  Utensils,
  Bed,
  Bus,
  Bike,
  Car as CarIcon,
  Ship as ShipIcon,
  Plane as PlaneIcon,
  Train as TrainIcon
} from "lucide-react"
import Link from "next/link"
import { useCallback } from "react"

// Categorías de servicios portuarios
const categorias = [
  {
    id: "remolque",
    titulo: "Remolque y Asistencia",
    descripcion: "Servicios de remolque de buques y asistencia en maniobras portuarias",
    icon: Ship,
    color: "bg-blue-500"
  },
  {
    id: "limpieza",
    titulo: "Limpieza y Mantenimiento",
    descripcion: "Servicios de limpieza de buques, tanques y mantenimiento portuario",
    icon: Droplets,
    color: "bg-green-500"
  },
  {
    id: "personal",
    titulo: "Personal Portuario",
    descripcion: "Provisión de personal especializado para operaciones portuarias",
    icon: Users,
    color: "bg-purple-500"
  },
  {
    id: "combustible",
    titulo: "Combustible y Lubricantes",
    descripcion: "Suministro de combustible y lubricantes para buques",
    icon: Fuel,
    color: "bg-orange-500"
  },
  {
    id: "tecnico",
    titulo: "Servicios Técnicos",
    descripcion: "Servicios técnicos especializados para buques y equipos portuarios",
    icon: Wrench,
    color: "bg-red-500"
  },
  {
    id: "logistica",
    titulo: "Logística y Almacenamiento",
    descripcion: "Servicios logísticos y de almacenamiento portuario",
    icon: Warehouse,
    color: "bg-indigo-500"
  }
]

// Scroll helper to jump to a category section
const scrollToCategory = (id: string) => {
  const el = document.getElementById(`section-${id}`)
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

// Empresas de servicios portuarios por categoría
const empresas = {
  remolque: [
    {
      id: 1,
      nombre: "Remolcadores La Plata S.A.",
      descripcion: "Servicios de remolque y asistencia en maniobras portuarias",
      imagen: "/placeholder-logo.png",
      telefono: "+54 221 123-4567",
      email: "info@remolcadoreslaplata.com",
      direccion: "Puerto La Plata, Buenos Aires",
      servicios: ["Remolque de buques", "Asistencia en maniobras", "Servicios de emergencia"]
    },
    {
      id: 2,
      nombre: "Asistencia Portuaria del Sur",
      descripcion: "Especialistas en remolque y asistencia marítima",
      imagen: "/placeholder-logo.png",
      telefono: "+54 221 234-5678",
      email: "contacto@asistenciasur.com",
      direccion: "Puerto La Plata, Buenos Aires",
      servicios: ["Remolque especializado", "Asistencia 24/7", "Servicios de salvamento"]
    }
  ],
  limpieza: [
    {
      id: 3,
      nombre: "Limpieza Portuaria Integral",
      descripcion: "Servicios de limpieza y mantenimiento de buques",
      imagen: "/placeholder-logo.png",
      telefono: "+54 221 345-6789",
      email: "info@limpiezaportuaria.com",
      direccion: "Puerto La Plata, Buenos Aires",
      servicios: ["Limpieza de tanques", "Mantenimiento portuario", "Servicios ambientales"]
    },
    {
      id: 4,
      nombre: "EcoClean Portuario",
      descripcion: "Limpieza ecológica y servicios ambientales portuarios",
      imagen: "/placeholder-logo.png",
      telefono: "+54 221 456-7890",
      email: "info@ecocleanportuario.com",
      direccion: "Puerto La Plata, Buenos Aires",
      servicios: ["Limpieza ecológica", "Tratamiento de residuos", "Certificación ambiental"]
    }
  ],
  personal: [
    {
      id: 5,
      nombre: "Personal Portuario Especializado",
      descripcion: "Provisión de personal calificado para operaciones portuarias",
      imagen: "/placeholder-logo.png",
      telefono: "+54 221 567-8901",
      email: "info@personalportuario.com",
      direccion: "Puerto La Plata, Buenos Aires",
      servicios: ["Personal calificado", "Capacitación", "Servicios 24/7"]
    },
    {
      id: 6,
      nombre: "Recursos Humanos Portuarios",
      descripcion: "Soluciones integrales de personal para el sector portuario",
      imagen: "/placeholder-logo.png",
      telefono: "+54 221 678-9012",
      email: "contacto@rhportuarios.com",
      direccion: "Puerto La Plata, Buenos Aires",
      servicios: ["Selección de personal", "Capacitación especializada", "Gestión de recursos"]
    }
  ],
  combustible: [
    {
      id: 7,
      nombre: "Combustibles Portuarios S.A.",
      descripcion: "Suministro de combustible y lubricantes para buques",
      imagen: "/placeholder-logo.png",
      telefono: "+54 221 789-0123",
      email: "info@combustiblesportuarios.com",
      direccion: "Puerto La Plata, Buenos Aires",
      servicios: ["Combustible marino", "Lubricantes", "Suministro 24/7"]
    },
    {
      id: 8,
      nombre: "Fuel Services La Plata",
      descripcion: "Servicios de combustible y lubricantes especializados",
      imagen: "/placeholder-logo.png",
      telefono: "+54 221 890-1234",
      email: "info@fuelserviceslaplata.com",
      direccion: "Puerto La Plata, Buenos Aires",
      servicios: ["Combustible especializado", "Lubricantes técnicos", "Servicios de emergencia"]
    }
  ],
  tecnico: [
    {
      id: 9,
      nombre: "Servicios Técnicos Portuarios",
      descripcion: "Servicios técnicos especializados para buques y equipos",
      imagen: "/placeholder-logo.png",
      telefono: "+54 221 901-2345",
      email: "info@serviciostecnicosportuarios.com",
      direccion: "Puerto La Plata, Buenos Aires",
      servicios: ["Mantenimiento técnico", "Reparaciones especializadas", "Servicios de emergencia"]
    },
    {
      id: 10,
      nombre: "Tecnología Portuaria Avanzada",
      descripcion: "Soluciones tecnológicas y técnicas para el sector portuario",
      imagen: "/placeholder-logo.png",
      telefono: "+54 221 012-3456",
      email: "info@tecnologiaportuaria.com",
      direccion: "Puerto La Plata, Buenos Aires",
      servicios: ["Tecnología portuaria", "Automatización", "Sistemas de control"]
    }
  ],
  logistica: [
    {
      id: 11,
      nombre: "Logística Portuaria Integral",
      descripcion: "Servicios logísticos y de almacenamiento portuario",
      imagen: "/placeholder-logo.png",
      telefono: "+54 221 123-4567",
      email: "info@logisticaportuaria.com",
      direccion: "Puerto La Plata, Buenos Aires",
      servicios: ["Almacenamiento", "Distribución", "Gestión logística"]
    },
    {
      id: 12,
      nombre: "Almacenamiento Portuario del Sur",
      descripcion: "Servicios de almacenamiento y logística especializada",
      imagen: "/placeholder-logo.png",
      telefono: "+54 221 234-5678",
      email: "info@almacenamientoportuario.com",
      direccion: "Puerto La Plata, Buenos Aires",
      servicios: ["Almacenamiento especializado", "Logística integral", "Servicios de valor agregado"]
    }
  ]
}

export default function EmpresasServiciosPortuarios() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative w-full h-[400px] bg-gradient-to-r from-plp-primary to-plp-secondary overflow-hidden -mt-[var(--header-height,80px)]">
        <div className="absolute inset-0 bg-plp-overlay-light" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-plp-overlay/10 backdrop-blur-sm" />
        <div className="relative h-full container mx-auto px-4 flex items-center pt-[var(--header-height,80px)]">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-shadow mb-4">Empresas de Servicios Portuarios Habilitadas</h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-white/10">
                <Search className="mr-2 h-5 w-5" />
                Buscar empresa
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-white/10">
                <FileText className="mr-2 h-5 w-5" />
                Ver categorías
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
            <h2 className="text-3xl font-semibold text-plp-primary mb-4">Seleccioná el tipo de servicio que necesitas</h2>
            <p className="text-lg text-plp-gray-700 max-w-3xl mx-auto">
              Las empresas de servicios portuarios están organizadas por categorías según el tipo de servicio que ofrecen. 
              Cada empresa cuenta con la habilitación correspondiente y está autorizada para operar en el Puerto La Plata.
            </p>
          </div>
        </section>

        {/* Categorías de servicios */}
        <section className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categorias.map((categoria) => (
              <Card 
                key={categoria.id} 
                className="p-4 text-center border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => scrollToCategory(categoria.id)}
                role="button"
                aria-label={`Ver ${categoria.titulo}`}
              >
                <div className={`mx-auto mb-2 p-2 ${categoria.color} rounded-full w-12 h-12 flex items-center justify-center`}>
                  <categoria.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-plp-primary mb-1">{categoria.titulo}</h3>
                <p className="text-xs text-plp-gray-600 line-clamp-2">{categoria.descripcion}</p>
                <Badge className="mt-2 bg-plp-primary/10 text-plp-primary">
                  {empresas[categoria.id as keyof typeof empresas]?.length || 0} empresas
                </Badge>
              </Card>
            ))}
          </div>
        </section>

        {/* Empresas por categoría */}
        {categorias.map((categoria) => (
          <section key={categoria.id} id={`section-${categoria.id}`} className="mb-12 scroll-mt-24">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 ${categoria.color} rounded-lg`}>
                  <categoria.icon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-plp-primary">{categoria.titulo}</h2>
              </div>
              <p className="text-plp-gray-700">{categoria.descripcion}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {empresas[categoria.id as keyof typeof empresas]?.map((empresa) => (
                <Card key={empresa.id} className="border border-gray-100 shadow-sm">
                  <div className="p-4">
                    <div className="flex items-start gap-3">
                      <img src={empresa.imagen} alt={`Logo de ${empresa.nombre}`} className="w-12 h-12 object-contain rounded" />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-plp-primary truncate">{empresa.nombre}</h3>
                        <div className="mt-1 space-y-1 text-xs text-plp-gray-700">
                          <div className="flex items-center gap-1"><Phone className="h-3 w-3 text-plp-primary" /><span className="truncate">{empresa.telefono}</span></div>
                          <div className="flex items-center gap-1"><Mail className="h-3 w-3 text-plp-primary" /><span className="truncate">{empresa.email}</span></div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="flex flex-wrap gap-1">
                        {empresa.servicios.slice(0,3).map((servicio, index) => (
                          <Badge key={index} variant="outline" className="text-[10px]">
                            {servicio}
                          </Badge>
                        ))}
                        {empresa.servicios.length > 3 && (
                          <Badge variant="secondary" className="text-[10px]">+{empresa.servicios.length - 3}</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        ))}

        {/* Información adicional */}
        <section className="mb-12">
          <Card className="p-8 bg-gradient-to-r from-plp-primary/5 to-plp-secondary/5 border border-plp-primary/20">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-plp-primary mb-4">Sobre las Empresas Habilitadas</h2>
              <p className="text-plp-gray-700 max-w-3xl mx-auto">
                Todas las empresas listadas cuentan con la habilitación correspondiente del Consorcio de Gestión del Puerto La Plata (CGPLP) 
                y están autorizadas para operar en el complejo portuario. Cada empresa ha sido evaluada y cumple con los estándares 
                de calidad y seguridad requeridos.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="mx-auto mb-3 p-2 bg-plp-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-plp-primary" />
                </div>
                <h3 className="text-lg font-semibold text-plp-primary mb-2">Habilitadas</h3>
                <p className="text-sm text-plp-gray-600">Todas las empresas cuentan con habilitación oficial</p>
              </div>
              <div className="text-center p-4">
                <div className="mx-auto mb-3 p-2 bg-plp-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-plp-primary" />
                </div>
                <h3 className="text-lg font-semibold text-plp-primary mb-2">Certificadas</h3>
                <p className="text-sm text-plp-gray-600">Cumplen con estándares de calidad y seguridad</p>
              </div>
              <div className="text-center p-4">
                <div className="mx-auto mb-3 p-2 bg-plp-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
                  <Award className="h-6 w-6 text-plp-primary" />
                </div>
                <h3 className="text-lg font-semibold text-plp-primary mb-2">Autorizadas</h3>
                <p className="text-sm text-plp-gray-600">Autorizadas para operar en Puerto La Plata</p>
              </div>
            </div>
          </Card>
        </section>

        {/* CTA final */}
        <section>
          <Card className="p-8 bg-gradient-to-r from-plp-primary to-plp-secondary text-white text-center">
            <h3 className="text-2xl font-bold mb-4">¿Necesitas servicios portuarios?</h3>
            <p className="text-lg mb-6 opacity-90">
              Conecta directamente con las empresas habilitadas para obtener los servicios que necesitas 
              en el Puerto La Plata.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-white/10">
                <Search className="mr-2 h-4 w-4" />
                Buscar empresa
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-white/10">
                <Phone className="mr-2 h-4 w-4" />
                Contactar CGPLP
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  )
}
