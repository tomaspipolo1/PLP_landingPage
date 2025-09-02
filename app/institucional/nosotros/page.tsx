"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export default function SobreNosotros() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero section con contenedor para imagen */}
      <div className="relative w-full h-[300px] bg-gradient-to-r from-plp-primary to-plp-secondary overflow-hidden -mt-[var(--header-height,80px)]">
         <div className="relative h-full container mx-auto px-4 flex items-center pt-[var(--header-height,80px)]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-shadow">
            Sobre Nosotros
          </h1>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-12">
        {/* Descripción del Consorcio */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-plp-primary mb-6">
            Consorcio de Gestión del Puerto de Puerto Plata
          </h2>
          <p className="text-lg text-plp-gray-600 mb-6 leading-relaxed">
            El Consorcio de Gestión del Puerto de Puerto Plata es el ente público no estatal responsable de la administración y explotación del Puerto de Puerto Plata. Nuestra función principal es garantizar la eficiencia y competitividad de las operaciones portuarias, contribuyendo al desarrollo económico y social de la región.
          </p>
          <p className="text-lg text-plp-gray-600 leading-relaxed">
            Como autoridad portuaria, supervisamos y coordinamos todas las actividades dentro del puerto, asegurando el cumplimiento de las normativas nacionales e internacionales, y promoviendo el crecimiento sostenible de la actividad portuaria.
          </p>
        </section>

        {/* Misión, Visión y Valores */}
        <section className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow border-t-4 border-plp-primary group hover:bg-plp-primary-light">
            <h3 className="text-xl font-semibold text-plp-primary mb-4 group-hover:text-plp-primary">Misión</h3>
            <p className="text-plp-gray-600 group-hover:text-plp-gray-700">
              Gestionar y desarrollar el puerto de manera eficiente y sostenible, facilitando el comercio marítimo y contribuyendo al desarrollo económico de la región.
            </p>
          </Card>

          <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow border-t-4 border-plp-secondary group hover:bg-plp-primary-light">
            <h3 className="text-xl font-semibold text-plp-primary mb-4 group-hover:text-plp-primary">Visión</h3>
            <p className="text-plp-gray-600 group-hover:text-plp-gray-700">
              Ser reconocidos como un puerto líder en el Caribe, destacando por nuestra excelencia operativa, innovación y compromiso con el desarrollo sostenible.
            </p>
          </Card>

          <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow border-t-4 border-plp-accent group hover:bg-plp-primary-light">
            <h3 className="text-xl font-semibold text-plp-primary mb-4 group-hover:text-plp-primary">Valores</h3>
            <ul className="text-plp-gray-600 space-y-2 group-hover:text-plp-gray-700">
              <li>• Excelencia operativa</li>
              <li>• Transparencia</li>
              <li>• Sostenibilidad</li>
              <li>• Innovación</li>
              <li>• Compromiso social</li>
            </ul>
          </Card>
        </section>

        {/* Documentos */}
        <section className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-plp-primary mb-8">Documentos Institucionales</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto flex items-center gap-2 bg-white hover:bg-plp-primary-light border-plp-primary text-plp-primary hover:text-plp-primary hover:border-plp-primary transition-colors"
            >
              <FileText className="h-5 w-5" />
              Misión, Visión y Valores
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto flex items-center gap-2 bg-white hover:bg-plp-primary-light border-plp-primary text-plp-primary hover:text-plp-primary hover:border-plp-primary transition-colors"
            >
              <FileText className="h-5 w-5" />
              Política de Calidad
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
