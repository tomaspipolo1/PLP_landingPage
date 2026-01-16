"use client"

import { usePathname } from 'next/navigation'

// Mapeo de rutas a títulos de secciones principales
const sectionTitles: Record<string, string> = {
  '/institucional': 'Institucional',
  '/servicios': 'Servicios y negocios',
  '/comunicacion': 'Comunicación',
  '/comunidad': 'Comunidad y visitas',
  '/calidad': 'Calidad y sostenibilidad',
  '/innovacion': 'Innovación y futuro',
  '/estadisticas': 'Estadísticas',
  '/contacto': 'Contacto',
  '/licitaciones': 'Licitaciones',
}

// Páginas donde NO se debe mostrar el hero
const pagesWithoutHero = [
  '/',
  '/login',
  '/registro',
  '/recuperar-contrasena',
]

export function HeroSection() {
  const pathname = usePathname()

  // No mostrar hero en páginas específicas
  if (pagesWithoutHero.includes(pathname)) {
    return null
  }

  // Obtener el título basado en la primera parte de la ruta
  const firstSegment = '/' + pathname.split('/').filter(Boolean)[0]
  const title = sectionTitles[firstSegment] || 'Puerto La Plata'

  return (
    <div className="relative w-full h-[220px] bg-gradient-to-r from-plp-primary to-plp-secondary overflow-hidden">
      <div className="relative h-full container mx-auto px-4 flex items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-shadow text-left">
          {title}
        </h1>
      </div>
    </div>
  )
}
