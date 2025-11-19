import React from 'react'
import { motion } from 'framer-motion'

const images = [
  { src: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop', title: 'Iridescent Study', tag: 'Lighting / Study' },
  { src: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=1200&auto=format&fit=crop', title: 'Astral Anatomy', tag: 'Anatomy / Concept' },
  { src: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1200&auto=format&fit=crop', title: 'Retro‑futurist', tag: 'Fine Art' },
  { src: 'https://images.unsplash.com/photo-1505740106531-4243f3831c78?q=80&w=1200&auto=format&fit=crop', title: 'Specular', tag: 'Materials' },
  { src: 'https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1200&auto=format&fit=crop', title: 'Neon Fields', tag: 'Environment' },
  { src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop', title: 'Quantum Thread', tag: 'AI / Physics' },
]

const Gallery = () => {
  return (
    <section id="portfolio" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          Portfolio Gallery
        </motion.h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <img src={img.src} alt={img.title} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-300/80">{img.tag}</p>
                  <h3 className="text-lg font-semibold">{img.title}</h3>
                </div>
                <span className="text-xs px-2 py-1 rounded-full border border-white/20">View</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
