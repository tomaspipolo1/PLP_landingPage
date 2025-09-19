import { MapPin } from "lucide-react"
import Link from "next/link"

export function MapSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-medium text-center text-blue-500 mb-8">MAPA INTERACTIVO</h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-[500px] w-full">
            {/* Imagen de ejemplo de un mapa */}
            <img
              src="/puerto-plata-satellite.png"
              alt="Mapa interactivo del Puerto La Plata"
              className="w-full h-full object-cover"
            />

            {/* Marcadores de ejemplo */}
            <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-blue-600 text-white p-2 rounded-lg shadow-lg text-sm">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-1" />
                  <span>Terminal de Contenedores</span>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-green-600 text-white p-2 rounded-lg shadow-lg text-sm">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-1" />
                  <span>Terminal de Graneles</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex flex-wrap justify-between items-center">
              <div className="flex items-center mb-2 md:mb-0">
                <Link href="/servicios/vision-comercial/mapa">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-700 transition-colors">
                    Ver mapa completo
                  </button>
                </Link>
                <span className="text-gray-600 text-sm">Haga clic en los marcadores para más información</span>
              </div>

              <div className="flex space-x-2">
                <button className="bg-gray-200 hover:bg-gray-300 p-2 rounded-md transition-colors">
                  <span className="sr-only">Acercar</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 p-2 rounded-md transition-colors">
                  <span className="sr-only">Alejar</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
