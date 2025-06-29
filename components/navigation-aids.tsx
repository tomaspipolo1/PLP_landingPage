import { Droplets, Wind, Thermometer, Waves } from "lucide-react"

export function NavigationAids() {
  return (
    <section className="py-12 bg-[#002A5B] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-medium text-center mb-12">AYUDAS A LA NAVEGACIÓN</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Marea */}
          <div className="bg-[#003A7B] rounded-lg p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-medium">Marea</h3>
              <Waves className="h-8 w-8 text-blue-300" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300">Altura actual:</span>
                <span className="font-bold">1.2 m</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Próxima pleamar:</span>
                <span className="font-bold">15:45 hs</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Altura pleamar:</span>
                <span className="font-bold">1.8 m</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Próxima bajamar:</span>
                <span className="font-bold">21:30 hs</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-blue-700">
              <span className="text-xs text-gray-300">Actualizado: Hoy 13:45 hs</span>
            </div>
          </div>

          {/* Viento */}
          <div className="bg-[#003A7B] rounded-lg p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-medium">Viento</h3>
              <Wind className="h-8 w-8 text-blue-300" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300">Velocidad:</span>
                <span className="font-bold">18 km/h</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Dirección:</span>
                <span className="font-bold">NE</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Ráfagas:</span>
                <span className="font-bold">25 km/h</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Presión:</span>
                <span className="font-bold">1013 hPa</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-blue-700">
              <span className="text-xs text-gray-300">Actualizado: Hoy 13:45 hs</span>
            </div>
          </div>

          {/* Temperatura */}
          <div className="bg-[#003A7B] rounded-lg p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-medium">Temperatura</h3>
              <Thermometer className="h-8 w-8 text-blue-300" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300">Actual:</span>
                <span className="font-bold">24°C</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Sensación térmica:</span>
                <span className="font-bold">26°C</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Máxima hoy:</span>
                <span className="font-bold">28°C</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Mínima hoy:</span>
                <span className="font-bold">18°C</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-blue-700">
              <span className="text-xs text-gray-300">Actualizado: Hoy 13:45 hs</span>
            </div>
          </div>

          {/* Humedad */}
          <div className="bg-[#003A7B] rounded-lg p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-medium">Humedad</h3>
              <Droplets className="h-8 w-8 text-blue-300" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300">Humedad relativa:</span>
                <span className="font-bold">65%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Punto de rocío:</span>
                <span className="font-bold">17°C</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Visibilidad:</span>
                <span className="font-bold">10 km</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Índice UV:</span>
                <span className="font-bold">6 (Alto)</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-blue-700">
              <span className="text-xs text-gray-300">Actualizado: Hoy 13:45 hs</span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/ayudas-navegacion"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
          >
            Ver información detallada
          </a>
        </div>
      </div>
    </section>
  )
}
