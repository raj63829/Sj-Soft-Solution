"use client"
import { useMemo, useState } from "react"

type Project = {
  title: string
  domain: string
  frontEnd: string
  database: string
}

const ALL_PROJECTS: Project[] = [
  { title: "Online Banking System", domain: "FinTech / Banking", frontEnd: "Java Swing", database: "MySQL" },
  { title: "Student Management System", domain: "Education / Smart Campus", frontEnd: "JavaFX", database: "Oracle" },
  { title: "Library Management System", domain: "Education IT", frontEnd: "Java Swing", database: "MySQL" },
  { title: "E-Commerce Website", domain: "Retail / Online Shopping", frontEnd: "Java Servlets, JSP", database: "MySQL" },
  { title: "Online Exam System", domain: "EdTech / Evaluation", frontEnd: "JavaFX", database: "PostgreSQL" },
  { title: "Hotel Reservation System", domain: "Hospitality / Travel", frontEnd: "Java Swing", database: "MySQL" },
  { title: "Attendance Tracking System", domain: "Corporate / HR", frontEnd: "JavaFX", database: "MySQL" },
  { title: "Inventory Management System", domain: "Retail / Supply Chain", frontEnd: "Java Swing", database: "Oracle" },
  { title: "Health Record Management System", domain: "Healthcare IT", frontEnd: "JavaFX", database: "MySQL" },
  { title: "Job Portal System", domain: "Recruitment / HR", frontEnd: "Java Servlets, JSP", database: "MySQL" },
  { title: "Vehicle Service Booking System", domain: "Automobile / Services", frontEnd: "Java Swing", database: "MySQL" },
  { title: "Expense Tracker", domain: "Finance / Personal", frontEnd: "JavaFX", database: "MySQL" },
  { title: "Crime Record Management System", domain: "Public Safety", frontEnd: "Java Swing", database: "MySQL" },
  { title: "Food Delivery System", domain: "E-Commerce / FoodTech", frontEnd: "Java Servlets, JSP", database: "MySQL" },
  { title: "Hospital Management System", domain: "Healthcare IT", frontEnd: "JavaFX", database: "MySQL" },
  { title: "Railway Ticket Booking System", domain: "Travel / Transport", frontEnd: "Java Swing", database: "Oracle" },
  { title: "Weather Forecasting System", domain: "Environment / IoT", frontEnd: "JavaFX", database: "MySQL" },
  { title: "Tourism Management System", domain: "Travel & Tourism", frontEnd: "Java Servlets, JSP", database: "MySQL" },
  { title: "Payroll Management System", domain: "HR / Corporate", frontEnd: "JavaFX", database: "PostgreSQL" },
  { title: "Chat Application", domain: "Communication / IT", frontEnd: "Java Swing", database: "MySQL" },
]

const PAGE_SIZES = [10, 25, 30, 40]

export default function JavaProjectsPage() {
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

  if (page > totalPages) setPage(1)

  return (
    <main className="min-h-screen">
      {/* Heading */}
      <section className="bg-muted/30 border-b">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-semibold">Java Project Lists</h1>
          <p className="text-muted-foreground mt-2">
            Explore academic and real-world Java project ideas with common stacks and databases.
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
              placeholder="e.g., Hospital, Banking..."
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

        {/* Pagination */}
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
