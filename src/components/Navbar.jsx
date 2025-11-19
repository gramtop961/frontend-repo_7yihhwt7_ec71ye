import React from 'react'
import { Menu } from 'lucide-react'

const Navbar = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md px-4 py-3">
          <a href="#home" className="text-white font-semibold tracking-wide">FAUZAN.ADITYA</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-blue-100/90">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#portfolio" className="hover:text-white transition">Portfolio</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#content" className="hover:text-white transition">Content</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
        {open && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md px-4 py-3 md:hidden text-blue-100/90">
            <a href="#about" className="block py-2">About</a>
            <a href="#portfolio" className="block py-2">Portfolio</a>
            <a href="#projects" className="block py-2">Projects</a>
            <a href="#content" className="block py-2">Content</a>
            <a href="#contact" className="block py-2">Contact</a>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
