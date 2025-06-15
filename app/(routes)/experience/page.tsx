"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    position: "Software Developer",
    company: "63Moons",
    period: "Sep 2023 – Present",
    achievements: [
      "Worked on RxJS and real-time data using WebSockets.",
      "Extensive experience with PrimeNG components.",
      "Conducted code reviews and implemented code optimizations.",
    ],
  },
  {
    position: "Junior Frontend Developer",
    company: "Prabhavati Digital Service",
    period: "Jan 2022 – Aug 2022",
    achievements: [
      "Developed and maintained frontend components in Angular.",
      "Collaborated with UI/UX teams for responsive design integration.",
      "Participated in client reviews and design discussions.",
    ],
  },
  {
    position: "WordPress Developer",
    company: "wiseKreator",
    period: "Feb 2022 – Apr 2022",
    achievements: [
      "Created and launched 10+ WordPress websites.",
      "Customized themes and managed plugins for SEO and performance.",
      "Assisted clients with post-deployment maintenance.",
    ],
  },
];

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

export default function ExperiencePage() {
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
            <h1 className="text-4xl font-bold tracking-tight mb-2">Experience</h1>
            <p className="text-muted-foreground text-lg">
              My professional journey in software development.
            </p>
          </motion.div>

          <div className="relative mt-8 space-y-8 before:absolute before:left-[-35px] before:top-0 before:h-full before:w-0.5 before:bg-border">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative pl-6"
              >
                <div className="absolute left-[-41px] top-2 h-3 w-3 rounded-full bg-primary border-2 border-background" />
                
                <div className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                    <div>
                      <h2 className="text-xl font-semibold">{exp.position}</h2>
                      <p className="text-muted-foreground font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground whitespace-nowrap">
                      {exp.period}
                    </p>
                  </div>

                  <ul className="mt-4 space-y-2 text-muted-foreground">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2 mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
