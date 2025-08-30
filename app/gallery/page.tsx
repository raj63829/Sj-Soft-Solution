import GalleryGrid from "@/components/gallery-grid"

export const metadata = { title: "Gallery | SJ Soft Solutions" }

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="mb-8">
        <h1 className="text-pretty text-3xl font-bold tracking-tight sm:text-4xl">Gallery</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Moments from workshops, training sessions, and team events.
        </p>
      </header>
      <GalleryGrid />
    </main>
  )
}
