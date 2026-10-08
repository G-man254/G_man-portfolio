import React from "react";
import {
  ArrowRight,
  BrainCircuit,
  Car,
  CheckCircle2,
  Code2,
  Cpu,
  ExternalLink,
  Github,
  Globe2,
  Lightbulb,
  Network,
  Rocket,
  Server,
  Sparkles,
  Wrench,
} from "lucide-react";

const journey = [
  {
    year: "2022",
    title: "Cyber & Customer Service",
    description:
      "Built practical experience working with customers, technology, troubleshooting, and day-to-day technical challenges.",
  },
  {
    year: "2023",
    title: "Software Development",
    description:
      "Started my software development journey at Moringa School, building a strong foundation in programming and web development.",
  },
  {
    year: "2025",
    title: "Diploma in Software Development",
    description:
      "Continued developing my technical skills through GoMyCode while working on practical software projects.",
  },
  {
    year: "2025",
    title: "Embar Technologies",
    description:
      "Gained hands-on experience with fiber installations, networking, router configuration, troubleshooting, and technical support.",
  },
  {
    year: "2026",
    title: "Building & Exploring",
    description:
      "Focused on building real-world applications, improving my full-stack skills, and exploring AI and emerging technologies.",
  },
];

const skills = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building responsive web applications across the frontend and backend, from interfaces to APIs and databases.",
    technologies: [
      "React",
      "Next.js",
      "Vue",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "REST APIs",
      "Git / GitHub",
    ],
  },
  {
    icon: BrainCircuit,
    title: "AI & Emerging Technology",
    description:
      "Exploring how AI can be integrated into applications to create smarter, more useful digital experiences.",
    technologies: [
      "AI Integration",
      "LLM Applications",
      "Automation",
      "API Integration",
      "Experimentation",
    ],
  },
  {
    icon: Network,
    title: "Networking & Technical Support",
    description:
      "Practical experience with networking, fiber installations, troubleshooting, router configuration, and customer support.",
    technologies: [
      "Networking",
      "Fiber Installation",
      "Troubleshooting",
      "Router Configuration",
      "Technical Support",
    ],
  },
];

const strengths = [
  {
    icon: Lightbulb,
    title: "Curious",
    description:
      "I enjoy exploring technologies and understanding how things work beneath the surface.",
  },
  {
    icon: CheckCircle2,
    title: "Attentive",
    description:
      "I pay attention to details, especially when troubleshooting systems or building interfaces.",
  },
  {
    icon: Sparkles,
    title: "Adaptable",
    description:
      "I'm comfortable learning unfamiliar technologies when a project requires them.",
  },
  {
    icon: Wrench,
    title: "Problem Solver",
    description:
      "I enjoy breaking complicated problems into smaller, manageable pieces.",
  },
  {
    icon: Rocket,
    title: "Continuous Learner",
    description:
      "I continuously improve my skills and keep exploring new approaches to software development.",
  },
];

const currentlyExploring = [
  "Next.js",
  "AI Integration",
  "Cloud Architecture",
  "System Design",
  "Advanced React",
];

const projects = [
  {
    title: "Kodinga",
    description:
      "A car-rental marketplace connecting vehicle owners with renters.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Developer Portfolio",
    description:
      "A modern developer portfolio focused on showcasing projects, skills, and experience.",
    tags: ["React", "Vite", "Tailwind CSS"],
  },
  {
    title: "Expense Tracker",
    description:
      "A JavaScript application for tracking income and expenses.",
    tags: ["JavaScript", "HTML", "CSS"],
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute right-0 top-[45%] h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        
        <section className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Full-Stack Developer, Car & AI Enthusiast
            </div>

            <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              About{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Me
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
              I'm Dennis Kariuki, a Full-Stack Developer and AI enthusiast
              based in Nairobi, Kenya. I enjoy turning ideas into practical
              digital experiences and continuously exploring new technologies
              to improve how I build and solve problems.
            </p>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
              My journey has taken me through software development, networking,
              customer-facing technical work, and hands-on problem solving.
              These experiences taught me to look beyond simply writing code —
              I focus on understanding the problem first, then building
              solutions that are useful, reliable, and intuitive.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-zinc-950 transition hover:-translate-y-0.5 hover:bg-zinc-200"
              >
                View My Projects
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
              >
                Let's Talk
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/80 p-3 shadow-2xl backdrop-blur">
              <div className="flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-zinc-800 via-zinc-900 to-black">
                <div className="text-center">
                  <div className="mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/5">
                    <img src="/images/portfolio.jpeg" alt="Dennis Kariuki" className="w-full h-full object-cover rounded-full"/>
                  </div>

                  <p className="text-lg font-semibold">Dennis Kariuki</p>
                  <p className="mt-1 text-sm text-zinc-500">
                    Developer • Builder • Learner
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between px-4 py-4">
                <div>
                  <p className="text-sm font-medium">Based in</p>
                  <p className="text-sm text-zinc-500">Nairobi, Kenya</p>
                </div>

                <Globe2 className="text-zinc-500" size={20} />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-32">
          <SectionHeading
            eyebrow="MY JOURNEY"
            title="From curiosity to building."
            description="A journey shaped by technology, hands-on experience, and a constant desire to learn."
          />

          <div className="mt-14">
            <div className="relative">
              <div className="absolute left-[19px] top-0 hidden h-full w-px bg-gradient-to-b from-blue-500/60 via-white/10 to-transparent md:block" />

              <div className="space-y-10">
                {journey.map((item, index) => (
                  <div
                    key={`${item.year}-${index}`}
                    className="group relative grid gap-5 md:grid-cols-[120px_1fr]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-500/30 bg-zinc-950 text-blue-400">
                        <span className="h-2 w-2 rounded-full bg-current" />
                      </div>

                      <span className="pt-2 text-sm font-semibold text-zinc-500 md:hidden">
                        {item.year}
                      </span>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 group-hover:-translate-y-1 group-hover:border-white/20 group-hover:bg-white/[0.05]">
                      <p className="hidden text-sm font-semibold text-blue-400 md:block">
                        {item.year}
                      </p>

                      <h3 className="mt-1 text-xl font-semibold">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-3xl leading-7 text-zinc-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-32">
          <SectionHeading
            eyebrow="WHAT I DO"
            title="Technology I enjoy working with."
            description="My interests sit at the intersection of software development, AI, and practical technology."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.title}
                  className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.05]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                    <Icon size={23} className="text-blue-400" />
                  </div>

                  <h3 className="mt-7 text-xl font-semibold">
                    {skill.title}
                  </h3>

                  <p className="mt-3 leading-7 text-zinc-400">
                    {skill.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {skill.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-medium text-zinc-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-32">
          <SectionHeading
            eyebrow="HOW I APPROACH PROBLEMS"
            title="Understand. Explore. Build. Improve."
            description="I try to approach development as a problem-solving process rather than simply writing code."
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Understand",
                text: "I first try to understand the actual problem rather than immediately jumping into implementation.",
              },
              {
                number: "02",
                title: "Explore",
                text: "I research, experiment, and test different approaches before settling on a direction.",
              },
              {
                number: "03",
                title: "Build",
                text: "I turn the solution into something practical, usable, and easy to understand.",
              },
              {
                number: "04",
                title: "Improve",
                text: "I review what I've built and look for ways to make it cleaner, faster, and more intuitive.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"
              >
                <span className="text-sm font-bold text-blue-400">
                  {item.number}
                </span>

                <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>

                <p className="mt-3 leading-7 text-zinc-400">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-32">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                MY STRENGTHS
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                What I bring to a team.
              </h2>

              <p className="mt-6 leading-8 text-zinc-400">
                I'm still growing as a developer, but I believe that curiosity,
                adaptability, and a willingness to solve problems are just as
                important as knowing a particular framework.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {strengths.map((strength) => {
                const Icon = strength.icon;

                return (
                  <div
                    key={strength.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                  >
                    <Icon size={22} className="text-blue-400" />

                    <h3 className="mt-5 font-semibold">{strength.title}</h3>

                    <p className="mt-2 text-sm leading-6 text-zinc-500">
                      {strength.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mt-32">
          <SectionHeading
            eyebrow="WHAT I'VE BEEN BUILDING"
            title="A few things I've worked on."
            description="A small preview of the projects that represent my development journey."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
              >
                <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-800">
                  <span className="text-5xl font-bold text-white/5">
                    0{index + 1}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>

                  <p className="mt-3 leading-7 text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="/projects"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white"
                  >
                    View project
                    <ExternalLink size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
            >
              View all projects
              <ArrowRight size={16} />
            </a>
          </div>
        </section>

        <section className="mt-32">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-900 to-blue-950/30">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 sm:p-12 lg:p-16">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <Car size={27} className="text-blue-400" />
                </div>

                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                  BEYOND THE CODE
                </p>

                <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                  Technology meets automotive.
                </h2>

                <p className="mt-6 leading-8 text-zinc-400">
                  Technology isn't my only interest. I'm fascinated by
                  automobiles — from the engineering behind them to the
                  technology, design, and systems that make modern vehicles
                  possible.
                </p>

                <p className="mt-4 leading-8 text-zinc-400">
                  This interest is one of the reasons I'm particularly
                  interested in exploring the intersection between technology
                  and the automotive industry.
                </p>
              </div>

              <div className="relative min-h-[350px] overflow-hidden bg-gradient-to-br from-blue-950/40 to-zinc-950">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Car
                    size={180}
                    strokeWidth={0.7}
                    className="text-white/[0.08]"
                  />
                </div>

                <div className="absolute bottom-8 left-8 rounded-2xl border border-white/10 bg-black/30 px-5 py-4 backdrop-blur">
                  <p className="text-xs uppercase tracking-widest text-zinc-500">
                    Interest
                  </p>
                  <p className="mt-1 font-semibold">Automotive Technology</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-32">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 sm:p-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                  CURRENTLY EXPLORING
                </p>

                <h2 className="mt-3 text-3xl font-bold">
                  Always learning. Always building.
                </h2>

                <p className="mt-4 max-w-xl leading-7 text-zinc-500">
                  Some of the technologies and concepts I'm currently spending
                  time learning and experimenting with.
                </p>
              </div>

              <Cpu size={55} className="hidden text-zinc-700 md:block" />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {currentlyExploring.map((item) => (
                <span
                  key={item}
                  className="rounded-xl border border-white/10 bg-black/20 px-4 py-2.5 text-sm text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-32 pb-10">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-16 text-center sm:px-12">
            <div className="absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[100px]" />

            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <Server size={25} className="text-blue-400" />
              </div>

              <h2 className="mt-7 text-4xl font-bold tracking-tight sm:text-5xl">
                Let's build something.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
                I'm always interested in building projects, learning
                opportunities, collaborations, and opportunities to grow as a
                developer.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="/projects"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-zinc-950 transition hover:-translate-y-0.5 hover:bg-zinc-200"
                >
                  View My Projects
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold transition hover:bg-white/10"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}


function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-lg leading-8 text-zinc-400">{description}</p>
    </div>
  );
}

