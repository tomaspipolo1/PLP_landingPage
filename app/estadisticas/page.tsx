"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Package, 
  Ship, 
  Calendar,
  DollarSign,
  Users,
  Clock,
  MapPin,
  Activity,
  Target
} from "lucide-react"

const estadisticasOperativas = [
  {
    id: 1,
    titulo: "Volúmenes Operados",
    valor: "1.2M TEUs",
    cambio: "+8.5%",
    periodo: "vs año anterior",
    icon: BarChart3,
    color: "text-blue-600",
    progreso: 85,
    descripcion: "Contenedores de 20 pies equivalentes procesados"
  },
  {
    id: 2,
    titulo: "Espacios Ocupados",
    valor: "78%",
    cambio: "+5.2%",
    periodo: "vs mes anterior",
    icon: PieChart,
    color: "text-green-600",
    progreso: 78,
    descripcion: "Porcentaje de capacidad utilizada en terminales"
  },
  {
    id: 3,
    titulo: "Espacios Disponibles",
    valor: "22%",
    cambio: "-5.2%",
    periodo: "vs mes anterior",
    icon: Package,
    color: "text-amber-600",
    progreso: 22,
    descripcion: "Capacidad disponible para nuevas operaciones"
  },
  {
    id: 4,
    titulo: "Buques Operados",
    valor: "245",
    cambio: "+12.3%",
    periodo: "vs año anterior",
    icon: Ship,
    color: "text-purple-600",
    progreso: 92,
    descripcion: "Total de embarcaciones atendidas"
  }
]

const estadisticasFinancieras = [
  {
    id: 1,
    titulo: "Ingresos Totales",
    valor: "$45.2M",
    cambio: "+15.8%",
    periodo: "vs año anterior",
    icon: DollarSign,
    color: "text-green-600",
    descripcion: "Facturación anual del puerto"
  },
  {
    id: 2,
    titulo: "Costo por TEU",
    valor: "$37.6",
    cambio: "-3.2%",
    periodo: "vs año anterior",
    icon: Target,
    color: "text-blue-600",
    descripcion: "Costo promedio por contenedor procesado"
  },
  {
    id: 3,
    titulo: "ROI Operativo",
    valor: "18.5%",
    cambio: "+2.1%",
    periodo: "vs año anterior",
    icon: TrendingUp,
    color: "text-purple-600",
    descripcion: "Retorno sobre inversión operativa"
  }
]

const estadisticasServicios = [
  {
    id: 1,
    titulo: "Tiempo Promedio de Permanencia",
    valor: "18.5 hrs",
    cambio: "-12%",
    periodo: "vs año anterior",
    icon: Clock,
    color: "text-green-600",
    descripcion: "Tiempo promedio de buques en puerto"
  },
  {
    id: 2,
    titulo: "Eficiencia de Descarga",
    valor: "95.2%",
    cambio: "+4.1%",
    periodo: "vs año anterior",
    icon: Activity,
    color: "text-blue-600",
    descripcion: "Porcentaje de eficiencia en operaciones"
  },
  {
    id: 3,
    titulo: "Satisfacción del Cliente",
    valor: "4.7/5",
    cambio: "+0.3",
    periodo: "vs año anterior",
    icon: Users,
    color: "text-purple-600",
    descripcion: "Calificación promedio de usuarios"
  }
]

const estadisticasAmbientales = [
  {
    id: 1,
    titulo: "Reducción de Emisiones",
    valor: "23%",
    cambio: "+8%",
    periodo: "vs año anterior",
    icon: TrendingUp,
    color: "text-green-600",
    descripcion: "Reducción de CO2 en operaciones"
  },
  {
    id: 2,
    titulo: "Energía Renovable",
    valor: "45%",
    cambio: "+15%",
    periodo: "vs año anterior",
    icon: Activity,
    color: "text-blue-600",
    descripcion: "Porcentaje de energía limpia utilizada"
  },
  {
    id: 3,
    titulo: "Gestión de Residuos",
    valor: "98%",
    cambio: "+2%",
    periodo: "vs año anterior",
    icon: Package,
    color: "text-purple-600",
    descripcion: "Porcentaje de residuos reciclados"
  }
]

export default function Estadisticas() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative w-full h-[300px] bg-gradient-to-r from-plp-primary to-plp-secondary overflow-hidden -mt-[var(--header-height,80px)]">
        <div className="relative h-full container mx-auto px-4 flex items-center pt-[var(--header-height,80px)]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-shadow">
            Estadísticas del Puerto
          </h1>
        </div>
      </div>

      {/* Contenido */}
      <div className="container mx-auto px-4 py-12">
        {/* Introducción */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-plp-primary mb-4">
              Indicadores de Rendimiento y Operaciones
            </h2>
            <p className="text-lg text-plp-gray-700 leading-relaxed">
              Datos actualizados sobre el desempeño operativo, financiero y ambiental del Puerto La Plata. 
              Estas estadísticas reflejan nuestro compromiso con la excelencia operativa y la transparencia.
            </p>
          </div>
        </section>

        {/* Estadísticas Operativas */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-plp-primary mb-6">Indicadores Operativos</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {estadisticasOperativas.map((stat) => (
              <Card key={stat.id} className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-medium text-plp-gray-800">{stat.titulo}</h4>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-plp-primary mb-2">{stat.valor}</div>
                <div className="flex items-center text-sm mb-4">
                  <TrendingUp className={`h-4 w-4 ${stat.cambio.startsWith('+') ? 'text-green-500' : 'text-red-500'} mr-1 ${stat.cambio.startsWith('-') ? 'transform rotate-180' : ''}`} />
                  <span className={`font-medium ${stat.cambio.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                    {stat.cambio}
                  </span>
                  <span className="text-plp-gray-500 ml-1">{stat.periodo}</span>
                </div>
                <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className={`h-2.5 rounded-full ${stat.color.replace('text-', 'bg-')}`} style={{ width: `${stat.progreso}%` }}></div>
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-plp-gray-500">
                    <span>Objetivo anual</span>
                    <span>{stat.progreso}%</span>
                  </div>
                </div>
                <p className="text-xs text-plp-gray-600">{stat.descripcion}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Estadísticas Financieras */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-plp-primary mb-6">Indicadores Financieros</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {estadisticasFinancieras.map((stat) => (
              <Card key={stat.id} className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-medium text-plp-gray-800">{stat.titulo}</h4>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-plp-primary mb-2">{stat.valor}</div>
                <div className="flex items-center text-sm mb-4">
                  <TrendingUp className={`h-4 w-4 ${stat.cambio.startsWith('+') ? 'text-green-500' : 'text-red-500'} mr-1 ${stat.cambio.startsWith('-') ? 'transform rotate-180' : ''}`} />
                  <span className={`font-medium ${stat.cambio.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                    {stat.cambio}
                  </span>
                  <span className="text-plp-gray-500 ml-1">{stat.periodo}</span>
                </div>
                <p className="text-sm text-plp-gray-600">{stat.descripcion}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Estadísticas de Servicios */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-plp-primary mb-6">Indicadores de Servicios</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {estadisticasServicios.map((stat) => (
              <Card key={stat.id} className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-medium text-plp-gray-800">{stat.titulo}</h4>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-plp-primary mb-2">{stat.valor}</div>
                <div className="flex items-center text-sm mb-4">
                  <TrendingUp className={`h-4 w-4 ${stat.cambio.startsWith('+') ? 'text-green-500' : 'text-red-500'} mr-1 ${stat.cambio.startsWith('-') ? 'transform rotate-180' : ''}`} />
                  <span className={`font-medium ${stat.cambio.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                    {stat.cambio}
                  </span>
                  <span className="text-plp-gray-500 ml-1">{stat.periodo}</span>
                </div>
                <p className="text-sm text-plp-gray-600">{stat.descripcion}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Estadísticas Ambientales */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-plp-primary mb-6">Indicadores Ambientales</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {estadisticasAmbientales.map((stat) => (
              <Card key={stat.id} className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-medium text-plp-gray-800">{stat.titulo}</h4>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-plp-primary mb-2">{stat.valor}</div>
                <div className="flex items-center text-sm mb-4">
                  <TrendingUp className={`h-4 w-4 ${stat.cambio.startsWith('+') ? 'text-green-500' : 'text-red-500'} mr-1 ${stat.cambio.startsWith('-') ? 'transform rotate-180' : ''}`} />
                  <span className={`font-medium ${stat.cambio.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                    {stat.cambio}
                  </span>
                  <span className="text-plp-gray-500 ml-1">{stat.periodo}</span>
                </div>
                <p className="text-sm text-plp-gray-600">{stat.descripcion}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Nota de actualización */}
        <section className="mb-12">
          <Card className="p-6 bg-gradient-to-r from-plp-primary/5 to-plp-secondary/5 border border-plp-primary/20">
            <div className="text-center">
              <Calendar className="h-8 w-8 text-plp-primary mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-plp-primary mb-2">
                Última actualización
              </h3>
              <p className="text-sm text-plp-gray-700 mb-4">
                Los datos mostrados corresponden al último trimestre de 2024 y se actualizan mensualmente.
              </p>
              <Badge className="bg-plp-primary/10 text-plp-primary">
                Actualizado: Diciembre 2024
              </Badge>
            </div>
          </Card>
        </section>

        {/* CTA */}
        <section>
          <Card className="p-8 bg-gradient-to-r from-plp-primary to-plp-secondary text-white text-center">
            <h3 className="text-2xl font-bold mb-4">¿Necesitás datos más específicos?</h3>
            <p className="text-lg mb-6 opacity-90">
              Nuestro equipo de análisis puede proporcionarte reportes detallados y datos históricos 
              para tus estudios de mercado o análisis de inversión.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-plp-primary hover:bg-gray-100">
                Solicitar reporte detallado
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contactar equipo de análisis
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  )
}
