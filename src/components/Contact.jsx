import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id="contact" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          Contact & Collaboration
        </motion.h2>
        <form className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="md:col-span-1">
            <label className="block text-sm text-blue-200/80 mb-2">Name</label>
            <input type="text" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-blue-400/60" placeholder="Your name" />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm text-blue-200/80 mb-2">Email</label>
            <input type="email" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-blue-400/60" placeholder="you@email.com" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm text-blue-200/80 mb-2">Message</label>
            <textarea className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 h-36 outline-none focus:border-blue-400/60" placeholder="Project details, timelines, links..." />
          </div>
          <div className="md:col-span-2 flex items-center justify-between">
            <p className="text-sm text-blue-200/70">Open for commissions, collaborations, and creative tech projects.</p>
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="rounded-full bg-blue-500/90 hover:bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition"
              type="button"
              onClick={() => alert('Thanks! Your message will be routed soon.')}
            >
              Send Message
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
