import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, Send, BrainCircuit } from "lucide-react";
import { fallbackProjects } from "./data/projects";
import type { Project, ProjectCategory } from "./types";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:5000/api";

const words = ["MERN Engineer", "Experience Architect", "Interaction Designer"];
const profilePhoto = "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80";
const imageFallback = "https://picsum.photos/seed/fallback-poster/420/420";

function App() {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
  const [activeFilter, setActiveFilter] = useState<"All" | ProjectCategory>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((i) => (i + 1) % words.length);
      setTyped("");
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const target = words[wordIndex];
    if (typed === target) return;
    const timer = setTimeout(() => setTyped(target.slice(0, typed.length + 1)), 60);
    return () => clearTimeout(timer);
  }, [typed, wordIndex]);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await fetch(`${API_URL}/projects`);
        if (!response.ok) return;
        const data = await response.json();
        if (Array.isArray(data) && data.length) setProjects(data);
      } catch {
        // fallback data intentionally used when backend is unavailable
      }
    };
    void loadProjects();
  }, []);

  const filtered = useMemo(
    () => (activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter)),
    [activeFilter, projects]
  );

  const submitContact = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setNotice("");
    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error("Failed");
      setNotice("Message sent successfully.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setNotice("Unable to send right now. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#05060a] text-zinc-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(39,214,255,0.15),transparent_35%),radial-gradient(circle_at_90%_5%,rgba(192,118,255,0.15),transparent_36%),radial-gradient(circle_at_50%_80%,rgba(77,255,188,0.1),transparent_44%)]" />
      <main className="relative mx-auto max-w-7xl px-6 pb-24 md:px-12">
        <header className="sticky top-5 z-40 mb-6">
          <nav className="nav-shell">
            <div className="flex items-center gap-3">
              <span className="brand-dot" />
              <p className="text-sm font-medium tracking-[0.16em] text-zinc-200">POOJA MOURYA</p>
            </div>
            <div className="menu-dock hidden lg:grid">
              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Skills", "#skills"],
                ["Projects", "#projects"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a key={label} href={href} className="menu-link">
                  {label}
                </a>
              ))}
            </div>
            <a href="#contact" className="nav-cta">
              Let's Talk
            </a>
          </nav>
        </header>

        <section id="home" className="relative flex min-h-screen flex-col justify-center gap-8">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-cyan-200"
          >
            <Sparkles size={14} /> Premium Portfolio Experience
          </motion.p>
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr,0.95fr]">
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl"
              >
                I craft magnetic product journeys with
                <span className="block bg-gradient-to-r from-cyan-300 via-violet-300 to-emerald-300 bg-clip-text text-transparent">
                  {typed}
                  <span className="ml-1 animate-pulse text-zinc-200">|</span>
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="max-w-2xl text-zinc-300 md:text-lg"
              >
                Senior MERN product engineer focused on high-conversion experiences, smooth motion systems,
                and scalable full-stack architecture.
              </motion.p>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["40+", "Projects Shipped"],
                  ["95%", "Client Retention"],
                  ["A+", "UX Precision"],
                ].map(([value, label]) => (
                  <div key={label} className="metric-card">
                    <p className="text-2xl font-semibold text-white">{value}</p>
                    <p className="text-xs uppercase tracking-[0.18em] text-zinc-300">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.16 }}
              className="profile-card"
            >
              <img
                src={profilePhoto}
                alt="Pooja Mourya profile"
                className="h-[24rem] w-full rounded-2xl object-cover"
                onError={(e) => {
                  e.currentTarget.src = imageFallback;
                }}
              />
              <p className="mt-4 text-sm uppercase tracking-[0.2em] text-cyan-200">Senior Product Engineer</p>
              <h3 className="text-2xl font-semibold">Pooja Mourya</h3>
              <p className="mt-2 text-sm text-zinc-300">
                MERN specialist building interfaces that feel luxurious, intelligent, and lightning smooth.
              </p>
            </motion.div>
          </div>
        </section>

        <section id="about" className="glass-card mb-20 grid gap-6 p-8 md:grid-cols-[1.2fr,1fr]">
          <div>
            <p className="eyebrow">About Narrative</p>
            <h2 className="section-title">From code blocks to cinematic flows.</h2>
            <p className="mt-4 text-zinc-300">
              I design interaction systems first, then engineer resilient MERN platforms under them. Every
              release is tuned for conversion psychology, perceived performance, and visual depth.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="mb-4 flex items-center gap-2 text-cyan-200"><BrainCircuit size={16} /> AI Mentor Voice</p>
            <p className="text-sm text-zinc-300">
              “Pooja translates fuzzy product ideas into polished shipped experiences. She thinks in motion,
              systems, and scale - not just pages.”
            </p>
          </div>
        </section>

        <section id="skills" className="mb-20">
          <p className="eyebrow">Skill Matrix</p>
          <h2 className="section-title mb-8">Engineering depth with design precision.</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["React + Next.js", 96],
              ["Node + Express", 92],
              ["MongoDB + Data Modeling", 89],
              ["Motion Design (GSAP/Framer)", 94],
            ].map(([name, level]) => (
              <div key={name as string} className="glass-card p-5">
                <div className="mb-2 flex justify-between text-sm text-zinc-300">
                  <span>{name}</span>
                  <span>{level}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-zinc-900">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${level}%` }} viewport={{ once: true }} className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-400" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mb-20">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Project Cinema</p>
              <h2 className="section-title">Selected web experiences.</h2>
            </div>
            <div className="flex gap-2">
              {(["All", "Web Design", "Development"] as const).map((filter) => (
                <button key={filter} onClick={() => setActiveFilter(filter)} className={`filter-chip ${activeFilter === filter ? "filter-chip-active" : ""}`}>
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.article
                  layout
                  key={project.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, y: 20 }}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className="project-card"
                  onClick={() => setActiveProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    className="mb-4 h-52 w-full rounded-2xl object-cover"
                    onError={(e) => {
                      e.currentTarget.src = imageFallback;
                    }}
                  />
                  <h3 className="text-2xl font-medium">{project.name}</h3>
                  <p className="mt-2 text-sm text-zinc-300">{project.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.slice(0, 3).map((tag) => (
                      <span key={tag} className="rounded-full border border-white/20 px-3 py-1 text-xs text-zinc-200">{tag}</span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </section>

        <section className="mb-20">
          <p className="eyebrow">Experience Timeline</p>
          <h2 className="section-title mb-8">Building outcomes, not just interfaces.</h2>
          <div className="space-y-4">
            {[
              "2022 - Scaled D2C storefront architecture for multi-brand operations.",
              "2023 - Led conversion-focused redesign projects with animated UX systems.",
              "2024 - Shipped high-performance MERN experiences with reusable UI engines.",
            ].map((item) => (
              <motion.div key={item} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card p-5 text-zinc-200">
                {item}
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <p className="eyebrow">Testimonials</p>
          <h2 className="section-title mb-8">Trusted by ambitious product teams.</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "“The smoothest collaboration we’ve ever had from concept to launch.”",
              "“She treats UX and engineering as one product discipline.”",
              "“Performance gains and conversion uplift happened in the first sprint.”",
            ].map((quote) => (
              <motion.div key={quote} whileHover={{ scale: 1.03 }} className="glass-card p-6 text-zinc-300">
                {quote}
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="glass-card p-8 md:p-10">
          <p className="eyebrow">Contact</p>
          <h2 className="section-title mb-6">Let’s build your next standout product.</h2>
          <form className="grid gap-4 md:grid-cols-2" onSubmit={submitContact}>
            <input className="input" placeholder="Your Name" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} required />
            <input className="input" placeholder="Email" type="email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} required />
            <textarea className="input md:col-span-2 min-h-[140px]" placeholder="Tell me about your project..." value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))} required />
            <button className="magnetic-btn md:col-span-2" type="submit" disabled={sending}>
              <Send size={16} /> Send Message
            </button>
            {notice ? <p className="md:col-span-2 text-sm text-cyan-200">{notice}</p> : null}
          </form>
        </section>
      </main>

      <AnimatePresence>
        {activeProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-6" onClick={() => setActiveProject(null)}>
            <motion.div initial={{ scale: 0.85, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0 }} className="glass-card max-w-2xl p-8" onClick={(e) => e.stopPropagation()}>
              <img src={activeProject.videoPreview} alt={`${activeProject.name} preview`} className="mb-4 h-56 w-full rounded-2xl object-cover" />
              <h3 className="text-3xl font-semibold">{activeProject.name}</h3>
              <p className="mt-2 text-zinc-300">{activeProject.summary}</p>
              <a className="mt-5 inline-flex rounded-full border border-cyan-300/70 px-5 py-2 text-cyan-200 transition hover:bg-cyan-300/10" href={activeProject.liveUrl} target="_blank" rel="noreferrer">
                Visit Live Project
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
