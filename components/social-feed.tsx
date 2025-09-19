"use client"

import { Calendar, Instagram } from "lucide-react"

// Datos de ejemplo para las noticias
const noticias = [
  {
    id: "n1",
    titulo: "Nuevo récord en Puerto La Plata",
    contenido: "Hemos superado los 1.2M TEUs operados este año. Gracias a todo el equipo por su dedicación y profesionalismo.",
    imagen: "/social/INICIO_PANEL_TEC 1.jpg",
    fecha: "2024-03-12T14:30:00",
    tipo: "noticia"
  },
  {
    id: "n2", 
    titulo: "Llegada del MSC Magnifica",
    contenido: "Nos complace anunciar la llegada del buque MSC Magnifica a nuestro puerto. Con 293 metros de eslora, es uno de los cruceros más grandes que hemos recibido este año.",
    imagen: "/social/cruise-ship.png",
    fecha: "2024-03-10T09:15:00",
    tipo: "noticia"
  },
  {
    id: "ig1",
    titulo: "Amanecer en Puerto La Plata",
    contenido: "Comenzando un nuevo día de operaciones. #PuertoLaPlata #Amanecer #Logística",
    imagen: "/social/port-sunrise.png",
    fecha: "2024-03-08T07:30:00",
    tipo: "instagram"
  },
  {
    id: "ig2",
    titulo: "Operaciones nocturnas",
    contenido: "El puerto nunca duerme. Trabajando 24/7 para mantener la cadena logística en movimiento. #PuertoLaPlata #Operaciones #Logística",
    imagen: "/social/colorful-harbor-town.png",
    fecha: "2024-03-06T22:15:00",
    tipo: "instagram"
  },
  {
    id: "ig3",
    titulo: "Equipo en acción",
    contenido: "Nuestro equipo trabajando en la descarga de contenedores. Cada día es una nueva oportunidad de superarnos. #PuertoLaPlata #Equipo #Trabajo",
    imagen: "/social/diverse-group-city.png",
    fecha: "2024-03-04T14:30:00",
    tipo: "instagram"
  },
  {
    id: "n3",
    titulo: "Acuerdo con Puerto de Rotterdam",
    contenido: "Puerto La Plata se complace en anunciar la firma de un nuevo acuerdo de cooperación con el Puerto de Rotterdam para el intercambio de mejores prácticas en gestión portuaria.",
    imagen: "/social/INICIO_PANEL_MUP 1.jpg",
    fecha: "2024-03-05T11:45:00",
    tipo: "noticia"
  },
  {
    id: "n4",
    titulo: "Visita de estudiantes UNLP",
    contenido: "Hoy recibimos la visita de estudiantes de la Universidad Nacional de La Plata. Fue un placer mostrarles nuestras instalaciones y explicarles cómo funcionan las operaciones portuarias.",
    imagen: "/social/Visita-Puerto-LP.jpeg",
    fecha: "2024-03-03T16:20:00",
    tipo: "noticia"
  },
  {
    id: "n5",
    titulo: "Mantenimiento en acceso principal",
    contenido: "Este fin de semana realizaremos trabajos de mantenimiento en el acceso principal. Por favor utilicen la entrada alternativa por Avenida del Petróleo.",
    imagen: "/social/INICIO_PANEL_CP 3.jpg",
    fecha: "2024-03-01T13:10:00",
    tipo: "noticia"
  },
  {
    id: "n6",
    titulo: "Nueva terminal de contenedores",
    contenido: "Se inauguró la nueva terminal de contenedores con tecnología de última generación, aumentando significativamente nuestra capacidad operativa.",
    imagen: "/social/INICIO_PANEL_TEC 1.jpg",
    fecha: "2024-02-28T10:00:00",
    tipo: "noticia"
  },
  {
    id: "n7",
    titulo: "Programa de sostenibilidad ambiental",
    contenido: "Lanzamos nuestro nuevo programa de sostenibilidad ambiental con objetivos de reducción de emisiones y uso de energías renovables.",
    imagen: "/social/INICIO_PANEL_MUP 1.jpg",
    fecha: "2024-02-25T15:30:00",
    tipo: "noticia"
  },
  {
    id: "ig4",
    titulo: "Puerto bajo las estrellas",
    contenido: "Las operaciones nocturnas del puerto crean un espectáculo único bajo el cielo estrellado. #PuertoLaPlata #Noche #Operaciones #Estrellas",
    imagen: "/social/colorful-harbor-town.png",
    fecha: "2024-02-22T23:45:00",
    tipo: "instagram"
  },
  {
    id: "n8",
    titulo: "Cumplimiento de objetivos anuales",
    contenido: "Puerto La Plata superó todos los objetivos planteados para el año, consolidando su posición como uno de los puertos más eficientes de la región.",
    imagen: "/social/DSC04672.JPG",
    fecha: "2024-02-20T12:00:00",
    tipo: "noticia"
  }
]

// Componente para el feed de noticias
export function SocialFeed() {
  // Formatear fecha
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("es-AR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(date)
  }

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-medium text-center text-plp-primary mb-4">NOTICIAS Y REDES SOCIALES</h2>
        <p className="text-center text-plp-gray-600 mb-8 max-w-2xl mx-auto">
          Mantente al día con las últimas novedades y anuncios de Puerto La Plata.
        </p>

        {/* Grid de noticias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {noticias.map((noticia) => (
            <div
              key={noticia.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              {/* Imagen */}
              <div className="relative h-32">
                <img
                  src={noticia.imagen}
                  alt={noticia.titulo}
                  className="w-full h-full object-cover"
                />
                {noticia.tipo === "instagram" && (
                  <div className="absolute top-2 right-2">
                    <Instagram className="h-5 w-5 text-white bg-black/50 rounded p-1" />
                  </div>
                )}
              </div>

              {/* Contenido */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-plp-primary mb-2 line-clamp-2">
                  {noticia.titulo}
                </h3>
                <p className="text-plp-gray-700 text-sm mb-3 line-clamp-3 flex-1">
                  {noticia.contenido}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center text-xs text-plp-gray-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{formatDate(noticia.fecha)}</span>
                  </div>
                  <div className={`px-2 py-1 rounded text-xs font-medium ${
                    noticia.tipo === "instagram" 
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white" 
                      : "bg-plp-primary text-white"
                  }`}>
                    {noticia.tipo === "instagram" ? "Instagram" : "Noticia"}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón para ver más */}
        <div className="mt-8 text-center">
          <a
            href="/comunicacion/noticias"
            className="inline-block bg-plp-primary hover:bg-plp-primary/90 text-white px-6 py-3 rounded-md transition-colors"
          >
            Ver más noticias
          </a>
        </div>
      </div>
    </section>
  )
}
