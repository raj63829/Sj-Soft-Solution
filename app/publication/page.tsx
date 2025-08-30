import type React from "react"
export const metadata = { title: "Paper Publication | SJ Soft Solutions" }

function Step({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p className="flex items-start gap-3 text-base leading-relaxed">
      <span className="inline-grid h-8 w-8 place-items-center rounded-full bg-orange-500 text-white">{n}</span>
      <span>{children}</span>
    </p>
  )
}

export default function PublicationPage() {
  return (
    <main>
      <section className="relative border-b bg-gradient-to-b from-cyan-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-pretty text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="text-orange-600">Paper</span> <span className="text-blue-600">Publication</span>
          </h1>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            In the last 6 years SJ supported thousands of scholars and students to publish their papers in specified
            journals. Our expert writers deliver research papers that meet journal standards through rigorous plagiarism
            and grammar checks.
          </p>
          <h2 className="mt-6 text-xl font-semibold text-brown-700">Journals Where Our Clients got Published</h2>
          <ul className="mt-3 flex flex-wrap gap-2 text-sm">
            <li className="rounded bg-amber-200/60 px-3 py-1">IEEE</li>
            <li className="rounded bg-amber-200/60 px-3 py-1">SCI Indexed</li>
            <li className="rounded bg-amber-200/60 px-3 py-1">SCOPUS</li>
            <li className="rounded bg-amber-200/60 px-3 py-1">Web Of Science</li>
            <li className="rounded bg-amber-200/60 px-3 py-1">UGC Approved</li>
            <li className="rounded bg-amber-200/60 px-3 py-1">International Journals</li>
          </ul>
        </div>
      </section>

      <section className="bg-cyan-50/60">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-14 md:grid-cols-3">
          <div className="space-y-6 md:col-span-1">
            <h3 className="text-2xl font-semibold text-brown-700">Our Publishing Process</h3>
            <div className="space-y-5">
              <Step n="01">Topic identification</Step>
              <Step n="02">Design for a journal paper</Step>
              <Step n="03">Writing the manuscript</Step>
              <Step n="04">Selecting an appropriate journal</Step>
            </div>
          </div>
          <div className="md:col-span-1">
            <img
              src="/illustration-of-research-paper-publishing-process.png"
              alt="Publishing process illustration"
              className="mx-auto h-[380px] w-[280px] rounded-xl border object-cover shadow-sm"
            />
          </div>
          <div className="space-y-5 md:col-span-1">
            <Step n="05">Formatting of manuscript</Step>
            <Step n="06">Peer review of manuscript</Step>
            <Step n="07">Submission to publishers</Step>
            <Step n="08">Revisions as per editor feedback</Step>
            <Step n="09">Final acceptance and publication</Step>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h3 className="text-2xl font-semibold text-brown-700">Journal Paper Publication Process</h3>
        <ol className="mt-6 space-y-4 text-base leading-relaxed">
          <li>
            <span className="font-semibold">1. Submission of paper:</span> Proofread, format, and submit your paper with
            a well‑crafted cover letter, following target journal guidelines.
          </li>
          <li>
            <span className="font-semibold">2. Review by editors:</span> Editorial board performs an initial screen
            before forwarding promising manuscripts for peer review.
          </li>
          <li>
            <span className="font-semibold">3. Peer review:</span> Thorough evaluation of originality, clarity, and
            scientific contribution with improvement suggestions.
          </li>
          <li>
            <span className="font-semibold">4. Review comments:</span> Editors return decisions with revisions,
            alternate journal suggestions, or rejection.
          </li>
          <li>
            <span className="font-semibold">5. Revision and resubmission:</span> Address reviewer comments and resubmit
            with a detailed response.
          </li>
        </ol>
      </section>
    </main>
  )
}
