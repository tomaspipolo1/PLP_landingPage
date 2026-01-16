"use client"

import { useState, useEffect } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Datos de las autoridades
const authorities = [
  {
    name: "Dra. Susana Gonzalez",
    position: "Presidente del Consorcio de Gestión del Puerto La Plata",
    image: "/autoridades/susana.jpg",
  },
  {
    name: "Alejandro Sandez",
    position: "Municipalidad de Ensenada",
    image: "/autoridades/gerente.jpg",
  },
  {
    name: "Rodolfo Chavez",
    position: "Representante de YPF",
    image: "/autoridades/gerente.jpg",
  },
  {
    name: "Martin Fernandez",
    position: "Municipalidad de Berisso",
    image: "/autoridades/gerente.jpg",
  },
  {
    name: "Facundo Pennacchioni",
    position: "Representante TecPlata",
    image: "/autoridades/gerente.jpg",
  },
  {
    name: "Dardo Rodriguez",
    position: "Municipalidad de La Plata",
    image: "/autoridades/gerente.jpg",
  },
  {
    name: "Susana Giuletti",
    position: "Municipalidad de Ensenada",
    image: "/autoridades/gerenta.jpg",
  },
]

export function AuthoritiesSection() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className="py-0">
      <div className="w-full">
        <div className="relative min-h-[600px] py-8" style={{ background: 'linear-gradient(to bottom, #131839, #79B5E3)' }}>
          <div className="relative container mx-auto px-4 flex flex-col items-center text-center text-white py-6">
            <h2 className="text-3xl md:text-4xl tracking-wide mb-6">
              Nuestras <span className="text-blue-300">autoridades</span>
            </h2>
            <p className="max-w-4xl text-white/90 mb-8">
              El Consorcio de Gestión del Puerto La Plata cuenta con un directorio integrado por representantes 
              del gobierno provincial, los municipios de Berisso, Ensenada y La Plata, y sectores empresariales y sindicales.
            </p>
            
            <div className="w-full max-w-6xl mx-auto relative px-16 md:px-20 py-4">
              <Carousel 
                setApi={setApi}
                className="w-full"
                opts={{ 
                  align: "center",
                  loop: true,
                }}
              >
                <CarouselContent className="-ml-4">
                  {authorities.map((authority, idx) => {
                    const isCenter = current === idx
                    return (
                      <CarouselItem key={idx} className="pl-4 basis-1/3">
                        <div className="h-full flex items-center justify-center py-6">
                          <Card 
                            className={`overflow-hidden shadow-lg transition-all duration-300 flex flex-col w-full ${
                              isCenter ? 'z-10' : 'opacity-90'
                            }`}
                            style={{
                              backgroundColor: 'white',
                              height: '240px',
                              width: '100%',
                              maxWidth: '100%',
                              transform: isCenter ? 'scale(1.15)' : 'scale(0.85)',
                              transformOrigin: 'center',
                            }}
                          >
                            <CardContent className="p-6 flex flex-col items-center text-center flex-1">
                              <div className="mb-4">
                                <img 
                                  src={authority.image} 
                                  alt={authority.name}
                                  className={`w-24 h-24 md:w-28 md:h-28 rounded-full object-cover ${
                                    isCenter ? '' : 'grayscale'
                                  }`}
                                  style={{
                                    filter: isCenter ? 'none' : 'grayscale(100%)',
                                  }}
                                />
                              </div>
                              <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: '#1B1E4A' }}>
                                {authority.name}
                              </h3>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                {authority.position}
                              </p>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    )
                  })}
                </CarouselContent>
                <CarouselPrevious className="-left-12 md:-left-16 h-14 w-14 bg-white/90 hover:bg-white border-gray-300 shadow-lg [&>svg]:h-6 [&>svg]:w-6" />
                <CarouselNext className="-right-12 md:-right-16 h-14 w-14 bg-white/90 hover:bg-white border-gray-300 shadow-lg [&>svg]:h-6 [&>svg]:w-6" />
              </Carousel>
            </div>

            <div className="mt-6 mb-2">
              <Link href="/institucional/estructura">
                <Button 
                  className="bg-[#1B1E4A] hover:bg-[#272C5B] text-white rounded-lg px-8 py-3"
                >
                  Ver estructura
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
