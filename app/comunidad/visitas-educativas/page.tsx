"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, ExternalLink } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function VisitasEducativas() {
  const guiaPdfHref = "/docs/guia-visitas-educativas.pdf" // TODO: reemplazar cuando esté disponible

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative w-full h-[220px] bg-gradient-to-r from-plp-primary to-plp-secondary overflow-hidden -mt-[var(--header-height,80px)]">
        <div className="absolute inset-0 bg-plp-overlay-light" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-plp-overlay/10 backdrop-blur-sm" />
                 <div className="relative h-full container mx-auto px-4 flex items-center pt-[var(--header-height,80px)]">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white text-shadow">Visitas educativas y guiadas</h1>
            <p className="mt-2 text-white/90 max-w-2xl">
              Programas para escuelas, universidades y grupos comunitarios con foco en historia portuaria, tecnología
              e impacto territorial.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Descripción */}
        <section className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-5 md:col-span-2">
            <h2 className="text-2xl font-semibold text-plp-primary mb-3">¿Cómo son las visitas?</h2>
            <ul className="list-disc ml-5 space-y-2 text-plp-gray-700">
              <li>Recorridos guiados por áreas operativas y puntos históricos (según disponibilidad y protocolos).</li>
              <li>Enfoque pedagógico por niveles: primaria, secundaria, terciario/universitario.</li>
              <li>Duración estimada: 60–90 minutos. Cupos por grupo y requerimientos de seguridad.</li>
              <li>Adaptables a contenidos curriculares: historia, ciudadanía, geografía, tecnología, ambiente.</li>
            </ul>
            <p className="mt-4 text-plp-gray-700">
              Todas las visitas se coordinan previamente y requieren aprobación según agenda operativa, normativa de
              seguridad y documentación del grupo responsable.
            </p>
          </Card>

          {/* CTA de solicitud */}
          <Card className="p-5 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-plp-primary mb-2">Solicitar una visita</h3>
              <p className="text-sm text-plp-gray-600 mb-4">
                Completá una breve solicitud indicando institución, cantidad de asistentes, nivel educativo y fecha
                tentativa.
              </p>
            </div>
            <div className="flex gap-3">
              {/* Botón placeholder a futuro módulo de solicitudes */}
              <Button asChild className="bg-plp-primary hover:bg-plp-primary/90">
                <a href="#" aria-label="Solicitar visita (módulo próximamente)">Solicitar visita</a>
              </Button>
              <Button asChild variant="outline" className="border-plp-primary text-plp-primary">
                <a href="#" aria-label="Consultar disponibilidad (próximamente)">Consultar disponibilidad</a>
              </Button>
            </div>
          </Card>
        </section>

        {/* Guía en PDF */}
        <section>
          <Card className="p-5">
            <div className="flex items-start md:items-center justify-between gap-4 flex-col md:flex-row">
              <div>
                <h3 className="text-lg font-semibold text-plp-primary mb-1">Guía para solicitar una visita</h3>
                <p className="text-sm text-plp-gray-600 max-w-3xl">
                  Descargá la guía con los pasos, requisitos y documentación necesaria para coordinar una visita
                  educativa o guiada.
                </p>
              </div>
              <div className="flex gap-2">
                <Button asChild variant="outline" className="border-plp-primary text-plp-primary">
                  <a href={guiaPdfHref} download>
                    <FileText className="h-4 w-4 mr-2" /> Descargar PDF
                  </a>
                </Button>
                <Button asChild variant="ghost" className="text-plp-primary">
                  <a href={guiaPdfHref} target="_blank" rel="noopener noreferrer">
                    Ver online <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </section>

        {/* Preguntas frecuentes */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-plp-primary mb-4">Preguntas frecuentes</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq-1">
              <AccordionTrigger>¿Quiénes pueden solicitar visitas?</AccordionTrigger>
              <AccordionContent>
                Instituciones educativas de todos los niveles, universidades, organizaciones comunitarias y grupos
                con fines pedagógicos. Las visitas están sujetas a disponibilidad operativa.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-2">
              <AccordionTrigger>¿Con cuánta anticipación debo pedir una visita?</AccordionTrigger>
              <AccordionContent>
                Recomendamos al menos 15 días hábiles de anticipación para coordinar agenda, validar protocolos de
                seguridad y documentación del grupo.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-3">
              <AccordionTrigger>¿Qué documentación se requiere?</AccordionTrigger>
              <AccordionContent>
                Listado de asistentes, responsable a cargo, datos de contacto, carta de presentación institucional y
                cualquier otra documentación que solicite el área de seguridad.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-4">
              <AccordionTrigger>¿Hay requisitos de seguridad o vestimenta?</AccordionTrigger>
              <AccordionContent>
                Sí. Se indicará vestimenta y elementos obligatorios según el recorrido. Algunas áreas requieren
                casco y chaleco reflectivo provistos durante la visita.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-5">
              <AccordionTrigger>¿Las visitas tienen costo?</AccordionTrigger>
              <AccordionContent>
                No. Las visitas educativas y guiadas son gratuitas. El traslado hasta el punto de encuentro corre por
                cuenta del grupo visitante.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </div>
  )
}
