import type React from "react"
import { DM_Sans, Space_Grotesk } from "next/font/google"
import "./globals.css"
import HomeButton from "@/components/home-button"
import Header from "@/components/header" // include global header

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceGrotesk.variable} antialiased`}>
      <body>
        <Header />
        <main className="pt-24">
          {/* header height offset */}
          {children}
        </main>
        <HomeButton />
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.app'
    };
