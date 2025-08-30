import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const technologies = [
  { name: "React", logo: "/react-logo.png" },
  { name: "Next.js", logo: "/nextjs-logo.png" },
  { name: "TypeScript", logo: "/typescript-logo.png" },
  { name: "Node.js", logo: "/nodejs-logo.png" },
  { name: "Python", logo: "/python-logo.png" },
  { name: "AWS", logo: "/aws-logo.png" },
  { name: "Docker", logo: "/docker-logo.png" },
  { name: "MongoDB", logo: "/mongodb-logo.png" },
  { name: "PostgreSQL", logo: "/postgresql-logo.png" },
]

export default function TechnologyShowcase() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Technologies We Use</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge tools and frameworks to build exceptional solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <Card
              key={index}
              className="group hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <CardContent className="flex flex-col items-center justify-center p-6 h-32">
                <img
                  src={tech.logo || "/placeholder.svg"}
                  alt={`${tech.name} logo`}
                  className="h-12 w-12 mb-3 group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-sm font-medium text-card-foreground text-center">{tech.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Technologies
          </Button>
        </div>
      </div>
    </section>
  )
}
