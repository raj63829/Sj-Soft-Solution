"use client"
import { useMemo, useState } from "react"

type Project = {
  title: string
  domain: string
  tools: string
  techniques: string
}

const ALL_PROJECTS: Project[] = [
  { title: "AI Chatbot for Education", domain: "EdTech / NLP", tools: "Python, Flask, React", techniques: "NLP, RNN" },
  { title: "Credit Card Fraud Detection", domain: "FinTech / Security", tools: "Python, Django", techniques: "ML, XGBoost" },
  { title: "Real-Time Emotion Detection", domain: "AI / Computer Vision", tools: "Python, OpenCV", techniques: "CNN, DeepFace" },
  { title: "Speech-Based Stress Detection", domain: "Mental Health AI", tools: "Python, TensorFlow", techniques: "CNN, LSTM" },
  { title: "AI-Powered E-Learning System", domain: "Education / AI", tools: "Python, React", techniques: "Recommendation Systems" },
  { title: "AI Personal Finance Advisor", domain: "FinTech / AI", tools: "Python, Flask", techniques: "ML, Regression" },
  { title: "Autonomous Drone Navigation", domain: "Robotics / AI", tools: "ROS, Python", techniques: "Reinforcement Learning" },
  { title: "AI Crime Rate Prediction", domain: "Law Enforcement", tools: "Python, Dash", techniques: "ML, Time Series" },
  { title: "AI Medical Diagnosis System", domain: "Healthcare AI", tools: "Python, Flask", techniques: "CNN, Transfer Learning" },
  { title: "AI Traffic Management System", domain: "Smart City AI", tools: "Python, OpenCV", techniques: "ML, Object Detection" },
  { title: "AI Chat-Based Mental Health Assistant", domain: "Mental Health AI", tools: "Python, Streamlit", techniques: "NLP, GPT Models" },
  { title: "AI Predictive Maintenance System", domain: "IoT / AI", tools: "Python, MQTT", techniques: "ML, LSTM" },
  { title: "AI-Powered Resume Screening", domain: "HR Tech", tools: "Python, Django", techniques: "NLP, ML" },
  { title: "AI Customer Support Bot", domain: "Business / AI", tools: "Python, FastAPI", techniques: "NLP, ChatGPT APIs" },
  { title: "AI Fake News Detection", domain: "Cybersecurity / AI", tools: "Python, Flask", techniques: "NLP, BERT" },
  { title: "AI Autonomous Notarization System", domain: "Blockchain / AI", tools: "Python, Ethereum", techniques: "Smart Contracts, ML" },
  { title: "AI Product Recommendation System", domain: "E-Commerce AI", tools: "Python, React", techniques: "Collaborative Filtering" },
  { title: "AI Energy Consumption Prediction", domain: "Smart Energy AI", tools: "Python, Django", techniques: "ML, Regression" },
  { title: "AI Facial Recognition Attendance", domain: "Education / AI", tools: "Python, OpenCV", techniques: "CNN, FaceNet" },
  { title: "AI Language Translation Tool", domain: "NLP / AI", tools: "Python, Flask", techniques: "Seq2Seq, Transformers" },
]

const PAGE_SIZES = [10, 25, 30, 40]

export default function AIProjectsPage() {
  const [query, setQuery] = useState("")
  const [pageSize, setPageSize] = useState<number>(25)
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return ALL_PROJECTS
    return ALL_PROJECTS.filter((p) =>
      [p.title, p.domain, p.tools, p.techniques].some((v) => v.toLowerCase().includes(q)),
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
          <h1 className="text-3xl md:text-4xl font-semibold">AI Project Lists</h1>
          <p className="text-muted-foreground mt-2">
            Explore AI and Machine Learning project ideas with popular tools and techniques.
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
              placeholder="e.g., NLP, Healthcare, Vision..."
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
                <th>Tools</th>
                <th>Techniques</th>
              </tr>
            </thead>
            <tbody>
              {pageItems.map((p, i) => (
                <tr key={p.title} className={`border-t ${i % 2 === 1 ? "bg-muted/20" : ""}`}>
                  <td className="px-4 py-3">{p.title}</td>
                  <td className="px-4 py-3">{p.domain}</td>
                  <td className="px-4 py-3">{p.tools}</td>
                  <td className="px-4 py-3">{p.techniques}</td>
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
