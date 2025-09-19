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
  Taxi,
  Bike,
  Car as CarIcon,
  Ship as ShipIcon,
  Plane as PlaneIcon,
  Train as TrainIcon,
  Route as RouteIcon,
  Navigation as NavigationIcon,
  MapPin as MapPinIcon,
  ArrowUpDown,
  ArrowLeftRight,
  Network,
  Link as LinkIcon,
  Grid,
  Layers,
  BarChart3,
  Activity,
  TrendingUp as TrendingUpIcon
} from "lucide-react"
import Link from "next/link"

// Tipos de conexiones
const tiposConexiones = [
  {
    id: "terrestre",
    titulo: "Transporte Terrestre",
    descripcion: "Conexiones por carretera entre terminales y accesos terrestres",
    icon: Truck,
    color: "bg-blue-500",
    empresas: ["Logística Portuaria S.A.", "Transportes del Sur", "Cargo Express La Plata"]
  },
  {
    id: "ferroviario",
    titulo: "Transporte Ferroviario",
    descripcion: "Conexiones ferroviarias operadas por PLP",
    icon: Train,
    color: "bg-green-500",
    empresas: ["PLP - Puerto La Plata"]
  },
  {
    id: "intermodal",
    titulo: "Conexiones Intermodales",
    descripcion: "Integración entre diferentes modos de transporte",
    icon: Network,
    color: "bg-purple-500",
    empresas: ["Sistema Integrado PLP", "Intermodal La Plata"]
  }
]

// Terminales del puerto
const terminales = [
  {
    id: 1,
    nombre: "Terminal de Contenedores TecPlata",
    tipo: "Contenedores",
    ubicacion: "Sitio 1-2",
    conexiones: ["Terrestre", "Ferroviario"],
    capacidad: "1.2 millones TEU/año",
    icon: Container
  },
  {
    id: 2,
    nombre: "Complejo Industrial YPF",
    tipo: "Petróleo y derivados",
    ubicacion: "Sitio 3-4",
    conexiones: ["Terrestre", "Ferroviario"],
    capacidad: "45.000 m³/día",
    icon: Factory
  },
  {
    id: 3,
    nombre: "Terminal Copetro",
    tipo: "Graneles sólidos",
    ubicacion: "Sitio 7-8",
    conexiones: ["Terrestre", "Ferroviario"],
    capacidad: "55.000 toneladas",
    icon: Package
  },
  {
    id: 4,
    nombre: "Terminal de Areneras",
    tipo: "Arena y materiales",
    ubicacion: "Sitio 9-10",
    conexiones: ["Terrestre"],
    capacidad: "500.000 ton/año",
    icon: Warehouse
  }
]

// Empresas de logística
const empresasLogistica = [
  {
    id: 1,
    nombre: "Logística Portuaria S.A.",
    servicios: ["Transporte de contenedores", "Carga general", "Distribución"],
    telefono: "+54 221 123-4567",
    email: "info@logisticaportuaria.com",
    cobertura: "Todo el país",
    flota: "150 camiones"
  },
  {
    id: 2,
    nombre: "Transportes del Sur",
    servicios: ["Transporte especializado", "Carga peligrosa", "Refrigerado"],
    telefono: "+54 221 234-5678",
    email: "contacto@transportesdelsur.com",
    cobertura: "Región metropolitana",
    flota: "80 camiones"
  },
  {
    id: 3,
    nombre: "Cargo Express La Plata",
    servicios: ["Transporte express", "Carga fraccionada", "Última milla"],
    telefono: "+54 221 345-6789",
    email: "info@cargoexpresslaplata.com",
    cobertura: "La Plata y alrededores",
    flota: "45 camiones"
  }
]

// Rutas principales
const rutasPrincipales = [
  {
    id: 1,
    nombre: "Ruta Nacional 9",
    tipo: "Carretera",
    descripcion: "Conexión principal con Buenos Aires y el interior",
    distancia: "60 km hasta CABA",
    tiempo: "45 minutos",
    capacidad: "Alta"
  },
  {
    id: 2,
    nombre: "Ruta Provincial 6",
    tipo: "Carretera",
    descripcion: "Conexión con el interior de la provincia",
    distancia: "Varios destinos",
    tiempo: "Variable",
    capacidad: "Media"
  },
  {
    id: 3,
    nombre: "Ramal Ferroviario PLP",
    tipo: "Ferrocarril",
    descripcion: "Conexión ferroviaria operada por PLP",
    distancia: "Red nacional",
    tiempo: "Variable",
    capacidad: "Alta"
  }
]

// Estadísticas de transporte
const estadisticas = [
  { valor: "4", unidad: "Terminales", descripcion: "Conectadas" },
  { valor: "3", unidad: "Empresas", descripcion: "Logística" },
  { valor: "60", unidad: "km", descripcion: "Hasta CABA" },
  { valor: "24/7", unidad: "Operación", descripcion: "Continua" },
  { valor: "275", unidad: "Camiones", descripcion: "Flota total" },
  { valor: "100%", unidad: "Cobertura", descripcion: "Nacional" }
]

export default function ServiciosTransporteTerrestre() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative w-full h-[400px] bg-gradient-to-r from-plp-primary to-plp-secondary overflow-hidden -mt-[var(--header-height,80px)]">
        <div className="absolute inset-0 bg-plp-overlay-light" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-plp-overlay/10 backdrop-blur-sm" />
        <div className="relative h-full container mx-auto px-4 flex items-center pt-[var(--header-height,80px)]">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-shadow mb-4">Servicios de Transporte Terrestre</h1>
            <p className="text-xl text-white/90 mb-6">
              Conexiones intermodales entre terminales, CGPLP y accesos terrestres y ferroviarios. 
              Mapa de rutas para camiones y conexiones ferroviarias operadas por PLP.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-white/10">
                <Map className="mr-2 h-5 w-5" />
                Ver mapa de rutas
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-white/10">
                <Truck className="mr-2 h-5 w-5" />
                Empresas de logística
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Tipos de conexiones */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-plp-primary mb-4">Tipos de Conexiones Intermodales</h2>
            <p className="text-lg text-plp-gray-700 max-w-3xl mx-auto">
              El Puerto La Plata cuenta con una red integral de conexiones terrestres y ferroviarias 
              que conectan todas las terminales con los principales accesos y destinos.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {tiposConexiones.map((tipo) => (
              <Card key={tipo.id} className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 ${tipo.color} rounded-lg`}>
                    <tipo.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-plp-primary">{tipo.titulo}</h3>
                </div>
                <p className="text-plp-gray-700 mb-4">{tipo.descripcion}</p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-plp-gray-600">EMPRESAS OPERADORAS:</p>
                  {tipo.empresas.map((empresa, index) => (
                    <div key={index} className="text-sm text-plp-gray-700 flex items-center gap-2">
                      <div className="w-1 h-1 bg-plp-primary rounded-full" />
                      {empresa}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Mapa de conexiones */}
        <section className="mb-12">
          <Card className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-plp-primary mb-4">Mapa de Conexiones Intermodales</h2>
              <p className="text-plp-gray-700">
                Visualización de las conexiones entre terminales, CGPLP y accesos terrestres y ferroviarios
              </p>
            </div>
            <div className="relative bg-gray-100 rounded-lg p-8 min-h-[400px] flex items-center justify-center">
              <div className="text-center">
                <Map className="h-16 w-16 text-plp-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-plp-primary mb-2">Mapa Interactivo</h3>
                <p className="text-plp-gray-600 mb-4">
                  Mapa con conexiones entre terminales y rutas terrestres y ferroviarias
                </p>
                <Button>
                  <MapPin className="mr-2 h-4 w-4" />
                  Ver mapa completo
                </Button>
              </div>
            </div>
          </Card>
        </section>

        {/* Terminales */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-plp-primary mb-8 text-center">Terminales Conectadas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {terminales.map((terminal) => (
              <Card key={terminal.id} className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-plp-primary/10 rounded-lg">
                    <terminal.icon className="h-6 w-6 text-plp-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-plp-primary">{terminal.nombre}</h3>
                    <p className="text-sm text-plp-gray-600">{terminal.tipo}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-plp-primary" />
                    <span className="text-plp-gray-700">Ubicación: {terminal.ubicacion}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Network className="h-4 w-4 text-plp-primary" />
                    <span className="text-plp-gray-700">Conexiones: {terminal.conexiones.join(", ")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-plp-primary" />
                    <span className="text-plp-gray-700">Capacidad: {terminal.capacidad}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Rutas principales */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-plp-primary mb-8 text-center">Rutas Principales</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {rutasPrincipales.map((ruta) => (
              <Card key={ruta.id} className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 ${ruta.tipo === "Carretera" ? "bg-blue-500" : "bg-green-500"} rounded-lg`}>
                    {ruta.tipo === "Carretera" ? (
                      <Truck className="h-6 w-6 text-white" />
                    ) : (
                      <Train className="h-6 w-6 text-white" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-plp-primary">{ruta.nombre}</h3>
                    <p className="text-sm text-plp-gray-600">{ruta.tipo}</p>
                  </div>
                </div>
                <p className="text-plp-gray-700 mb-4">{ruta.descripcion}</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-plp-gray-600">Distancia</p>
                    <p className="text-plp-gray-700">{ruta.distancia}</p>
                  </div>
                  <div>
                    <p className="font-medium text-plp-gray-600">Tiempo</p>
                    <p className="text-plp-gray-700">{ruta.tiempo}</p>
                  </div>
                  <div>
                    <p className="font-medium text-plp-gray-600">Capacidad</p>
                    <p className="text-plp-gray-700">{ruta.capacidad}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Estadísticas */}
        <section className="mb-12">
          <Card className="p-8 bg-gradient-to-r from-plp-primary to-plp-secondary text-white">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-2">Transporte Terrestre en Números</h2>
              <p className="text-white/90">Conexiones y capacidades del sistema intermodal</p>
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

        {/* CTA final */}
        <section>
          <Card className="p-8 bg-gradient-to-r from-plp-primary to-plp-secondary text-white text-center">
            <h3 className="text-2xl font-bold mb-4">¿Necesitas servicios de transporte terrestre?</h3>
            <p className="text-lg mb-6 opacity-90">
              Conecta con nuestras empresas de logística para obtener servicios de transporte 
              terrestre y ferroviario desde el Puerto La Plata.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-white/10">
                <Truck className="mr-2 h-4 w-4" />
                Empresas de logística
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
