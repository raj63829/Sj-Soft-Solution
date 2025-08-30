"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    src: "/gallery/team-conference.jpg",
    alt: "SJ Soft Solutions team at conference",
    title: "Professional Conference",
  },
  {
    src: "/gallery/college-presentation.jpg",
    alt: "Presentation at Vagdevi Degree College",
    title: "College Workshop",
  },
  {
    src: "/gallery/python-ai-workshop.jpg",
    alt: "Python with AI workshop session",
    title: "Python AI Training",
  },
  {
    src: "/gallery/computer-lab-training.jpg",
    alt: "Computer lab training session",
    title: "Hands-on Training",
  },
  {
    src: "/gallery/team-celebration.jpg",
    alt: "Team celebration in office",
    title: "Team Achievement",
  },
  {
    src: "/gallery/engineering-college-session.jpg",
    alt: "Session at Malla Reddy Engineering College",
    title: "Engineering College Visit",
  },
  {
    src: "/gallery/award-ceremony-1.jpg",
    alt: "Award ceremony with floral presentation",
    title: "Recognition Ceremony",
  },
  {
    src: "/gallery/team-group-photo.jpg",
    alt: "Large team group photo",
    title: "Team Group Photo",
  },
  {
    src: "/gallery/award-ceremony-2.jpg",
    alt: "Another award ceremony moment",
    title: "Achievement Recognition",
  },
  {
    src: "/gallery/programming-class.jpg",
    alt: "Programming class instruction",
    title: "Programming Workshop",
  },
]

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openModal = (index: number) => {
    setSelectedImage(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 font-serif">Our Gallery</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Capturing moments from our workshops, training sessions, and achievements across various educational
            institutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="aspect-square relative">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold text-sm">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:bg-white/20"
                onClick={closeModal}
              >
                <X className="h-6 w-6" />
              </Button>

              <div className="relative">
                <Image
                  src={galleryImages[selectedImage].src || "/placeholder.svg"}
                  alt={galleryImages[selectedImage].alt}
                  width={800}
                  height={600}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              </div>

              <div className="text-center mt-4">
                <h3 className="text-white text-xl font-semibold">{galleryImages[selectedImage].title}</h3>
                <p className="text-white/80 text-sm mt-1">
                  {selectedImage + 1} of {galleryImages.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
