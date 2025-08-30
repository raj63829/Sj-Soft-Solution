"use client"
import { useMemo, useState } from "react"

type Project = {
  title: string
  domain: string
  frontEnd: string
  database: string
}

const ALL_PROJECTS: Project[] = [
  { title: "Django Blog App", domain: "Web Development", frontEnd: "HTML, CSS, Django Templates", database: "SQLite" },
  { title: "Flask Weather App", domain: "Web / APIs", frontEnd: "HTML, CSS, Bootstrap", database: "SQLite" },
  { title: "Online Quiz System", domain: "E-Learning", frontEnd: "HTML, CSS, JS", database: "MySQL" },
  { title: "Library Management System", domain: "Education", frontEnd: "HTML, CSS, JS", database: "PostgreSQL" },
  { title: "Chat Application", domain: "Real-Time Messaging", frontEnd: "HTML, CSS, JS, WebSocket", database: "MongoDB" },
  { title: "E-Commerce Website", domain: "Retail / Shopping", frontEnd: "HTML, CSS, Bootstrap", database: "MySQL" },
  { title: "Online Food Ordering System", domain: "Food Tech", frontEnd: "HTML, CSS, JS", database: "PostgreSQL" },
  { title: "Hospital Management System", domain: "Healthcare IT", frontEnd: "HTML, CSS, Bootstrap", database: "MySQL" },
  { title: "Django Portfolio Website", domain: "Personal Website", frontEnd: "HTML, CSS, Bootstrap", database: "SQLite" },
  { title: "Movie Recommendation System", domain: "AI / ML", frontEnd: "HTML, CSS, JS", database: "CSV / MySQL" },
  { title: "Online Examination System", domain: "EdTech / Evaluation", frontEnd: "HTML, CSS, JS", database: "MySQL" },
  { title: "Car Rental System", domain: "Transport / Automation", frontEnd: "HTML, CSS, JS", database: "MySQL" },
  { title: "Student Attendance System", domain: "Education Automation", frontEnd: "HTML, CSS, JS", database: "SQLite" },
  { title: "Expense Tracker App", domain: "Finance / Budgeting", frontEnd: "HTML, CSS, JS", database: "SQLite" },
  { title: "To-Do List Web App", domain: "Productivity Tools", frontEnd: "HTML, CSS, JS", database: "SQLite" },
  { title: "URL Shortener", domain: "Web Utilities", frontEnd: "HTML, CSS, Bootstrap", database: "SQLite" },
  { title: "Blog Comment Sentiment Analysis", domain: "AI / NLP", frontEnd: "HTML, CSS, JS", database: "CSV / MySQL" },
  { title: "Online Banking System", domain: "FinTech", frontEnd: "HTML, CSS, Bootstrap", database: "MySQL" },
  { title: "Flight Booking System", domain: "Travel / Booking", frontEnd: "HTML, CSS, JS", database: "MySQL" },
  { title: "Real-Time Chatbot", domain: "AI / NLP", frontEnd: "HTML, CSS, JS", database: "NoSQL / SQLite" },
]

const PAGE_SIZES = [10, 25, 30, 40]

export default function PythonProjectsPage() {
  const [query, setQuery] = useState("")
  const [pageSize, setPageSize] = useState<number>(25)
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return ALL_PROJECTS
    return ALL_PROJECTS.filter((p) =>
      [p.title, p.domain, p.frontEnd, p.database].some((v) => v.toLowerCase().includes(q)),
    )
  }, [query])

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const pageItems = useMemo(() => {
    const start = (page - 1) * pageSize
    return filtered.slice(start, start + pageSize)
  }, [filtered, page, pageSize])

  // Reset page when filters change
  if (page > totalPages) setPage(1)

  return (
    <main className="min-h-screen">
      {/* Heading */}
      <section className="bg-muted/30 border-b">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-semibold">Python Project Lists</h1>
          <p className="text-muted-foreground mt-2">
            Explore academic and real-world Python project ideas with common stacks and databases.
          </p>
        </div>
      </section>

      {/* Controls */}
      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <label className="text-sm flex items-center gap-2">
            Show
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
              className="h-9 rounded-md border bg-background px-2 text-sm"
            >
              {PAGE_SIZES.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
            entries per page
          </label>

          <label className="text-sm flex items-center gap-2">
            Search:
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-9 rounded-md border bg-background px-3 text-sm"
              placeholder="e.g., Django, AI, Hospital..."
            />
          </label>
        </div>
      </section>

      {/* Table */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="overflow-x-auto rounded-xl border">
          <table className="w-full text-sm">
            <thead className="bg-muted/60">
              <tr className="[&>*]:text-left [&>*]:px-4 [&>*]:py-3">
                <th>Title</th>
                <th>Domain</th>
                <th>Front End</th>
                <th>Database</th>
              </tr>
            </thead>
            <tbody>
              {pageItems.map((p, i) => (
                <tr key={p.title} className={`border-t ${i % 2 === 1 ? "bg-muted/20" : ""}`}>
                  <td className="px-4 py-3">{p.title}</td>
                  <td className="px-4 py-3">{p.domain}</td>
                  <td className="px-4 py-3">{p.frontEnd}</td>
                  <td className="px-4 py-3">{p.database}</td>
                </tr>
              ))}
              {pageItems.length === 0 && (
                <tr>
                  <td className="px-4 py-6 text-center text-muted-foreground" colSpan={4}>
                    No results found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination summary */}
        <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
          <span>
            Showing {pageItems.length} of {filtered.length} projects
          </span>
          <div className="flex items-center gap-2">
            <button
              className="h-8 px-3 rounded-md border bg-background"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              Prev
            </button>
            <span>
              Page {page} of {totalPages}
            </span>
            <button
              className="h-8 px-3 rounded-md border bg-background"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
