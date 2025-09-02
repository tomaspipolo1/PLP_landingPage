"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Play } from "lucide-react"

export default function Museo() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative w-full h-[300px] bg-gradient-to-r from-plp-primary to-plp-secondary overflow-hidden -mt-[var(--header-height,80px)]">
         <div className="relative h-full container mx-auto px-4 flex items-center pt-[var(--header-height,80px)]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-shadow">Museo</h1>
          </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Intro */}
        <section className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold text-plp-primary mb-3">Sobre el museo</h2>
            <p className="text-plp-gray-600 leading-relaxed">
              El Museo del Puerto conserva piezas, documentos y testimonios que explican la evolución del puerto, su
              infraestructura y su impacto en el desarrollo regional. Su propósito es acercar la memoria portuaria a
              la ciudadanía y favorecer experiencias educativas y culturales para todas las edades.
            </p>
          </div>
          <Card className="p-4 flex items-center gap-3">
            <MapPin className="h-5 w-5 text-plp-primary" />
            <div>
              <h3 className="font-semibold text-plp-primary">Ubicación</h3>
              <p className="text-sm text-plp-gray-600">Área histórica del puerto • Visitas guiadas a coordinar</p>
            </div>
          </Card>
        </section>

        {/* Street View / Recorrido virtual placeholder */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-2xl font-semibold text-plp-primary">Recorrido virtual</h2>
            <Badge className="bg-plp-primary/90 hover:bg-plp-primary">Próximamente</Badge>
          </div>
          <Card className="overflow-hidden">
            {/* Contenedor reservado para un embed tipo Google Street View o tour 360 */}
            <div className="relative w-full h-[420px] bg-plp-gray-100">
              {/* Fallback visual: imagen panorámica del puerto */}
              <img
                src="/puerto-plata-satellite.png"
                alt="Vista aérea de referencia"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
              {/* Placeholder UI */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <Play className="h-10 w-10 text-plp-primary mb-2" />
                <p className="text-plp-primary font-medium">Aquí se integrará un recorrido 360° del museo</p>
                <p className="text-plp-gray-600 text-sm max-w-xl mt-1">
                  Reservamos este espacio para incorporar una experiencia inmersiva similar a Google Street View.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <Button variant="outline" size="sm" className="border-plp-primary text-plp-primary">
                    Explorar cuando esté disponible
                  </Button>
                </div>
              </div>
              {/* Controles placeholder (zoom, compás, etc.) */}
              <div className="absolute bottom-3 right-3 flex gap-2">
                <div className="h-8 w-8 rounded bg-white/90 border border-gray-200 shadow" />
                <div className="h-8 w-8 rounded bg-white/90 border border-gray-200 shadow" />
                <div className="h-8 w-8 rounded bg-white/90 border border-gray-200 shadow" />
              </div>
            </div>
          </Card>
        </section>

        {/* Más información */}
        <section className="grid md:grid-cols-3 gap-6">
          <Card className="p-5">
            <h3 className="text-lg font-semibold text-plp-primary mb-2">Colecciones</h3>
            <p className="text-sm text-plp-gray-600 leading-relaxed">
              Maquetas, planos originales, instrumentos de navegación, archivos fotográficos y material audiovisual que
              ilustran distintas épocas del puerto y su comunidad.
            </p>
          </Card>
          <Card className="p-5">
            <h3 className="text-lg font-semibold text-plp-primary mb-2">Actividades educativas</h3>
            <p className="text-sm text-plp-gray-600 leading-relaxed">
              Visitas guiadas, talleres y propuestas pedagógicas para escuelas, universidades y organizaciones
              sociales, con foco en historia, tecnología e identidad portuaria.
            </p>
          </Card>
          <Card className="p-5">
            <h3 className="text-lg font-semibold text-plp-primary mb-2">Patrimonio vivo</h3>
            <p className="text-sm text-plp-gray-600 leading-relaxed">
              Testimonios orales de trabajadores y trabajadoras del puerto y de la comunidad, que complementan el
              acervo documental para construir una memoria plural.
            </p>
          </Card>
        </section>
      </div>
    </div>
  )
}
