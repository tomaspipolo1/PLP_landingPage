"use client"

import { useParams } from "next/navigation"
import { useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { CalendarDays, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getNoticiaById } from "@/lib/noticias-data"

/** Formatea "2025-03-10" -> "10 de marzo 2025" */
function formatFecha(fecha: string): string {
  const d = new Date(fecha + "T12:00:00")
  const meses = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
  ]
  return `${d.getDate()} de ${meses[d.getMonth()]} ${d.getFullYear()}`
}

export default function NoticiaDetallePage() {
  const params = useParams()
  const id = typeof params.id === "string" ? params.id : params.id?.[0]

  const noticia = useMemo(() => (id ? getNoticiaById(id) : undefined), [id])

  if (!id || !noticia) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-4 p-8">
        <h1 className="text-2xl font-bold text-plp-primary">Noticia no encontrada</h1>
        <p className="text-plp-gray-600">El id &quot;{id ?? ""}&quot; no corresponde a ninguna noticia.</p>
        <Button asChild variant="outline" className="border-plp-primary text-plp-primary">
          <Link href="/comunicacion/noticias">Volver a noticias</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero imagen + categoría */}
      <div className="relative w-full aspect-[21/9] md:aspect-[3/1] max-h-[400px] bg-plp-gray-200">
        <Image
          src={noticia.imagen}
          alt={noticia.titulo}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-plp-primary/30" />
        <div className="absolute bottom-4 left-4 right-4 md:left-0 md:right-0 md:bottom-8 md:container md:mx-auto md:px-4">
          <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-plp-primary text-white">
            {noticia.categoria}
          </span>
        </div>
      </div>

      {/* Contenido */}
      <article className="container mx-auto px-4 py-8 md:py-12 max-w-3xl">
        <Button
          variant="ghost"
          size="sm"
          className="mb-6 text-plp-primary hover:bg-plp-primary/10 -ml-2"
          asChild
        >
          <Link href="/comunicacion/noticias" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Volver a noticias
          </Link>
        </Button>

        <h1 className="text-2xl md:text-3xl font-bold text-plp-primary mb-4">
          {noticia.titulo}
        </h1>
        <div className="flex items-center gap-2 text-plp-gray-600 mb-6">
          <CalendarDays className="h-4 w-4 shrink-0" />
          <time dateTime={noticia.fecha}>{formatFecha(noticia.fecha)}</time>
        </div>

        <div className="text-plp-gray-700 leading-relaxed space-y-4">
          {noticia.contenido.split("\n\n").map((parrafo, i) => (
            <p key={i} className="mb-4 last:mb-0">
              {parrafo}
            </p>
          ))}
        </div>
      </article>
    </div>
  )
}
