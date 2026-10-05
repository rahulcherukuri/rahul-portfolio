"use client";

import { useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  ChevronDown,
  Mail,
  MapPin,
  Move3D,
  Play,
  Sparkles,
} from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Expertise", id: "expertise" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

const skills = [
  "Python",
  "Generative AI",
  "RAG",
  "Agentic AI",
  "LangChain",
  "LangGraph",
  "Machine Learning",
  "Azure OpenAI",
  "OCR",
  "SQL",
  "FastAPI",
  "Streamlit",
];

const projects = [
  {
    number: "01",
    title: "RAG EMAIL ASSISTANT",
    category: "GENERATIVE AI",
    description:
      "An intelligent retrieval-augmented assistant designed to understand enterprise email context and generate grounded responses.",
    tags: ["RAG", "Azure OpenAI", "Python", "Streamlit"],
  },
  {
    number: "02",
    title: "CLAIMS & POLICY AI",
    category: "AI / NLP",
    description:
      "An AI-powered assistant for searching, understanding and answering questions across complex insurance policy and claims information.",
    tags: ["LLM", "NLP", "RAG", "Python"],
  },
  {
    number: "03",
    title: "BILLING ANOMALY DETECTION",
    category: "AI / AUTOMATION",
    description:
      "An intelligent document-processing workflow comparing OCR-extracted billing information against contracts and database records.",
    tags: ["OCR", "Python", "Automation", "ML"],
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dragging, setDragging] = useState(false);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothX = useSpring(rotateX, {
    stiffness: 120,
    damping: 18,
  });

  const smoothY = useSpring(rotateY, {
    stiffness: 120,
    damping: 18,
  });

  const dragStart = useRef({ x: 0, y: 0 });

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handlePointerDown = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    setDragging(true);
    dragStart.current = {
      x: event.clientX,
      y: event.clientY,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (!dragging) return;

    const dx = event.clientX - dragStart.current.x;
    const dy = event.clientY - dragStart.current.y;

    rotateY.set(Math.max(-18, Math.min(18, dx * 0.08)));
    rotateX.set(Math.max(-12, Math.min(12, -dy * 0.06)));
  };

  const handlePointerUp = () => {
    setDragging(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#030303] text-white selection:bg-cyan-300 selection:text-black">

      {/* BACKGROUND */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-20%] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-400/[0.07] blur-[140px]" />

        <div className="absolute right-[-15%] top-[25%] h-[500px] w-[500px] rounded-full bg-violet-500/[0.06] blur-[140px]" />

        <div className="absolute bottom-[-15%] left-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.04] blur-[140px]" />

        <div className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* NAVIGATION */}

      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto max-w-[1600px] px-5 py-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between rounded-full border border-white/[0.08] bg-black/50 px-5 py-3 backdrop-blur-2xl">

            <button
              onClick={() => scrollTo("home")}
              className="font-black tracking-[-0.05em] text-white"
            >
              RAHUL<span className="text-cyan-300">.</span>
            </button>

            <nav className="hidden items-center gap-7 md:flex">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/45 transition hover:text-white"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <button
              onClick={() => scrollTo("contact")}
              className="hidden rounded-full border border-cyan-300/30 bg-cyan-300/10 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-200 transition hover:bg-cyan-300 hover:text-black sm:block"
            >
              Let's Talk
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden"
              aria-label="Open menu"
            >
              <span className="block h-px w-6 bg-white" />
              <span className="mt-2 block h-px w-4 bg-white/50" />
            </button>
          </div>

          {menuOpen && (
            <div className="mt-2 rounded-3xl border border-white/[0.08] bg-black/90 p-5 backdrop-blur-2xl md:hidden">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="block w-full border-b border-white/[0.06] py-4 text-left text-xs uppercase tracking-[0.2em] text-white/60 last:border-0"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* HERO */}

      <section
        id="home"
        className="relative flex min-h-screen items-center px-5 pb-20 pt-32 sm:px-8 lg:px-12"
      >
        <div className="mx-auto grid w-full max-w-[1600px] items-center gap-10 lg:grid-cols-[1fr_1.05fr]">

          {/* LEFT */}

          <div className="relative z-20">

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-cyan-300" />

              <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-cyan-200/70">
                AI / ML ENGINEER
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-white/35"
            >
              Hi, I'm Rahul
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="max-w-4xl text-[clamp(3.7rem,8vw,8rem)] font-black leading-[0.82] tracking-[-0.07em]"
            >
              BUILDING
              <br />
              <span className="text-white/20">INTELLIGENT</span>
              <br />
              <span className="text-cyan-300">SYSTEMS.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mt-9 max-w-xl text-sm leading-7 text-white/45 sm:text-base"
            >
              AI Engineer focused on Generative AI, RAG, Agentic AI,
              machine learning and production-ready Python systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <button
                onClick={() => scrollTo("projects")}
                className="group flex items-center gap-3 rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-black transition hover:bg-cyan-300"
              >
                View Work
                <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
              </button>

              <a
                href="mailto:rahulcherukuri6@gmail.com"
                className="flex items-center gap-3 rounded-full border border-white/10 px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white/70 transition hover:border-cyan-300/40 hover:text-cyan-200"
              >
                <Mail className="h-4 w-4" />
                Contact
              </a>
            </motion.div>

            <div className="mt-14 flex items-center gap-8 text-white/30">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                <span className="text-xs font-bold">GH</span>
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                <span className="text-xs font-bold">in</span>
              </a>

              <span className="h-px w-16 bg-white/10" />

              <span className="font-mono text-[8px] uppercase tracking-[0.25em]">
                Hyderabad · India
              </span>
            </div>
          </div>

          {/* 360 VISUAL */}

          <div className="relative flex min-h-[570px] items-center justify-center lg:min-h-[720px]">

            <div className="absolute h-[480px] w-[480px] rounded-full border border-cyan-300/[0.08] sm:h-[600px] sm:w-[600px]" />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[430px] w-[430px] rounded-full border border-dashed border-cyan-300/[0.12] sm:h-[550px] sm:w-[550px]"
            >
              <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_25px_#67e8f9]" />
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[350px] w-[350px] rounded-full border border-white/[0.06] sm:h-[440px] sm:w-[440px]"
            >
              <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-violet-300 shadow-[0_0_20px_#c084fc]" />
            </motion.div>

            <div className="absolute left-1/2 top-1/2 h-[390px] w-[280px] -translate-x-1/2 -translate-y-1/2 sm:h-[500px] sm:w-[350px]">
              <div className="absolute inset-0 rounded-[50%] bg-cyan-300/10 blur-[80px]" />
            </div>

            <motion.div
              style={{
                rotateX: smoothX,
                rotateY: smoothY,
              }}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              className="relative z-10 h-[440px] w-[300px] cursor-grab select-none touch-none active:cursor-grabbing sm:h-[560px] sm:w-[380px]"
            >
              <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_40px_120px_rgba(0,0,0,.7)] backdrop-blur-sm">

                <img
                  src="/rahul.png"
                  alt="Rahul Cherukuri"
                  draggable={false}
                  className="h-full w-full object-cover object-top"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="font-mono text-[8px] uppercase tracking-[0.25em] text-cyan-300/70">
                    AI ENGINEER
                  </div>

                  <div className="mt-1 text-lg font-bold tracking-tight">
                    Rahul Cherukuri
                  </div>
                </div>
              </div>

              {/* depth card */}

              <div className="absolute -right-5 top-16 -z-10 h-full w-full rounded-[2rem] border border-cyan-300/[0.08] bg-cyan-300/[0.02]" />

              <div className="absolute -left-5 top-32 -z-20 h-full w-full rounded-[2rem] border border-violet-300/[0.06] bg-violet-300/[0.02]" />
            </motion.div>

            {/* 360 BADGE */}

            <div className="absolute bottom-10 right-0 z-20 hidden sm:block">
              <div className="rounded-2xl border border-white/10 bg-black/60 px-5 py-4 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <Move3D className="h-5 w-5 text-cyan-300" />

                  <div>
                    <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-white">
                      360° VIEW
                    </div>

                    <div className="mt-1 text-[8px] text-white/35">
                      DRAG TO EXPLORE
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <button
          onClick={() => scrollTo("about")}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 font-mono text-[8px] uppercase tracking-[0.3em] text-white/25 md:flex"
        >
          Scroll to explore
          <ArrowDown className="h-3 w-3 animate-bounce" />
        </button>
      </section>


      {/* ABOUT / PROFILE */}

      <section
        id="about"
        className="relative z-10 overflow-hidden border-t border-white/[0.06] px-5 py-28 sm:px-8 lg:px-12 lg:py-40"
      >
        <div className="mx-auto max-w-[1500px]">

          <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">

            <div>

              <div className="font-mono text-[9px] tracking-[0.35em] text-cyan-300/60">
                02 / ABOUT
              </div>

              <h2 className="mt-6 max-w-xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Building AI that
                <span className="block text-white/30">
                  actually works.
                </span>
              </h2>

              <div className="mt-10 h-px w-24 bg-gradient-to-r from-cyan-300 to-transparent" />

              <p className="mt-8 max-w-xl text-base leading-8 text-white/55 sm:text-lg">
                I&apos;m Rahul Cherukuri, an AI/ML Engineer focused on
                Generative AI, Retrieval-Augmented Generation, Agentic AI,
                Python automation and production-ready intelligent systems.
              </p>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/35">
                My approach combines engineering fundamentals with modern AI
                capabilities — designing systems that can retrieve knowledge,
                reason over information, use tools and deliver useful results
                in real-world workflows.
              </p>

              <div className="mt-10 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-xl">

                <div className="flex items-center gap-2 border-b border-white/[0.06] px-5 py-3">
                  <span className="h-2 w-2 rounded-full bg-red-400/70" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                  <span className="h-2 w-2 rounded-full bg-green-400/70" />

                  <span className="ml-3 font-mono text-[8px] tracking-[0.2em] text-white/20">
                    RAHUL_AI_ENGINEER
                  </span>
                </div>

                <div className="p-5 font-mono text-[11px] leading-7">

                  <div>
                    <span className="text-cyan-300/60">$</span>{" "}
                    <span className="text-white/60">
                      whoami
                    </span>
                  </div>

                  <div className="text-white/30">
                    AI/ML Engineer • GenAI • RAG • Agents
                  </div>

                  <div className="mt-2">
                    <span className="text-cyan-300/60">$</span>{" "}
                    <span className="text-white/60">
                      status
                    </span>
                  </div>

                  <div className="text-emerald-300/60">
                    ● BUILDING INTELLIGENT SYSTEMS
                  </div>

                </div>

              </div>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-xl"
              >
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-300/[0.06] blur-3xl transition duration-700 group-hover:bg-cyan-300/[0.12]" />

                <div className="relative">
                  <div className="font-mono text-[9px] tracking-[0.25em] text-cyan-300/50">
                    EXPERIENCE
                  </div>

                  <div className="mt-5 text-5xl font-bold tracking-[-0.05em]">
                    2.5+
                  </div>

                  <p className="mt-3 text-sm text-white/35">
                    Years working with Python, AI/ML and GenAI systems.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-xl"
              >
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-purple-400/[0.06] blur-3xl transition duration-700 group-hover:bg-purple-400/[0.12]" />

                <div className="relative">
                  <div className="font-mono text-[9px] tracking-[0.25em] text-purple-300/50">
                    SPECIALIZATION
                  </div>

                  <div className="mt-5 text-4xl font-bold tracking-[-0.05em]">
                    GenAI
                  </div>

                  <p className="mt-3 text-sm text-white/35">
                    RAG, Agentic AI, LLM applications and automation.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.16 }}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-xl"
              >
                <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-cyan-300/[0.05] blur-3xl transition duration-700 group-hover:bg-cyan-300/[0.1]" />

                <div className="relative">
                  <div className="font-mono text-[9px] tracking-[0.25em] text-cyan-300/50">
                    ENGINEERING
                  </div>

                  <div className="mt-5 text-4xl font-bold tracking-[-0.05em]">
                    Python
                  </div>

                  <p className="mt-3 text-sm text-white/35">
                    Automation, APIs, data workflows and AI integrations.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.24 }}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-xl"
              >
                <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-purple-400/[0.05] blur-3xl transition duration-700 group-hover:bg-purple-400/[0.1]" />

                <div className="relative">
                  <div className="font-mono text-[9px] tracking-[0.25em] text-purple-300/50">
                    FOCUS
                  </div>

                  <div className="mt-5 text-4xl font-bold tracking-[-0.05em]">
                    Production
                  </div>

                  <p className="mt-3 text-sm text-white/35">
                    Turning prototypes and experiments into usable products.
                  </p>
                </div>
              </motion.div>

            </div>

          </div>

          <div className="mt-24 border-t border-white/[0.06] pt-12">

            <div className="grid gap-10 md:grid-cols-3">

              <div>
                <div className="font-mono text-[8px] tracking-[0.25em] text-cyan-300/50">
                  01 / THINK
                </div>

                <p className="mt-4 max-w-xs text-sm leading-7 text-white/35">
                  Understand the problem before choosing the technology.
                </p>
              </div>

              <div>
                <div className="font-mono text-[8px] tracking-[0.25em] text-purple-300/50">
                  02 / BUILD
                </div>

                <p className="mt-4 max-w-xs text-sm leading-7 text-white/35">
                  Design reliable AI systems with clean engineering underneath.
                </p>
              </div>

              <div>
                <div className="font-mono text-[8px] tracking-[0.25em] text-cyan-300/50">
                  03 / ITERATE
                </div>

                <p className="mt-4 max-w-xs text-sm leading-7 text-white/35">
                  Measure, improve and keep pushing the system forward.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* EXPERIENCE */}

      <section
        id="experience"
        className="relative z-10 overflow-hidden border-t border-white/[0.06] px-5 py-28 sm:px-8 lg:px-12 lg:py-40"
      >

        <div className="mx-auto max-w-[1500px]">

          <div className="grid gap-16 lg:grid-cols-[0.5fr_1.5fr] lg:gap-24">

            {/* SECTION INTRO */}

            <div>

              <div className="font-mono text-[9px] tracking-[0.35em] text-cyan-300/60">
                03 / EXPERIENCE
              </div>

              <div className="mt-5 text-xs tracking-[0.2em] text-white/25">
                THE JOURNEY
              </div>

              <h2 className="mt-8 max-w-md text-4xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-5xl">
                From
                <span className="block text-white/30">
                  engineering
                </span>
                to intelligence.
              </h2>

              <p className="mt-8 max-w-sm text-sm leading-7 text-white/35">
                Building practical AI systems while continuously expanding
                from traditional Python engineering into Generative AI,
                RAG and Agentic AI.
              </p>

              <div className="mt-10 flex items-center gap-3">

                <span className="h-px w-12 bg-cyan-300/40" />

                <span className="font-mono text-[8px] tracking-[0.25em] text-white/20">
                  2024 — PRESENT
                </span>

              </div>

            </div>


            {/* TIMELINE */}

            <div className="relative">

              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-300/40 via-white/[0.08] to-transparent" />


              {/* ACCENTURE */}

              <motion.article
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className="relative pl-10 pb-16"
              >

                <div className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border border-cyan-300/50 bg-[#050505] shadow-[0_0_25px_rgba(103,232,249,0.25)]">

                  <div className="absolute inset-[4px] rounded-full bg-cyan-300" />

                </div>


                <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-xl transition duration-500 hover:border-cyan-300/20 sm:p-9">

                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">

                    <div>

                      <div className="font-mono text-[8px] tracking-[0.25em] text-cyan-300/60">
                        APR 2024 — PRESENT
                      </div>

                      <h3 className="mt-4 text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
                        AI/ML Computational Science Associate
                      </h3>

                      <div className="mt-2 text-sm text-white/35">
                        Accenture
                      </div>

                    </div>

                    <div className="rounded-full border border-white/[0.08] px-3 py-1 font-mono text-[8px] tracking-[0.15em] text-white/30">
                      AI / ML
                    </div>

                  </div>


                  <p className="mt-8 max-w-3xl text-sm leading-7 text-white/45">
                    Working across Python, Artificial Intelligence and
                    Generative AI initiatives, developing intelligent
                    solutions and automation workflows for enterprise
                    use cases.
                  </p>


                  <div className="mt-8 grid gap-3 sm:grid-cols-2">

                    <div className="rounded-2xl border border-white/[0.06] bg-black/20 p-4">

                      <div className="font-mono text-[8px] tracking-[0.2em] text-cyan-300/50">
                        CORE
                      </div>

                      <div className="mt-3 text-sm text-white/55">
                        Python • AI/ML • GenAI
                      </div>

                    </div>


                    <div className="rounded-2xl border border-white/[0.06] bg-black/20 p-4">

                      <div className="font-mono text-[8px] tracking-[0.2em] text-purple-300/50">
                        FOCUS
                      </div>

                      <div className="mt-3 text-sm text-white/55">
                        Automation • LLM Applications
                      </div>

                    </div>

                  </div>

                </div>

              </motion.article>


              {/* CURRENT AI FOCUS */}

              <motion.article
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="relative pl-10"
              >

                <div className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border border-purple-300/50 bg-[#050505]">

                  <div className="absolute inset-[4px] rounded-full bg-purple-300" />

                </div>


                <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-7 backdrop-blur-xl transition duration-500 hover:border-purple-300/20 sm:p-9">

                  <div className="font-mono text-[8px] tracking-[0.25em] text-purple-300/60">
                    NOW BUILDING
                  </div>

                  <h3 className="mt-4 text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
                    Generative AI & Agentic Systems
                  </h3>

                  <p className="mt-6 max-w-3xl text-sm leading-7 text-white/40">
                    Deepening expertise in RAG pipelines, vector search,
                    embeddings, LangChain, LangGraph, AI agents and
                    production-oriented LLM applications.
                  </p>


                  <div className="mt-8 flex flex-wrap gap-2">

                    {[
                      "RAG",
                      "Embeddings",
                      "Vector Search",
                      "LangChain",
                      "LangGraph",
                      "AI Agents",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 font-mono text-[8px] tracking-[0.12em] text-white/35"
                      >
                        {item}
                      </span>
                    ))}

                  </div>

                </div>

              </motion.article>

            </div>

          </div>

        </div>

      </section>


      {/* TECHNOLOGY */}

      <section
        id="skills"
        className="relative z-10 overflow-hidden border-t border-white/[0.06] px-5 py-28 sm:px-8 lg:px-12 lg:py-40"
      >

        <div className="mx-auto max-w-[1500px]">

          <div className="grid gap-16 lg:grid-cols-[0.55fr_1.45fr] lg:gap-24">

            {/* INTRO */}

            <div>

              <div className="font-mono text-[9px] tracking-[0.35em] text-cyan-300/60">
                04 / TECHNOLOGY
              </div>

              <h2 className="mt-6 max-w-md text-4xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                The tools
                <span className="block text-white/30">
                  behind the work.
                </span>
              </h2>

              <p className="mt-8 max-w-sm text-sm leading-7 text-white/35">
                A growing technical stack focused on building intelligent,
                scalable and useful software.
              </p>

              <div className="mt-10 font-mono text-[9px] tracking-[0.2em] text-white/20">
                AI • ENGINEERING • CLOUD
              </div>

            </div>


            {/* TECHNOLOGY GRID */}

            <div className="grid gap-4 sm:grid-cols-2">

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-xl"
              >

                <div className="font-mono text-[8px] tracking-[0.25em] text-cyan-300/60">
                  LANGUAGES
                </div>

                <div className="mt-6 flex flex-wrap gap-2">

                  {[
                    "Python",
                    "TypeScript",
                    "JavaScript",
                    "SQL",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/[0.08] px-3 py-2 text-xs text-white/50"
                    >
                      {item}
                    </span>
                  ))}

                </div>

              </motion.div>


              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-xl"
              >

                <div className="font-mono text-[8px] tracking-[0.25em] text-purple-300/60">
                  GENERATIVE AI
                </div>

                <div className="mt-6 flex flex-wrap gap-2">

                  {[
                    "LLMs",
                    "RAG",
                    "Prompt Engineering",
                    "Embeddings",
                    "Vector Search",
                    "AI Agents",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/[0.08] px-3 py-2 text-xs text-white/50"
                    >
                      {item}
                    </span>
                  ))}

                </div>

              </motion.div>


              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.16 }}
                className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-xl"
              >

                <div className="font-mono text-[8px] tracking-[0.25em] text-cyan-300/60">
                  FRAMEWORKS
                </div>

                <div className="mt-6 flex flex-wrap gap-2">

                  {[
                    "LangChain",
                    "LangGraph",
                    "Streamlit",
                    "FastAPI",
                    "React",
                    "Next.js",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/[0.08] px-3 py-2 text-xs text-white/50"
                    >
                      {item}
                    </span>
                  ))}

                </div>

              </motion.div>


              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.24 }}
                className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-xl"
              >

                <div className="font-mono text-[8px] tracking-[0.25em] text-purple-300/60">
                  CLOUD & DATA
                </div>

                <div className="mt-6 flex flex-wrap gap-2">

                  {[
                    "Azure",
                    "AWS",
                    "Vector Databases",
                    "APIs",
                    "Git",
                    "Docker",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/[0.08] px-3 py-2 text-xs text-white/50"
                    >
                      {item}
                    </span>
                  ))}

                </div>

              </motion.div>

            </div>

          </div>


          {/* PROJECTS */}

          <div
            id="projects"
            className="mt-32 border-t border-white/[0.06] pt-24"
          >

            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

              <div>

                <div className="font-mono text-[9px] tracking-[0.35em] text-cyan-300/60">
                  05 / SELECTED WORK
                </div>

                <h2 className="mt-6 text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                  Projects that
                  <span className="text-white/30"> solve problems.</span>
                </h2>

              </div>

              <div className="font-mono text-[8px] tracking-[0.2em] text-white/20">
                BUILD • TEST • SHIP
              </div>

            </div>


            <div className="mt-14 grid gap-5 lg:grid-cols-2">


              {/* PROJECT 1 */}

              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-8 backdrop-blur-xl sm:p-10"
              >

                <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-300/[0.06] blur-3xl transition duration-700 group-hover:bg-cyan-300/[0.12]" />

                <div className="relative">

                  <div className="flex items-center justify-between">

                    <span className="font-mono text-[8px] tracking-[0.25em] text-cyan-300/60">
                      PROJECT / 01
                    </span>

                    <span className="font-mono text-[8px] text-white/20">
                      GENAI
                    </span>

                  </div>

                  <h3 className="mt-8 text-3xl font-bold tracking-[-0.04em]">
                    RAG Email Assistant
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-white/40">
                    An intelligent email assistant using retrieval-augmented
                    generation to understand enterprise information and
                    produce context-aware responses.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">

                    {[
                      "Azure OpenAI",
                      "RAG",
                      "Python",
                      "Streamlit",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/[0.08] px-3 py-1.5 font-mono text-[8px] text-white/35"
                      >
                        {item}
                      </span>
                    ))}

                  </div>

                </div>

              </motion.article>


              {/* PROJECT 2 */}

              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-8 backdrop-blur-xl sm:p-10"
              >

                <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-purple-400/[0.06] blur-3xl transition duration-700 group-hover:bg-purple-400/[0.12]" />

                <div className="relative">

                  <div className="flex items-center justify-between">

                    <span className="font-mono text-[8px] tracking-[0.25em] text-purple-300/60">
                      PROJECT / 02
                    </span>

                    <span className="font-mono text-[8px] text-white/20">
                      AI
                    </span>

                  </div>

                  <h3 className="mt-8 text-3xl font-bold tracking-[-0.04em]">
                    AON Claims & Policy Chatbot
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-white/40">
                    A conversational AI system designed to retrieve and
                    explain insurance policy and claims information using
                    natural-language interaction.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">

                    {[
                      "Python",
                      "LLM",
                      "RAG",
                      "NLP",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/[0.08] px-3 py-1.5 font-mono text-[8px] text-white/35"
                      >
                        {item}
                      </span>
                    ))}

                  </div>

                </div>

              </motion.article>


              {/* PROJECT 3 */}

              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-8 backdrop-blur-xl sm:p-10"
              >

                <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-300/[0.05] blur-3xl transition duration-700 group-hover:bg-cyan-300/[0.1]" />

                <div className="relative">

                  <div className="flex items-center justify-between">

                    <span className="font-mono text-[8px] tracking-[0.25em] text-cyan-300/60">
                      PROJECT / 03
                    </span>

                    <span className="font-mono text-[8px] text-white/20">
                      COMPUTER VISION
                    </span>

                  </div>

                  <h3 className="mt-8 text-3xl font-bold tracking-[-0.04em]">
                    Billing Anomaly Detection
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-white/40">
                    An OCR-driven workflow that compares billing information
                    against database records and contract terms to identify
                    potential anomalies.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">

                    {[
                      "OCR",
                      "Python",
                      "Data Analysis",
                      "Automation",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/[0.08] px-3 py-1.5 font-mono text-[8px] text-white/35"
                      >
                        {item}
                      </span>
                    ))}

                  </div>

                </div>

              </motion.article>


              {/* PROJECT 4 */}

              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-8 backdrop-blur-xl sm:p-10"
              >

                <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-purple-400/[0.05] blur-3xl transition duration-700 group-hover:bg-purple-400/[0.1]" />

                <div className="relative">

                  <div className="flex items-center justify-between">

                    <span className="font-mono text-[8px] tracking-[0.25em] text-purple-300/60">
                      PROJECT / 04
                    </span>

                    <span className="font-mono text-[8px] text-white/20">
                      AI ENGINEERING
                    </span>

                  </div>

                  <h3 className="mt-8 text-3xl font-bold tracking-[-0.04em]">
                    Intelligent Automation
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-white/40">
                    Python-based automation workflows combining APIs,
                    intelligent processing and AI capabilities to reduce
                    repetitive enterprise tasks.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">

                    {[
                      "Python",
                      "APIs",
                      "Automation",
                      "GenAI",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/[0.08] px-3 py-1.5 font-mono text-[8px] text-white/35"
                      >
                        {item}
                      </span>
                    ))}

                  </div>

                </div>

              </motion.article>

            </div>

          </div>

        </div>

      </section>


      {/* CONTACT */}

      <section
        id="contact"
        className="relative z-10 overflow-hidden border-t border-white/[0.06] px-5 py-32 sm:px-8 lg:px-12 lg:py-48"
      >

        <div className="mx-auto max-w-[1500px]">

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/[0.08] bg-white/[0.025] px-6 py-16 sm:px-12 lg:px-20 lg:py-24">

            {/* BACKGROUND GLOW */}

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/[0.05] blur-[120px]" />

            <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-purple-400/[0.05] blur-[100px]" />


            <div className="relative grid gap-16 lg:grid-cols-[1fr_0.8fr] lg:items-center">

              {/* LEFT */}

              <div>

                <div className="font-mono text-[9px] tracking-[0.35em] text-cyan-300/60">
                  06 / CONTACT
                </div>

                <h2 className="mt-7 max-w-3xl text-5xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
                  Let&apos;s build
                  <span className="block text-white/25">
                    something intelligent.
                  </span>
                </h2>

                <p className="mt-8 max-w-xl text-sm leading-7 text-white/40 sm:text-base">
                  I&apos;m open to AI/ML Engineer, Generative AI,
                  RAG and Agentic AI opportunities.
                  If you&apos;re building something interesting,
                  let&apos;s talk.
                </p>


                {/* EMAIL */}

                <a
                  href="mailto:rahulcherukuri6@gmail.com"
                  className="group mt-10 inline-flex items-center gap-4 rounded-full border border-cyan-300/20 bg-cyan-300/[0.05] px-5 py-4 transition duration-300 hover:border-cyan-300/50 hover:bg-cyan-300/[0.1]"
                >

                  <Mail className="h-5 w-5 text-cyan-300/60 transition group-hover:text-cyan-300" />

                  <span className="text-sm text-white/60 transition group-hover:text-white">
                    rahulcherukuri6@gmail.com
                  </span>

                  <ArrowUpRight className="h-4 w-4 text-white/20 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300" />

                </a>

              </div>


              {/* RIGHT */}

              <div className="relative">

                <div className="rounded-3xl border border-white/[0.08] bg-black/30 p-6 backdrop-blur-xl sm:p-8">

                  <div className="flex items-center justify-between">

                    <div className="font-mono text-[8px] tracking-[0.25em] text-white/25">
                      CONNECTION
                    </div>

                    <div className="flex items-center gap-2">

                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />

                      <span className="font-mono text-[8px] text-emerald-300/60">
                        AVAILABLE
                      </span>

                    </div>

                  </div>


                  <div className="mt-10 space-y-3">

                    <a
                      href="mailto:rahulcherukuri6@gmail.com"
                      className="group flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.025] p-5 transition hover:border-cyan-300/20 hover:bg-white/[0.05]"
                    >

                      <div className="flex items-center gap-4">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03]">

                          <Mail className="h-4 w-4 text-white/40 transition group-hover:text-cyan-300" />

                        </div>

                        <div>

                          <div className="text-sm text-white/60">
                            Email
                          </div>

                          <div className="mt-1 text-[10px] text-white/25">
                            Let&apos;s start a conversation
                          </div>

                        </div>

                      </div>

                      <ArrowUpRight className="h-4 w-4 text-white/20 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300" />

                    </a>


                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.025] p-5 transition hover:border-purple-300/20 hover:bg-white/[0.05]"
                    >

                      <div className="flex items-center gap-4">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03]">

                          <span className="text-[11px] font-bold text-white/40 transition group-hover:text-purple-300">in</span>

                        </div>

                        <div>

                          <div className="text-sm text-white/60">
                            LinkedIn
                          </div>

                          <div className="mt-1 text-[10px] text-white/25">
                            Professional profile
                          </div>

                        </div>

                      </div>

                      <ArrowUpRight className="h-4 w-4 text-white/20 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-purple-300" />

                    </a>


                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.025] p-5 transition hover:border-cyan-300/20 hover:bg-white/[0.05]"
                    >

                      <div className="flex items-center gap-4">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03]">

                          <span className="text-[11px] font-bold text-white/40 transition group-hover:text-cyan-300">GH</span>

                        </div>

                        <div>

                          <div className="text-sm text-white/60">
                            GitHub
                          </div>

                          <div className="mt-1 text-[10px] text-white/25">
                            Projects & code
                          </div>

                        </div>

                      </div>

                      <ArrowUpRight className="h-4 w-4 text-white/20 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300" />

                    </a>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="relative z-10 border-t border-white/[0.06] px-5 py-8 sm:px-8 lg:px-12">

        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-5 sm:flex-row sm:items-center">

          <div>

            <div className="font-mono text-[9px] tracking-[0.25em] text-white/25">
              RAHUL CHERUKURI
            </div>

            <div className="mt-2 text-xs text-white/20">
              AI/ML Engineer • Generative AI • Intelligent Systems
            </div>

          </div>


          <div className="flex items-center gap-5">

            <a
              href="mailto:rahulcherukuri6@gmail.com"
              className="font-mono text-[8px] tracking-[0.15em] text-white/25 transition hover:text-cyan-300"
            >
              EMAIL
            </a>

            <a
              href="#home"
              className="font-mono text-[8px] tracking-[0.15em] text-white/25 transition hover:text-cyan-300"
            >
              BACK TO TOP ↑
            </a>

          </div>

        </div>

        <div className="mx-auto mt-7 flex max-w-[1500px] justify-between border-t border-white/[0.04] pt-5">

          <span className="font-mono text-[7px] tracking-[0.2em] text-white/15">
            © 2026 RAHUL CHERUKURI
          </span>

          <span className="font-mono text-[7px] tracking-[0.2em] text-white/15">
            BUILT WITH NEXT.JS
          </span>

        </div>

      </footer>

    </main>
  );
}

