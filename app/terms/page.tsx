import { Container } from "../components/Container"

export default function TermsPage() {
  return (
    <>
      <section className="py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Terms of Service
            </h1>
            <p className="text-sm text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using OutboundOS™ and Nova AI SDR services ("Services"), you agree 
                  to be bound by these Terms of Service. If you do not agree to these terms, do not use our Services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Description of Services</h2>
                <p>
                  Closiq provides AI-powered sales development services through our OutboundOS™ platform, 
                  including the Nova AI SDR system that automates outbound sales activities.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. User Obligations</h2>
                <p>You agree to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Not use the Services for any unlawful purpose</li>
                  <li>Not interfere with or disrupt the Services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Payment Terms</h2>
                <p>
                  Services are provided for a setup fee of $3,500 (currently discounted from $5,000) 
                  plus a monthly retainer of $2,000. Payment is due upon receipt of invoice.
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>All fees are non-refundable except as provided in our guarantee</li>
                  <li>You may cancel monthly services with 30 days notice</li>
                  <li>Late payments may result in service suspension</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Performance Guarantee</h2>
                <p>
                  We guarantee that Nova will book at least 10 qualified meetings within 30 days 
                  post-launch. If this target is not met, we will continue providing services at no 
                  additional cost until the target is achieved. You retain all assets created during setup.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Intellectual Property</h2>
                <p>
                  You retain ownership of your data and content. We retain ownership of our platform, 
                  technology, and methodologies. Each party grants the other necessary licenses to 
                  perform under these terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, Closiq shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages. Our total liability shall not 
                  exceed the amount paid by you in the preceding 12 months.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Termination</h2>
                <p>
                  Either party may terminate these terms with 30 days written notice. Upon termination, 
                  you retain access to all created assets and data exports.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Governing Law</h2>
                <p>
                  These terms shall be governed by the laws of [Your Jurisdiction], without regard to 
                  conflict of law principles.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Information</h2>
                <p>
                  For questions about these Terms of Service, contact us at:
                </p>
                <p className="mt-4">
                  Email: legal@closiq.com<br />
                  Address: Closiq, Inc.<br />
                  [Your Business Address]
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
} 