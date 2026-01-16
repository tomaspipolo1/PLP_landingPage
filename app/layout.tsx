"use client"

import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/components/auth-context"
import { EnlacesDestacados } from "@/components/enlaces-destacados"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { HeroSection } from "@/components/hero-section"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <AuthProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <div className="pt-[var(--header-height,80px)]">
                <HeroSection />
                <BreadcrumbNav />
              </div>
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
              <EnlacesDestacados />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}