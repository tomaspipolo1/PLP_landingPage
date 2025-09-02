import { NewsTicker } from "./news-ticker"


export function VideoBanner() {
  return (
    <section className="w-full h-screen relative -mt-[var(--header-height,80px)]">
      {/* Video a pantalla completa - autoplay, loop, muted, sin controles */}
      <video
        src="/puerto-video-loop.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        disableRemotePlayback
      />

      {/* Overlay con gradiente solo en la parte inferior para el texto */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
        {/* Texto posicionado en la parte inferior izquierda */}
        <div className="absolute bottom-24 left-6 md:left-12 max-w-md">
          <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-medium">Puerto La Plata</h1>
          <p className="text-white/90 text-sm md:text-base lg:text-lg mt-1">
            Con la esencia bonaerense que nos caracteriza, seguimos creciendo con una visión de gran protagonismo en el
            futuro.
          </p>
        </div>
      </div>

      {/* Ticker de noticias en la parte inferior */}
      <div className="absolute bottom-0 left-0 right-0">
        <NewsTicker />
      </div>

      {/* Indicador de scroll - ahora más arriba para no interferir con el ticker */}
      <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
      </div>
    </section>
  )
}
