"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Users, Zap, TrendingUp, Shield, Clock, DollarSign, Target, Brain, Sparkles } from "lucide-react"
import { Container } from "./components/Container"
import { Button } from "./components/Button"

const features = [
  {
    icon: Brain,
    title: "10,000+ Daily Prospect Analysis",
    description: "AI-powered intelligence that identifies high-intent buyers from massive datasets"
  },
  {
    icon: Zap,
    title: "500+ Personalized Touches Daily",
    description: "10x the output of traditional SDRs with hyper-personalized messaging"
  },
  {
    icon: Target,
    title: "10-30 Qualified Meetings Monthly",
    description: "Guaranteed results or we work free until you hit your targets"
  },
  {
    icon: Clock,
    title: "2-4 Week Deployment",
    description: "From signup to booked meetings faster than hiring an SDR"
  }
]

const stats = [
  { value: "80%", label: "Cost Reduction", sublabel: "vs Traditional SDR" },
  { value: "10x", label: "More Outreach", sublabel: "500+ Daily Touches" },
  { value: "24/7", label: "Always Working", sublabel: "Never Sleeps" },
  { value: "0", label: "Turnover Risk", sublabel: "Never Quits" }
]

const comparisonData = [
  { feature: "Daily Outreach Volume", human: "50 touches", nova: "500+ touches", highlight: true },
  { feature: "Total Annual Cost", human: "$120,000+", nova: "$27,500", highlight: true },
  { feature: "Time to Productivity", human: "90 days", nova: "2-4 weeks", highlight: false },
  { feature: "Employee Retention", human: "6 months avg", nova: "Forever", highlight: false },
  { feature: "Weekend & Holiday Work", human: "No", nova: "Yes", highlight: false },
  { feature: "Sick Days & PTO", human: "20+ days/year", nova: "Zero", highlight: false }
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        </div>
        
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Sparkles className="h-4 w-4" />
                Limited Time: $1,500 Off Setup for First 5 Clients
              </div>
              
              <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-7xl">
                Your SDR Just Quit.
                <span className="block text-primary">Again.</span>
              </h1>
              
              <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
                Replace the broken SDR model with Nova AI — guaranteed to book 
                10-30 qualified meetings monthly or we work free until it does.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-4 sm:flex-row sm:justify-center"
            >
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="/book-demo">
                  See Nova in Action <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="border-y bg-muted/30 py-16">
        <Container>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary">{stat.value}</div>
                <div className="mt-1 font-medium">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Problem Section */}
      <section className="py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
                The $120,000 Problem in Your Sales Team
              </h2>
              <p className="mb-12 text-xl text-muted-foreground">
                You know the cycle: Hire, train for 3 months, watch them do 50 touches a day, 
                then start over when they quit in 6 months.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-2xl border border-destructive/20 bg-destructive/5 p-8 text-center"
              >
                <DollarSign className="mx-auto mb-4 h-12 w-12 text-destructive" />
                <h3 className="mb-2 text-2xl font-bold">$120,000+</h3>
                <p className="text-muted-foreground">True annual cost per SDR</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-2xl border border-destructive/20 bg-destructive/5 p-8 text-center"
              >
                <Clock className="mx-auto mb-4 h-12 w-12 text-destructive" />
                <h3 className="mb-2 text-2xl font-bold">90 Days</h3>
                <p className="text-muted-foreground">Before seeing any results</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="rounded-2xl border border-destructive/20 bg-destructive/5 p-8 text-center"
              >
                <Users className="mx-auto mb-4 h-12 w-12 text-destructive" />
                <h3 className="mb-2 text-2xl font-bold">6 Months</h3>
                <p className="text-muted-foreground">Average SDR tenure</p>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Solution Section */}
      <section className="bg-gradient-to-b from-muted/30 to-transparent py-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl"
            >
              Meet Nova: Your AI Sales Rep That
              <span className="text-primary"> Never Quits</span>
            </motion.h2>
            <p className="mb-16 text-xl text-muted-foreground">
              Deploy in 2-4 weeks. Start booking meetings immediately. Scale infinitely.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl border bg-card p-8 transition-all hover:shadow-lg"
              >
                <feature.icon className="mb-4 h-12 w-12 text-primary transition-transform group-hover:scale-110" />
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Comparison Table */}
      <section className="py-24">
        <Container>
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <h2 className="mb-4 text-4xl font-bold tracking-tight">
                Why Smart Companies Are Switching
              </h2>
              <p className="text-xl text-muted-foreground">
                The numbers speak for themselves
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="overflow-hidden rounded-2xl border shadow-sm"
            >
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="px-6 py-4 text-left text-sm font-semibold">Metric</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Traditional SDR</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-primary">Nova AI SDR</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr 
                      key={index} 
                      className={`border-b transition-colors hover:bg-muted/30 ${
                        row.highlight ? 'bg-primary/5' : ''
                      }`}
                    >
                      <td className="px-6 py-4 font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.human}</td>
                      <td className="px-6 py-4 font-semibold text-primary">{row.nova}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Guarantee Section */}
      <section className="bg-primary/5 py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Shield className="mx-auto mb-6 h-16 w-16 text-primary" />
              <h2 className="mb-4 text-4xl font-bold">
                Our "Work Until It Works" Guarantee
              </h2>
              <p className="mb-8 text-xl text-muted-foreground">
                If Nova doesn't book at least 10 qualified meetings in your first 30 days post-launch, 
                we'll continue working at no additional cost until it does.
              </p>
              <div className="rounded-2xl border bg-card p-8 text-left">
                <h3 className="mb-4 text-xl font-semibold">You Keep Everything:</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Custom messaging flows</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>AI training & models</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>CRM integrations</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Automation workflows</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-primary to-primary/90 py-24 text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-6 text-4xl font-bold">
              Stop the SDR Hiring Cycle Today
            </h2>
            <p className="mb-8 text-xl opacity-90">
              Join B2B SaaS companies booking predictable pipeline with Nova
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                <Link href="/book-demo">
                  Book Your Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 bg-white/10 text-white hover:bg-white/20 text-lg px-8" 
                asChild
              >
                <Link href="/how-it-works">See How It Works</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm opacity-75">
              Limited spots • Only {5 - 2} remaining at discounted rate
            </p>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
