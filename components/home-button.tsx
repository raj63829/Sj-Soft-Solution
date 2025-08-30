"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Props = { className?: string }

export default function HomeButton({ className }: Props) {
  const pathname = usePathname()

  // Hide on the homepage
  if (pathname === "/") return null

  return (
    <div className={cn("fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50", className)}>
      <Button asChild className="shadow-lg">
        <Link href="/" aria-label="Go to Home">
          <Home className="mr-2 h-4 w-4" aria-hidden="true" />
          <span className="font-medium">Home</span>
        </Link>
      </Button>
    </div>
  )
}
