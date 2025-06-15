"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function AboutPage() {
  return (
    <div className="container max-w-screen-2xl py-12">
      <div className="mx-auto max-w-prose">
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="space-y-8"
        >
          <motion.div variants={fadeInUp}>
            <h1 className="mb-8 text-4xl font-bold tracking-tight">About Me</h1>
            <div className="relative mb-8">
              {/* Placeholder for future photo */}
              <div className="aspect-square w-48 rounded-full bg-muted mx-auto mb-8 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center text-muted-foreground">
                  Photo
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="prose prose-lg dark:prose-invert">
            <p className="leading-7 text-lg">
              I&apos;m Dweep Manish Chande, a software developer with 2 years of experience, currently working at 63Moons. 
              I specialize in building scalable front-end applications with Angular, and I&apos;ve worked extensively with 
              RxJS, PrimeNG, and real-time data via WebSockets. I also have experience in .NET and SQL, and I&apos;m 
              currently expanding into React and Next.js.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">Technical Skills</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border p-4 hover:border-foreground/50 transition-colors">
                <h3 className="mb-2 font-semibold">Frontend Development</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Angular & RxJS</li>
                  <li>PrimeNG Components</li>
                  <li>TypeScript</li>
                  <li>React & Next.js</li>
                </ul>
              </div>
              <div className="rounded-lg border p-4 hover:border-foreground/50 transition-colors">
                <h3 className="mb-2 font-semibold">Backend Development</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>.NET Framework</li>
                  <li>SQL Databases</li>
                  <li>WebSocket Integration</li>
                  <li>RESTful APIs</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">Soft Skills</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border p-4 hover:border-foreground/50 transition-colors">
                <h3 className="mb-2 font-semibold">Communication</h3>
                <p className="text-muted-foreground">Clear and effective communication with team members and stakeholders.</p>
              </div>
              <div className="rounded-lg border p-4 hover:border-foreground/50 transition-colors">
                <h3 className="mb-2 font-semibold">Curiosity</h3>
                <p className="text-muted-foreground">Always eager to learn new technologies and best practices.</p>
              </div>
              <div className="rounded-lg border p-4 hover:border-foreground/50 transition-colors">
                <h3 className="mb-2 font-semibold">Leadership</h3>
                <p className="text-muted-foreground">Taking initiative in projects and mentoring junior developers.</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">Current Focus</h2>
            <p className="leading-7 text-muted-foreground">
              While I continue to work with Angular and .NET in my professional role, I&apos;m actively exploring 
              modern web development frameworks like React and Next.js. I&apos;m passionate about creating 
              performant, accessible, and user-friendly web applications.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="mt-6">
              <Button
                asChild
                className="gap-2"
                size="lg"
              >
                <a
                  href="/assets/dweep-chande-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
