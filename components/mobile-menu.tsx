"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

// Definición de tipos para la estructura del menú (igual que en mega-menu.tsx)
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

// Importamos la misma estructura de menú que usamos en el mega-menu
const menuItems: MenuItem[] = [
  {
    label: "El Puerto",
    href: "/puerto",
    items: [
      { label: "Historia del puerto", href: "/puerto/historia" },
      { label: "Ubicación estratégica", href: "/puerto/ubicacion" },
      { label: "Autoridades", href: "/puerto/autoridades" },
      { label: "Plan estratégico", href: "/puerto/plan-estrategico" },
      { label: "Proyecto", href: "/puerto/proyecto" },
    ],
  },
  {
    label: "Comercial",
    href: "/comercial",
    items: [
      { label: "Mapa interactivo", href: "/comercial/mapa" },
      { label: "Servicio Ferroviario", href: "/comercial/servicio-ferroviario" },
      { label: "Tarifario", href: "/comercial/tarifario" },
      {
        label: "Terminales",
        href: "/comercial/terminales",
        items: [
          { label: "Contenedores", href: "/comercial/terminales/contenedores" },
          { label: "Graneles líquidos", href: "/comercial/terminales/graneles-liquidos" },
          { label: "Graneles sólidos", href: "/comercial/terminales/graneles-solidos" },
          { label: "Muelle uso público", href: "/comercial/terminales/muelle-uso-publico" },
          { label: "Cabecera Río Santiago Oeste", href: "/comercial/terminales/cabecera-rio-santiago" },
        ],
      },
      {
        label: "Accesos",
        href: "/comercial/accesos",
        items: [
          { label: "Vial", href: "/comercial/accesos/vial" },
          { label: "Náutico", href: "/comercial/accesos/nautico" },
          { label: "Ferroviario", href: "/comercial/accesos/ferroviario" },
        ],
      },
    ],
  },
  {
    label: "Prensa",
    href: "/prensa",
    items: [
      { label: "Noticias", href: "/prensa/noticias" },
      { label: "Eventos", href: "/prensa/eventos" },
      { label: "Certificaciones de calidad", href: "/prensa/certificaciones" },
      { label: "Comunidad", href: "/prensa/comunidad" },
      { label: "Galería de imágenes", href: "/prensa/galeria" },
    ],
  },
  {
    label: "Servicios",
    href: "/servicios",
    items: [
      { label: "Acceso portal", href: "/servicios/acceso-portal" },
      { label: "Ayudas a la navegación", href: "/servicios/ayudas-navegacion" },
      { label: "Estadísticas", href: "/servicios/estadisticas" },
      { label: "Documentación Portuaria", href: "/servicios/documentacion" },
    ],
  },
  {
    label: "Contacto",
    href: "/contacto",
    items: [
      { label: "Datos de contacto", href: "/contacto/datos" },
      { label: "Formulario de contacto", href: "/contacto/formulario" },
      { label: "Trabajá con nosotros", href: "/contacto/trabaja" },
    ],
  },
]

// Componente para el menú móvil
export function MobileMenu() {
  const [open, setOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const [expandedSubItems, setExpandedSubItems] = useState<string[]>([])

  const toggleItem = (label: string) => {
    setExpandedItems((prev) => (prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]))
  }

  const toggleSubItem = (label: string) => {
    setExpandedSubItems((prev) => (prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]))
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Abrir menú</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[500px] sm:w-[900px] p-0">
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">Menú</h2>
              <SheetClose asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-5 w-5" />
                  <span className="sr-only">Cerrar</span>
                </Button>
              </SheetClose>
            </div>
          </div>

          <div className="flex-1 overflow-auto py-2">
            <nav className="flex flex-col">
              {menuItems.map((item) => (
                <div key={item.href} className="border-b border-gray-100">
                  <button
                    className="flex items-center justify-between w-full p-4 text-left"
                    onClick={() => toggleItem(item.label)}
                  >
                    <span className="font-medium">{item.label}</span>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${
                        expandedItems.includes(item.label) ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {expandedItems.includes(item.label) && (
                    <div className="pl-4 pr-2 pb-2">
                      {item.items.map((subItem) => (
                        <div key={subItem.href} className="mb-1">
                          {subItem.items ? (
                            <>
                              <button
                                className="flex items-center justify-between w-full p-2 text-left text-sm"
                                onClick={() => toggleSubItem(subItem.label)}
                              >
                                <span>{subItem.label}</span>
                                <ChevronRight
                                  className={`h-4 w-4 transition-transform ${
                                    expandedSubItems.includes(subItem.label) ? "rotate-90" : ""
                                  }`}
                                />
                              </button>

                              {expandedSubItems.includes(subItem.label) && (
                                <div className="pl-4 py-1">
                                  {subItem.items.map((subSubItem) => (
                                    <SheetClose asChild key={subSubItem.href}>
                                      <Link
                                        href={subSubItem.href}
                                        className="block p-2 text-sm text-gray-600 hover:text-blue-600"
                                      >
                                        {subSubItem.label}
                                      </Link>
                                    </SheetClose>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            <SheetClose asChild>
                              <Link href={subItem.href} className="block p-2 text-sm hover:text-blue-600">
                                {subItem.label}
                              </Link>
                            </SheetClose>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
