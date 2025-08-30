export const metadata = { title: "Internship | SJ Soft Solutions" }

export default function InternshipPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Industry-ready Internship</h1>
      <p className="mt-4 max-w-3xl text-muted-foreground">
        Hands‑on training, real projects, and mentor support. Share the full syllabus and schedule to enrich this page.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {["Java Full‑Stack", "Python with AI/ML", "Cloud & DevOps"].map((t) => (
          <div key={t} className="rounded-lg border p-6">
            <h3 className="text-lg font-semibold">{t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">Live sessions • Project deliverables • Certificate</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-lg border p-6">
        <h2 className="text-xl font-semibold">How it works</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
          <li>Orientation and track selection</li>
          <li>Weekly modules with labs</li>
          <li>Capstone and review</li>
          <li>Evaluation and certification</li>
        </ol>
      </div>
    </main>
  )
}
