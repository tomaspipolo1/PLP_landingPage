"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock } from "lucide-react"

// Datos de ejemplo - luego se moverán a una API/CMS
const noticias = [
  {
    id: 1,
    titulo: "Puerto La Plata alcanza récord histórico en movimiento de contenedores",
    descripcion: "Durante el último trimestre, el puerto registró un incremento del 45% en el movimiento de contenedores, superando las expectativas del sector y consolidándose como un hub logístico clave en la región.",
    imagen: "/placeholder.jpg",
    categoria: "Operaciones",
    fecha: "2025-09-02",
    tiempo: "5 min",
    destacada: true
  },
  {
    id: 2,
    titulo: "Nueva certificación ambiental para terminales portuarias",
    descripcion: "Las terminales del Puerto La Plata obtuvieron la certificación ISO 14001:2025, reafirmando su compromiso con la sostenibilidad.",
    imagen: "/placeholder.jpg",
    categoria: "Sustentabilidad",
    fecha: "2025-09-01",
    tiempo: "3 min"
  },
  {
    id: 3,
    titulo: "Visita de delegación internacional fortalece lazos comerciales",
    descripcion: "Representantes de puertos europeos visitaron nuestras instalaciones para explorar oportunidades de colaboración.",
    imagen: "/placeholder.jpg",
    categoria: "Relaciones",
    fecha: "2025-08-31",
    tiempo: "4 min"
  },
  {
    id: 4,
    titulo: "Programa de capacitación 2025 para trabajadores portuarios",
    descripcion: "Se lanza nuevo programa de formación continua para personal operativo y administrativo del puerto.",
    imagen: "/placeholder.jpg",
    categoria: "Capacitación",
    fecha: "2025-08-30",
    tiempo: "3 min"
  },
  {
    id: 5,
    titulo: "Avances en obras de modernización de infraestructura",
    descripcion: "Las obras de ampliación del muelle principal avanzan según lo programado, con un 60% de progreso.",
    imagen: "/placeholder.jpg",
    categoria: "Infraestructura",
    fecha: "2025-08-29",
    tiempo: "6 min"
  },
  {
    id: 6,
    titulo: "Puerto La Plata firma acuerdo de cooperación con Rotterdam",
    descripcion: "El convenio permitirá intercambiar mejores prácticas y tecnología con uno de los puertos más importantes del mundo.",
    imagen: "/placeholder.jpg",
    categoria: "Internacional",
    fecha: "2025-08-28",
    tiempo: "4 min"
  },
  {
    id: 7,
    titulo: "Nuevo sistema de gestión ambiental reduce emisiones en un 30%",
    descripcion: "La implementación de tecnologías verdes marca un hito en la sustentabilidad portuaria.",
    imagen: "/placeholder.jpg",
    categoria: "Sustentabilidad",
    fecha: "2025-08-27",
    tiempo: "5 min"
  },
  {
    id: 8,
    titulo: "Exitoso simulacro de emergencia en terminal de contenedores",
    descripcion: "El ejercicio demostró la efectividad de los protocolos de seguridad actualizados.",
    imagen: "/placeholder.jpg",
    categoria: "Seguridad",
    fecha: "2025-08-26",
    tiempo: "3 min"
  },
  {
    id: 9,
    titulo: "Puerto La Plata lidera innovación en logística portuaria",
    descripcion: "La implementación de inteligencia artificial optimiza tiempos de operación y reduce costos.",
    imagen: "/placeholder.jpg",
    categoria: "Tecnología",
    fecha: "2025-08-25",
    tiempo: "4 min"
  },
  {
    id: 10,
    titulo: "Comunidad portuaria celebra día del trabajador marítimo",
    descripcion: "Eventos y reconocimientos destacan la labor esencial de los trabajadores del sector.",
    imagen: "/placeholder.jpg",
    categoria: "Comunidad",
    fecha: "2025-08-24",
    tiempo: "3 min"
  }
]

const categorias = ["Todas", "Operaciones", "Sustentabilidad", "Relaciones", "Capacitación", "Infraestructura", "Internacional", "Seguridad", "Tecnología", "Comunidad"]

export default function Noticias() {
  const noticiaDestacada = noticias.find(n => n.destacada)
  const noticiasRegulares = noticias.filter(n => !n.destacada)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <div className="relative w-full h-[300px] bg-gradient-to-r from-plp-primary to-plp-secondary overflow-hidden -mt-[var(--header-height,80px)]">
         <div className="relative h-full container mx-auto px-4 flex items-center pt-[var(--header-height,80px)]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-shadow">
            Noticias y Novedades
          </h1>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-12">
        {/* Filtros */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categorias.map((cat) => (
            <Badge
              key={cat}
              variant={cat === "Todas" ? "default" : "outline"}
              className="cursor-pointer hover:bg-plp-primary hover:text-white transition-colors"
            >
              {cat}
            </Badge>
          ))}
        </div>

        {/* Grid de noticias */}
        <div className="grid grid-cols-12 gap-4 mb-12">
          {/* Noticia principal */}
          {noticiaDestacada && (
            <div className=" col-span-1 col-span-8 group cursor-pointer bg-white rounded-md shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden">
              <div className="relative w-full h-[500px] overflow-hidden">
                <img
                  src={noticiaDestacada.imagen}
                  alt={noticiaDestacada.titulo}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-2 left-2 bg-plp-primary/90 hover:bg-plp-primary text-xs">
                  {noticiaDestacada.categoria}
                </Badge>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-3 text-xs text-plp-gray-500 mb-2">
                  <span>{new Date(noticiaDestacada.fecha).toLocaleDateString()}</span>
                  <span>{noticiaDestacada.tiempo} lectura</span>
                </div>
                <h2 className="text-xl font-bold text-plp-primary mb-2 group-hover:text-plp-secondary transition-colors line-clamp-2">
                  {noticiaDestacada.titulo}
                </h2>
                <p className="text-sm text-plp-gray-600 line-clamp-2">
                  {noticiaDestacada.descripcion}
                </p>
              </div>
            </div>
          )}

          {/* Noticias secundarias */}
          <div className="col-span-12 lg:col-span-4">
            <div className="grid gap-4">
              {noticiasRegulares.slice(0, 2).map((noticia) => (
                <div key={noticia.id} className="group cursor-pointer bg-white rounded-md shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={noticia.imagen}
                      alt={noticia.titulo}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 left-2 bg-plp-primary/90 hover:bg-plp-primary text-xs">
                      {noticia.categoria}
                    </Badge>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-3 text-xs text-plp-gray-500 mb-1">
                      <span>{new Date(noticia.fecha).toLocaleDateString()}</span>
                      <span>{noticia.tiempo} lectura</span>
                    </div>
                    <h3 className="text-base font-bold text-plp-primary group-hover:text-plp-secondary transition-colors line-clamp-2">
                      {noticia.titulo}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Noticias en lista */}
          <div className="col-span-12">
            <div className="grid md:grid-cols-3 gap-4">
              {noticiasRegulares.slice(2).map((noticia) => (
                <div key={noticia.id} className="group cursor-pointer bg-white rounded-md shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <img
                      src={noticia.imagen}
                      alt={noticia.titulo}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 left-2 bg-plp-primary/90 hover:bg-plp-primary text-xs">
                      {noticia.categoria}
                    </Badge>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-3 text-xs text-plp-gray-500 mb-1">
                      <span>{new Date(noticia.fecha).toLocaleDateString()}</span>
                      <span>{noticia.tiempo} lectura</span>
                    </div>
                    <h3 className="text-base font-bold text-plp-primary group-hover:text-plp-secondary transition-colors line-clamp-2">
                      {noticia.titulo}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Botón de cargar más */}
        <div className="text-center">
          <button className="px-6 py-3 bg-white border-2 border-plp-primary text-plp-primary hover:bg-plp-primary hover:text-white rounded-lg font-medium transition-colors">
            Cargar más noticias
          </button>
        </div>
      </div>
    </div>
  )
}