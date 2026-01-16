"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Skeleton } from "@/components/ui/skeleton"
import { 
  Shield, 
  Target, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  Award,
  FileText,
  BarChart3
} from "lucide-react"

const objetivos = [
  {
    icon: Target,
    titulo: "Mejora continua",
    descripcion: "Implementamos procesos sistemáticos para identificar oportunidades de mejora y optimizar nuestros servicios portuarios."
  },
  {
    icon: Users,
    titulo: "Satisfacción del cliente",
    descripcion: "Nos enfocamos en entender y superar las expectativas de nuestros clientes, usuarios y partes interesadas."
  },
  {
    icon: Shield,
    titulo: "Gestión de riesgos",
    descripcion: "Identificamos, evaluamos y gestionamos proactivamente los riesgos operativos y ambientales."
  },
  {
    icon: TrendingUp,
    titulo: "Eficiencia operativa",
    descripcion: "Optimizamos nuestros procesos para maximizar la eficiencia y reducir costos operativos."
  }
]

const beneficios = [
  {
    titulo: "Certificación internacional",
    descripcion: "Reconocimiento mundial de nuestros estándares de calidad y gestión."
  },
  {
    titulo: "Confianza de clientes",
    descripcion: "Mayor credibilidad y confianza de nuestros usuarios y operadores portuarios."
  },
  {
    titulo: "Competitividad",
    descripcion: "Ventaja competitiva en el mercado portuario regional e internacional."
  },
  {
    titulo: "Mejora de procesos",
    descripcion: "Procesos más eficientes, documentados y controlados."
  }
]

export default function NormasPoliticas() {
  return (
    <div className="min-h-screen bg-white">
      

      {/* Contenido */}
      <div className="container mx-auto px-4 py-12">
        {/* Introducción */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <Award className="h-12 w-12 text-plp-primary mr-3" />
              <Badge className="bg-plp-primary/10 text-plp-primary text-lg px-4 py-2">
                ISO 9001:2015
              </Badge>
            </div>
            <h2 className="text-2xl font-semibold text-plp-primary mb-4">
              Sistema de Gestión de Calidad
            </h2>
            <p className="text-lg text-plp-gray-700 leading-relaxed">
              El Puerto La Plata implementa y mantiene un Sistema de Gestión de Calidad certificado bajo la norma ISO 9001:2015, 
              garantizando la excelencia en nuestros servicios y procesos operativos. Esta certificación refleja nuestro compromiso 
              con la mejora continua y la satisfacción de nuestros clientes.
            </p>
          </div>
        </section>

        {/* Objetivos principales */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-plp-primary mb-6 text-center">Objetivos principales</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {objetivos.map((objetivo, index) => (
              <Card key={index} className="p-6 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 bg-plp-primary/10 rounded-full w-fit mx-auto mb-4">
                  <objetivo.icon className="h-8 w-8 text-plp-primary" />
                </div>
                <h3 className="text-lg font-semibold text-plp-primary mb-2">{objetivo.titulo}</h3>
                <p className="text-sm text-plp-gray-700">{objetivo.descripcion}</p>
              </Card>
            ))}
          </div>
        </section>



        {/* Beneficios */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-plp-primary mb-6 text-center">Beneficios de la certificación</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {beneficios.map((beneficio, index) => (
              <Card key={index} className="p-6 border border-gray-100 shadow-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-plp-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-plp-primary mb-2">{beneficio.titulo}</h3>
                    <p className="text-sm text-plp-gray-700">{beneficio.descripcion}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Políticas específicas */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-plp-primary mb-6 text-center">Políticas implementadas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-6 w-6 text-plp-primary" />
                <h3 className="text-lg font-semibold text-plp-primary">Política de Calidad</h3>
              </div>
              <p className="text-sm text-plp-gray-700">
                Compromiso con la excelencia operativa, mejora continua y satisfacción del cliente a través de procesos estandarizados y monitoreados.
              </p>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="h-6 w-6 text-plp-primary" />
                <h3 className="text-lg font-semibold text-plp-primary">Gestión de Procesos</h3>
              </div>
              <p className="text-sm text-plp-gray-700">
                Documentación, control y mejora continua de todos los procesos operativos para garantizar eficiencia y calidad en nuestros servicios.
              </p>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-plp-primary" />
                <h3 className="text-lg font-semibold text-plp-primary">Enfoque al Cliente</h3>
              </div>
              <p className="text-sm text-plp-gray-700">
                Priorizamos las necesidades de nuestros clientes y partes interesadas, implementando mejoras basadas en sus expectativas y feedback.
              </p>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12">
          <Card className="p-8 bg-gradient-to-r from-plp-primary/5 to-plp-secondary/5 border border-plp-primary/20">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-plp-primary mb-3">
                ¿Necesitás más información sobre nuestros procesos de calidad?
              </h3>
              <p className="text-sm text-plp-gray-700 mb-6">
                Nuestro equipo de calidad está disponible para brindarte información detallada sobre nuestros procesos certificados.
              </p>
              <Button className="bg-plp-primary hover:bg-plp-primary/90">
                Contactar equipo de calidad
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  )
}
