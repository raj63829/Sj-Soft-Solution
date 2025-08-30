export default function ProjectsIndexPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">Projects</h1>
      <p className="mt-3 text-muted-foreground max-w-2xl">
        Explore ready-to-build academic and professional projects across multiple stacks.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        <a href="/projects/java" className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold">Java</h2>
          <p className="mt-2 text-muted-foreground">Spring, Hibernate, REST</p>
        </a>
        <a href="/projects/python" className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold">Python</h2>
          <p className="mt-2 text-muted-foreground">Django, Flask, Data</p>
        </a>
        <a href="/projects/ai" className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold">AI</h2>
          <p className="mt-2 text-muted-foreground">ML, DL, NLP</p>
        </a>
        <a href="/projects/php" className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold">PHP</h2>
          <p className="mt-2 text-muted-foreground">Laravel, Core PHP</p>
        </a>
      </div>
    </main>
  )
}
