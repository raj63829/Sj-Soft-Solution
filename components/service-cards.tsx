import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Smartphone, Globe, Database, Shield, Zap } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with modern technologies",
    features: ["React & Next.js", "Full-stack solutions", "Responsive design"],
    contact: "web@company.com",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications",
    features: ["iOS & Android", "React Native", "Flutter"],
    contact: "mobile@company.com",
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies",
    features: ["SEO optimization", "Social media", "Content strategy"],
    contact: "marketing@company.com",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform your data into actionable insights",
    features: ["Business intelligence", "Data visualization", "Predictive analytics"],
    contact: "data@company.com",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your digital assets and infrastructure",
    features: ["Security audits", "Penetration testing", "Compliance"],
    contact: "security@company.com",
  },
  {
    icon: Zap,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration",
    features: ["AWS & Azure", "DevOps automation", "Microservices"],
    contact: "cloud@company.com",
  },
]

export default function ServiceCards() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <img
                    src="/professional-avatar.png"
                    alt="Service representative"
                    className="h-12 w-12 rounded-full border-2 border-border"
                  />
                </div>
                <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{service.contact}</span>
                  <Button size="sm" className="group-hover:bg-secondary transition-colors">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
