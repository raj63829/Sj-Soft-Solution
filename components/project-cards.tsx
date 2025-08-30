import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Globe, Phone, Mail, Youtube, FileText, CheckCircle } from "lucide-react"

const projects = [
  {
    title: "AI Based Disease Prediction Using Symptoms",
    language: "Python",
    domain: "Artificial Intelligence",
    frontend: "HTML, CSS, JS",
    price: 6000,
    description: "AI Based E-Value for Legal Records",
    resources: ["abstract", "ppt", "documentation"],
  },
  {
    title: "IoT Enabled Smart Parking Management System",
    language: "C++, Python",
    domain: "Internet of Things",
    frontend: "HTML, CSS",
    price: 6000,
    description: "IOT-Based E-Value for Legal Records",
    resources: ["abstract", "ppt", "documentation"],
  },
  {
    title: "Full-Stack E-Commerce Website for Online Shopping",
    language: "JS, Node.js",
    domain: "Web Development",
    frontend: "HTML, CSS",
    price: 5000,
    description: "Web Development-Based E-Value for Legal Records",
    resources: ["abstract", "ppt", "documentation"],
  },
  {
    title: "Face Recognition Based Attendance System",
    language: "Python (OpenCV)",
    domain: "Computer Vision",
    frontend: "Tkinter / HTML CSS",
    price: 4500,
    description: "Computer Vision-Based E-Value for Legal Records",
    resources: ["abstract", "ppt", "documentation"],
  },
  {
    title: "Penetration Tested Secure Login System",
    language: "Python, PHP",
    domain: "Cyber Security",
    frontend: "HTML, CSS, JS",
    price: 3500,
    description: "Cyber Security-Based E-Value for Legal Records",
    resources: ["abstract", "ppt", "documentation"],
  },
  {
    title: "Live Weather Forecasting App Using API",
    language: "JavaScript",
    domain: "API Integration / Web",
    frontend: "HTML, CSS, JS",
    price: 7000,
    description: "API integration-Based E-Value for Legal Records",
    resources: ["abstract", "ppt", "documentation"],
  },
]

export default function ProjectCards() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
            Our <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive collection of innovative projects across various domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-0">
                {/* Header Card */}
                <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold">
                        SOFT <span className="text-white/90">SOLUTIONS</span>
                      </h3>
                      <p className="text-sm opacity-90">PROJECTS</p>
                    </div>
                    <img src="/image.png" alt="SJ Logo" className="h-12 w-auto opacity-90" />
                  </div>

                  <h4 className="font-semibold mb-3 text-sm leading-tight">{project.title}</h4>

                  <ul className="text-xs space-y-1 opacity-90">
                    <li>Coding language: {project.language}</li>
                    <li>Domain: {project.domain}</li>
                    <li>Front End: {project.frontend}</li>
                  </ul>

                  <div className="flex justify-between items-center mt-4 text-xs">
                    <div className="flex items-center gap-1">
                      <Globe className="h-3 w-3" />
                      <span>www.sjsoftsolutions.com</span>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        <Phone className="h-3 w-3" />
                        <span>+91 9392238421</span>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <Mail className="h-3 w-3" />
                        <span>info@sijsoftsolutions.com</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      PYTHON
                    </Badge>
                    <div className="flex items-center text-lg font-bold">
                      <span className="text-sm mr-1">₹</span>
                      {project.price.toLocaleString()}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">{project.description}</p>

                  <div className="flex items-center justify-between">
                    <ul className="space-y-1">
                      {project.resources.map((resource, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          {resource}
                        </li>
                      ))}
                    </ul>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="p-2 bg-transparent">
                        <Youtube className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="p-2 bg-transparent">
                        <FileText className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
