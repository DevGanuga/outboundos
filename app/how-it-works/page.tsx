"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Container } from "../components/Container"
import { Button } from "../components/Button"
import { ArrowRight, Search, Mail, Calendar, BarChart3, Settings, Zap, CheckCircle, MessageSquare, Brain } from "lucide-react"

const processSteps = [
  {
    step: 1,
    title: "Quick Onboarding (Week 1)",
    description: "Share your ideal customer profile, messaging, and CRM details",
    icon: Settings,
    details: [
      "Complete intake form with ICP details",
      "Connect your CRM (HubSpot, Salesforce, etc.)",
      "Set up email domains and calendar",
      "Review and approve messaging flows"
    ]
  },
  {
    step: 2,
    title: "Nova Configuration (Week 1-2)",
    description: "We customize Nova with your unique workflows and messaging",
    icon: Brain,
    details: [
      "AI training on your specific ICP",
      "Custom outreach sequences built",
      "Integration testing and QA",
      "Domain warming and deliverability setup"
    ]
  },
  {
    step: 3,
    title: "Launch & Scale (Week 2-3)",
    description: "Nova begins outreach at scale while learning and optimizing",
    icon: Zap,
    details: [
      "Start with 100-200 daily touches",
      "Scale to 500+ touches per day",
      "Real-time response handling",
      "Meeting booking automation active"
    ]
  },
  {
    step: 4,
    title: "Results & Optimization (Week 3-4)",
    description: "10-30 qualified meetings booked, continuous improvement",
    icon: BarChart3,
    details: [
      "Weekly performance reports",
      "A/B testing messaging",
      "Refining targeting criteria",
      "Scaling successful campaigns"
    ]
  }
]

const novaCapabilities = [
  {
    icon: Search,
    title: "Intelligent Prospecting",
    description: "Analyzes 10,000+ accounts daily for buyer signals, job changes, funding events, and tech stack matches"
  },
  {
    icon: Mail,
    title: "Multi-Channel Outreach",
    description: "Coordinates email, LinkedIn, and voice drops with personalized messaging at scale"
  },
  {
    icon: MessageSquare,
    title: "Smart Reply Handling",
    description: "Qualifies responses, handles objections, and nurtures leads with human-like conversations"
  },
  {
    icon: Calendar,
    title: "Automated Booking",
    description: "Books meetings directly to your calendar with pre-call briefings for every prospect"
  }
]

const workflowSteps = [
  "Nova identifies high-intent prospects matching your ICP",
  "Personalizes outreach based on trigger events and company data",
  "Sends multi-step sequences across email and LinkedIn",
  "Monitors for replies in real-time (24/7)",
  "Qualifies interested prospects with smart conversations",
  "Books meetings directly to your sales team's calendar",
  "Provides detailed briefing before each call",
  "Continues nurturing non-responders intelligently"
]

export default function HowItWorksPage() {
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
                How <span className="gradient-text">Nova AI SDR</span> Works
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                From setup to booked meetings in 2-4 weeks. No hiring, no training, no turnover.
                Just a consistent pipeline of qualified meetings.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Process Timeline */}
      <section className="py-16 bg-muted/50">
        <Container>
          <h2 className="text-center text-3xl font-bold mb-12">
            Your Journey to <span className="gradient-text">Automated Pipeline</span>
          </h2>
          
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-8 items-start"
              >
                <div className="flex-shrink-0 hidden md:block">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="rounded-lg border bg-card p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <step.icon className="h-8 w-8 text-primary" />
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Nova Capabilities */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold">
              Nova's AI-Powered Capabilities
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Advanced AI that works 24/7 to fill your pipeline with qualified meetings
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {novaCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-lg border bg-card p-6"
              >
                <capability.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{capability.title}</h3>
                <p className="text-muted-foreground">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Detailed Workflow */}
      <section className="py-16 bg-muted/50">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-3xl font-bold mb-12">
              The Nova Workflow: From Prospect to Meeting
            </h2>
            
            <div className="space-y-4">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-base">{step}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 rounded-lg bg-primary/10 border border-primary/20 p-6">
              <h3 className="font-semibold text-lg mb-2">🚀 Result</h3>
              <p className="text-muted-foreground">
                Your sales team focuses only on qualified conversations while Nova handles all the prospecting, 
                outreach, and qualification work 24/7.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Integration Section */}
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6">
              Seamless Integration with Your Stack
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Nova works with your existing tools and workflows
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["HubSpot", "Salesforce", "Pipedrive", "Google Calendar", "Outlook", "Slack", "Close", "Apollo"].map((tool) => (
                <div key={tool} className="rounded-lg border bg-card p-4">
                  <p className="font-medium">{tool}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-primary to-primary/80 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Deploy Your AI SDR?
            </h2>
            <p className="text-lg mb-8">
              Join the companies booking 10-30 qualified meetings every month on autopilot
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/book-demo">
                  Book Your Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm">
              🛡️ 30-day guarantee • We work until it works
            </p>
          </div>
        </Container>
      </section>
    </>
  )
} 