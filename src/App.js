import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
function App() {
  return (
    <div className="text-white">
      <Navbar />
      <Hero id="hero" />
      <About id="about" />
      <Projects id="projects" />
      <Contact />
      <div>
        <hr className="mx-10 mt-10 border-[#00b4d8]" />
        <div className="flex justify-between px-20 my-10">
          <p className="text-[#00b4d8]">Luqman Ali</p>
          <div className="flex flex-row">
            <a href="https://github.com/LuA1i">
              <FaGithub size={20} className="mx-3" />
            </a>
            <a href="https://www.linkedin.com/in/luqman-ali-b577552b4/">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
