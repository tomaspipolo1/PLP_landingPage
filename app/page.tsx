import { Header } from "@/components/header"
import { MapSection } from "@/components/map-section"
import { NavigationAids } from "@/components/navigation-aids"
import { StatisticsSection } from "@/components/statistics-section"
import { AuthoritiesSection } from "@/components/authorities-section"
import { SocialFeed } from "@/components/social-feed"
import { EventosSection } from "@/components/eventos-section"
import { VideoBanner } from "@/components/video-banner"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Video Banner a pantalla completa con ticker integrado */}
      <VideoBanner />

      {/* El resto del contenido comienza después del banner */}
      <main >
        {/* Noticias y Redes Sociales */}
        <SocialFeed />

        {/* Eventos */}
        <EventosSection />

        {/* Mapa Interactivo */}
        <MapSection />

        {/* Ayudas a la Navegación */}
        <NavigationAids />

        {/* Estadísticas */}
        <StatisticsSection />

        <AuthoritiesSection />

      </main>

      {/* Botón Scroll to Top */}
      <ScrollToTopButton />
    </div>
  )
}
