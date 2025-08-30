export const metadata = { title: "Plagiarism Check | SJ Soft Solutions" }

const tips = [
  "Understand the context",
  "Properly quote and paraphrase",
  "Identify what does and does not need citation",
  "Manage your citations",
  "Citing your own material",
  "Keep track of your sources",
  "Referencing",
  "Use plagiarism checkers",
  "Support plagiarism report",
]

export default function PlagiarismPage() {
  return (
    <main>
      <section className="relative border-b bg-gradient-to-b from-cyan-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Plagiarism Check</h1>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            We provide complete solutions for your documents as per University guidelines with no plagiarism.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border px-3 py-1 text-sm">Research Papers</span>
            <span className="rounded-full border px-3 py-1 text-sm">M‑Tech Final Documents</span>
            <span className="rounded-full border px-3 py-1 text-sm">B‑Tech Final Documents</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold">How Cloud Technologies Avoid Plagiarism</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tips.map((t) => (
            <div key={t} className="rounded-lg bg-sky-500 text-white shadow-sm">
              <p className="px-5 py-6 text-center">{t}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          <img
            src="https://venkatinnovativeprojects.com/public/assets/images/gallery/plag-pic-1.png"
            alt="Plagiarism tool 1"
            className="h-48 w-full rounded-lg border object-contain bg-white p-4"
          />
          <img
            src="https://venkatinnovativeprojects.com/public/assets/images/gallery/plag-pic-2.png"
            alt="Plagiarism tool 2"
            className="h-48 w-full rounded-lg border object-contain bg-white p-4"
          />
          <img
            src="https://venkatinnovativeprojects.com/public/assets/images/gallery/plag-pic-3.png"
            alt="Plagiarism tool 3"
            className="h-48 w-full rounded-lg border object-contain bg-white p-4"
          />
          <img
            src="https://venkatinnovativeprojects.com/public/assets/images/gallery/plag-pic-4.png"
            alt="Plagiarism tool 4"
            className="h-48 w-full rounded-lg border object-contain bg-white p-4"
          />
        </div>
      </section>
    </main>
  )
}
