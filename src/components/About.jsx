import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="relative bg-black text-white py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(37,99,235,0.15),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(59,130,246,0.1),transparent_40%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-6 text-blue-100/90 leading-relaxed max-w-3xl"
        >
          I’m Fauzan Aditya — a digital artist and experimental creative exploring the meeting point of art, physics, and AI. My work blends semi‑realistic portraiture, fine art sensibilities, and scientific storytelling to build worlds that feel tactile, cinematic, and alive.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 grid sm:grid-cols-3 gap-6"
        >
          {[
            { title: 'Semi‑realistic Digital Art', desc: 'Portraits, anatomy, lighting studies, and character moments with depth and emotion.' },
            { title: 'Fine Art & Concept', desc: 'Composition‑driven pieces exploring color, texture, and narrative.' },
            { title: 'Art x Physics x AI', desc: 'Hybrid experiments where algorithms, motion, and matter shape visual poetry.' },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-blue-200/80 text-sm">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
