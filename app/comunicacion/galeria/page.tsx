"use client"

import { useMemo, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { MoreHorizontal, Download } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const items = [
  { id: 1, src: "/placeholder.jpg", alt: "Muelle al amanecer", category: "Operaciones" },
  { id: 2, src: "/placeholder.jpg", alt: "Grúas en movimiento", category: "Operaciones" },
  { id: 3, src: "/placeholder.jpg", alt: "Zona franca", category: "Infraestructura" },
  { id: 4, src: "/placeholder.jpg", alt: "Buque en atraque", category: "Operaciones" },
  { id: 5, src: "/placeholder.jpg", alt: "Programa ambiental", category: "Sustentabilidad" },
  { id: 6, src: "/placeholder.jpg", alt: "Capacitación en seguridad", category: "Capacitación" },
  { id: 7, src: "/placeholder.jpg", alt: "Obras en muelle", category: "Infraestructura" },
  { id: 8, src: "/placeholder.jpg", alt: "Relación con la comunidad", category: "Comunidad" },
  { id: 9, src: "/placeholder.jpg", alt: "Tecnología logística", category: "Tecnología" },
  { id: 10, src: "/placeholder.jpg", alt: "Gestión ambiental", category: "Sustentabilidad" },
]

const categories = [
  "Todas",
  "Operaciones",
  "Infraestructura",
  "Sustentabilidad",
  "Capacitación",
  "Comunidad",
  "Tecnología",
]

export default function Galeria() {
  const [selected, setSelected] = useState("Todas")

  const filtered = useMemo(() => {
    if (selected === "Todas") return items
    return items.filter((i) => i.category === selected)
  }, [selected])

  const handleDownload = (src: string, filename: string) => {
    const link = document.createElement("a")
    link.href = src
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative w-full h-[300px] bg-gradient-to-r from-plp-primary to-plp-secondary overflow-hidden -mt-[var(--header-height,80px)]">
         <div className="relative h-full container mx-auto px-4 flex items-center pt-[var(--header-height,80px)]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-shadow">
            Galería</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filtros */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((c) => (
            <Badge
              key={c}
              variant={selected === c ? "default" : "outline"}
              className="cursor-pointer hover:bg-plp-primary hover:text-white transition-colors"
              onClick={() => setSelected(c)}
            >
              {c}
            </Badge>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item) => (
            <Card key={item.id} className="group relative overflow-hidden bg-white rounded-md border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img src={item.src} alt={item.alt} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="absolute top-2 left-2">
                <Badge className="bg-plp-primary/90 hover:bg-plp-primary text-xs">{item.category}</Badge>
              </div>

              {/* Menu */}
              <div className="absolute top-1 right-1">
                <DropdownMenu>
                  <DropdownMenuTrigger className="rounded-full bg-white/90 hover:bg-white shadow p-1">
                    <MoreHorizontal className="h-4 w-4 text-plp-primary" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleDownload(item.src, `${item.alt.replace(/\s+/g, "-")}.jpg`)}>
                      <Download className="h-4 w-4" /> Descargar
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
