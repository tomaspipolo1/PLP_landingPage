"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapSection } from "@/components/map-section"
import { 
  Building2,
  Ship,
  Warehouse,
  Factory,
  MapPin,
  Info,
  ExternalLink,
  Layers,
  Filter
} from "lucide-react"
import Link from "next/link"

// Tipos de operadores
const operatorTypes = [
  { id: "all", label: "Todos", icon: Layers, color: "bg-gray-500" },
  { id: "consortium", label: "Consorcio", icon: Building2, color: "bg-blue-600" },
  { id: "tenants", label: "Arrendatarios", icon: Warehouse, color: "bg-green-600" },
  { id: "operators", label: "Operadores", icon: Ship, color: "bg-purple-600" },
  { id: "freezone", label: "Zona Franca", icon: Factory, color: "bg-orange-600" },
  { id: "shipyards", label: "Astilleros", icon: Ship, color: "bg-red-600" }
]

// Datos de los operadores en el mapa
const mapOperators = [
  {
    id: 1,
    name: "Consorcio de Gestión del Puerto La Plata",
    type: "consortium",
    category: "Administración",
    description: "Ente administrador del puerto y coordinador de operaciones",
    position: { x: 50, y: 30 },
    website: "/institucional/nosotros",
    details: {
      superficie: "Toda el área portuaria",
      servicios: ["Administración", "Coordinación", "Seguridad"],
      contacto: "info@puertolaplata.com"
    }
  },
  {
    id: 2,
    name: "Terminal de Contenedores TCLP",
    type: "tenants",
    category: "Contenedores",
    description: "Operador principal de contenedores y carga general",
    position: { x: 25, y: 45 },
    website: "/servicios/vision-comercial/oportunidades",
    details: {
      superficie: "15.000 m²",
      servicios: ["Contenedores", "Carga general", "Almacenamiento"],
      contacto: "tclp@puertolaplata.com"
    }
  },
  {
    id: 3,
    name: "Terminal de Graneles Sólidos",
    type: "tenants",
    category: "Graneles",
    description: "Especializada en graneles sólidos y minerales",
    position: { x: 75, y: 60 },
    website: "/servicios/vision-comercial/oportunidades",
    details: {
      superficie: "8.000 m²",
      servicios: ["Graneles sólidos", "Minerales", "Cereales"],
      contacto: "graneles@puertolaplata.com"
    }
  },
  {
    id: 4,
    name: "Zona Franca La Plata",
    type: "freezone",
    category: "Zona Franca",
    description: "Área de libre comercio con beneficios fiscales",
    position: { x: 40, y: 70 },
    website: "/servicios/vision-comercial/oportunidades",
    details: {
      superficie: "50.000 m²",
      servicios: ["Almacenamiento", "Transformación", "Comercialización"],
      contacto: "zonafranca@puertolaplata.com"
    }
  },
  {
    id: 5,
    name: "Astillero Río de la Plata",
    type: "shipyards",
    category: "Astilleros",
    description: "Reparaciones navales y construcción de embarcaciones",
    position: { x: 60, y: 80 },
    website: "/servicios/vision-comercial/oportunidades",
    details: {
      superficie: "12.000 m²",
      servicios: ["Reparaciones", "Construcción", "Mantenimiento"],
      contacto: "astillero@puertolaplata.com"
    }
  },
  {
    id: 6,
    name: "Operador Logístico Multimodal",
    type: "operators",
    category: "Logística",
    description: "Servicios de logística integrada y distribución",
    position: { x: 80, y: 40 },
    website: "/servicios/vision-comercial/oportunidades",
    details: {
      superficie: "6.000 m²",
      servicios: ["Logística", "Distribución", "Almacenamiento"],
      contacto: "logistica@puertolaplata.com"
    }
  },
  {
    id: 7,
    name: "Terminal de Hidrocarburos",
    type: "tenants",
    category: "Hidrocarburos",
    description: "Especializada en productos petrolíferos y químicos",
    position: { x: 20, y: 75 },
    website: "/servicios/vision-comercial/oportunidades",
    details: {
      superficie: "10.000 m²",
      servicios: ["Hidrocarburos", "Productos químicos", "Combustibles"],
      contacto: "hidrocarburos@puertolaplata.com"
    }
  },
  {
    id: 8,
    name: "Centro de Servicios Portuarios",
    type: "operators",
    category: "Servicios",
    description: "Servicios auxiliares y de apoyo a la navegación",
    position: { x: 45, y: 55 },
    website: "/servicios/vision-comercial/oportunidades",
    details: {
      superficie: "3.000 m²",
      servicios: ["Remolque", "Bunkering", "Asistencia técnica"],
      contacto: "servicios@puertolaplata.com"
    }
  }
]

export default function MapaInteractivo() {
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [selectedOperator, setSelectedOperator] = useState<any>(null)

  const filteredOperators = selectedFilter === "all" 
    ? mapOperators 
    : mapOperators.filter(op => op.type === selectedFilter)

  const getOperatorTypeInfo = (type: string) => {
    return operatorTypes.find(t => t.id === type)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative w-full h-[300px] bg-gradient-to-r from-plp-primary to-plp-secondary overflow-hidden -mt-[var(--header-height,80px)]">
         <div className="relative h-full container mx-auto px-4 flex items-center pt-[var(--header-height,80px)]">
          <h1 className="text-4xl md:text-5xl lg:text-1xl font-bold text-white text-shadow">Mapa interactivo</h1>
          </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Introducción */}
        <section className="mb-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-plp-primary mb-4">Descubre nuestro puerto</h2>
            <p className="text-plp-gray-700 leading-relaxed">
              El Puerto La Plata es un complejo portuario integrado que alberga múltiples operadores 
              especializados. Navega por el mapa para conocer cada instalación y sus servicios.
            </p>
          </div>
        </section>

        {/* Filtros */}
        <section className="mb-8">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Filter className="h-5 w-5 text-plp-primary" />
              <h3 className="text-lg font-semibold text-plp-primary">Filtrar por tipo</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {operatorTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedFilter(type.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                    selectedFilter === type.id
                      ? 'bg-plp-primary text-white border-plp-primary'
                      : 'bg-white text-plp-gray-700 border-gray-300 hover:border-plp-primary hover:text-plp-primary'
                  }`}
                >
                  <type.icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{type.label}</span>
                </button>
              ))}
            </div>
          </Card>
        </section>

        {/* Mapa interactivo */}
        <section className="mb-12">
          <div className="relative">
            {/* Mapa base */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-[600px] w-full bg-gradient-to-br from-blue-50 to-blue-100">
                {/* Imagen de fondo del puerto */}
                <img
                  src="/puerto-plata-satellite.png"
                  alt="Mapa del Puerto La Plata"
                  className="w-full h-full object-cover opacity-80"
                />

                {/* Marcadores de operadores */}
                {filteredOperators.map((operator) => {
                  const typeInfo = getOperatorTypeInfo(operator.type)
                  if (!typeInfo) return null
                  return (
                    <div
                      key={operator.id}
                      className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 hover:scale-110 ${
                        selectedOperator?.id === operator.id ? 'z-20' : 'z-10'
                      }`}
                      style={{
                        left: `${operator.position.x}%`,
                        top: `${operator.position.y}%`
                      }}
                      onClick={() => setSelectedOperator(operator)}
                    >
                      <div className={`${typeInfo.color} text-white p-3 rounded-lg shadow-lg min-w-[200px]`}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <typeInfo.icon className="h-4 w-4" />
                            <span className="text-sm font-semibold">{operator.category}</span>
                          </div>
                          <Badge className="bg-white/20 text-white text-xs">
                            {operator.type}
                          </Badge>
                        </div>
                        <h4 className="text-sm font-bold mb-1">{operator.name}</h4>
                        <p className="text-xs opacity-90 line-clamp-2">{operator.description}</p>
                        <div className="flex gap-2 mt-2">
                          <Link href={operator.website}>
                            <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                              <Info className="h-3 w-3 mr-1" />
                              Info
                            </Button>
                          </Link>
                          <Link href={operator.website}>
                            <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/20">
                              <ExternalLink className="h-3 w-3 mr-1" />
                              Visitar
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Controles del mapa */}
              <div className="p-4 bg-white border-t border-gray-200">
                <div className="flex flex-wrap justify-between items-center">
                  <div className="flex items-center mb-2 md:mb-0">
                    <span className="text-gray-600 text-sm">
                      {filteredOperators.length} operadores mostrados
                    </span>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <MapPin className="h-4 w-4 mr-2" />
                      Ver ubicación
                    </Button>
                    <Button variant="outline" size="sm">
                      Descargar mapa
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detalles del operador seleccionado */}
        {selectedOperator && (
          <section className="mb-12">
            <Card className="p-6 border-2 border-plp-primary/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {(() => {
                    const typeInfo = getOperatorTypeInfo(selectedOperator.type)
                    return typeInfo ? (
                      <div className={`p-2 rounded-lg ${typeInfo.color} text-white`}>
                        <typeInfo.icon className="h-6 w-6" />
                      </div>
                    ) : null
                  })()}
                  <div>
                    <h3 className="text-xl font-bold text-plp-primary">{selectedOperator.name}</h3>
                    <p className="text-sm text-plp-gray-600">{selectedOperator.category}</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedOperator(null)}
                >
                  Cerrar
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-plp-primary mb-2">Descripción</h4>
                  <p className="text-plp-gray-700 mb-4">{selectedOperator.description}</p>
                  
                  <h4 className="font-semibold text-plp-primary mb-2">Servicios</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedOperator.details.servicios.map((servicio: string, index: number) => (
                      <Badge key={index} variant="secondary" className="bg-plp-primary/10 text-plp-primary">
                        {servicio}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-plp-primary mb-2">Información técnica</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-plp-gray-600">Superficie:</span>
                      <span className="font-medium">{selectedOperator.details.superficie}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-plp-gray-600">Contacto:</span>
                      <span className="font-medium">{selectedOperator.details.contacto}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <Link href={selectedOperator.website}>
                      <Button className="w-full bg-plp-primary hover:bg-plp-primary-hover">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visitar página
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </section>
        )}

        {/* CTA final */}
        <section>
          <Card className="p-8 bg-gradient-to-r from-plp-primary to-plp-secondary text-white text-center">
            <h3 className="text-2xl font-bold mb-4">¿Interesado en operar en el puerto?</h3>
            <p className="text-lg mb-6 opacity-90">
              Conecta con nuestros operadores o consulta sobre oportunidades de arrendamiento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/servicios/vision-comercial/oportunidades">
                <Button size="lg" className="bg-white text-plp-primary hover:bg-gray-100">
                  Ver oportunidades
                </Button>
              </Link>
              <Button size="lg" className="bg-white text-plp-primary hover:bg-gray-100">
                Contactar equipo comercial
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  )
}
