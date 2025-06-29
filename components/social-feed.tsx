"use client"

import { useState } from "react"
import { Twitter, Facebook, Instagram, Linkedin, Calendar, MessageCircle, Heart, Share2 } from "lucide-react"

// Tipos para las publicaciones de redes sociales
type SocialNetwork = "twitter" | "facebook" | "instagram" | "linkedin" | "all"

interface SocialPost {
  id: string
  network: Exclude<SocialNetwork, "all">
  content: string
  image?: string
  date: string
  likes: number
  comments: number
  shares: number
  author: {
    name: string
    avatar: string
    handle?: string
  }
}

// Datos de ejemplo para las publicaciones
const socialPosts: SocialPost[] = [
  {
    id: "tw1",
    network: "twitter",
    content:
      "¡Nuevo récord en Puerto La Plata! Hemos superado los 1.2M TEUs operados este año. Gracias a todo el equipo por su dedicación y profesionalismo. #PuertoLaPlata #Logística #Récord",
    date: "2023-04-12T14:30:00",
    likes: 45,
    comments: 12,
    shares: 23,
    author: {
      name: "Puerto La Plata",
      avatar: "/logo-plp.png",
      handle: "@PuertoLaPlata",
    },
  },
  {
    id: "fb1",
    network: "facebook",
    content:
      "Nos complace anunciar la llegada del buque MSC Magnifica a nuestro puerto. Con 293 metros de eslora, es uno de los cruceros más grandes que hemos recibido este año. ¡Bienvenidos a La Plata!",
    image: "/social/cruise-ship.png",
    date: "2023-04-10T09:15:00",
    likes: 128,
    comments: 34,
    shares: 45,
    author: {
      name: "Puerto La Plata",
      avatar: "/logo-plp.png",
    },
  },
  {
    id: "ig1",
    network: "instagram",
    content: "Amanecer en Puerto La Plata. Comenzando un nuevo día de operaciones. #PuertoLaPlata #Amanecer #Logística",
    image: "/social/port-sunrise.png",
    date: "2023-04-08T07:30:00",
    likes: 256,
    comments: 18,
    shares: 12,
    author: {
      name: "puertolaplata",
      avatar: "/logo-plp.png",
    },
  },
  {
    id: "li1",
    network: "linkedin",
    content:
      "Puerto La Plata se complace en anunciar la firma de un nuevo acuerdo de cooperación con el Puerto de Rotterdam para el intercambio de mejores prácticas en gestión portuaria y sostenibilidad. Este acuerdo fortalecerá nuestras capacidades y nos permitirá implementar tecnologías de vanguardia en nuestras operaciones.",
    date: "2023-04-05T11:45:00",
    likes: 89,
    comments: 15,
    shares: 32,
    author: {
      name: "Puerto La Plata",
      avatar: "/logo-plp.png",
    },
  },
  {
    id: "tw2",
    network: "twitter",
    content:
      "Hoy recibimos la visita de estudiantes de la Universidad Nacional de La Plata. Fue un placer mostrarles nuestras instalaciones y explicarles cómo funcionan las operaciones portuarias. ¡El futuro de la logística está en buenas manos! #Educación #UNLP",
    image: "/social/students-visit.png",
    date: "2023-04-03T16:20:00",
    likes: 67,
    comments: 8,
    shares: 14,
    author: {
      name: "Puerto La Plata",
      avatar: "/logo-plp.png",
      handle: "@PuertoLaPlata",
    },
  },
  {
    id: "fb2",
    network: "facebook",
    content:
      "¡Atención comunidad! Este fin de semana realizaremos trabajos de mantenimiento en el acceso principal. Por favor utilicen la entrada alternativa por Avenida del Petróleo. Disculpen las molestias.",
    date: "2023-04-01T13:10:00",
    likes: 45,
    comments: 23,
    shares: 56,
    author: {
      name: "Puerto La Plata",
      avatar: "/logo-plp.png",
    },
  },
]

// Componente para el feed de redes sociales
export function SocialFeed() {
  const [activeFilter, setActiveFilter] = useState<SocialNetwork>("all")

  // Filtrar publicaciones según la red social seleccionada
  const filteredPosts =
    activeFilter === "all" ? socialPosts : socialPosts.filter((post) => post.network === activeFilter)

  // Obtener el ícono correspondiente a cada red social
  const getNetworkIcon = (network: Exclude<SocialNetwork, "all">) => {
    switch (network) {
      case "twitter":
        return <Twitter className="h-5 w-5 text-[#1DA1F2]" />
      case "facebook":
        return <Facebook className="h-5 w-5 text-[#4267B2]" />
      case "instagram":
        return <Instagram className="h-5 w-5 text-[#E1306C]" />
      case "linkedin":
        return <Linkedin className="h-5 w-5 text-[#0077B5]" />
    }
  }

  // Obtener el color de fondo para cada red social
  const getNetworkColor = (network: Exclude<SocialNetwork, "all">) => {
    switch (network) {
      case "twitter":
        return "bg-[#1DA1F2]/10 border-[#1DA1F2]/30"
      case "facebook":
        return "bg-[#4267B2]/10 border-[#4267B2]/30"
      case "instagram":
        return "bg-[#E1306C]/10 border-[#E1306C]/30"
      case "linkedin":
        return "bg-[#0077B5]/10 border-[#0077B5]/30"
    }
  }

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
        <h2 className="text-3xl font-medium text-center text-blue-500 mb-4">NOTICIAS Y REDES SOCIALES</h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Mantente al día con las últimas novedades y anuncios de Puerto La Plata a través de nuestras redes sociales.
        </p>

        {/* Filtros de redes sociales */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 rounded-full border transition-colors ${
              activeFilter === "all"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            Todas
          </button>
          <button
            onClick={() => setActiveFilter("twitter")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors ${
              activeFilter === "twitter"
                ? "bg-[#1DA1F2] text-white border-[#1DA1F2]"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            <Twitter className="h-4 w-4" />
            Twitter
          </button>
          <button
            onClick={() => setActiveFilter("facebook")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors ${
              activeFilter === "facebook"
                ? "bg-[#4267B2] text-white border-[#4267B2]"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            <Facebook className="h-4 w-4" />
            Facebook
          </button>
          <button
            onClick={() => setActiveFilter("instagram")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors ${
              activeFilter === "instagram"
                ? "bg-[#E1306C] text-white border-[#E1306C]"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            <Instagram className="h-4 w-4" />
            Instagram
          </button>
          <button
            onClick={() => setActiveFilter("linkedin")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors ${
              activeFilter === "linkedin"
                ? "bg-[#0077B5] text-white border-[#0077B5]"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </button>
        </div>

        {/* Grid de publicaciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className={`border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow ${getNetworkColor(
                post.network,
              )}`}
            >
              {/* Encabezado de la publicación */}
              <div className="p-4 flex items-center space-x-3 border-b border-gray-200">
                <img
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{post.author.name}</h3>
                    {getNetworkIcon(post.network)}
                  </div>
                  {post.author.handle && <p className="text-sm text-gray-500">{post.author.handle}</p>}
                </div>
              </div>

              {/* Contenido de la publicación */}
              <div className="p-4">
                <p className="text-gray-800 mb-4">{post.content}</p>
                {post.image && (
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt="Contenido de la publicación"
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "/colorful-harbor-town.png"
                      }}
                    />
                  </div>
                )}
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{formatDate(post.date)}</span>
                </div>
              </div>

              {/* Pie de la publicación */}
              <div className="px-4 py-3 bg-gray-50 flex justify-between text-sm text-gray-600">
                <div className="flex items-center">
                  <Heart className="h-4 w-4 mr-1" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="h-4 w-4 mr-1" />
                  <span>{post.comments}</span>
                </div>
                <div className="flex items-center">
                  <Share2 className="h-4 w-4 mr-1" />
                  <span>{post.shares}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón para ver más */}
        <div className="mt-10 text-center">
          <a
            href="/noticias"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
          >
            Ver más publicaciones
          </a>
        </div>
      </div>
    </section>
  )
}
