"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"

const timelineData = [
  {
    period: "1731-1879",
    title: "Los Orígenes",
    description: `El puerto de la Ensenada, antecesor del Puerto La Plata, nace de la necesidad de la Corona Española 
    de fortificar las costas del Río de La Plata en el siglo XVII. Durante la época del Virreinato, los fondeaderos de 
    Santa María del Buen Aire, la Ensenada y Montevideo formaban un sistema de transporte estratégico militar.`,
    details: `El surgimiento de la "estancia" pampeana y la introducción del "saladero" generaron el primer modelo 
    productivo exportador argentino. Ensenada y Berisso se convirtieron en principales centros saladeriles. En 1810 
    Ensenada se constituyó como el primer asentamiento urbano de la región.`,
    image: "/placeholder.jpg", // TODO: Reemplazar con imagen histórica
    imageAlt: "Puerto La Plata en sus orígenes"
  },
  {
    period: "1882-1890",
    title: "La Fundación",
    description: `La fundación de La Plata en 1882 fue consecuencia directa de la federalización de Buenos Aires. 
    La ubicación se eligió estratégicamente sobre un puerto de aguas profundas para asegurar el comercio internacional.`,
    details: `El Puerto fue inaugurado el 30 de marzo de 1890, bajo la dirección del ingeniero holandés J. A. Waldorp. 
    Las obras costaron 18 millones de pesos oro y emplearon 4.500 obreros. El diseño siguió ideas racionalistas e 
    higienistas, conectándose con el Eje Fundacional de la ciudad.`,
    image: "/placeholder.jpg",
    imageAlt: "Construcción del Puerto La Plata"
  },
  {
    period: "1904-1925",
    title: "Crecimiento Industrial",
    description: `En 1904 el Puerto se traspasó a la Nación. Este período se caracterizó por el movimiento de productos 
    agrícola-ganaderos y la instalación de importantes industrias.`,
    details: `La instalación de los frigoríficos Armour (1904) y Swift (1915) en Berisso marcó un hito. La construcción 
    del Ferrocarril Provincial y un elevador de granos potenció su alcance. En 1925 se inauguró la Destilería de YPF, 
    dando al Puerto su perfil petrolero.`,
    image: "/placeholder.jpg",
    imageAlt: "Frigoríficos históricos"
  },
  {
    period: "1936-1960",
    title: "Complejo Industrial",
    description: `Se configura el complejo portuario industrial con la instalación del Astillero Río Santiago (1936), 
    la Cooperativa Argentina Textil (1940) y la Fábrica Militar de Ácido Sulfúrico (1952).`,
    details: `Esta época marcó la transformación definitiva hacia un puerto industrial diversificado, combinando 
    actividades portuarias tradicionales con desarrollo industrial.`,
    image: "/placeholder.jpg",
    imageAlt: "Complejo industrial portuario"
  },
  {
    period: "1960-1999",
    title: "Especialización",
    description: `Entre 1960 y 1990 se produjo la especialización del Puerto. Se instalaron Petroquímica Ipako (1962), 
    Propulsora Siderúrgica (1969), Petroquímica General Mosconi (1974) y Copetro S.A (1978).`,
    details: `La creación del Polo Tecnológico (1989) y el Polígono Industrial (1990) en el ex-frigorífico Swift 
    marcaron la modernización. En 1999 se crea el Consorcio de Gestión del Puerto La Plata.`,
    image: "/placeholder.jpg",
    imageAlt: "Puerto moderno"
  },
  {
    period: "1999-Actualidad",
    title: "Puerto Moderno",
    description: `Del modelo agroexportador original al nuevo paradigma de carga contenerizada, el Puerto La Plata 
    ha evolucionado constantemente.`,
    details: `El Plan Director actual busca atraer nuevas inversiones y acompañar el crecimiento de La Plata, 
    Berisso y Ensenada, posicionándose como una alternativa confiable para el comercio nacional e internacional.`,
    image: "/placeholder.jpg",
    imageAlt: "Puerto La Plata actual"
  }
]

export default function Historia() {
  const [currentPeriod, setCurrentPeriod] = useState(0)

  const nextPeriod = () => {
    setCurrentPeriod((prev) => (prev + 1) % timelineData.length)
  }

  const prevPeriod = () => {
    setCurrentPeriod((prev) => (prev - 1 + timelineData.length) % timelineData.length)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <div className="relative w-full h-[300px] bg-gradient-to-r from-plp-primary to-plp-secondary overflow-hidden -mt-[var(--header-height,80px)]">
         <div className="relative h-full container mx-auto px-4 flex items-center pt-[var(--header-height,80px)]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-shadow">
            Historia del Puerto
          </h1>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-12">
        {/* Introducción */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-lg text-plp-gray-600 leading-relaxed">
            Desde sus orígenes como puerto estratégico de la Corona Española hasta su actual rol como moderno 
            puerto industrial, el Puerto La Plata ha sido testigo y protagonista de la historia argentina.
          </p>
        </div>

        {/* Línea de tiempo interactiva */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline visual */}
          <div className="hidden md:flex items-center justify-between mb-8 px-12 relative">
            {/* Línea base con segmentos */}
            <div className="absolute top-2 left-0 right-0 flex items-center">
              {/* Flecha izquierda */}
              <div className="absolute -left-2 -translate-y-1/2 top-1/2 w-3 h-3 border-t-2 border-l-2 border-plp-gray-300 transform -rotate-45" />
              {/* Flecha derecha */}
              <div className="absolute -right-2 -translate-y-1/2 top-1/2 w-3 h-3 border-r-2 border-t-2 border-plp-gray-300 transform rotate-45" />
              
              {/* Segmentos de la línea */}
              {timelineData.map((_, index) => (
                index < timelineData.length - 1 && (
                  <div
                    key={index}
                    className={`h-1 flex-1 transition-all duration-300 ${
                      index < currentPeriod ? "bg-plp-primary" : "bg-plp-gray-300"
                    }`}
                  />
                )
              ))}
            </div>

            {timelineData.map((period, index) => (
              <button
                key={period.period}
                onClick={() => setCurrentPeriod(index)}
                className={`relative flex flex-col items-center group ${
                  index === currentPeriod ? "cursor-default" : "cursor-pointer"
                }`}
              >
                <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentPeriod 
                    ? "bg-plp-primary scale-150 ring-4 ring-plp-primary/20" 
                    : index <= currentPeriod
                      ? "bg-plp-primary"
                      : "bg-plp-gray-300 group-hover:bg-plp-secondary"
                }`} />
                <span className={`mt-4 text-sm font-medium transition-all duration-300 ${
                  index === currentPeriod
                    ? "text-plp-primary scale-110"
                    : "text-plp-gray-500 group-hover:text-plp-secondary"
                }`}>
                  {period.period}
                </span>
              </button>
            ))}
          </div>

          {/* Contenido del período */}
          <div className="relative">
            <Card className="p-6 md:p-8 bg-white">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Imagen */}
                <div className="relative aspect-video md:aspect-square bg-plp-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={timelineData[currentPeriod].image}
                    alt={timelineData[currentPeriod].imageAlt}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Texto */}
                <div>
                  <div className="md:hidden mb-4 text-plp-primary font-medium">
                    {timelineData[currentPeriod].period}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-plp-primary mb-4">
                    {timelineData[currentPeriod].title}
                  </h2>
                  <p className="text-plp-gray-600 mb-4 leading-relaxed">
                    {timelineData[currentPeriod].description}
                  </p>
                  <p className="text-plp-gray-600 leading-relaxed">
                    {timelineData[currentPeriod].details}
                  </p>
                </div>
              </div>
            </Card>

            {/* Botones de navegación */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-4">
              <button
                onClick={prevPeriod}
                className="pointer-events-auto bg-white/80 hover:bg-white text-plp-primary rounded-full p-2 shadow-lg transition-all duration-300 -translate-x-1/2"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextPeriod}
                className="pointer-events-auto bg-white/80 hover:bg-white text-plp-primary rounded-full p-2 shadow-lg transition-all duration-300 translate-x-1/2"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
