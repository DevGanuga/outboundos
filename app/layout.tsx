import type { Metadata } from "next"
import "./globals.css"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

export const metadata: Metadata = {
  title: "OutboundOS™ - AI SDR That Books 10-30 Meetings in 30 Days",
  description: "Replace your SDR with Nova — your AI Sales Rep that books 10–30 qualified meetings in 30 days post-launch, or we work for free until it does.",
  keywords: "AI SDR, sales automation, B2B SaaS, outbound sales, Nova AI, sales development rep",
  openGraph: {
    title: "OutboundOS™ - AI SDR That Books 10-30 Meetings in 30 Days",
    description: "Replace your SDR with Nova — your AI Sales Rep that books 10–30 qualified meetings in 30 days post-launch, or we work for free until it does.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
