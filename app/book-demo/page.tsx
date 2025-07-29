"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Container } from "../components/Container"
import { Button } from "../components/Button"
import { CheckCircle, Calendar, Clock, Users, Zap, ArrowRight } from "lucide-react"

const benefits = [
  "Live demo of Nova analyzing your ICP in real-time",
  "See actual AI-generated messages for your prospects",
  "Get a custom ROI calculation for your business",
  "Review integration options with your tech stack",
  "Ask our team anything about implementation"
]

const processPoints = [
  { icon: Clock, label: "30 Minutes", desc: "Quick, focused session" },
  { icon: Users, label: "1-on-1", desc: "With our experts" },
  { icon: Zap, label: "No Pressure", desc: "Educational, not salesy" }
]

export default function BookDemoPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    currentSDRs: "",
    monthlyTarget: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would integrate with your calendar booking system
    console.log("Form submitted:", formData)
    alert("Thank you! We'll redirect you to our calendar to book your demo.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Benefits */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl mb-6">
                  See Nova Book <span className="text-primary">Real Meetings</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-10">
                  Watch Nova analyze prospects, craft messages, and demonstrate 
                  exactly how it will book 10-30 qualified meetings for you monthly.
                </p>

                <div className="space-y-4 mb-10">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-base">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-8">
                  <div className="grid grid-cols-3 gap-4">
                    {processPoints.map((point, index) => (
                      <div key={index} className="text-center">
                        <point.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                        <p className="font-semibold text-sm">{point.label}</p>
                        <p className="text-xs text-muted-foreground">{point.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 p-6 rounded-xl bg-muted/50">
                  <h3 className="font-semibold mb-2">What You'll Get:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Personalized walkthrough of Nova's capabilities</li>
                    <li>• ROI calculation based on your SDR costs</li>
                    <li>• Implementation timeline for your team</li>
                    <li>• Clear next steps (no pressure)</li>
                  </ul>
                </div>
              </motion.div>

              {/* Right Column - Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl border bg-card p-8 shadow-xl"
              >
                <h2 className="text-2xl font-bold mb-6">Book Your Demo</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Fill out this form and we'll show you exactly how Nova will transform your outbound.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-1.5">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full rounded-lg border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-1.5">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full rounded-lg border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-1.5">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full rounded-lg border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="currentSDRs" className="block text-sm font-medium mb-1.5">
                      Current SDR Team Size
                    </label>
                    <select
                      id="currentSDRs"
                      name="currentSDRs"
                      value={formData.currentSDRs}
                      onChange={handleChange}
                      className="w-full rounded-lg border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select...</option>
                      <option value="0">No SDRs (Founder-led sales)</option>
                      <option value="1">1 SDR</option>
                      <option value="2-3">2-3 SDRs</option>
                      <option value="4+">4+ SDRs</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="monthlyTarget" className="block text-sm font-medium mb-1.5">
                      Ideal Monthly Meetings
                    </label>
                    <select
                      id="monthlyTarget"
                      name="monthlyTarget"
                      value={formData.monthlyTarget}
                      onChange={handleChange}
                      className="w-full rounded-lg border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select...</option>
                      <option value="10-20">10-20 meetings</option>
                      <option value="20-30">20-30 meetings</option>
                      <option value="30+">30+ meetings</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                      What's your biggest sales challenge?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-lg border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Optional: Tell us about your outbound challenges..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-base">
                    Get My Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    By submitting, you agree to our{" "}
                    <Link href="/privacy" className="underline hover:text-primary">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link href="/terms" className="underline hover:text-primary">
                      Terms of Service
                    </Link>
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust Section */}
      <section className="border-t py-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-12">
              Why B2B SaaS Companies Choose Nova
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-xl bg-muted/50 p-8"
              >
                <div className="text-4xl font-bold text-primary mb-2">$3,500</div>
                <p className="font-medium">One-Time Setup</p>
                <p className="text-sm text-muted-foreground mt-2">
                  No hidden fees, no surprises. Just transparent pricing.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-xl bg-muted/50 p-8"
              >
                <div className="text-4xl font-bold text-primary mb-2">10-30</div>
                <p className="font-medium">Meetings Monthly</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Guaranteed results or we work free until you hit targets.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="rounded-xl bg-muted/50 p-8"
              >
                <div className="text-4xl font-bold text-primary mb-2">2-4</div>
                <p className="font-medium">Weeks to Deploy</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Faster than hiring and training a traditional SDR.
                </p>
              </motion.div>
            </div>

            <div className="mt-16 rounded-2xl bg-primary/5 border border-primary/20 p-8">
              <h3 className="text-xl font-bold mb-4">
                Limited Availability This Month
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                We only onboard 5 new clients per month to ensure quality implementation and support.
              </p>
              <div className="flex justify-center gap-12">
                <div>
                  <div className="text-3xl font-bold text-primary">3</div>
                  <p className="text-sm text-muted-foreground">Spots Remaining</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">$1,500</div>
                  <p className="text-sm text-muted-foreground">Discount Available</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
} 