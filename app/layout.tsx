"use client"

import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/components/auth-context"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <AuthProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow pt-[var(--header-height,80px)]">
                {children}
              </main>
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}