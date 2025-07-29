"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Container } from "../components/Container"
import { Button } from "../components/Button"
import { ArrowRight, CheckCircle, XCircle, Gift, Shield, TrendingUp, BarChart3 } from "lucide-react"

const pricingFeatures = [
  "500+ daily personalized outbound touches",
  "Real-time follow-ups and objection handling",
  "All meetings booked directly to your calendar",
  "Weekly strategy reports + performance dashboard",
  "Full integration with your CRM and workflows",
  "Custom messaging flows based on ICP & offer",
  "24/7 AI monitoring and response handling",
  "Dedicated success manager support"
]

const bonusStack = [
  {
    icon: Gift,
    title: "Cold Outreach Swipe Vault",
    value: "$2,000",
    description: "Proven messages from 1000s of successful SaaS meetings"
  },
  {
    icon: TrendingUp,
    title: "Nova Playbook",
    value: "$1,500",
    description: "Complete AI SDR architecture documentation and best practices"
  },
  {
    icon: BarChart3,
    title: "Weekly Founder Dashboard",
    value: "$500/mo",
    description: "Real-time metrics, insights, and optimization recommendations"
  },
  {
    icon: Shield,
    title: "SDR Cost Calculator",
    value: "$300",
    description: "ROI demonstration tool to show stakeholders the value"
  }
]

const comparison = [
  { feature: "Setup Time", traditional: "90+ days", nova: "2-4 weeks" },
  { feature: "Monthly Cost", traditional: "$10,000+", nova: "$2,000" },
  { feature: "Daily Outreach", traditional: "50 touches", nova: "500+ touches" },
  { feature: "Working Hours", traditional: "40 hrs/week", nova: "24/7/365" },
  { feature: "Sick Days/PTO", traditional: "Yes", nova: "Never" },
  { feature: "Turnover Risk", traditional: "Every 6 months", nova: "Never" },
  { feature: "Training Required", traditional: "Extensive", nova: "None" },
  { feature: "Performance Consistency", traditional: "Variable", nova: "Consistent" }
]

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Simple, Transparent <span className="gradient-text">Pricing</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                80% less than a traditional SDR. 10x the output. Zero turnover risk.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Main Pricing Card */}
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border-2 border-primary bg-card p-8 shadow-xl"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold">Nova AI SDR System</h2>
                <p className="mt-2 text-lg text-muted-foreground">
                  Everything you need to replace your SDR team
                </p>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl line-through text-muted-foreground">$5,000</span>
                    <span className="text-5xl font-bold">$3,500</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">One-time setup fee</p>
                </div>
                <div className="text-center my-4 md:my-0">
                  <span className="text-3xl font-bold">+</span>
                </div>
                <div>
                  <div className="text-5xl font-bold">$2,000</div>
                  <p className="text-sm text-muted-foreground mt-1">Monthly retainer</p>
                </div>
              </div>

              <div className="rounded-lg bg-primary/10 p-4 mb-8">
                <p className="text-center font-medium text-primary">
                  🔥 Limited Time: First 5 clients get $1,500 off setup fee
                </p>
              </div>

              <div className="space-y-3 mb-8">
                {pricingFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <Button size="lg" className="w-full" asChild>
                <Link href="/book-demo">
                  Claim Your Spot <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 bg-muted/50">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">
              Our <span className="gradient-text">"Work Until It Works"</span> Guarantee
            </h2>
            <div className="rounded-lg border bg-card p-8">
              <p className="text-lg mb-4">
                If Nova doesn't book at least <strong>10 qualified meetings</strong> in your first 30 days post-launch, 
                we'll continue running the system at <strong>no additional cost</strong> until it does.
              </p>
              <p className="text-muted-foreground">
                Plus, you keep all the assets we build: custom messaging flows, AI training, 
                CRM enhancements, automation workflows, and performance dashboards.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Bonus Stack */}
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-3xl font-bold mb-12">
              Your <span className="gradient-text">Bonus Stack</span> (Worth $9,300+)
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              {bonusStack.map((bonus, index) => (
                <motion.div
                  key={bonus.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-lg border bg-card p-6"
                >
                  <div className="flex items-start gap-4">
                    <bonus.icon className="h-10 w-10 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">{bonus.title}</h3>
                      <p className="text-sm text-primary font-medium">Value: {bonus.value}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{bonus.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg font-medium">
                Total Bonus Value: <span className="text-2xl font-bold gradient-text">$9,300+</span>
              </p>
              <p className="text-sm text-muted-foreground mt-2">Included FREE with your Nova AI SDR System</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Cost Comparison */}
      <section className="py-16 bg-muted/50">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-3xl font-bold mb-12">
              Traditional SDR vs Nova AI SDR
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Traditional SDR */}
              <div className="rounded-lg border-2 border-destructive/20 bg-card p-6">
                <h3 className="text-xl font-semibold mb-4 text-destructive">Traditional SDR</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Base Salary</span>
                    <span className="font-medium">$60,000/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Benefits & Taxes</span>
                    <span className="font-medium">$20,000/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tools & Software</span>
                    <span className="font-medium">$12,000/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Training & Ramp</span>
                    <span className="font-medium">$15,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Replacement Cost (6mo)</span>
                    <span className="font-medium">$15,000</span>
                  </div>
                  <hr className="my-3" />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Annual Cost</span>
                    <span className="text-destructive">$122,000+</span>
                  </div>
                </div>
              </div>

              {/* Nova AI SDR */}
              <div className="rounded-lg border-2 border-primary bg-card p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Nova AI SDR</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Setup Fee (one-time)</span>
                    <span className="font-medium">$3,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Retainer</span>
                    <span className="font-medium">$2,000/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Annual Cost</span>
                    <span className="font-medium">$24,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Training Required</span>
                    <span className="font-medium">$0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Replacement Cost</span>
                    <span className="font-medium">$0</span>
                  </div>
                  <hr className="my-3" />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total First Year</span>
                    <span className="text-primary">$27,500</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-3">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="font-medium">You Save: <span className="font-bold text-primary">$94,500</span> in Year 1</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Performance Comparison Table */}
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-3xl font-bold mb-12">
              Performance Comparison
            </h2>
            
            <div className="overflow-hidden rounded-lg border">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium">Metric</th>
                    <th className="px-6 py-3 text-left text-sm font-medium">Traditional SDR</th>
                    <th className="px-6 py-3 text-left text-sm font-medium">Nova AI SDR</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {comparison.map((row, index) => (
                    <tr key={index} className="hover:bg-muted/50">
                      <td className="px-6 py-4 text-sm font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="flex items-center gap-2">
                          {row.traditional.includes("Yes") || row.traditional.includes("Every") || row.traditional.includes("Variable") || row.traditional.includes("Extensive") ? (
                            <XCircle className="h-4 w-4 text-destructive" />
                          ) : null}
                          {row.traditional}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span className="flex items-center gap-2 font-medium text-primary">
                          {row.nova.includes("Never") || row.nova.includes("None") || row.nova.includes("Consistent") || row.nova.includes("24/7") ? (
                            <CheckCircle className="h-4 w-4 text-primary" />
                          ) : null}
                          {row.nova}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-primary to-primary/80 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Cut Your SDR Costs by 80%?
            </h2>
            <p className="text-lg mb-8">
              While getting 10x more outreach and never dealing with turnover again
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/book-demo">
                Lock In Your Discounted Rate <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <p className="mt-6 text-sm">
              Only 3 spots left at the $3,500 setup fee • Price increases to $5,000 soon
            </p>
          </div>
        </Container>
      </section>
    </>
  )
} 