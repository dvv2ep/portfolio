"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const projects = [
	{
		title: "Real-Time Market Dashboard",
		description:
			"Built a live-updating Angular dashboard using RxJS and WebSockets to stream financial data.",
		tech: ["Angular", "RxJS", "WebSocket", "PrimeNG"],
		type: "Work Project",
		infoUrl: "#",
	},
	{
		title: "Admin Panel UI Optimization",
		description:
			"Refactored and optimized PrimeNG-based UI components, enhancing performance and user experience.",
		tech: ["Angular", "PrimeNG", "HTML/CSS"],
		type: "Work Project",
		infoUrl: "#",
	},
	{
		title: "Authentication with Amazon Cognito",
		description:
			"Integrated basic user auth with AWS Cognito for secure login flows in a test environment.",
		tech: [".NET", "Cognito", "Angular"],
		type: "Work Project",
		infoUrl: "#",
	},
	{
		title: "Portfolio Website",
		description:
			"A personal site built with Next.js to showcase my skills and projects.",
		tech: ["Next.js", "Tailwind", "TypeScript", "Framer Motion"],
		type: "Personal Project",
		githubUrl: "https://github.com/your-username/portfolio",
	},
];

const fadeInUp = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.5 },
};

const stagger = {
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

export default function ProjectsPage() {
	return (
		<div className="container max-w-screen-2xl py-12">
			<motion.div
				initial="initial"
				animate="animate"
				variants={stagger}
				className="space-y-8"
			>
				<motion.div variants={fadeInUp}>
					<h1 className="mb-2 text-4xl font-bold tracking-tight">Projects</h1>
					<p className="text-muted-foreground text-lg mb-8">
						A selection of my recent work at 63Moons and personal projects.
					</p>
				</motion.div>

				<div className="grid gap-6 sm:grid-cols-2">
					{projects.map((project, index) => (
						<motion.div
							key={index}
							variants={fadeInUp}
							className="group relative rounded-lg border p-6 transition-all duration-300 hover:border-foreground hover:shadow-lg hover:-translate-y-1"
						>
							<div className="absolute right-6 top-6">
								<span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
									{project.type}
								</span>
							</div>
							<h2 className="text-2xl font-semibold pr-24">
								{project.title}
							</h2>
							<p className="mt-2 leading-7 text-muted-foreground">
								{project.description}
							</p>
							<div className="mt-4 flex flex-wrap gap-2">
								{project.tech.map((tech) => (
									<span
										key={tech}
										className="rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground"
									>
										{tech}
									</span>
								))}
							</div>
							<div className="mt-6 flex gap-4">
								{project.githubUrl && (
									<Button asChild variant="default" size="sm">
										<a
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
										>
											View Code
										</a>
									</Button>
								)}
								{project.infoUrl && (
									<Button asChild variant="outline" size="sm">
										<a
											href={project.infoUrl}
											target="_blank"
											rel="noopener noreferrer"
										>
											Learn More
										</a>
									</Button>
								)}
							</div>
						</motion.div>
					))}
				</div>
			</motion.div>
		</div>
	);
}
