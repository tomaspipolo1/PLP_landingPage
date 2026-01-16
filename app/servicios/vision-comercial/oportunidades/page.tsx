"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  TrendingUp, 
  Ship, 
  Building2, 
  MapPin, 
  ArrowRight,
  DollarSign,
  Users,
  Calendar
} from "lucide-react"

const oportunidades = [
  {
    id: 1,
    titulo: "Trae tu carga al Puerto La Plata",
    desc: "Facilitamos la logística para que tu empresa pueda operar desde nuestro puerto con ventajas competitivas y servicios integrales.",
    icon: Ship,
    categoria: "Servicios de carga",
    beneficios: ["Tarifas preferenciales", "Asesoramiento logístico", "Conectividad multimodal"]
  },
  {
    id: 2,
    titulo: "Arrendamiento de espacios",
    desc: "Opciones flexibles de alquiler para oficinas, depósitos y áreas operativas dentro del puerto.",
    icon: Building2,
    categoria: "Arrendamientos",
    beneficios: ["Ubicación estratégica", "Servicios incluidos", "Flexibilidad contractual"]
  },
  {
    id: 3,
    titulo: "Proyectos de expansión",
    desc: "Colaboramos en el desarrollo de nuevos negocios y ampliaciones de operaciones portuarias.",
    icon: TrendingUp,
    categoria: "Desarrollo",
    beneficios: ["Análisis de viabilidad", "Soporte técnico", "Financiamiento"]
  }
]

const areasDisponibles = [
  {
    id: 1,
    nombre: "Zona administrativa",
    superficie: "500-2000 m²",
    uso: "Oficinas y servicios",
    disponibilidad: "Inmediata",
    ubicacion: "Edificio central"
  },
  {
    id: 2,
    nombre: "Patio de contenedores",
    superficie: "5000-15000 m²",
    uso: "Almacenamiento y logística",
    disponibilidad: "3 meses",
    ubicacion: "Sector norte"
  },
  {
    id: 3,
    nombre: "Área de servicios",
    superficie: "1000-5000 m²",
    uso: "Talleres y mantenimiento",
    disponibilidad: "6 meses",
    ubicacion: "Sector este"
  }
]

export default function VisionComercial() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        {/* CTA principal */}
        <section className="mb-12">
          <Card className="p-8 bg-gradient-to-r from-plp-primary to-plp-secondary text-white">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Trae tu carga al Puerto La Plata</h2>
              <p className="text-lg mb-6 opacity-90">
                Conectamos tu negocio con el mundo a través de servicios logísticos integrales, 
                tarifas competitivas y la mejor ubicación estratégica de la región.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  <span>Tarifas preferenciales</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>Asesoramiento especializado</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>Plazos flexibles</span>
                </div>
              </div>
              <Button size="lg" className="bg-white text-plp-primary hover:bg-gray-100">
                Consultar oportunidades
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Card>
        </section>

        {/* Oportunidades de negocio */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-plp-primary mb-6">Oportunidades de negocio</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {oportunidades.map((op) => (
              <Card key={op.id} className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-plp-primary/10 rounded-lg">
                    <op.icon className="h-6 w-6 text-plp-primary" />
                  </div>
                  <Badge className="bg-plp-primary/10 text-plp-primary">{op.categoria}</Badge>
                </div>
                <h3 className="text-xl font-semibold text-plp-primary mb-3">{op.titulo}</h3>
                <p className="text-sm text-plp-gray-700 leading-relaxed mb-4">{op.desc}</p>
                <ul className="space-y-1">
                  {op.beneficios.map((beneficio, index) => (
                    <li key={index} className="text-xs text-plp-gray-600 flex items-center gap-2">
                      <div className="w-1 h-1 bg-plp-primary rounded-full" />
                      {beneficio}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Áreas disponibles */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-plp-primary mb-6">Áreas disponibles para arrendamiento</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {areasDisponibles.map((area) => (
              <Card key={area.id} className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-plp-primary">{area.nombre}</h3>
                  <Badge className={area.disponibilidad === "Inmediata" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}>
                    {area.disponibilidad}
                  </Badge>
                </div>
                <div className="space-y-2 text-sm text-plp-gray-700">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-plp-primary" />
                    <span>{area.ubicacion}</span>
                  </div>
                  <div>
                    <span className="font-medium">Superficie:</span> {area.superficie}
                  </div>
                  <div>
                    <span className="font-medium">Uso:</span> {area.uso}
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  Solicitar información
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section>
          <Card className="p-8 bg-gray-50 border border-gray-200">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-plp-primary mb-4">¿Tienes un proyecto en mente?</h3>
              <p className="text-plp-gray-700 mb-6">
                Nuestro equipo comercial está disponible para analizar tu propuesta y encontrar 
                la mejor manera de hacerla realidad en el Puerto La Plata.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button className="bg-plp-primary hover:bg-plp-primary-hover">
                  Agendar reunión
                </Button>
                <Button variant="outline">
                  Descargar folleto comercial
                </Button>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  )
}
