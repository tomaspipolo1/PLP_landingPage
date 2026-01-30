"use client"

import { useParams } from "next/navigation"
import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Video, Images, CalendarDays } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
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

function DetalleInstagram({ noticia }: { noticia: NonNullable<ReturnType<typeof getNoticiaById>> }) {
  const tieneReelUrl = Boolean(noticia.reelUrl)
  const galeria = noticia.galeria?.length ? noticia.galeria : [noticia.imagen]
  const [conReel, setConReel] = useState(tieneReelUrl)

  return (
    <div className="min-h-screen bg-white">
      {/* Barra: Volver + switch Con reel / Sin reel */}
      <section className="w-full border-b border-plp-gray-200 bg-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Button variant="ghost" size="sm" className="text-plp-primary hover:bg-plp-primary/10 -ml-2" asChild>
              <Link href="/comunicacion/noticias" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Volver a noticias
              </Link>
            </Button>
            <div className="flex items-center gap-3">
              <Label htmlFor="modo-reel" className="text-sm font-medium text-plp-gray-700 cursor-pointer flex items-center gap-2">
                <Images className="h-4 w-4" />
                Sin reel
              </Label>
              <Switch
                id="modo-reel"
                checked={conReel}
                onCheckedChange={setConReel}
                disabled={!tieneReelUrl}
              />
              <Label htmlFor="modo-reel" className="text-sm font-medium text-plp-gray-700 cursor-pointer flex items-center gap-2">
                <Video className="h-4 w-4" />
                Con reel
              </Label>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido según modo */}
      {conReel && tieneReelUrl && noticia.reelUrl ? (
        /* Con reel: izquierda = imagen + texto, derecha = reel grande; abajo galería */
        <>
          <section className="w-full bg-gray-100 py-10 md:py-14">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-6xl grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 md:items-start">
                <div className="min-w-0 space-y-8 flex flex-col items-center">
                  <div className="relative w-full max-w-md aspect-[4/3] max-h-[360px] rounded-xl overflow-hidden bg-plp-gray-200 mx-auto">
                    <Image
                      src={noticia.imagen}
                      alt={noticia.titulo}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 60vw"
                      priority
                    />
                  </div>
                  <div className="text-plp-gray-700 leading-relaxed space-y-4 w-full max-w-2xl md:mx-0 mx-auto">
                    {noticia.contenido.split("\n\n").map((parrafo, i) => (
                      <p key={i}>{parrafo}</p>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center md:justify-end md:sticky md:top-8">
                  <div className="w-full max-w-[380px] md:max-w-[520px] lg:max-w-[640px] xl:max-w-[800px] aspect-[9/16] rounded-xl overflow-hidden bg-plp-gray-200 shadow-lg flex-shrink-0">
                    <iframe
                      src={noticia.reelUrl}
                      title={`Reel: ${noticia.titulo}`}
                      className="w-full h-full border-0"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-10 md:py-14 bg-white border-t border-plp-gray-200">
            <div className="container mx-auto px-4">
              <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Galería de imágenes</h2>
              <Carousel className="w-full max-w-5xl mx-auto">
                <CarouselContent className="-ml-2 md:-ml-4">
                  {galeria.map((src, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3">
                      <Card className="overflow-hidden border border-plp-gray-200 shadow-sm">
                        <div className="relative aspect-[4/3] w-full">
                          <Image src={src} alt={`${noticia.titulo} - ${index + 1}`} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" />
                        </div>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="border-2 border-plp-gray-200 bg-white" />
                <CarouselNext className="border-2 border-plp-gray-200 bg-white" />
              </Carousel>
            </div>
          </section>
        </>
      ) : (
        /* Sin reel: imagen (4:3 o 3:4), abajo texto, abajo galería */
        <>
          <section className="w-full bg-gray-100 py-10 md:py-14">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-4xl space-y-8">
                <div className="relative w-full max-w-2xl mx-auto aspect-[4/3] max-h-[400px] rounded-xl overflow-hidden bg-plp-gray-200">
                  <Image
                    src={noticia.imagen}
                    alt={noticia.titulo}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 672px"
                    priority
                  />
                </div>
                <div className="text-plp-gray-700 leading-relaxed space-y-4">
                  {noticia.contenido.split("\n\n").map((parrafo, i) => (
                    <p key={i}>{parrafo}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-10 md:py-14 bg-white border-t border-plp-gray-200">
            <div className="container mx-auto px-4">
              <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Galería de imágenes</h2>
              <Carousel className="w-full max-w-5xl mx-auto">
                <CarouselContent className="-ml-2 md:-ml-4">
                  {galeria.map((src, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3">
                      <Card className="overflow-hidden border border-plp-gray-200 shadow-sm">
                        <div className="relative aspect-[4/3] w-full">
                          <Image src={src} alt={`${noticia.titulo} - ${index + 1}`} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" />
                        </div>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="border-2 border-plp-gray-200 bg-white" />
                <CarouselNext className="border-2 border-plp-gray-200 bg-white" />
              </Carousel>
            </div>
          </section>
        </>
      )}
    </div>
  )
}

function DetalleDefault({ noticia }: { noticia: NonNullable<ReturnType<typeof getNoticiaById>> }) {
  return (
    <div className="min-h-screen bg-white">
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

      <article className="container mx-auto px-4 py-8 md:py-12 max-w-3xl">
        <Button variant="ghost" size="sm" className="mb-6 text-plp-primary hover:bg-plp-primary/10 -ml-2" asChild>
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

  if (noticia.fuente === "instagram") {
    return <DetalleInstagram noticia={noticia} />
  }

  return <DetalleDefault noticia={noticia} />
}
