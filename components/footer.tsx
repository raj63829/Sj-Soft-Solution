import { Button } from "@/components/ui/button"
import { Mail, Phone, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src="/image.png" alt="SJ Soft Solutions" className="h-12 w-auto" />
            </div>
            <h3 className="text-xl font-serif font-bold text-card-foreground">Soft Solutions Projects</h3>
            <address className="text-muted-foreground leading-relaxed not-italic">
              Beside HDFC Bank lane,
              <br />
              Chaitanyapuri, Dilsukhnagar,
              <br />
              Hyderabad, Telangana 500060
            </address>
            <div className="flex space-x-3">
              <Button size="icon" variant="outline">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline">
                <Youtube className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-card-foreground mb-6">Services</h4>
            <ul className="space-y-3">
              {["Overseas Education", "Internship", "Plagiarism", "Paper Publications"].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-lg font-semibold text-card-foreground mb-6">Projects</h4>
            <ul className="space-y-3">
              {["Java Projects", "Python Projects", "Cloud Projects", "Data Science"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-card-foreground mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <div>+91 93922 38421</div>
                  <div>+91 95814 24063</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <div>info@sijsoftsolutions.com</div>
                  <div>sjsoftsolutionssj@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="bg-destructive text-destructive-foreground rounded-lg p-3 text-center max-w-2xl mx-auto">
            <p className="font-medium">Copyright © 2025 All Rights Reserved, Design by SJ Team</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
