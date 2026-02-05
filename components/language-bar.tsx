"use client"

import { useState, useEffect } from "react"
import { Globe } from "lucide-react"

type Language = "es" | "en" | "zh"

const languages = [
  { code: "es", name: "Español", },
  { code: "zh", name: "中文", },
  { code: "en", name: "English", },

]

export function LanguageBar() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("es")

  useEffect(() => {
    // Cargar idioma guardado del localStorage
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage)
    }
  }, [])

  const handleLanguageChange = (code: Language) => {
    setSelectedLanguage(code)
    localStorage.setItem("language", code)
    
    // Aquí se implementaría la lógica de cambio de idioma
    // Por ejemplo, con next-intl o react-i18next
    console.log(`Idioma cambiado a: ${code}`)
    
    // Opcional: Recargar la página para aplicar el cambio
    // window.location.reload()
  }

  return (
    <div className="fixed top-0 left-0 right-0 w-full bg-[#1B1E4A] border-b border-white/10 z-[60]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-end gap-0.5 py-1 pr-4">
          <Globe className="h-2.5 w-2.5 text-white/70 mr-0.5" />
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code as Language)}
              className={`flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] transition-colors ${
                selectedLanguage === lang.code
                  ? "bg-white/20 text-white font-medium"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
              title={lang.name}
            >
              <span className="leading-none whitespace-nowrap">{lang.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
