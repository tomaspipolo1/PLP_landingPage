"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SearchBar({ compact = false }: { compact?: boolean }) {
  return (
    <div className="relative flex items-center">
      <Input
        type="search"
        placeholder="Buscar..."
        className={cn(
          "rounded-r-none border-r-0 transition-all duration-300 bg-white/10 text-white placeholder:text-white/70 border-white/20",
          compact ? "h-7 w-[150px] text-sm" : "h-9 w-[180px]",
        )}
      />
      <Button
        size={compact ? "xs" : "sm"}
        className={cn(
          "rounded-l-none bg-[#0077B6] hover:bg-[#005A8D] transition-all duration-300",
          compact ? "h-7" : "h-9",
        )}
      >
        <Search className={compact ? "h-3 w-3" : "h-4 w-4"} />
      </Button>
    </div>
  )
}

// Helper function since we're not importing from lib/utils directly
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ")
}
