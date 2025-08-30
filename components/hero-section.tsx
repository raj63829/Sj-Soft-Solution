import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="absolute inset-0 bg-[url('/abstract-tech-background.png')] bg-cover bg-center opacity-50"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6">
          A BETTER <span className="text-primary">FUTURE</span> STARTS HERE
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          We create innovative solutions that drive growth and deliver exceptional user experiences
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <div className="relative w-full sm:w-96">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-6 py-4 rounded-full bg-card border border-border text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <Button size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="px-8 py-4 text-lg">
            Get Started
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-4 text-lg bg-transparent">
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  )
}
