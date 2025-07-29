"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Container } from "../components/Container"
import { Button } from "../components/Button"
import { ArrowRight, ChevronDown } from "lucide-react"
import { cn } from "../lib/utils"

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "How quickly can Nova start booking meetings?",
        answer: "Nova typically starts booking meetings within 2-4 weeks of signup. Week 1 is onboarding and setup, weeks 2-3 involve launching campaigns and scaling, and by week 3-4 you'll see 10-30 qualified meetings booked."
      },
      {
        question: "What information do you need to get started?",
        answer: "We need your ideal customer profile (ICP), company messaging, CRM access, email domain setup, and calendar integration. Our onboarding team guides you through everything with a simple intake form."
      },
      {
        question: "Do I need technical skills to use Nova?",
        answer: "No technical skills required! We handle all the setup, integration, and technical configuration. You just provide the business context and approve the messaging."
      }
    ]
  },
  {
    category: "Performance & Results",
    questions: [
      {
        question: "What if Nova doesn't book 10 meetings in 30 days?",
        answer: "Our 'Work Until It Works' guarantee means if Nova doesn't book at least 10 qualified meetings in your first 30 days post-launch, we'll continue running the system at no additional cost until it does. Plus, you keep all assets we build."
      },
      {
        question: "How does Nova achieve 500+ daily touches?",
        answer: "Nova uses advanced AI to work 24/7 across multiple channels (email, LinkedIn, voice drops). While a human SDR can manage 50 touches per day, Nova's automation and AI capabilities enable 10x that volume with higher personalization."
      },
      {
        question: "What's your average meeting show-up rate?",
        answer: "Our clients typically see 70-80% show-up rates because Nova qualifies prospects thoroughly before booking. We also send pre-meeting briefings and reminders to maximize attendance."
      }
    ]
  },
  {
    category: "Technology & Integration",
    questions: [
      {
        question: "Which CRMs does Nova integrate with?",
        answer: "Nova integrates with all major CRMs including HubSpot, Salesforce, Pipedrive, Close, and more. We handle the integration during onboarding and ensure seamless data flow."
      },
      {
        question: "How does Nova personalize at scale?",
        answer: "Nova analyzes 10,000+ accounts daily for buyer signals, job changes, funding events, and tech stack data. It then uses AI to craft personalized messages based on these insights, ensuring relevance at scale."
      },
      {
        question: "Is my data secure with Nova?",
        answer: "Absolutely. We use enterprise-grade security, encrypted connections, and never share your data. All AI processing happens within secure environments, and you maintain full ownership of your data."
      }
    ]
  },
  {
    category: "Pricing & Terms",
    questions: [
      {
        question: "Are there any hidden fees?",
        answer: "No hidden fees. You pay a one-time setup fee of $3,500 (discounted from $5,000) and then $2,000/month. That's it. No per-meeting fees, no success fees, no surprises."
      },
      {
        question: "Can I cancel anytime?",
        answer: "Yes, you can cancel your monthly retainer anytime with 30 days notice. There are no long-term contracts. You also keep all the assets we've built for you."
      },
      {
        question: "Why is this so much cheaper than an SDR?",
        answer: "A human SDR costs $120,000+ per year (salary, benefits, tools, training, replacement). Nova costs $27,500 in year one and delivers 10x the output without ever quitting or needing time off."
      }
    ]
  },
  {
    category: "Comparison & Alternatives",
    questions: [
      {
        question: "How is this different from other AI tools?",
        answer: "Nova isn't just software—it's a complete AI SDR system. We handle setup, optimization, and management. Unlike tools that require you to figure everything out, we deliver a done-for-you solution with guaranteed results."
      },
      {
        question: "Should I hire an SDR or use Nova?",
        answer: "If you need consistent pipeline without the hiring, training, and turnover headaches, Nova is ideal. Human SDRs cost 4x more, deliver 10x less volume, and quit every 6 months. Nova works 24/7 and never quits."
      },
      {
        question: "What if I already have SDRs?",
        answer: "Nova can complement your existing team by handling high-volume outreach while your SDRs focus on strategic accounts. Many clients use Nova to scale without hiring additional SDRs."
      }
    ]
  }
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-left hover:text-primary transition-colors"
      >
        <span className="font-medium pr-8">{question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 flex-shrink-0 transition-transform",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-4 text-muted-foreground">{answer}</p>
      </motion.div>
    </div>
  )
}

export default function FAQPage() {
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
                Frequently Asked <span className="gradient-text">Questions</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Everything you need to know about Nova AI SDR and how it can transform your outbound sales
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* FAQ Sections */}
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            {faqs.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
                <div className="rounded-lg border bg-card">
                  {category.questions.map((faq, index) => (
                    <FAQItem
                      key={index}
                      question={faq.question}
                      answer={faq.answer}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-muted/50">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our team is here to help you understand how Nova can transform your outbound sales
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/book-demo">
                  Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust Signals */}
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="rounded-lg bg-primary/5 border border-primary/20 p-8">
              <h3 className="text-xl font-semibold mb-4 text-center">
                Why B2B SaaS Companies Trust Nova
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold gradient-text">80%</div>
                  <p className="text-sm text-muted-foreground">Cost reduction vs human SDR</p>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">10-30</div>
                  <p className="text-sm text-muted-foreground">Meetings booked monthly</p>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">24/7</div>
                  <p className="text-sm text-muted-foreground">Always working for you</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-primary to-primary/80 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to See Nova in Action?
            </h2>
            <p className="text-lg mb-8">
              Join the B2B SaaS companies booking 10-30 qualified meetings every month
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/book-demo">
                Book Your Demo Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <p className="mt-6 text-sm">
              30-day guarantee • We work until it works
            </p>
          </div>
        </Container>
      </section>
    </>
  )
} 