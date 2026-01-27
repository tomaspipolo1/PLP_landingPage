"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

const timelineData = [
  {
    period: "1731-1879",
    title: "Antecesor y primeras poblaciones",
    image: "/puerto-plata-satellite.png",
    imageAlt: "Puerto La Plata en sus orígenes",
    intro:
      "Surge el Puerto de la Ensenada ante la necesidad que tuvo la Corona Española de fortificar las costas del Río de la Plata en el siglo XVII, como parte de un sistema de transporte con un valor estratégico militar de incalculable importancia geopolítica.",
    items: [
      {
        year: "1731",
        text:
          "Inicio del trazado defensivo de la Ensenada como punto estratégico del Río de la Plata.",
      },
      { year: "", text: "Aparecen los saladeros." },
      { year: "1801", text: "Ensenada es el primer asentamiento urbano de la región." },
      { year: "1871", text: "Tolosa es el segundo asentamiento urbano de la región." },
      { year: "1879", text: "Don Juan Berisso instaló dos saladeros, dando origen a la futura localidad homónima." },
    ],
  },
  {
    period: "1882-1890",
    title: "La Fundación",
    images: ["/banner.jpg", "/colorful-harbor-town.png"],
    imageAlt: "Construcción del Puerto La Plata",
    items: [
      {
        year: "1882",
        text:
          "La fundación de La Plata -ciudad Capital de la provincia de Buenos Aires- tuvo en cuenta la ubicación del territorio sobre un Puerto de aguas profundas hasta el cual pudieran llegar las embarcaciones de mayor calado, para asegurar la actividad comercial del primer estado argentina.",
      },
      {
        year: "1883",
        text:
          "Comienzan las obras de construcción del Puerto, dispuestas por decreto del presidente Julio A. Roca en 1882. Las mismas estuvieron a cargo de la empresa Lavalle, Medici y Cía. y dirigidas por el ingeniero holandés J. A. Waldorp, con un costo de 18 millones de pesos oro y 4.500 obreros.",
      },
      {
        year: "1890",
        text:
          "El 30 de marzo se realizó la inauguración del Puerto La Plata, aunque el primer buque de gran calado - Cordoan, proveniente de Marsella- ingresó en octubre de 1888, cuando los trabajos de construcción todavía estaban en curso.",
      },
    ],
  },
  {
    period: "1904-1925",
    title: "Movimiento portuario",
    image: "/colorful-harbor-town.png",
    imageAlt: "Frigoríficos históricos",
    intro: "En esta etapa, caracterizada por el movimiento de productos agrícola ganaderos para exportación, el Puerto comenzó a tener mayor movimiento gracias a la instalación de nuevos frigoríficos Armour (1904) y Swift (1915) en la localidad de Berisso. Otro hecho significativo fue la construcción del Ferrocarril Provincial, conectado directamente al Puerto La Plata, y la construcción de un elevador de granos.",
    items: [
      { year: "1904", text: "El Puerto fue traspasado al Gobierno Nacional" },
      { year: "1920", text: "Se derivaron los talleres navales y depósitos explosivos desde el Puerto de Buenos Aires." },
      { year: "1925", text: "Se inauguró la Destilería de YPF S.E. que dio al Puerto una fisonomía de puerto petrolero." },
      { year: "Segunda Guerra Mundial", text: "Se incrementó el movimiento de carnes, pero al final de la misma decreció ostensiblemente, transformándose en Puerto de cabotaje." },
    ],
  },
  {
    period: "1936-1960",
    title: "Complejo Industrial",
    image: "/banner.jpg",
    imageAlt: "Complejo industrial portuario",
    items: [
      { year: "1936", text: "Instalación del Astillero Río Santiago." },
      { year: "1940", text: "Cooperativa Argentina Textil en funcionamiento." },
      { year: "1952", text: "Fábrica Militar de Ácido Sulfúrico y consolidación del complejo industrial." },
    ],
  },
  {
    period: "1960-1999",
    title: "Especialización",
    images: ["/social/port-sunrise.png", "/banner.jpg"],
    imageAlt: "Puerto moderno",
    intro: "Aunque en esta época se produce la paralización de la actividad frigorífica, el surgimiento de varias empresas dio forma a la actual configuración del complejo portuario industrial.",
    items: [
      { year: "1962", text: "Petroquímica Ipako." },
      { year: "1969", text: "Propulsora." },
      { year: "1969", text: "Siderúrgica." },
      { year: "1974", text: "Petroquímica Gral. Mosconi." },
      { year: "1978", text: "Copetro S.A." },
      { year: "1989", text: "Polo Tecnológico e Informático de Berisso." },
      { year: "1991", text: "Surge Zona Franca La Plata." },
      { year: "1991", text: "Transferencia del Puerto a la provincia de Buenos Aires." },
    ],
  },
  {
    period: "1999-Actualidad",
    title: "Primer puerto Argentino en el Rio de La Plata",
    image: "/banner.jpg",
    imageAlt: "Puerto La Plata actual",
    intro: "El Puerto ha fijado importantes objetivos para desarrollar su potencialidad, con el esfuerzo de toda la comunidad que lo rodea, permitirán el crecimiento de La Plata, Berisso y Ensenada.",
    items: [
      { year: "1999", text: "El 29 de septiembre se crea el Consorcio de Gestión del Puerto La Plata, iniciando una etapa caracterizada por una visión moderna, orientada al futuro." },
      { year: "2000s", text: "Transición hacia la contenedorización y modernización de operaciones." },
      { year: "2010s", text: "Inversiones en infraestructura y mejoras de conectividad regional." },
      { year: "2014", text: "Con la inauguración de la terminal TecPlata, el Puerto La Plata amplió su mercado a la carga contenerizada." },
      { year: "Actualidad", text: "Plan Director para impulsar nuevas inversiones y competitividad." },
    ],
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
      {/* Título e introducción (fondo blanco) */}
      <div className="w-full bg-white pt-8 pb-6 md:pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Historia del puerto
            </h1>
            <p className="text-lg text-plp-gray-600 leading-relaxed">
              Desde sus orígenes como puerto estratégico de la Corona Española hasta su actual rol como moderno
              puerto industrial, el Puerto La Plata ha sido testigo y protagonista de la historia argentina.
            </p>
          </div>
        </div>
      </div>

      {/* Sección celeste: línea de tiempo + card */}
      <div className="w-full py-10 md:py-14 pb-16 md:pb-20" style={{ backgroundColor: "#CAE6FF" }}>
        <div className="container mx-auto px-4">
          <div className="relative max-w-6xl mx-auto">
          {/* Timeline visual */}
          <div className="hidden md:flex items-center justify-between mb-12 px-12 relative h-28">
            {/* Línea base con segmentos */}
            <div className="absolute left-0 right-0 flex items-center top-1/2 -translate-y-1/2">
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
                className={`relative flex flex-col items-center group pt-28 ${
                  index === currentPeriod ? "cursor-default" : "cursor-pointer"
                }`}
              >
                <div className="absolute top-1/2 -translate-y-1/2 z-10">
                  <div className={`w-12 h-12 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-300 shadow-sm ${
                    index === currentPeriod
                      ? "scale-[2.6] ring-4 ring-plp-primary/40"
                      : "group-hover:scale-110"
                  }`}>
                    {/* Esqueleto para futura imagen del hito */}
                    <Skeleton className={`w-full h-full ${index <= currentPeriod ? "bg-plp-primary/40" : "bg-plp-gray-200"}`} />
                  </div>
                </div>
                <span className={`text-base font-medium transition-all duration-300 ${
                  index === currentPeriod
                    ? "mt-14 text-plp-primary text-lg scale-110"
                    : " text-plp-gray-500 group-hover:text-plp-secondary"
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
                {/* Imagen del período */}
                <div className="relative bg-plp-gray-100 rounded-lg overflow-hidden aspect-video md:aspect-square w-full">
                  <img
                    src={timelineData[currentPeriod].image}
                    alt={timelineData[currentPeriod].imageAlt}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Texto en formato de introducción + punteo por año */}
                <div>
                  <div className="md:hidden mb-4 text-plp-primary font-medium">
                    {timelineData[currentPeriod].period}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-plp-primary mb-4">
                    {timelineData[currentPeriod].title}
                  </h2>
                  {timelineData[currentPeriod].intro && (
                    <p className="text-plp-gray-600 leading-relaxed mb-4">
                      {timelineData[currentPeriod].intro}
                    </p>
                  )}
                  <ul className="space-y-4">
                    {timelineData[currentPeriod].items.map((it, idx) => (
                      <li key={idx} className="text-plp-gray-700 leading-relaxed">
                        <span className="font-semibold text-plp-primary">{it.year}</span> {" "}
                        <span className="text-plp-gray-600">{it.text}</span>
                      </li>
                    ))}
                  </ul>
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
    </div>
  )
}
