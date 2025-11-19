import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Projects from './components/Projects'
import Content from './components/Content'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Projects />
      <Content />
      <Contact />
      <footer className="py-10 text-center text-blue-200/60 border-t border-white/10 bg-black">
        <p>© {new Date().getFullYear()} Fauzan Aditya — Art • Physics • AI</p>
      </footer>
    </div>
  )
}

export default App
