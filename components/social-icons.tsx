"use client"

import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"
import { cn } from "@/lib/utils"

type Props = { className?: string }

export default function SocialIcons({ className }: Props) {
  const socials = [
    { label: "Facebook", href: "https://facebook.com", Icon: Facebook },
    { label: "Twitter (X)", href: "https://twitter.com", Icon: Twitter },
    { label: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
    { label: "Instagram", href: "https://instagram.com", Icon: Instagram },
    { label: "YouTube", href: "https://youtube.com", Icon: Youtube },
  ]

  return (
    <div
      className={cn("fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-3", className)}
      aria-label="Social links"
    >
      {socials.map(({ label, href, Icon }) => (
        <Button
          key={label}
          size="icon"
          asChild
          className="rounded-full border bg-background text-foreground shadow-lg transition duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground"
        >
          <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
            <Icon className="h-5 w-5" />
          </a>
        </Button>
      ))}
    </div>
  )
}
