import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 lg:mb-0">We Also Deal With</h2>
          <Button className="group">
            Explore all Services
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-primary">Overseas Education</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                Want to make an investment in yourself to secure a successful future? Studying abroad is a journey of a
                lifetime that opens up new possibilities and pathways.
              </p>
              <Button className="group-hover:bg-secondary transition-colors">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 bg-secondary text-secondary-foreground">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-secondary-foreground">Paper Publications</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-secondary-foreground/80 mb-6 text-lg leading-relaxed">
                Paper Publications is one of the leading Indian organisations for publication of research papers. It is
                confluence of well renowned scientists, widest dissemination of knowledge throughout the globe.
              </p>
              <Button
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90 group-hover:scale-105 transition-all"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
