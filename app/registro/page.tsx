import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RegistroForm } from "@/components/registro-form"

export default function RegistroPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#002A5B] to-[#001A3B]">
      {/* Header */}
      <Header />

      {/* Contenido principal con padding-top para el header fijo */}
      <main className="pt-[104px] py-12 flex items-center justify-center px-4">
        <RegistroForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
