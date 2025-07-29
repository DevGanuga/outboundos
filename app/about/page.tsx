import { Container } from "../components/Container"
import { Button } from "../components/Button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <section className="py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              About <span className="gradient-text">Closiq</span>
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p>
                Closiq is on a mission to revolutionize B2B sales by replacing the broken SDR model 
                with AI-powered sales development that actually works.
              </p>
              
              <p>
                We believe that early-stage B2B SaaS companies deserve consistent, predictable pipeline 
                growth without the headaches of hiring, training, and replacing SDRs every 6 months.
              </p>
              
              <p>
                Our flagship product, OutboundOS™, deploys Nova AI SDR - an intelligent sales rep that 
                books 10-30 qualified meetings every month, guaranteed. We're not just another AI tool; 
                we're a complete done-for-you system that transforms how companies approach outbound sales.
              </p>
              
              <h2 className="text-2xl font-bold mt-12 mb-4 text-foreground">Our Values</h2>
              
              <ul className="space-y-4">
                <li><strong className="text-foreground">Results First:</strong> We guarantee 10+ meetings in 30 days or work free until we deliver</li>
                <li><strong className="text-foreground">Transparency:</strong> No hidden fees, no long contracts, just clear pricing and expectations</li>
                <li><strong className="text-foreground">Innovation:</strong> Leveraging cutting-edge AI to solve real business problems</li>
                <li><strong className="text-foreground">Partnership:</strong> Your success is our success - we win when you win</li>
              </ul>
            </div>
            
            <div className="mt-12 flex gap-4">
              <Button asChild>
                <Link href="/book-demo">
                  See Nova in Action <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
} 