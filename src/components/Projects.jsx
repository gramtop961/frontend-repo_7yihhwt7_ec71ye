import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Quantum Portraits',
    desc: 'Semi‑realistic portraits generated via AI‑assisted references and refined with hand‑painted lighting and anatomy passes.',
    meta: 'AI • Painting • Anatomy',
  },
  {
    title: 'Specular Bodies',
    desc: 'A study series on skin and material interaction — exploring subsurface scattering and reflective color theory.',
    meta: 'Lighting • Materials • Study',
  },
  {
    title: 'Cosmic Narrative',
    desc: 'Concept art exploring astrophysics and myth — designed as keyframes for a short film experiment.',
    meta: 'Concept • Physics • Story',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          Projects
        </motion.h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-blue-200/80 text-sm">{p.meta}</p>
              <p className="mt-4 text-blue-100/90">{p.desc}</p>
              <div className="mt-6 flex gap-3">
                <button className="text-sm px-4 py-2 rounded-full bg-blue-500/90 hover:bg-blue-500 transition">Process</button>
                <button className="text-sm px-4 py-2 rounded-full border border-white/20 hover:border-blue-400/60">Final</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
