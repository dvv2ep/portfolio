"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="container flex max-w-screen-2xl flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Hey, I&apos;m{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Dweep Manish Chande
          </span>
        </h1>
        <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-semibold text-muted-foreground">
          Building seamless web experiences with Angular, .NET, and modern frameworks
        </h2>
      </motion.div>

      <motion.p 
        className="mt-6 max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        I&apos;m a software developer with 2 years of experience, currently working at 63Moons,
        focusing on real-time data, RxJS, PrimeNG, and full-stack development.
      </motion.p>

      <motion.div 
        className="mt-8 flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Button 
          asChild 
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition-opacity text-white px-8"
        >
          <Link href="/projects">View My Work</Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </motion.div>
    </div>
  );
}
