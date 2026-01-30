/**
 * Datos de noticias: usado en listado y en detalle por id.
 * Las rutas /comunicacion/noticias y /comunicacion/noticias/[id] consumen este array.
 */
export type CategoriaNoticia =
  | "Operaciones"
  | "Sustentabilidad"
  | "Relaciones"
  | "Capacitación"
  | "Infraestructura"
  | "Internacional"
  | "Seguridad"
  | "Tecnología"
  | "Comunidad"

export interface Noticia {
  id: string
  titulo: string
  /** Breve descripción para la card (2 líneas) */
  descripcion: string
  /** Contenido completo para la página de detalle */
  contenido: string
  categoria: CategoriaNoticia
  /** Fecha en formato ISO (YYYY-MM-DD) para ordenamiento y formato "d de MMMM yyyy" */
  fecha: string
  /** Ruta de imagen en /public */
  imagen: string
  /** Si es "instagram", la vista detalle usa layout celeste + gris con reel o galería */
  fuente?: "instagram"
  /** URL de embed del reel (ej. https://www.instagram.com/reel/XXX/embed). Si no hay, se muestra galeria. */
  reelUrl?: string
  /** Imágenes para carrusel cuando no hay reel (rutas en /public) */
  galeria?: string[]
}

export const CATEGORIAS_FILTRO: readonly string[] = [
  "Todas",
  "Operaciones",
  "Sustentabilidad",
  "Relaciones",
  "Capacitación",
  "Infraestructura",
  "Internacional",
  "Seguridad",
  "Tecnología",
  "Comunidad",
] as const

export const NOTICIAS: Noticia[] = [
  {
    id: "1",
    titulo: "Puerto La Plata alcanza récord histórico en movimiento de contenedores",
    descripcion:
      "Durante el último trimestre, el puerto registró un incremento del 45% en el movimiento de contenedores, superando las expectativas del sector.",
    contenido: `El Puerto La Plata cerró el trimestre con un récord histórico en movimiento de contenedores. La cifra alcanzada representa un incremento del 45% respecto al mismo período del año anterior, consolidando al puerto como un hub logístico clave en la región.

Las operaciones se vieron favorecidas por las mejoras en infraestructura y la optimización de los tiempos de carga y descarga. El Consorcio de Gestión del Puerto La Plata (CGPLP) destacó el compromiso de las terminales y de todo el sector portuario en alcanzar estos resultados.`,
    categoria: "Operaciones",
    fecha: "2025-03-10",
    imagen: "/banner.jpg",
    fuente: "instagram",
    galeria: [
      "/banner.jpg",
      "/social/port-sunrise.png",
      "/social/DSC04672.JPG",
      "/social/Visita-Puerto-LP.jpeg",
      "/colorful-harbor-town.png",
      "/social/cruise-ship.png",
      "/museo.jpg",
      "/visita.jpg",
      "/puerto-plata-satellite.png",
      "/social/diverse-group-city.png",
      "/diverse-group-city.png",
    ],
  },
  {
    id: "2",
    titulo: "Nueva certificación ambiental para terminales portuarias",
    descripcion:
      "Las terminales del Puerto La Plata obtuvieron la certificación ISO 14001:2025, reafirmando su compromiso con la sostenibilidad.",
    contenido: `Las terminales del Puerto La Plata obtuvieron la certificación ISO 14001:2025, reafirmando su compromiso con la gestión ambiental y la sostenibilidad. El proceso de auditoría incluyó la revisión de procesos operativos, manejo de residuos y políticas de reducción de emisiones.

Esta certificación posiciona al puerto a la vanguardia en estándares ambientales dentro del sector portuario regional.`,
    categoria: "Sustentabilidad",
    fecha: "2025-03-08",
    imagen: "/social/port-sunrise.png",
  },
  {
    id: "3",
    titulo: "Visita de delegación internacional fortalece lazos comerciales",
    descripcion:
      "Representantes de puertos europeos visitaron nuestras instalaciones para explorar oportunidades de colaboración.",
    contenido: `Una delegación de representantes de puertos europeos visitó las instalaciones del Puerto La Plata con el objetivo de explorar oportunidades de colaboración y intercambio de mejores prácticas. La visita incluyó recorridos por las terminales de contenedores y graneles, así como reuniones con autoridades del CGPLP.

Ambas partes expresaron su interés en profundizar los lazos comerciales y logísticos en el corto plazo.`,
    categoria: "Relaciones",
    fecha: "2025-03-05",
    imagen: "/colorful-harbor-town.png",
  },
  {
    id: "4",
    titulo: "Programa de capacitación 2025 para trabajadores portuarios",
    descripcion:
      "Se lanza nuevo programa de formación continua para personal operativo y administrativo del puerto.",
    contenido: `Se presentó el Programa de Capacitación 2025 dirigido a trabajadores portuarios, tanto del sector operativo como administrativo. El programa incluye cursos en seguridad laboral, operación de equipos, logística y gestión portuaria.

La formación continua es una prioridad del CGPLP para mantener estándares de calidad y seguridad en todas las operaciones.`,
    categoria: "Capacitación",
    fecha: "2025-03-01",
    imagen: "/social/DSC04672.JPG",
  },
  {
    id: "5",
    titulo: "Avances en obras de modernización de infraestructura",
    descripcion:
      "Las obras de ampliación del muelle principal avanzan según lo programado, con un 60% de progreso.",
    contenido: `Las obras de ampliación y modernización del muelle principal del Puerto La Plata avanzan según lo programado, con un 60% de progreso reportado. Las mejoras incluyen refuerzo de estructuras, nueva iluminación y optimización de áreas de operación.

Se prevé que la totalidad de las obras concluya en el segundo semestre del año, mejorando la capacidad operativa del puerto.`,
    categoria: "Infraestructura",
    fecha: "2025-02-28",
    imagen: "/banner.jpg",
  },
  {
    id: "6",
    titulo: "Puerto La Plata firma acuerdo de cooperación con Rotterdam",
    descripcion:
      "El convenio permitirá intercambiar mejores prácticas y tecnología con uno de los puertos más importantes del mundo.",
    contenido: `El Puerto La Plata firmó un acuerdo de cooperación con el puerto de Rotterdam, uno de los más importantes del mundo. El convenio contempla el intercambio de mejores prácticas, tecnología y experiencias en gestión logística y sostenibilidad.

Esta alianza refuerza la proyección internacional del Puerto La Plata y abre nuevas oportunidades de desarrollo.`,
    categoria: "Internacional",
    fecha: "2025-02-25",
    imagen: "/social/port-sunrise.png",
  },
  {
    id: "7",
    titulo: "Nuevo sistema de gestión ambiental reduce emisiones en un 30%",
    descripcion:
      "La implementación de tecnologías verdes marca un hito en la sustentabilidad portuaria.",
    contenido: `La implementación del nuevo sistema de gestión ambiental en el Puerto La Plata ha permitido una reducción del 30% en emisiones respecto al año anterior. El proyecto incluye monitoreo en tiempo real, uso de energías renovables en instalaciones administrativas y programas de eficiencia energética.

Este avance consolida al puerto como referente en sustentabilidad dentro del sector.`,
    categoria: "Sustentabilidad",
    fecha: "2025-02-20",
    imagen: "/colorful-harbor-town.png",
  },
  {
    id: "8",
    titulo: "Exitoso simulacro de emergencia en terminal de contenedores",
    descripcion:
      "El ejercicio demostró la efectividad de los protocolos de seguridad actualizados.",
    contenido: `Se realizó un simulacro de emergencia en la terminal de contenedores con participación de operadores, prefectura y bomberos. El ejercicio permitió validar los protocolos de seguridad actualizados y detectar puntos de mejora.

La seguridad operativa y la preparación ante emergencias son pilares de la gestión del Puerto La Plata.`,
    categoria: "Seguridad",
    fecha: "2025-02-15",
    imagen: "/banner.jpg",
  },
  {
    id: "9",
    titulo: "Puerto La Plata lidera innovación en logística portuaria",
    descripcion:
      "La implementación de inteligencia artificial optimiza tiempos de operación y reduce costos.",
    contenido: `El Puerto La Plata avanza en la implementación de soluciones basadas en inteligencia artificial para optimizar tiempos de operación y reducir costos logísticos. Los primeros módulos ya están en fase de pruebas en la terminal de contenedores.

Esta innovación posiciona al puerto a la vanguardia tecnológica del sector en la región.`,
    categoria: "Tecnología",
    fecha: "2025-02-10",
    imagen: "/social/port-sunrise.png",
  },
  {
    id: "10",
    titulo: "Comunidad portuaria celebra día del trabajador marítimo",
    descripcion:
      "Eventos y reconocimientos destacan la labor esencial de los trabajadores del sector.",
    contenido: `La comunidad portuaria del Puerto La Plata celebró el Día del Trabajador Marítimo con eventos y reconocimientos a la labor esencial del sector. Se realizaron actos en las terminales y se destacó el rol de los trabajadores en la cadena logística y en el desarrollo regional.

El CGPLP agradeció el compromiso de todo el personal y de las empresas que operan en el puerto.`,
    categoria: "Comunidad",
    fecha: "2025-02-05",
    imagen: "/social/cruise-ship.png",
    fuente: "instagram",
    reelUrl: "https://www.instagram.com/reel/Cexample/embed/",
    galeria: [
      "/social/cruise-ship.png",
      "/social/Visita-Puerto-LP.jpeg",
      "/banner.jpg",
      "/social/DSC04672.JPG",
      "/social/port-sunrise.png",
      "/visita.jpg",
      "/museo.jpg",
      "/colorful-harbor-town.png",
      "/puerto-plata-satellite.png",
      "/social/diverse-group-city.png",
    ],
  },
]

/** Obtiene una noticia por id para la página de detalle. Devuelve undefined si no existe. */
export function getNoticiaById(id: string): Noticia | undefined {
  return NOTICIAS.find((n) => n.id === id)
}
