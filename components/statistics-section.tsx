import { BarChart3, PieChart, TrendingUp, Package } from "lucide-react"

export function StatisticsSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-medium text-center text-blue-500 mb-12">ESTADÍSTICAS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Volúmenes operados */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-800">Volúmenes Operados</h3>
              <BarChart3 className="h-6 w-6 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">1.2M TEUs</div>
            <div className="flex items-center text-sm">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-500 font-medium">+8.5%</span>
              <span className="text-gray-500 ml-1">vs año anterior</span>
            </div>
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "85%" }}></div>
              </div>
              <div className="flex justify-between mt-1 text-xs text-gray-500">
                <span>Objetivo anual</span>
                <span>85%</span>
              </div>
            </div>
          </div>

          {/* Espacios ocupados */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-800">Espacios Ocupados</h3>
              <PieChart className="h-6 w-6 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">78%</div>
            <div className="flex items-center text-sm">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-500 font-medium">+5.2%</span>
              <span className="text-gray-500 ml-1">vs mes anterior</span>
            </div>
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "78%" }}></div>
              </div>
              <div className="flex justify-between mt-1 text-xs text-gray-500">
                <span>Capacidad total</span>
                <span>78%</span>
              </div>
            </div>
          </div>

          {/* Espacios disponibles */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-800">Espacios Disponibles</h3>
              <Package className="h-6 w-6 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">22%</div>
            <div className="flex items-center text-sm">
              <TrendingUp className="h-4 w-4 text-red-500 mr-1 transform rotate-180" />
              <span className="text-red-500 font-medium">-5.2%</span>
              <span className="text-gray-500 ml-1">vs mes anterior</span>
            </div>
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "22%" }}></div>
              </div>
              <div className="flex justify-between mt-1 text-xs text-gray-500">
                <span>Capacidad total</span>
                <span>22%</span>
              </div>
            </div>
          </div>

          {/* Buques operados */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-800">Buques Operados</h3>
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
                className="h-6 w-6 text-blue-500"
              >
                <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76" />
                <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" />
              </svg>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">245</div>
            <div className="flex items-center text-sm">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-500 font-medium">+12.3%</span>
              <span className="text-gray-500 ml-1">vs año anterior</span>
            </div>
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "92%" }}></div>
              </div>
              <div className="flex justify-between mt-1 text-xs text-gray-500">
                <span>Objetivo anual</span>
                <span>92%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="/estadisticas"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
          >
            Ver todas las estadísticas
          </a>
        </div>
      </div>
    </section>
  )
}
