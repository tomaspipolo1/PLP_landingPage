import { Mail, Linkedin } from "lucide-react"

// Datos de ejemplo para las autoridades
const president = {
  name: "Dr. José Martínez",
  position: "Presidente del Consorcio",
  image: "/authorities/president.png",
  email: "presidente@puertolaplata.com",
  linkedin: "https://linkedin.com/in/josemartinez",
}

const directors = [
  {
    name: "Ing. María Rodríguez",
    position: "Directora de Operaciones",
    image: "/authorities/director1.png",
    email: "operaciones@puertolaplata.com",
    linkedin: "https://linkedin.com/in/mariarodriguez",
  },
  {
    name: "Lic. Carlos Gómez",
    position: "Director Comercial",
    image: "/authorities/director2.png",
    email: "comercial@puertolaplata.com",
    linkedin: "https://linkedin.com/in/carlosgomez",
  },
  {
    name: "Ing. Laura Fernández",
    position: "Directora de Infraestructura",
    image: "/authorities/director3.png",
    email: "infraestructura@puertolaplata.com",
    linkedin: "https://linkedin.com/in/laurafernandez",
  },
  {
    name: "Dr. Roberto Sánchez",
    position: "Director Legal",
    image: "/authorities/director4.png",
    email: "legal@puertolaplata.com",
    linkedin: "https://linkedin.com/in/robertosanchez",
  },
]

export function AuthoritiesSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-medium text-center text-blue-500 mb-12">AUTORIDADES</h2>

        {/* Presidente del Consorcio - Destacado */}
        <div className="mb-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
            <div className="md:flex">
              <div className="md:w-1/3 bg-[#002A5B]">
                <div className="h-full flex items-center justify-center p-6">
                  <div className="w-48 h-48 rounded-full bg-gray-200 overflow-hidden border-4 border-white">
                    
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 p-6 md:p-8">
                <h3 className="text-2xl font-bold text-gray-900">{president.name}</h3>
                <p className="text-blue-600 font-medium text-lg mb-4">{president.position}</p>
                <p className="text-gray-600 mb-6">
                  Responsable de liderar el Consorcio de Gestión del Puerto La Plata, coordinando las actividades
                  estratégicas y representando a la institución ante organismos nacionales e internacionales.
                </p>
                <div className="flex space-x-4">
                  <a
                    href={`mailto:${president.email}`}
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    <span>Contactar</span>
                  </a>
                  <a
                    href={president.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 mr-2" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Directores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {directors.map((director, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-[#002A5B] p-4 flex justify-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden border-4 border-white">
                  
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-gray-900">{director.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{director.position}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={`mailto:${director.email}`}
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                    aria-label={`Enviar correo a ${director.name}`}
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <a
                    href={director.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                    aria-label={`Ver perfil de LinkedIn de ${director.name}`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/autoridades"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
          >
            Conocer más sobre nuestras autoridades
          </a>
        </div>
      </div>
    </section>
  )
}
