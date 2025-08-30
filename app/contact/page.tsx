"use client"

import Image from "next/image"
import SocialIcons from "@/components/social-icons"
import { Star } from "lucide-react"

export default function ContactPage() {
  const info = [
    {
      title: "Address",
      emoji: "🏢",
      text: "13-18-163/3, GPAR Complex, Road No.5, beside HDFC Bank lane, Chaitanyapuri, Dilsukhnagar, Hyderabad, Telangana 500060",
    },
    {
      title: "Email",
      emoji: "✉️",
      text: "info@sijsoftsolutions.com • sjsoftsolutionssj@gmail.com",
    },
    {
      title: "Phone",
      emoji: "📞",
      text: "+91 9392238421 • +91 9581424063",
    },
  ]

  const testimonials: { name: string; text: string; rating: number }[] = [
    {
      name: "Sowmya",
      text: "This VIP website projects was a great way to apply the concepts we've been learning in class. It helped solidify my understanding and gave me practical experience.",
      rating: 5,
    },
    {
      name: "Rishi",
      text: "I loved working on this VIP projects. It was a perfect balance of challenging and achievable, and I learned a lot about project management and time-management.",
      rating: 4,
    },
    {
      name: "Suraj",
      text: "This project website was a great learning experience. It allowed me to apply theoretical knowledge to a practical scenario, and I feel much more confident in my skills now.",
      rating: 5,
    },
    {
      name: "Sripathi",
      text: "I really appreciated the hands-on approach of this project. It was challenging, but it forced me to think critically and problem-solve in real-time.",
      rating: 4,
    },
    {
      name: "Arvind",
      text: "This project was an eye-opener for me. It highlighted areas where I needed to improve and gave me the opportunity to develop those skills.",
      rating: 5,
    },
    {
      name: "Meghana",
      text: "This VIP website project was incredibly rewarding. I learned a lot about time management and how to break down a complex task into manageable parts.",
      rating: 4,
    },
    {
      name: "Karthik",
      text: "This project was an eye-opener for me. It highlighted areas where I needed to improve and gave me the opportunity to develop those skills.",
      rating: 4,
    },
    {
      name: "Sanjay",
      text: "This VIP website project was incredibly rewarding. I learned a lot about time management and how to break down a complex task into manageable parts.",
      rating: 4,
    },
    {
      name: "Satish",
      text: "I loved working on this VIP projects. It was a perfect balance of challenging and achievable, and I learned a lot about project management and time-management.",
      rating: 4,
    },
    {
      name: "Ritikesh",
      text: "I really appreciated the hands-on approach of this project. It was challenging, but it forced me to think critically and problem-solve in real-time.",
      rating: 4,
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Fixed social icons bar */}
      <SocialIcons className="hidden md:flex fixed right-4 top-1/3 z-40" />
      <SocialIcons />

      {/* Hero */}
      <section className="bg-muted/30 border-b">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-semibold text-balance">{"We'd love to hear from you"}</h1>
          <p className="text-muted-foreground mt-2">Stay in touch with us</p>
        </div>
      </section>

      {/* Info cards */}
      <section className="mx-auto max-w-6xl px-4 py-8 md:py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {info.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border bg-card text-card-foreground p-6 shadow-sm"
              aria-label={item.title}
            >
              <div className="text-3xl mb-2" aria-hidden>
                {item.emoji}
              </div>
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 text-pretty">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form + Image */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-center text-2xl font-semibold mb-6">Leave us a message</h2>
        <div className="grid gap-8 md:grid-cols-2 items-start">
          {/* Form */}
          <form
            className="rounded-xl border bg-card p-6 shadow-sm"
            onSubmit={(e) => {
              e.preventDefault()
              const form = e.currentTarget as HTMLFormElement
              const data = new FormData(form)
              const payload = Object.fromEntries(data.entries())
              alert("Thanks! We received your message.")
              console.log("[v0] Contact form payload:", payload)
              form.reset()
            }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid gap-2">
                <label htmlFor="fullname" className="text-sm font-medium">
                  Full Name
                </label>
                <input
                  id="fullname"
                  name="fullname"
                  required
                  className="h-10 rounded-md border bg-background px-3 text-sm"
                  placeholder="Full Name"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="h-10 rounded-md border bg-background px-3 text-sm"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 mt-4">
              <div className="grid gap-2">
                <label htmlFor="contact" className="text-sm font-medium">
                  Contact Number
                </label>
                <input
                  id="contact"
                  name="contact"
                  required
                  className="h-10 rounded-md border bg-background px-3 text-sm"
                  placeholder="e.g., +91 90000 00000"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="project" className="text-sm font-medium">
                  Project Type
                </label>
                <input
                  id="project"
                  name="project"
                  className="h-10 rounded-md border bg-background px-3 text-sm"
                  placeholder="Java, Python, AI, PHP..."
                />
              </div>
            </div>

            <div className="grid gap-2 mt-4">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="rounded-md border bg-background px-3 py-2 text-sm"
                placeholder="How can we help?"
              />
            </div>

            <button
              type="submit"
              className="mt-5 inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Send
            </button>
          </form>

          {/* Image */}
          <div className="rounded-xl overflow-hidden border bg-muted/20">
            <Image
              src="/images/contact.png"
              width={1200}
              height={900}
              className="w-full h-auto object-cover"
              alt="Contact illustration"
              priority
            />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-xl overflow-hidden border">
          <iframe
            title="SJ Soft Solutions Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.886709097833!2d78.52964237890932!3d17.369183641009148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98e42de6e5cf%3A0x16ba31cedc2924e2!2sHoney%20Soft%20Solutions!5e0!3m2!1sen!2sin!4v1751612181457!5m2!1sen!2sin"
            height="420"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </section>

      {/* Testimonials Marquee */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-balance">What Our Clients Say</h2>

        <div className="relative mt-6 overflow-hidden">
          <div
            className="flex gap-4 will-change-transform"
            style={{ animation: "contact-marquee 30s linear infinite", width: "max-content" }}
            aria-live="polite"
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <figure
                key={`${t.name}-${i}`}
                className="w-80 shrink-0 rounded-2xl border bg-card p-5 text-card-foreground shadow-sm"
              >
                <blockquote className="text-sm text-muted-foreground">{t.text}</blockquote>
                <figcaption className="mt-4 flex items-center justify-between">
                  <span className="font-medium">{t.name}</span>
                  <span className="flex items-center gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        className={
                          j < t.rating ? "h-4 w-4 fill-amber-400 text-amber-400" : "h-4 w-4 text-muted-foreground"
                        }
                      />
                    ))}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <style jsx>{`
            @keyframes contact-marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </div>
      </section>
    </main>
  )
}
