import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Headshot from './assets/Headshot.png'

const projects = [
  { title: 'FleetManage.ai', desc: 'AI-powered maintenance SaaS for in-house shops', tags: ['.NET','Blazor','SQL','AI'], bar: 'from-violet-500 to-fuchsia-400' },
  { title: 'Updated.ai', desc: 'Driver-first messenger with trucking workflows', tags: ['Realtime','Mobile','AI Agent'], bar: 'from-fuchsia-500 to-pink-500' },
  { title: 'DispatchHUB', desc: 'Matching platform for carriers, dispatchers, owner-ops', tags: ['Matching','Stripe','KYC'], bar: 'from-purple-500 to-indigo-400' },
]
const chips = ['.NET','C#','Blazor','SQL Server','Azure','React','TypeScript','AI/LLM','Telemetry','UI/UX']
const blogs = [
  { title: 'AI Maintenance: Reducing Downtime in Class-8 Fleets', outlet: 'Medium', href: '#' },
  { title: 'Designing a Driver-First Messenger for Logistics Teams', outlet: 'Dev.to', href: '#' },
  { title: 'Data Model for Shop Workorders in .NET', outlet: 'Personal Blog', href: '#' },
]
const certs = [
  { name: 'Microsoft Certified: Azure Fundamentals (AZ-900)', id: 'Credential ID #XXXX', href: '#' },
  { name: '.NET Developer Certificate', id: 'Credential ID #XXXX', href: '#' },
  { name: 'SQL Server Data Modeling', id: 'Credential ID #XXXX', href: '#' },
  { name: 'Intro to Prompt Engineering / LLM Apps', id: 'Credential ID #XXXX', href: '#' },
]

export default function App(){
  const [dark, setDark] = useState(false)
  useEffect(() => { const saved = localStorage.getItem('theme-dark'); if (saved === 'true') setDark(true) }, [])
  useEffect(() => { document.documentElement.classList.toggle('dark', dark); localStorage.setItem('theme-dark', String(dark)) }, [dark])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-500">Dori Hojayeva</span>
          <nav className="hidden md:flex items-center gap-3">
            <a href="#work" className="btn hover:bg-slate-50 dark:hover:bg-slate-800">Work</a>
            <a href="#skills" className="btn hover:bg-slate-50 dark:hover:bg-slate-800">Skills</a>
            <a href="#experience" className="btn hover:bg-slate-50 dark:hover:bg-slate-800">Experience</a>
            <a href="/Dori-Hojayeva-Resume.pdf" className="btn-primary">Download Resume</a>
            <button onClick={()=>setDark(d=>!d)} className="btn">{dark ? 'Light mode' : 'Dark mode'}</button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-50 [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[680px] w-[680px] rounded-full bg-gradient-to-br from-violet-300 to-fuchsia-200 blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-4 py-16 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-xs font-medium text-violet-700 bg-violet-50 ring-1 ring-violet-100 rounded-full px-3 py-1">Open to roles & partnerships</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-400">
              I build calm, reliable software for busy logistics teams
            </h1>
            <p className="mt-4 text-slate-600 dark:text-slate-300 text-lg">
              Software Engineer & founder focused on .NET, Blazor, SQL, and AI—turning real fleet pain points into production systems. Based in Chicago, IL.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#work" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-white text-sm font-medium shadow-md btn-primary">View Work</a>
              <a href="/Dori-Hojayeva-Resume.pdf" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 border border-violet-200 dark:border-slate-700 text-sm font-medium hover:bg-violet-50 dark:hover:bg-slate-800 text-violet-700">Download Resume</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="aspect-[4/5] w-full rounded-3xl bg-gradient-to-br from-white to-violet-50 dark:from-slate-900 dark:to-slate-900 ring-1 ring-violet-100 dark:ring-slate-800 p-4 shadow-sm grid place-items-center text-slate-400">
              <img
                    src={Headshot}
                    alt="Durli Hojayeva headshot"
                    className="aspect-[4/5] w-full rounded-3xl object-cover object-center ring-1 ring-violet-100 dark:ring-slate-800 shadow-sm"
                  />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white dark:bg-slate-900 ring-1 ring-violet-200 dark:ring-slate-800 px-4 py-3 shadow-lg">
              <div className="text-xs text-slate-600 dark:text-slate-300">Recent work</div>
              <div className="text-sm font-medium text-violet-600">Fleet uptime +15%</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-16 bg-gradient-to-b from-white via-violet-50 to-fuchsia-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950 border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold">Selected Work</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <article key={p.title} className="group rounded-2xl bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800 p-6 hover:shadow-lg transition">
                <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${p.bar}`}></div>
                <h3 className="mt-4 text-lg font-semibold group-hover:text-violet-700">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs rounded-full bg-slate-50 dark:bg-slate-800 ring-1 ring-slate-200 dark:ring-slate-700 px-2 py-1 text-slate-700 dark:text-slate-200">{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-14 border-y border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <h2 className="text-2xl font-semibold">Skills & Focus</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl">Pragmatic tools: clean data models, predictable APIs, and UI that calms operations.</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {chips.map((c) => (
              <span key={c} className="text-xs rounded-full bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800 px-3 py-1 text-slate-700 dark:text-slate-200">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-16">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800 p-6">
            <div className="text-sm text-slate-500 dark:text-slate-400">2024 — Present</div>
            <div className="mt-1 text-lg font-semibold">Application Developer</div>
            <div className="text-sm text-slate-600 dark:text-slate-300">Vedder Price LLP</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-200 list-disc list-inside">
              <li>Shipped internal apps in .NET/Blazor used by 1k+ staff</li>
              <li>Integrated Intapp, Boomi, and SQL-backed reporting</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800 p-6">
            <div className="text-sm text-slate-500 dark:text-slate-400">2023 — Present</div>
            <div className="mt-1 text-lg font-semibold">Founder & Builder</div>
            <div className="text-sm text-slate-600 dark:text-slate-300">FleetManage.ai • Updated.ai • DispatchHUB</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-200 list-disc list-inside">
              <li>Piloted tools across a 60-truck fleet; uptime +15%</li>
              <li>Reduced service overruns and back-and-forths</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Blogs */}
      <section id="blogs" className="py-16 bg-slate-50/60 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <h2 className="text-2xl font-semibold">Writing & Blogs</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl">Short essays and technical notes that show how I design, build, and ship.</p>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs.map((b) => (
              <article key={b.title} className="rounded-2xl bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800 p-6 hover:shadow-md transition">
                <div className="text-xs font-medium text-violet-700 bg-violet-50 ring-1 ring-violet-100 dark:bg-slate-800 dark:ring-slate-700 inline-flex px-2 py-1 rounded-full">{b.outlet}</div>
                <h3 className="mt-3 text-lg font-semibold">{b.title}</h3>
                <a href={b.href} className="mt-3 inline-flex text-sm text-teal-700 dark:text-teal-400 hover:underline">Read →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <h2 className="text-2xl font-semibold">Certifications</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl">Verifiable credentials and coursework relevant to my domain.</p>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {certs.map((c) => (
              <div key={c.name} className="rounded-2xl bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800 p-6 flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-violet-400 to-fuchsia-400" />
                <div>
                  <div className="font-medium">{c.name}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{c.id}</div>
                  <a href={c.href} className="mt-2 inline-flex text-sm text-teal-700 dark:text-teal-400 hover:underline">View credential</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-2xl bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-slate-900 dark:to-slate-900 ring-1 ring-violet-100 dark:ring-slate-800 p-8 text-center">
            <h3 className="text-xl font-semibold">Grab my resume</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Download the latest PDF with detailed experience and skills.</p>
            <a href="/Dori-Hojayeva-Resume.pdf" className="mt-4 inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-white text-sm font-medium shadow-md btn-primary">Download Resume (PDF)</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gradient-to-r from-violet-50 to-fuchsia-50 dark:from-slate-900 dark:to-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} Durli Hojayeva • Chicago, IL</p>
          <div className="flex items-center gap-4 text-sm text-violet-700 dark:text-violet-300">
            <a href="#" className="hover:underline">LinkedIn</a>
            <a href="#" className="hover:underline">GitHub</a>
            <a href="#" className="hover:underline">Blog</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
