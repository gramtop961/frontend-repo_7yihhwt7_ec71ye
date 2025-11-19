import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays for cinematic feel */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.25),transparent_60%)]" />

      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex items-center">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight"
          >
            Fauzan Aditya
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-lg sm:text-xl text-blue-200/90"
          >
            Semi‑realistic digital artist blending fine art with physics and AI — crafting cinematic visuals with scientific soul.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a href="#portfolio" className="inline-flex items-center rounded-full bg-blue-500/90 hover:bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition">
              Explore Portfolio
            </a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-white/20 hover:border-blue-400/60 hover:text-blue-200 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-sm transition">
              Collaborate
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
