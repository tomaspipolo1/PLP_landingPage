"use client"

import { useState, useEffect, useRef } from "react"
import { UserNav } from "@/components/user-nav"
import { SearchBar } from "@/components/search-bar"
import { LoginButtons } from "@/components/login-buttons"
import { useAuth } from "./auth-context"
import { ChevronDown } from "lucide-react"
import { MegaMenu } from "./mega-menu"
import { MobileMenu } from "./mobile-menu"
import Link from "next/link"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { isLoggedIn } = useAuth()
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  // Establecer la variable CSS para la altura del header
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight
        document.documentElement.style.setProperty("--header-height", `${height}px`)
      }
    }

    // Actualizar al montar y cuando cambia el estado de scrolled
    updateHeaderHeight()
    window.addEventListener("resize", updateHeaderHeight)

    return () => {
      window.removeEventListener("resize", updateHeaderHeight)
    }
  }, [scrolled])

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50" ref={headerRef}>
      {/* Fondo con degradado vertical - más oscuro arriba */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/30 backdrop-blur-sm pointer-events-none"></div>

      {/* Top bar - hides when scrolled */}
      <div
        className={`relative z-10 text-white transition-all duration-300 ease-in-out ${
          scrolled ? "h-5 overflow-hidden opacity-0" : "h-5 opacity-100"
        }`}
      >
        <div className="container mx-auto px-2 sm:px-3 md:px-4 flex justify-end items-center space-x-3 sm:space-x-4 md:space-x-6 text-xs sm:text-sm h-full">
          <a href="#" className="hover:underline text-white text-shadow whitespace-nowrap">
            Contacto
          </a>
          <div className="flex items-center text-white text-shadow whitespace-nowrap">
            <span>Español</span>
            <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
          </div>
        </div>
      </div>

      {/* Main navigation bar - shrinks when scrolled */}
      <div className={`relative z-10 transition-all duration-300 ease-in-out ${scrolled ? "py-1" : "py-2 sm:py-3"}`}>
        <div className="container mx-auto px-2 sm:px-3 md:px-4 flex items-center justify-between gap-2 sm:gap-3 md:gap-4">
          {/* Logo - shrinks when scrolled */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/">
              <img
                src="/logo-plp-white.png"
                alt="PLP Logo"
                className={`transition-all duration-300 h-8 sm:h-9 md:h-10 lg:h-12 xl:h-14 2xl:h-16 ${
                  scrolled ? "h-6 sm:h-7 md:h-8 lg:h-10 xl:h-12 2xl:h-14" : ""
                }`}
              />
            </Link>
          </div>

          {/* Mega Menu Navigation - responsive text sizes */}
          <div className={`hidden xl:block transition-all duration-300 flex-1 flex justify-center min-w-0 ${scrolled ? "scale-95" : ""}`}>
            <MegaMenu />
          </div>

          {/* Search and User Nav - compact and responsive */}
          <div className={`flex items-center space-x-1 sm:space-x-2 md:space-x-3 lg:space-x-4 xl:space-x-5 transition-all duration-300 flex-shrink-0 ${
            scrolled ? "scale-95" : ""
          }`}>
            <SearchBar compact={scrolled} />
            {isLoggedIn ? <UserNav compact={scrolled} /> : <LoginButtons compact={scrolled} />}
            {/* Mobile Menu - moved to the right side */}
                    <div className="xl:hidden">
          <MobileMenu />
        </div>
          </div>
        </div>
      </div>
    </header>
  )
}
