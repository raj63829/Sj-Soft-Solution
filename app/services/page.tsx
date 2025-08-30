export default function ServicesPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">Our Services</h1>
      <p className="mt-3 text-muted-foreground max-w-2xl">
        We help students and professionals with internships, paper publication assistance, and plagiarism checking.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <a href="/internship" className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold">Internship</h2>
          <p className="mt-2 text-muted-foreground">Hands-on mentorship and real-world projects.</p>
        </a>
        <a href="/publication" className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold">Paper Publication</h2>
          <p className="mt-2 text-muted-foreground">End-to-end guidance from topic to journal submission.</p>
        </a>
        <a href="/plagiarism" className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold">Plagiarism Check</h2>
          <p className="mt-2 text-muted-foreground">Accurate, ethical similarity reports and fixes.</p>
        </a>
      </div>
    </main>
  )
}
