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
        <div className="container mx-auto px-4 flex justify-end items-center space-x-6 text-sm h-full">
          <a href="#" className="hover:underline text-white text-shadow">
            Contacto
          </a>
          <div className="flex items-center text-white text-shadow">
            <span>Español</span>
            <ChevronDown className="h-4 w-4 ml-1" />
          </div>
        </div>
      </div>

      {/* Main navigation bar - shrinks when scrolled */}
      <div className={`relative z-10 transition-all duration-300 ease-in-out ${scrolled ? "py-1" : "py-3"}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo - shrinks when scrolled */}
          <div className="flex items-center md:-ml-4 lg:-ml-8 xl:-ml-12 2xl:-ml-16">
            <Link href="/">
              <img
                src="/logo-plp-white.png"
                alt="PLP Logo"
                className={`transition-all duration-300 ml-0 ${scrolled ? "h-10" : "h-14"}`}
              />
            </Link>

            {/* Mobile Menu */}
            <div className="md:hidden ml-4">
              <MobileMenu />
            </div>
          </div>

          {/* Mega Menu Navigation - solo visible en desktop */}
          <div className={`hidden md:block transition-all duration-300 ${scrolled ? "scale-95" : ""}`}>
            <MegaMenu />
          </div>

          {/* Search and User Nav - slightly smaller when scrolled */}
          <div className={`flex items-center space-x-6 transition-all duration-300 md:-mr-4 lg:-mr-8 xl:-mr-12 2xl:-mr-16 ${scrolled ? "scale-95" : ""}`}>
            <SearchBar compact={scrolled} />
            {isLoggedIn ? <UserNav compact={scrolled} /> : <LoginButtons compact={scrolled} />}
          </div>
        </div>
      </div>
    </header>
  )
}
