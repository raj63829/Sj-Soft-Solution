import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServiceCards from "@/components/service-cards"
import TechnologyShowcase from "@/components/technology-showcase"
import ProjectCards from "@/components/project-cards"
import ServicesSection from "@/components/services-section"
import GallerySection from "@/components/gallery-section"
import TestimonialsSection from "@/components/testimonials-section"
import Footer from "@/components/footer"
import SocialIcons from "@/components/social-icons"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServiceCards />
      <TechnologyShowcase />
      <ProjectCards />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <Footer />
      <SocialIcons />
    </div>
  )
}
