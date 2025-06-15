"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const ContactPage = () => {  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    try {
      const response = await fetch("https://formspree.io/f/xyyqzeer", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="container max-w-screen-2xl py-12">
      <div className="mx-auto max-w-prose">
        <h1 className="mb-3 text-4xl font-bold tracking-tight">Get in Touch</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Interested in working together or just want to say hi? Let&apos;s connect.
        </p>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold mb-2">Contact Details</h2>
                <div className="space-y-3">
                  <p className="text-muted-foreground">
                    <span className="block font-medium text-foreground">Name</span>
                    Dweep Manish Chande
                  </p>
                  <div>
                    <span className="block font-medium text-foreground">Email</span>
                    <a
                      href="mailto:dvv2ep@gmail.com"
                      className="text-primary hover:text-primary/90 transition-colors"
                    >
                      dvv2ep@gmail.com
                    </a>
                  </div>
                  <div>
                    <span className="block font-medium text-foreground">LinkedIn</span>
                    <a
                      href="https://www.linkedin.com/in/dweep-chande-6bbb98213/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/90 transition-colors"
                    >
                      Dweep Chande
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>          <form onSubmit={handleSubmit} className="space-y-6">
            {isSubmitted ? (
              <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:bg-green-900/10 dark:border-green-900/20">
                <p className="text-green-800 dark:text-green-200">
                  Thank you for your message! I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Your message here..."
                    required
                  />
                </div>

                <Button type="submit" className="w-full">Send Message</Button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
