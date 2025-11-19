import React from 'react'
import { motion } from 'framer-motion'
import { Youtube } from 'lucide-react'

const Content = () => {
  return (
    <section id="content" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          F.ArtpreneurJourney
        </motion.h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <p className="text-blue-100/90 leading-relaxed">
              A content series exploring how art intersects with science and technology. From physics‑inspired design to AI‑assisted workflows, the mission is to educate and empower artists to think like creators and researchers.
            </p>
            <a
              href="https://www.youtube.com/" target="_blank" rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-blue-300 hover:text-blue-200"
            >
              <Youtube className="w-5 h-5" />
              Watch on YouTube
            </a>
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Content
