import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapSection } from "@/components/map-section"
import { NavigationAids } from "@/components/navigation-aids"
import { StatisticsSection } from "@/components/statistics-section"
import { AuthoritiesSection } from "@/components/authorities-section"
import { SocialFeed } from "@/components/social-feed"
import { VideoBanner } from "@/components/video-banner"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header is now a separate component */}
      <Header />

      {/* Video Banner a pantalla completa con ticker integrado */}
      <VideoBanner />

      {/* El resto del contenido comienza después del banner */}
      <main>
        {/* Noticias y Redes Sociales */}
        <SocialFeed />

        {/* Mapa Interactivo */}
        <MapSection />

        {/* Ayudas a la Navegación */}
        <NavigationAids />

        {/* Estadísticas */}
        <StatisticsSection />

        <AuthoritiesSection />

      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
