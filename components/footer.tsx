import Link from "next/link"
import { Youtube, Instagram, Facebook, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#111827] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Columna 1: Logo y enlaces rápidos */}
          <div className="space-y-6">
            <Link href="/">
              <img src="/logo-plp-outline.png" alt="PLP Logo" className="h-24 mb-4" />
            </Link>
            <ul className="space-y-2">
              <li>
                <Link href="/accesibilidad" className="hover:text-blue-300 transition-colors">
                  Accesibilidad
                </Link>
              </li>
              <li>
                <Link href="/transparencia" className="hover:text-blue-300 transition-colors">
                  Transparencia
                </Link>
              </li>
              <li>
                <Link href="/documentos" className="hover:text-blue-300 transition-colors">
                  Buscador de Documentos
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 2: Información de contacto */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Puerto La Plata</h3>
            <div className="flex items-start space-x-2">
              <MapPin className="h-5 w-5 mt-0.5 text-blue-300 flex-shrink-0" />
              <p>Buenos Aires, Ensenada. Gilberto Gaggino S/N Esquina Ortiz de Rosas.</p>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-blue-300 flex-shrink-0" />
              <p>+54 221 445-6745</p>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-blue-300 flex-shrink-0" />
              <p>info@puertolaplata.com</p>
            </div>
            <div className="mt-6">
              <Link
                href="/contacto"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors inline-block"
              >
                Formulario de Contacto
              </Link>
            </div>
          </div>

          {/* Columna 3: Mapa */}
          <div>
            <div className="bg-gray-200 h-64 rounded-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.9968542348745!2d-57.89999!3d-34.8599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDUxJzM1LjYiUyA1N8KwNTMnNTkuOSJX!5e0!3m2!1ses!2sar!4v1650000000000!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Puerto La Plata"
              ></iframe>
            </div>
            <p className="text-sm mt-2 text-gray-400">
              Utilice nuestro formulario de contacto para enviar sus consultas.
            </p>
          </div>

          {/* Columna 4: Redes sociales y newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Conecta con Nosotros</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 p-2 rounded-md hover:bg-gray-200 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 p-2 rounded-md hover:bg-gray-200 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 p-2 rounded-md hover:bg-gray-200 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 p-2 rounded-md hover:bg-gray-200 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 p-2 rounded-md hover:bg-gray-200 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>

            <h3 className="text-lg font-bold mb-2">Suscríbete a Novedades</h3>
            <p className="text-sm mb-4">Recibe nuestro newsletter con las últimas noticias del puerto</p>
            <Link
              href="/suscripcion"
              className="bg-white text-gray-900 hover:bg-gray-200 px-6 py-2 rounded-md transition-colors inline-block font-medium"
            >
              Suscribirse Ahora
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Puerto La Plata. Todos los derechos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/terminos" className="hover:text-white transition-colors">
                Términos y Condiciones
              </Link>
              <Link href="/privacidad" className="hover:text-white transition-colors">
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
