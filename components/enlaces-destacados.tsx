"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

const enlacesDestacados = [
  { label: "Acceso al portal", href: "/login" },
  { label: "Ayudas a la navegación", href: "/servicios/ayudas-navegacion" },
  { label: "Terminal de contenedores TecPlata", href: "/servicios/terminales/contenedores" },
  { label: "Licitaciones publicadas", href: "/servicios/vision-comercial/licitaciones" },
  { label: "Tarifario", href: "/servicios/tarifario" },
  { label: "Mapa interactivo", href: "/servicios/mapa" },
  { label: "Museo", href: "/comunidad/museo" },
  { label: "Trabajar con nosotros", href: "/contacto/trabaja" },
  { label: "Contacto", href: "/contacto" },
]

export function EnlacesDestacados() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="fixed right-0 top-[20%] z-[100] flex items-start">
      {/* Botón de toggle - siempre visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-[#1B1E4A] text-white p-3 hover:bg-[#272C5B] transition-colors w-10 h-auto min-h-[3rem] flex items-center justify-center rounded-bl-lg border-r border-blue-600/30 flex-shrink-0"
        style={{
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.3)'
        }}
        aria-label={isExpanded ? "Contraer enlaces destacados" : "Expandir enlaces destacados"}
      >
        {isExpanded ? (
          <ChevronRight className="h-4 w-4" />
        ) : (
          <ChevronLeft className="h-4 w-4" />
        )}
      </button>

      {/* Panel de enlaces - se expande al lado del botón */}
      <div
        className={`bg-[#1B1E4A] text-white rounded-bl-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "w-72 opacity-100" : "w-0 opacity-0"
        }`}
        style={{
          boxShadow: isExpanded ? '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.3)' : 'none'
        }}
      >
        <div className="p-5">
          <h3 className="text-lg font-bold mb-5 text-white pb-3 border-b border-blue-600/30">
            Enlaces destacados
          </h3>
          <ul className="space-y-2.5">
            {enlacesDestacados.map((enlace, index) => (
              <li key={index}>
                <Link
                  href={enlace.href}
                  className="flex items-center justify-between group text-sm py-1.5"
                  target={enlace.href.startsWith("http") ? "_blank" : undefined}
                  rel={enlace.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <span className="flex-1 text-blue-300 underline group-hover:text-blue-200 transition-colors">
                    {enlace.label}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 ml-2 text-white flex-shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
