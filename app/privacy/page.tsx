import { Container } from "../components/Container"

export default function PrivacyPage() {
  return (
    <>
      <section className="py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Privacy Policy
            </h1>
            <p className="text-sm text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
                <p>
                  We collect information you provide directly to us, such as when you create an account, 
                  request a demo, or contact us for support. This may include:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Name and contact information</li>
                  <li>Company details</li>
                  <li>Payment information</li>
                  <li>Communication preferences</li>
                  <li>Any other information you choose to provide</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Information Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties. 
                  We may share information:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>With your consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and property</li>
                  <li>With service providers who assist in our operations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to our use of your data</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy, please contact us at:
                </p>
                <p className="mt-4">
                  Email: privacy@closiq.com<br />
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