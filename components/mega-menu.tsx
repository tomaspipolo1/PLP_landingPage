"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ChevronDown, ChevronRight, LogIn, Anchor, Users, Award } from "lucide-react"

// Definición de tipos para la estructura del menú
type SubSubmenuItem = {
  label: string
  href: string
}

type SubmenuItem = {
  label: string
  href: string
  items?: SubSubmenuItem[]
}

type MenuItem = {
  label: string
  href: string
  items: SubmenuItem[]
}

// Estructura del menú según lo especificado
const menuItems: MenuItem[] = [
  {
    label: "Institucional",
    href: "/institucional",
    items: [
      { label: "Sobre nosotros", href: "/institucional/nosotros" },
      { label: "Autoridad portuaria", href: "/institucional/autoridad-portuaria" },
      { label: "Estructura", href: "/institucional/estructura" },
      { label: "Historia del puerto", href: "/institucional/historia" },
    ],
  },
  {
    label: "Servicios y Negocios",
    href: "/servicios",
    items: [
      { label: "Vision comercial", 
        href: "/servicios/vision-comercial",
        items: [
          { label: "Oportunidades", href: "/servicios/vision-comercial/oportunidades" },
          { label: "Licitaciones publicadas", href: "/servicios/vision-comercial/licitaciones" },
        ],
       },
      { label: "Ventajas competitivas", href: "/servicios/vision-comercial/ventajas-competitivas" },
      { label: "Mapa interactivo", href: "/servicios/vision-comercial/mapa" },
      {
        label: "Terminales",
        href: "/servicios/terminales", 
        items: [
          { label: "Terminal de Contenedores TecPlata", href: "/servicios/terminales/contenedores" },
          { label: "YPF", href: "/servicios/terminales/ypf" },
          { label: "Copetro", href: "/servicios/terminales/copetro" },
          { label: "Areneras", href: "/servicios/terminales/areneras" },
        ],
      },
      {
        label: "Operadores y organismos",
        href: "/servicios/operadores-organismos",
        items: [
          { label: "Zona franca", href: "/servicios/operadores-organismos/zona-franca" },
          { label: "Aduana", href: "/servicios/operadores-organismos/aduana" },
          { label: "Migraciones", href: "/servicios/operadores-organismos/migraciones" },
          { label: "Prefectura", href: "/servicios/operadores-organismos/prefectura" },
          { label: "Prácticos", href: "/servicios/operadores-organismos/practicos" },
          { label: "Empresas de Servicios Portuarios", href: "/servicios/operadores-organismos/empresas-servicios-portuarios" },
        ],
      },
      {
        label: "Conexiones intermodales",
        href: "/servicios/conexiones-intermodales",
        items: [
          { label: "Servicios transporte terrestre", href: "/servicios/conexiones-intermodales/transporte-terrestre" },
          { label: "Servicios a los buques", href: "/servicios/conexiones-intermodales/servicios-buques" },
        ],
      },
      { label: "Tarifario", href: "/servicios/tarifario" },
    ],
  },
  {
    label: "Comunicación",
    href: "/comunicacion",
    items: [
      { label: "Noticias", href: "/comunicacion/noticias" },
      { label: "Galeria", href: "/comunicacion/galeria" },
      { label: "Publicaciones y descargas", href: "/comunicacion/descargas" },
    ],
  },
  {
    label: "Comunidad y visitas",
    href: "/comunidad",
    items: [
      { label: "Museo", href: "/comunidad/museo" },
      { label: "Visitas educativas y guiadas", href: "/comunidad/visitas-educativas" },
      { label: "Eventos", href: "/comunidad/eventos" },
    ],
  },
  {
    label: "Calidad y sostenibilidad",
    href: "/calidad",
    items: [
      { label: "Certificaciones", href: "/calidad/certificaciones" },
      { label: "Normas y políticas", href: "/calidad/normas-politicas" },
      { label: "Sostenibilidad", href: "/calidad/sostenibilidad" },
    ],
  },
  {
    label: "Innovación y futuro",
    href: "/innovacion",
    items: [
      { label: "Digitalización y tecnologíca", href: "/innovacion/digitalizacion-tecnologica" },
      { label: "Proyectos estratégicos", href: "/innovacion/proyectos-estrategicos" },
    ],
  },
  {
    label: "Contacto",
    href: "/contacto",
    items: [
      { label: "Formulario de contacto", href: "/contacto" },
      { label: "Trabajá con nosotros", href: "https://docs.google.com/forms/d/e/1FAIpQLScqP8q8xXZjCvbruYrh02RLZiLz8qr1LyCnMypkN57J73wfww/viewform?usp=sharing" },
    ],
  },
]

// Enlaces destacados con íconos
const enlacesDestacados = [
  { label: "Acceso al portal", href: "/servicios/acceso-portal", icon: LogIn },
  { label: "Ayudas a la Navegación", href: "/servicios/ayudas-navegacion", icon: Anchor },
  { label: "Comunidad", href: "/prensa/comunidad", icon: Users },
  { label: "ISO 9001", href: "/prensa/certificaciones", icon: Award },
]

export function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [expandedSubmenus, setExpandedSubmenus] = useState<string[]>([])
  const menuRef = useRef<HTMLDivElement>(null)

  // Cerrar el menú cuando se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Función para alternar la expansión de un submenú
  const toggleSubmenu = (label: string, e: React.MouseEvent) => {
    e.preventDefault()
    setExpandedSubmenus((prev) => (prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]))
  }

  // Resetear los submenús expandidos cuando cambia el menú principal
  useEffect(() => {
    setExpandedSubmenus([])
  }, [activeMenu])

  return (
    <div className="hidden md:block relative" ref={menuRef}>
      <ul className="flex items-center justify-center gap-0.5 sm:gap-1 md:gap-1.5 lg:gap-2 xl:gap-2.5 min-w-0 overflow-hidden">
        {menuItems.map((item) => (
          <li key={item.href} className="relative flex-shrink-0">
            <button
              className={`flex items-center px-1 sm:px-1.5 md:px-2 lg:px-2.5 xl:px-3 py-1 sm:py-1.5 md:py-2 text-[0.7rem] sm:text-[0.75rem] md:text-[0.8rem] lg:text-[0.85rem] xl:text-sm font-medium transition-colors hover:text-blue-300 text-white text-shadow whitespace-nowrap ${
                activeMenu === item.label ? "text-blue-300" : "text-white"
              }`}
              onClick={() => setActiveMenu(activeMenu === item.label ? null : item.label)}
              aria-expanded={activeMenu === item.label}
            >
              {item.label}
              <ChevronDown
                className={`ml-1 h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5 lg:h-4 lg:w-4 transition-transform flex-shrink-0 ${
                  activeMenu === item.label ? "rotate-180" : ""
                }`}
              />
            </button>
          </li>
        ))}
      </ul>

      {/* Mega Menu Dropdown - Separado de los elementos de lista para posicionamiento correcto */}
      {activeMenu && (
        <div
          className="fixed left-0 right-0 z-50 bg-[#002A5B]/80 backdrop-blur-md text-white shadow-lg"
          style={{ top: "var(--header-height, 80px)" }}
        >
          <div className="flex justify-center w-full py-3 sm:py-4 md:py-5 lg:py-6 xl:py-6 2xl:py-7">
            <div className="max-w-4xl w-full px-2.5 sm:px-3 md:px-4 lg:px-5 xl:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-6 2xl:gap-8">
                {/* Primera columna con título de sección */}
                <div className="flex flex-col items-start text-left">
                  <h3 className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg font-bold mb-2.5 sm:mb-3 md:mb-4 lg:mb-5 border-b border-blue-400/50 pb-1.5 w-full">
                    {menuItems.find((item) => item.label === activeMenu)?.label}
                  </h3>
                  <ul className="space-y-1.5 sm:space-y-2 md:space-y-2.5 lg:space-y-3 xl:space-y-3.5 w-full">
                    {menuItems
                      .find((item) => item.label === activeMenu)
                      ?.items.map((subItem) => (
                        <li key={subItem.href} className="text-left">
                          {subItem.items && subItem.items.length > 0 ? (
                            <>
                              <button
                                className="flex items-center hover:text-blue-300 transition-colors w-full text-left text-[11px] sm:text-xs md:text-xs lg:text-sm xl:text-base"
                                onClick={(e) => toggleSubmenu(subItem.label, e)}
                              >
                                <ChevronRight
                                  className={`h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5 lg:h-4 lg:w-4 xl:h-4 xl:w-4 mr-1 sm:mr-1.5 md:mr-2 transition-transform ${
                                    expandedSubmenus.includes(subItem.label) ? "rotate-90" : ""
                                  }`}
                                />
                                {subItem.label}
                              </button>

                              {/* Submenu de tercer nivel */}
                              {expandedSubmenus.includes(subItem.label) && (
                                <ul className="mt-1.5 space-y-1.5 sm:space-y-2 md:space-y-2 lg:space-y-2.5 ml-3 sm:ml-4 md:ml-5 lg:ml-6">
                                  {subItem.items.map((subSubItem) => (
                                    <li key={subSubItem.href} className="text-left">
                                      <Link
                                        href={subSubItem.href}
                                        className="block text-[0.65rem] sm:text-[0.7rem] md:text-[0.75rem] lg:text-xs xl:text-sm text-gray-300 hover:text-blue-300 transition-colors"
                                        onClick={() => setActiveMenu(null)}
                                      >
                                        {subSubItem.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </>
                          ) : (
                            <Link
                              href={subItem.href}
                              className="block hover:text-blue-300 transition-colors text-[11px] sm:text-xs md:text-xs lg:text-sm xl:text-base"
                              onClick={() => setActiveMenu(null)}
                            >
                              {subItem.label}
                            </Link>
                          )}
                        </li>
                      ))}
                  </ul>
                </div>

                {/* Segunda columna - Enlaces destacados con íconos */}
                <div className="flex flex-col bg-blue-700/80 backdrop-blur-sm p-2 sm:p-2.5 md:p-3 lg:p-4 xl:p-5 2xl:p-6 rounded-lg">
                  <h4 className="font-bold mb-2 sm:mb-2.5 md:mb-3 lg:mb-4 text-left w-full text-[11px] sm:text-xs md:text-sm lg:text-base xl:text-lg">Enlaces destacados</h4>
                  <div className="grid grid-cols-2 gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 xl:gap-4">
                    {enlacesDestacados.map((enlace) => (
                      <Link
                        key={enlace.href}
                        href={enlace.href}
                        className="flex flex-col items-center justify-center p-1.5 sm:p-2 md:p-2.5 lg:p-3 bg-blue-800/80 rounded-lg hover:bg-blue-600/90 transition-colors text-center group"
                        onClick={() => setActiveMenu(null)}
                      >
                        <enlace.icon className="h-4.5 w-4.5 sm:h-5 sm:w-5 md:h-5.5 md:w-5.5 lg:h-6 lg:w-6 xl:h-7 xl:w-7 2xl:h-8 2xl:w-8 mb-1 sm:mb-1.5 md:mb-2 lg:mb-2 group-hover:text-blue-300" />
                        <span className="text-[10px] sm:text-[11px] md:text-xs lg:text-sm xl:text-base font-medium">{enlace.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
