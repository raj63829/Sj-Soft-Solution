"use client"

import { useState, useCallback, useEffect } from "react"

const images = [
  { src: "/gallery/team-conference.jpg", alt: "Team at SJ Soft Solutions office" },
  { src: "/gallery/college-presentation.jpg", alt: "College presentation session" },
  { src: "/gallery/python-ai-workshop.jpg", alt: "Python with AI workshop" },
  { src: "/gallery/computer-lab-training.jpg", alt: "Computer lab training session" },
  { src: "/gallery/team-celebration.jpg", alt: "Team celebration at office" },
  { src: "/gallery/engineering-college-session.jpg", alt: "Engineering college classroom session" },
  { src: "/gallery/award-ceremony-1.jpg", alt: "Recognition ceremony at office" },
  { src: "/gallery/team-group-photo.jpg", alt: "Team and students group photo" },
  { src: "/gallery/award-ceremony-2.jpg", alt: "Recognition photo with bouquet" },
  { src: "/gallery/programming-class.jpg", alt: "Programming class with projector" },
]

export default function GalleryGrid() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const openAt = (i: number) => {
    setIndex(i)
    setOpen(true)
  }

  const close = useCallback(() => setOpen(false), [])
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [])
  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, close, next, prev])

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {images.map((img, i) => (
          <button
            key={img.src}
            className="group relative overflow-hidden rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={() => openAt(i)}
          >
            <img
              src={img.src || "/placeholder.svg"}
              alt={img.alt}
              className="h-40 w-full object-cover transition-transform group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className="absolute inset-0 mx-auto flex max-w-5xl items-center justify-center px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Previous image"
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-3 py-2 text-sm font-medium hover:bg-white"
            >
              Prev
            </button>
            <img
              src={images[index].src || "/placeholder.svg"}
              alt={images[index].alt}
              className="max-h-[80vh] w-auto rounded-lg shadow-2xl"
            />
            <button
              aria-label="Next image"
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-3 py-2 text-sm font-medium hover:bg-white"
            >
              Next
            </button>
            <button
              aria-label="Close"
              onClick={close}
              className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-sm font-medium hover:bg-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}
