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
    href: "/puerto",
    items: [
      { label: "Sobre nosotros", href: "/puerto/nosotros" },
      { label: "Autoridad portuaria", href: "/puerto/autoridad-portuaria" },
      { label: "Estructura", href: "/puerto/estructura" },
      { label: "Historia del puerto", href: "/puerto/historia" },
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
      { label: "Ventajas competitivas", href: "/servicios/ventajas-competitivas" },
      { label: "Mapa interactivo", href: "/servicios/mapa" },
      {
        label: "Terminales",
        href: "/servicios/terminales", 
        items: [
          { label: "Terminal de Contenedores TecPlata", href: "/servicios/terminales/contenedores" },
          { label: "YPF", href: "/servicios/terminales/ypf" },
          { label: "Coopetro", href: "/servicios/terminales/coopetro" },
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
          { label: "Sanidad de Fronteras", href: "/servicios/operadores-organismos/sanidad-fronteras" },
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
    ],
  },
  {
    label: "Innovación y futuro",
    href: "/innovacion",
    items: [
      { label: "Digitalización y tecnología", href: "/innovacion/digitalizacion-tecnologia" },
      { label: "Proyectos estratégicos", href: "/innovacion/proyectos-estrategicos" },
    ],
  },
  {
    label: "Contacto",
    href: "/contacto",
    items: [
      { label: "Formulario de contacto", href: "/contacto/formulario" },
      { label: "Trabajá con nosotros", href: "/contacto/trabaja" },
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
      <ul className="flex">
        {menuItems.map((item) => (
          <li key={item.href} className="relative">
            <button
              className={`flex items-center px-4 py-2 text-base font-medium transition-colors hover:text-blue-300 text-white text-shadow whitespace-nowrap ${
                activeMenu === item.label ? "text-blue-300" : "text-white"
              }`}
              onClick={() => setActiveMenu(activeMenu === item.label ? null : item.label)}
              aria-expanded={activeMenu === item.label}
            >
              {item.label}
              <ChevronDown
                className={`ml-1 h-4 w-4 transition-transform ${activeMenu === item.label ? "rotate-180" : ""}`}
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
          <div className="flex justify-center w-full py-8">
            <div className="max-w-4xl w-full px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Primera columna con título de sección */}
                <div className="flex flex-col items-start text-left">
                  <h3 className="text-xl font-bold mb-4 border-b border-blue-400/50 pb-2 w-full">
                    {menuItems.find((item) => item.label === activeMenu)?.label}
                  </h3>
                  <ul className="space-y-3 w-full">
                    {menuItems
                      .find((item) => item.label === activeMenu)
                      ?.items.map((subItem) => (
                        <li key={subItem.href} className="text-left">
                          {subItem.items && subItem.items.length > 0 ? (
                            <>
                              <button
                                className="flex items-center hover:text-blue-300 transition-colors w-full text-left"
                                onClick={(e) => toggleSubmenu(subItem.label, e)}
                              >
                                <ChevronRight
                                  className={`h-4 w-4 mr-1 transition-transform ${
                                    expandedSubmenus.includes(subItem.label) ? "rotate-90" : ""
                                  }`}
                                />
                                {subItem.label}
                              </button>

                              {/* Submenu de tercer nivel */}
                              {expandedSubmenus.includes(subItem.label) && (
                                <ul className="mt-2 space-y-2 ml-6">
                                  {subItem.items.map((subSubItem) => (
                                    <li key={subSubItem.href} className="text-left">
                                      <Link
                                        href={subSubItem.href}
                                        className="block text-sm text-gray-300 hover:text-blue-300 transition-colors"
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
                              className="block hover:text-blue-300 transition-colors"
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
                <div className="flex flex-col bg-blue-700/80 backdrop-blur-sm p-5 rounded-lg">
                  <h4 className="font-bold mb-4 text-left w-full">Enlaces destacados</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {enlacesDestacados.map((enlace) => (
                      <Link
                        key={enlace.href}
                        href={enlace.href}
                        className="flex flex-col items-center justify-center p-3 bg-blue-800/80 rounded-lg hover:bg-blue-600/90 transition-colors text-center group"
                        onClick={() => setActiveMenu(null)}
                      >
                        <enlace.icon className="h-8 w-8 mb-2 group-hover:text-blue-300" />
                        <span className="text-sm font-medium">{enlace.label}</span>
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
