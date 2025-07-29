"use client"

import { useState } from "react"
import { Container } from "../components/Container"
import { Button } from "../components/Button"
import { Mail, MessageSquare } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    alert("Thank you for your message! We'll get back to you within 24 hours.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <section className="py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-center mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-center text-lg text-muted-foreground mb-12">
              Have questions about Nova? Want to discuss custom requirements? We're here to help.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">hello@closiq.com</p>
                      <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MessageSquare className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Live Chat</h3>
                      <p className="text-muted-foreground">Available Mon-Fri, 9am-6pm EST</p>
                      <p className="text-sm text-muted-foreground mt-1">Get instant answers to your questions</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 rounded-lg bg-primary/5 border border-primary/20">
                  <h3 className="font-semibold mb-2">Quick Response Times</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• General inquiries: 24 hours</li>
                    <li>• Technical support: 4 hours</li>
                    <li>• Demo requests: Same day</li>
                  </ul>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="rounded-lg border bg-card p-6">
                <h2 className="text-xl font-bold mb-4">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
} 