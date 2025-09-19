import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

// Datos de las autoridades
const authorities = [
  {
    name: "José M. Lojo",
    position: "Presidente del Consorcio de Gestión del Puerto La Plata",
    image: "/placeholder-user.jpg",
  },
  {
    name: "Alejandro Sandez",
    position: "Municipalidad de Ensenada",
    image: "/placeholder-user.jpg",
  },
  {
    name: "Rodolfo Chavez",
    position: "Representante de YPF",
    image: "/placeholder-user.jpg",
  },
  {
    name: "Martin Fernandez",
    position: "Municipalidad de Berisso",
    image: "/placeholder-user.jpg",
  },
  {
    name: "Facundo Pennacchioni",
    position: "Representante TecPlata",
    image: "/placeholder-user.jpg",
  },
  {
    name: "Dardo Rodriguez",
    position: "Municipalidad de La Plata",
    image: "/placeholder-user.jpg",
  },
  {
    name: "Susana Giuletti",
    position: "Municipalidad de Ensenada",
    image: "/placeholder-user.jpg",
  },
]

export function AuthoritiesSection() {
  return (
    <section className="py-0">
      <div className="w-full">
        <div className="relative h-[520px]">
          <img src="/placeholder.jpg" alt="Fondo autoridades" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative h-full container mx-auto px-4 flex flex-col items-center justify-center text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-6">
              NUESTRAS <span className="text-blue-300">AUTORIDADES</span>
            </h2>
            <p className="max-w-4xl text-white/90 mb-8">
              El Consorcio de Gestión del Puerto La Plata cuenta con un directorio integrado por representantes 
              del gobierno provincial, los municipios de Berisso, Ensenada y La Plata, y sectores empresariales y sindicales.
            </p>
            
            <Carousel className="w-full" opts={{ align: "start", loop: true }}>
              <CarouselContent className="-ml-2 md:-ml-4">
                {authorities.map((authority, idx) => (
                  <CarouselItem key={idx} className="pl-2 md:pl-4 basis-full">
                    <div className="flex flex-col items-center">
                      <img 
                        src={authority.image} 
                        alt={authority.name}
                        className="w-32 h-32 rounded-full object-cover border-4 border-white/80 mb-4" 
                      />
                      <h3 className="text-2xl font-semibold text-center">{authority.name}</h3>
                      <p className="text-white/80 text-center max-w-md">{authority.position}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-6 bg-white/20 hover:bg-white/30 text-white" />
              <CarouselNext className="right-6 bg-white/20 hover:bg-white/30 text-white" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}
