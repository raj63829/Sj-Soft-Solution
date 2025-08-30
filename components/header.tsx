"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/image.png" alt="SJ Soft Solutions" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              HOME
            </a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              ABOUT US
            </a>
            <div className="relative group">
              {/* Make SERVICES a clickable button to /services while keeping dropdown on hover */}
              <a
                href="/services"
                className="flex items-center text-foreground hover:text-primary transition-colors font-medium"
              >
                SERVICES <ChevronDown className="ml-1 h-4 w-4" />
              </a>
              <div className="absolute top-full left-0 mt-2 w-56 bg-card rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <a
                    href="/internship"
                    className="block px-4 py-2 text-card-foreground hover:bg-muted transition-colors"
                  >
                    Internship
                  </a>
                  <a
                    href="/publication"
                    className="block px-4 py-2 text-card-foreground hover:bg-muted transition-colors"
                  >
                    Publication
                  </a>
                  <a
                    href="/plagiarism"
                    className="block px-4 py-2 text-card-foreground hover:bg-muted transition-colors"
                  >
                    Plagiarism
                  </a>
                </div>
              </div>
            </div>
            <div className="relative group">
              {/* Make PROJECTS a clickable button to /projects while keeping dropdown on hover */}
              <a
                href="/projects"
                className="flex items-center text-foreground hover:text-primary transition-colors font-medium"
              >
                PROJECTS <ChevronDown className="ml-1 h-4 w-4" />
              </a>
              <div className="absolute top-full left-0 mt-2 w-56 bg-card rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <a
                    href="/projects/java"
                    className="block px-4 py-2 text-card-foreground hover:bg-muted transition-colors"
                  >
                    JAVA
                  </a>
                  <a
                    href="/projects/python"
                    className="block px-4 py-2 text-card-foreground hover:bg-muted transition-colors"
                  >
                    PYTHON
                  </a>
                  <a
                    href="/projects/ai"
                    className="block px-4 py-2 text-card-foreground hover:bg-muted transition-colors"
                  >
                    AI
                  </a>
                  <a
                    href="/projects/php"
                    className="block px-4 py-2 text-card-foreground hover:bg-muted transition-colors"
                  >
                    PHP
                  </a>
                </div>
              </div>
            </div>
            <a href="/gallery" className="text-foreground hover:text-primary transition-colors font-medium">
              GALLERY
            </a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
              CONTACT US
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <div className="py-4 space-y-2">
              <a href="/" className="block px-4 py-2 text-card-foreground hover:bg-muted transition-colors">
                HOME
              </a>
              <a href="/about" className="block px-4 py-2 text-card-foreground hover:bg-muted transition-colors">
                ABOUT US
              </a>
              {/* Add top-level SERVICES and PROJECTS buttons to mobile menu */}
              <a href="/services" className="block px-4 py-2 text-card-foreground hover:bg-muted transition-colors">
                SERVICES
              </a>
              <a href="/internship" className="block px-4 py-2 text-card-foreground hover:bg-muted transition-colors">
                Internship
              </a>
              <a href="/publication" className="block px-4 py-2 text-card-foreground hover:bg-muted transition-colors">
                Publication
              </a>
              <a href="/plagiarism" className="block px-4 py-2 text-card-foreground hover:bg-muted transition-colors">
                Plagiarism
              </a>
              <a href="/projects" className="block px-4 py-2 text-card-foreground hover:bg-muted transition-colors">
                PROJECTS
              </a>
              <a
                href="/projects/java"
                className="block px-4 py-2 text-card-foreground hover:bg-muted transition-colors"
              >
                Java Projects
              </a>
              <a
                href="/projects/python"
                className="block px-4 py-2 text-card-foreground hover:bg-muted transition-colors"
              >
                Python Projects
              </a>
              <a href="/projects/ai" className="block px-4 py-2 text-card-foreground hover:bg-muted transition-colors">
                AI Projects
              </a>
              <a href="/projects/php" className="block px-4 py-2 text-card-foreground hover:bg-muted transition-colors">
                PHP Projects
              </a>
              <a href="/gallery" className="block px-4 py-2 text-card-foreground hover:bg-muted transition-colors">
                GALLERY
              </a>
              <a href="/contact" className="block px-4 py-2 text-card-foreground hover:bg-muted transition-colors">
                CONTACT US
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
