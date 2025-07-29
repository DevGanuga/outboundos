"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Users, Zap, TrendingUp, Shield, Clock, DollarSign } from "lucide-react"
import { Container } from "./components/Container"
import { Button } from "./components/Button"

const features = [
  {
    icon: Users,
    title: "10,000+ Daily Prospect Analysis",
    description: "Nova analyzes buyer signals across thousands of accounts daily to find your perfect prospects"
  },
  {
    icon: Zap,
    title: "500+ Daily Personalized Touches",
    description: "10x more outreach than human SDRs with hyper-personalized messaging at scale"
  },
  {
    icon: TrendingUp,
    title: "Real-Time Follow-ups",
    description: "Never miss a reply. Nova responds instantly, qualifies leads, and books meetings 24/7"
  },
  {
    icon: Shield,
    title: "Work Until It Works Guarantee",
    description: "If Nova doesn't book 10+ meetings in 30 days, we work free until it does"
  }
]

const stats = [
  { value: "80%", label: "Cost Reduction vs Human SDR" },
  { value: "10-30", label: "Qualified Meetings per Month" },
  { value: "500+", label: "Daily Outbound Touches" },
  { value: "24/7", label: "Always Working" }
]

const comparisonData = [
  { feature: "Daily Outreach Volume", human: "50 touches", nova: "500+ touches" },
  { feature: "Cost (All-in Annual)", human: "$120,000+", nova: "$27,500" },
  { feature: "Ramp Time", human: "90 days", nova: "2-4 weeks" },
  { feature: "Retention", human: "Quits every 6 months", nova: "Never quits" },
  { feature: "Follow-up Speed", human: "Hours/Days", nova: "Real-time" },
  { feature: "Weekend/Holiday Work", human: "No", nova: "Yes" }
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
        <Container>
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Your Competitors Just <span className="gradient-text">Fired Their SDR Team</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                Replace your SDR with Nova — your AI Sales Rep that books 10–30 qualified meetings 
                in 30 days post-launch, or we work for free until it does.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Button size="lg" asChild>
                <Link href="/book-demo">
                  Book Your Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/how-it-works">See How It Works</Link>
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-sm text-muted-foreground"
            >
              🔥 Limited Time: $3,500 setup (normally $5,000) for first 5 clients
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <Container>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold gradient-text">{stat.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Problem Section */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              The SDR Model Is <span className="text-destructive">Broken</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              You already know the cycle: Hire an SDR for $60k, spend 3 months training them, 
              watch them do 50 touches a day, then they quit after 6 months. Rinse and repeat.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <div className="rounded-lg bg-destructive/10 p-6">
                <DollarSign className="mx-auto h-8 w-8 text-destructive" />
                <h3 className="mt-4 font-semibold">$120k+ All-in Cost</h3>
                <p className="mt-2 text-sm text-muted-foreground">Salary, benefits, tools, training</p>
              </div>
              <div className="rounded-lg bg-destructive/10 p-6">
                <Clock className="mx-auto h-8 w-8 text-destructive" />
                <h3 className="mt-4 font-semibold">90 Day Ramp Time</h3>
                <p className="mt-2 text-sm text-muted-foreground">Before seeing any results</p>
              </div>
              <div className="rounded-lg bg-destructive/10 p-6">
                <Users className="mx-auto h-8 w-8 text-destructive" />
                <h3 className="mt-4 font-semibold">Quit Every 6 Months</h3>
                <p className="mt-2 text-sm text-muted-foreground">Taking your pipeline with them</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Solution Section */}
      <section className="py-16 sm:py-24 bg-muted/50">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Enter <span className="gradient-text">Nova AI SDR</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Your AI Sales Rep that never sleeps, never quits, and books meetings while you focus on closing deals
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-lg border bg-card p-6 shadow-sm"
              >
                <feature.icon className="h-10 w-10 text-primary" />
                <h3 className="mt-4 font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Comparison Table */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Human SDR vs Nova AI SDR
            </h2>
            <div className="mt-10 overflow-hidden rounded-lg border">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium">Feature</th>
                    <th className="px-6 py-3 text-left text-sm font-medium">Human SDR</th>
                    <th className="px-6 py-3 text-left text-sm font-medium">Nova AI SDR</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="hover:bg-muted/50">
                      <td className="px-6 py-4 text-sm font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{row.human}</td>
                      <td className="px-6 py-4 text-sm font-medium text-primary">{row.nova}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* How It Works Preview */}
      <section className="py-16 sm:py-24 bg-muted/50">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Deploy Nova in <span className="gradient-text">2-4 Weeks</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              From signup to booked meetings in less than a month
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                1
              </div>
              <h3 className="mt-4 font-semibold">Quick Onboarding</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Share your ICP, messaging, and CRM details
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                2
              </div>
              <h3 className="mt-4 font-semibold">Nova Deployment</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We configure Nova with your custom workflows
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                3
              </div>
              <h3 className="mt-4 font-semibold">Meetings Booked</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                10-30 qualified meetings in your calendar
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/how-it-works">Learn More About The Process</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Pricing Preview */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Simple, Transparent Pricing
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                No hidden fees. No long-term contracts. Just results.
              </p>
            </div>

            <div className="mt-12 rounded-2xl border bg-card p-8 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold">Nova AI SDR System</h3>
                  <p className="mt-2 text-muted-foreground">Everything you need to replace your SDR</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">
                    <span className="line-through text-muted-foreground">$5,000</span> $3,500
                  </div>
                  <div className="text-sm text-muted-foreground">Setup + $2,000/month</div>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">500+ daily personalized touches</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Real-time follow-ups & qualification</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">CRM integration & sync</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Weekly performance reports</span>
                </div>
              </div>

              <div className="mt-8 rounded-lg bg-primary/10 p-4">
                <p className="text-sm font-medium text-primary">
                  🛡️ Work Until It Works Guarantee: If Nova doesn't book 10+ meetings in 30 days, 
                  we work free until it does (and you keep everything we built)
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <Button size="lg" className="flex-1" asChild>
                  <Link href="/book-demo">Claim Your Spot</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/pricing">View Full Details</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-primary to-primary/80 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Stop Playing SDR Roulette
            </h2>
            <p className="mt-6 text-lg">
              Your pipeline shouldn't depend on whether your SDR had their morning coffee. 
              Nova works 24/7, never quits, and books meetings while you sleep.
            </p>
            <div className="mt-10">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/book-demo">
                  Book Your Demo Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <p className="mt-4 text-sm">
                Limited spots available • Only 5 clients at discounted rate
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
