export const metadata = { title: "About Us | SJ Soft Solutions" }

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">About SJ Soft Solutions</h1>
      <p className="mt-4 max-w-3xl text-muted-foreground">
        We provide academic projects, internships, and publication support across Java, Python, AI, and cloud
        technologies—helping students and scholars turn ideas into production‑grade outcomes.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold">Mission</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Enable practical, industry‑aligned learning through real projects and mentorship.
          </p>
        </div>
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold">Values</h3>
          <p className="mt-2 text-sm text-muted-foreground">Integrity, originality, and measurable outcomes.</p>
        </div>
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold">What we do</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Internships, project development, plagiarism checks, and paper publication guidance.
          </p>
        </div>
      </div>
    </main>
  )
}
