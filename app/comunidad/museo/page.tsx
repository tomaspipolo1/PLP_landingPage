"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Skeleton } from "@/components/ui/skeleton"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
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
              <h3 className="font-semibold text-plp-primary">¿Cómo llegar?</h3>
              <p className="text-sm text-plp-gray-600">• Dock central • Visitas guiadas a coordinar</p>
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
            <AspectRatio ratio={16/4} className="bg-plp-gray-100">
              <Skeleton className="w-full h-full" />
            </AspectRatio>
          </Card>
        </section>

        {/* Más información */}
        <section className="grid md:grid-cols-3 gap-6 mb-12">
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

        {/* Galería */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-plp-primary mb-6">Galería</h2>
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                  <Card className="overflow-hidden">
                    <AspectRatio ratio={16/9}>
                      <img
                        src="/placeholder.jpg"
                        alt={`Imagen del museo ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      </div>
    </div>
  )
}
