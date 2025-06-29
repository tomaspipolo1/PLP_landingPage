"use client"

import { Button } from "@/components/ui/button"
import { useAuth } from "./auth-context"
import Link from "next/link"

export function LoginButtons({ compact = false }: { compact?: boolean }) {
  const { login } = useAuth()

  return (
    <div className="flex items-center space-x-2">
      <Link href="/login">
        <Button
          variant="ghost"
          size={compact ? "xs" : "sm"}
          className={`!text-white text-shadow hover:bg-white/10 hover:!text-blue-300 transition-all duration-300 ${
            compact ? "text-xs" : "text-sm"
          }`}
        >
          <span className="text-white">Iniciar Sesión</span>
        </Button>
      </Link>
      <Link href="/registro">
        <Button
          variant="outline"
          size={compact ? "xs" : "sm"}
          className={`border-blue-400 bg-blue-500/30 !text-white hover:bg-blue-500/50 hover:border-blue-300 transition-all duration-300 ${
            compact ? "text-xs" : "text-sm"
          }`}
        >
          Registrate
        </Button>
      </Link>
    </div>
  )
}
