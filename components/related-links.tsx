"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

// Define related links for each section
const sectionRelatedLinks: Record<string, Array<{ title: string; href: string }>> = {
  "/institucional": [
    { title: "Autoridad Portuaria", href: "/institucional/autoridad-portuaria" },
    { title: "Historia del Puerto", href: "/institucional/historia" },
    { title: "Estructura Organizacional", href: "/institucional/estructura" },
    { title: "Servicios Portuarios", href: "/servicios/vision-comercial/mapa" }
  ],
  "/servicios": [
    { title: "Terminales", href: "/servicios/terminales/contenedores" },
    { title: "Operadores y Organismos", href: "/servicios/operadores-organismos/aduana" },
    { title: "Tarifario", href: "/servicios/tarifario" },
    { title: "Visión Comercial", href: "/servicios/vision-comercial/mapa" }
  ],
  "/calidad": [
    { title: "Certificaciones", href: "/calidad/certificaciones" },
    { title: "Normas y Políticas", href: "/calidad/normas-politicas" },
    { title: "Sostenibilidad", href: "/calidad/sostenibilidad" },
    { title: "Innovación", href: "/innovacion/digitalizacion-tecnologica" }
  ],
  "/comunicacion": [
    { title: "Noticias", href: "/comunicacion/noticias" },
    { title: "Galería", href: "/comunicacion/galeria" },
    { title: "Descargas", href: "/comunicacion/descargas" },
    { title: "Eventos", href: "/comunidad/eventos" }
  ],
  "/comunidad": [
    { title: "Eventos", href: "/comunidad/eventos" },
    { title: "Visitas Educativas", href: "/comunidad/visitas-educativas" },
    { title: "Museo", href: "/comunidad/museo" },
    { title: "Noticias", href: "/comunicacion/noticias" }
  ],
  "/innovacion": [
    { title: "Digitalización Tecnológica", href: "/innovacion/digitalizacion-tecnologica" },
    { title: "Proyectos Estratégicos", href: "/innovacion/proyectos-estrategicos" },
    { title: "Sostenibilidad", href: "/calidad/sostenibilidad" },
    { title: "Estadísticas", href: "/estadisticas" }
  ],
  "/licitaciones": [
    { title: "Licitaciones Abiertas", href: "/licitaciones/abiertas" },
    { title: "Licitaciones Cerradas", href: "/licitaciones/cerradas" },
    { title: "Oportunidades de Negocio", href: "/servicios/vision-comercial/oportunidades" },
    { title: "Contacto", href: "/contacto" }
  ],
  "/contacto": [
    { title: "Servicios Portuarios", href: "/servicios/vision-comercial/mapa" },
    { title: "Licitaciones", href: "/licitaciones" },
    { title: "Oportunidades", href: "/servicios/vision-comercial/oportunidades" },
    { title: "Nosotros", href: "/institucional/nosotros" }
  ]
}

export function RelatedLinks() {
  const pathname = usePathname()
  const [isNotFound, setIsNotFound] = useState(false)

  // Detectar si estamos en página not-found
  useEffect(() => {
    const checkNotFound = () => {
      setIsNotFound(document.body.classList.contains('page-not-found'))
    }
    
    checkNotFound()
    
    // Observer para detectar cambios en las clases del body
    const observer = new MutationObserver(checkNotFound)
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] })
    
    return () => observer.disconnect()
  }, [])

  // No mostrar en página Not Found
  if (isNotFound) {
    return null
  }
  
  // Don't show on home page, login, register, or success pages
  const pagesWithoutLinks = [
    '/',
    '/login',
    '/registro',
    '/contacto/trabaja/exito'
  ]
  
  if (pagesWithoutLinks.includes(pathname)) {
    return null
  }

  // Get the main section from pathname
  const firstSegment = '/' + pathname.split('/').filter(Boolean)[0]
  const links = sectionRelatedLinks[firstSegment]

  // If no links defined for this section, don't render
  if (!links || links.length === 0) {
    return null
  }

  return (
    <section className="w-full py-4 md:py-5" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-xl p-4 md:p-5 xl:p-6" style={{ 
            border: '1px solid #4A90E2',
            backgroundColor: 'white'
          }}>
            <h2 className="text-base md:text-lg xl:text-xl font-semibold mb-3 md:mb-4" style={{ color: '#4A90E2' }}>
              Otras secciones que podrían interesarte...
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="flex items-center justify-between p-2.5 md:p-3 rounded-lg transition-all duration-300 hover:bg-gray-50 group"
                  style={{ 
                    border: '1px solid #E5E7EB'
                  }}
                >
                  <span className="text-xs md:text-sm font-medium group-hover:text-blue-600 transition-colors" style={{ color: '#4A90E2' }}>
                    {link.title}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4 ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" style={{ color: '#4A90E2' }} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
