import Link from "next/link"
import { Container } from "./Container"
import { Sparkles } from "lucide-react"

const footerLinks = {
  product: [
    { name: "How It Works", href: "/how-it-works" },
    { name: "Pricing", href: "/pricing" },
    { name: "FAQ", href: "/faq" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Book Demo", href: "/book-demo" },
  ],
  legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t bg-muted/20">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="col-span-2">
              <Link href="/" className="flex items-center space-x-2 group">
                <Sparkles className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
                <span className="text-xl font-bold">OutboundOS™</span>
              </Link>
              <p className="mt-4 max-w-xs text-sm text-muted-foreground">
                AI SDR that books 10-30 qualified meetings monthly. 
                Guaranteed results or we work free.
              </p>
              <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">$3,500</span>
                <span>setup</span>
                <span className="text-muted-foreground">+</span>
                <span className="font-medium text-foreground">$2k</span>
                <span>/month</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold mb-3">Product</h3>
              <ul className="space-y-2.5">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold mb-3">Company</h3>
              <ul className="space-y-2.5">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t pt-8">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Closiq, Inc. All rights reserved.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
} 