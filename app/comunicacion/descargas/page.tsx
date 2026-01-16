"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  FileText,
  Image as ImageIcon,
  PlayCircle,
  Download,
  BookOpen,
  Map,
  Camera,
  FolderArchive,
} from "lucide-react"

const recursos = [
  {
    id: "videos",
    titulo: "Videos institucionales",
    descripcion:
      "Material audiovisual del Puerto La Plata para prensa y presentaciones.",
    icon: PlayCircle,
    href: "#",
    etiqueta: "MP4 / HD"
  },
  {
    id: "fotos",
    titulo: "Banco de imágenes",
    descripcion:
      "Fotografías en alta calidad de terminales, operaciones y áreas del puerto.",
    icon: Camera,
    href: "#",
    etiqueta: "JPG / PNG"
  },
  {
    id: "brochure",
    titulo: "Brochure comercial",
    descripcion:
      "Presentación institucional con capacidades, servicios y ventajas competitivas.",
    icon: FileText,
    href: "#",
    etiqueta: "PDF"
  },
  {
    id: "mapas",
    titulo: "Mapas y planos",
    descripcion:
      "Plano general del puerto, accesos, batimetría y áreas operativas.",
    icon: Map,
    href: "#",
    etiqueta: "PDF / PNG"
  },
  {
    id: "kits",
    titulo: "Kit de prensa",
    descripcion:
      "Paquete con logos, lineamientos de marca y recursos de comunicación.",
    icon: FolderArchive,
    href: "#",
    etiqueta: "ZIP"
  },
]

export default function PublicacionesDescargas() {
  return (
    <div className="min-h-screen bg-white">
    

      {/* Contenido */}
      <div className="container mx-auto px-4 py-12">
        {/* Introducción */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-plp-gray-700 leading-relaxed">
              En esta sección encontrarás enlaces de acceso a material en alta calidad: videos, 
              fotografías, brochure comercial, mapas y recursos de prensa. Todo el contenido está
              preparado para uso institucional y comunicacional del Puerto La Plata.
            </p>
          </div>
        </section>

        {/* Recursos descargables */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-plp-primary mb-6 text-center">Material disponible</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recursos.map((item) => (
              <Card key={item.id} className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-plp-primary/10 rounded-lg">
                    <item.icon className="h-6 w-6 text-plp-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-plp-primary">{item.titulo}</h3>
                    <p className="text-sm text-plp-gray-700 mt-1">{item.descripcion}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <Badge className="bg-plp-primary/10 text-plp-primary text-xs">{item.etiqueta}</Badge>
                    </div>
                    <div className="mt-4">
                      <Link href={item.href}>
                        <Button size="sm" className="bg-plp-primary hover:bg-plp-primary/90">
                          <Download className="mr-2 h-4 w-4" />
                          Acceder
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Nota */}
        <section className="mb-12">
          <Card className="p-6 bg-gradient-to-r from-plp-primary/5 to-plp-secondary/5 border border-plp-primary/20">
            <div className="text-center">
              <p className="text-sm text-plp-gray-700">
                Si necesitás otros formatos, materiales específicos o permisos de uso, 
                ponete en contacto con nuestro equipo de comunicación.
              </p>
              <div className="mt-4">
                <Link href="/contacto">
                  <Button variant="outline" className="border-plp-primary text-plp-primary hover:bg-plp-primary/10">
                    Contactar comunicación
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  )
}
