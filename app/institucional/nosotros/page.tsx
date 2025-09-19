"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Skeleton } from "@/components/ui/skeleton"

export default function SobreNosotros() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero section con contenedor para imagen */}
      <div className="relative w-full h-[300px] bg-gradient-to-r from-plp-primary to-plp-secondary overflow-hidden -mt-[var(--header-height,80px)]">
         <div className="relative h-full container mx-auto px-4 flex items-center pt-[var(--header-height,80px)]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-shadow text-left">
            Sobre el Puerto La Plata
          </h1>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-12">
        {/* Descripción del Puerto La Plata */}
        <section className="max-w-6xl mx-auto mb-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-plp-primary mb-6">
              Puerto La Plata
            </h2>
            <p className="text-lg text-plp-gray-600 mb-6 leading-relaxed">
              El Puerto La Plata es una terminal multipropósito ubicada sobre la ribera del Río de la Plata, en una zona estratégica del litoral bonaerense. Su localización lo posiciona como un nodo clave para el comercio exterior y la logística regional, articulando el intercambio de cargas con los principales polos productivos del entorno.
            </p>
            <p className="text-lg text-plp-gray-600 leading-relaxed">
              En su área de influencia se encuentran importantes corredores industriales y de servicios, con acceso a redes viales y ferroviarias. Esta conectividad favorece operaciones eficientes y seguras para distintos tipos de cargas, impulsando el desarrollo económico y la integración logística de la región.
            </p>
          </div>
          <div className="max-w-md md:ml-auto w-full">
            <AspectRatio ratio={4/3}>
              <Skeleton className="w-full h-full rounded-md bg-plp-gray-200/50" />
            </AspectRatio>
          </div>
        </section>

        {/* Bloques informativos del puerto */}
        <section className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow border-t-4 border-plp-primary group hover:bg-plp-primary-light">
            <h3 className="text-xl font-semibold text-plp-primary mb-4 group-hover:text-plp-primary">Ubicación</h3>
            <p className="text-plp-gray-600 group-hover:text-plp-gray-700">
              Situado en la margen del Río de la Plata, el puerto se integra al entramado urbano e industrial de su área metropolitana y a la red de accesos regionales, facilitando la conexión con centros productivos cercanos.
            </p>
          </Card>

          <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow border-t-4 border-plp-secondary group hover:bg-plp-primary-light">
            <h3 className="text-xl font-semibold text-plp-primary mb-4 group-hover:text-plp-primary">Infraestructura y Servicios</h3>
            <p className="text-plp-gray-600 group-hover:text-plp-gray-700">
              Cuenta con instalaciones para contenedores, cargas generales y a granel, además de áreas operativas y de apoyo. La infraestructura está pensada para brindar operaciones confiables y adaptadas a distintas necesidades logísticas.
            </p>
          </Card>

          <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow border-t-4 border-plp-accent group hover:bg-plp-primary-light">
            <h3 className="text-xl font-semibold text-plp-primary mb-4 group-hover:text-plp-primary">Conectividad y Competitividad</h3>
            <p className="text-plp-gray-600 group-hover:text-plp-gray-700">
              La proximidad a corredores logísticos y centros de consumo mejora los tiempos de tránsito y la previsibilidad. Su posicionamiento fortalece la competitividad regional y la integración con cadenas de valor.
            </p>
          </Card>
        </section>

        {/* Documentos */}
        <section className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-plp-primary mb-8">Información y Descargas</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto flex items-center gap-2 bg-white hover:bg-plp-primary-light border-plp-primary text-plp-primary hover:text-plp-primary hover:border-plp-primary transition-colors"
            >
              <FileText className="h-5 w-5" />
              Plano del Puerto
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto flex items-center gap-2 bg-white hover:bg-plp-primary-light border-plp-primary text-plp-primary hover:text-plp-primary hover:border-plp-primary transition-colors"
            >
              <FileText className="h-5 w-5" />
              Guía del Usuario
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
