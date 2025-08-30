"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useEffect, useState } from "react"

const testimonials = [
  {
    name: "Sowmya",
    content:
      "This SJ website projects was a great way to apply the concepts we've been learning in class. It helped solidify my understanding and gave me practical experience.",
    rating: 5,
  },
  {
    name: "Rishi",
    content:
      "I loved working on this SJ projects. It was a perfect balance of challenging and achievable, and I learned a lot about project management and Time-management",
    rating: 4,
  },
  {
    name: "Rama",
    content:
      "This project website was a great learning experience. It allowed me to apply theoretical knowledge to a practical scenario, and I feel much more confident in my skills now.",
    rating: 5,
  },
  {
    name: "Sruthi",
    content:
      "I really appreciated the hands-on approach of this project. It was challenging, but it forced me to think critically and problem-solve in real-time.",
    rating: 4,
  },
  {
    name: "Arvind",
    content:
      "This project was an eye-opener for me. It highlighted areas where I needed to improve and gave me the opportunity to develop those skills.",
    rating: 5,
  },
  {
    name: "Praveen",
    content:
      "This SJ website project was incredibly rewarding. I learned a lot about time management and how to break down a complex task into manageable parts.",
    rating: 4,
  },
  {
    name: "Karthik",
    content:
      "This SJ website gave hands-on experience. It highlighted areas where I needed to improve and gave me the opportunity to develop those skills.",
    rating: 4,
  },
  {
    name: "Sanjay",
    content:
      "This SJ website project was incredibly rewarding. I learned a lot about time management and how to break down a complex task into manageable parts.",
    rating: 4,
  },
  {
    name: "Satish",
    content:
      "I loved working on this SJ projects. It was a perfect balance of challenging and achievable, and I learned a lot about project management and Time-management",
    rating: 4,
  },
  {
    name: "Sujith",
    content:
      "I really appreciated the hands-on approach of this project. It was challenging, but it forced me to think critically and problem-solve in real-time.",
    rating: 4,
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            What Our <strong>Clients</strong> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="text-center max-w-2xl mx-auto">
                    <CardContent className="pt-8 pb-8">
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                        ))}
                        {[...Array(5 - testimonial.rating)].map((_, i) => (
                          <Star key={i + testimonial.rating} className="h-6 w-6 text-gray-300" />
                        ))}
                      </div>

                      <blockquote className="text-lg md:text-xl text-card-foreground mb-8 leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>

                      <div className="flex items-center justify-center">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-xl mr-4">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div className="text-left">
                          <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                          <p className="text-muted-foreground">Client</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
