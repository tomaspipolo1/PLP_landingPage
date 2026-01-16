"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

export function BreadcrumbNav() {
  const pathname = usePathname()

  // No mostrar en páginas específicas
  const pagesWithoutBreadcrumb = [
    '/',
    '/contacto/trabaja/exito',
    '/contacto/trabaja',
  ]

  if (pagesWithoutBreadcrumb.includes(pathname)) {
    return null
  }

  // Generar breadcrumbs desde la ruta
  const segments = pathname.split('/').filter(Boolean)
  
  // Mapeo de rutas especiales a títulos personalizados
  const customTitles: Record<string, string> = {
    'trabaja': 'Trabajar con nosotros',
    'contacto': 'Contacto',
    'nosotros': 'Nosotros',
    'institucional': 'Institucional',
    'servicios': 'Servicios',
    'calidad': 'Calidad',
    'comunicacion': 'Comunicación',
    'comunidad': 'Comunidad',
    'innovacion': 'Innovación',
    'licitaciones': 'Licitaciones',
    'estadisticas': 'Estadísticas'
  }

  // Función para convertir el slug a texto legible
  const formatSegment = (segment: string) => {
    // Verificar si hay un título personalizado
    if (customTitles[segment]) {
      return customTitles[segment]
    }
    
    return segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  // Construir breadcrumbs
  const breadcrumbs = [
    { label: 'Home', href: '/', icon: <Home className="h-4 w-4" /> }
  ]

  let currentPath = ''
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`
    breadcrumbs.push({
      label: formatSegment(segment),
      href: currentPath,
      icon: null
    })
  })

  return (
    <nav className="w-full py-3 bg-gray-100 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <ol className="flex items-center gap-2 text-sm">
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1
            
            return (
              <li key={crumb.href} className="flex items-center gap-2">
                {index > 0 && (
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                )}
                {isLast ? (
                  <span className="flex items-center gap-1 font-semibold text-gray-900">
                    {crumb.icon}
                    {crumb.label}
                  </span>
                ) : (
                  <Link 
                    href={crumb.href}
                    className="flex items-center gap-1 text-gray-600 hover:text-gray-900 hover:underline transition-colors"
                  >
                    {crumb.icon}
                    {crumb.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}
