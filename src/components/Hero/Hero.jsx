import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { ReactTyped } from 'react-typed'
import POC from '../../assets/Proof of Concept.docx'

const Hero = () => {
  const handleDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement('a')
    link.href = POC
    link.download = 'Proof of Concept.docx' // The filename for download
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div id="hero" className="text-white pb-28">
      <div className="h-screen w-full mx-auto text-center flex flex-col max-w-[800px] mt-[-96px] justify-center items-center">
        <h1 className="md:text-6xl sm:text-5xl text-4xl md:py-6  ">
          Empowering<span className="text-[#00b4d8]"> Healthcare</span>
          <br />
          With{' '}
          <ReactTyped
            className="md:text-5xl text-[#00b4d8]  sm:text-4xl text-3xl p-2"
            strings={['AI']}
            typeSpeed={320}
            backSpeed={120}
            loop={false}
          />
        </h1>
        <h3>Using Natural Language Processing, Machine Learning to optimise <span className='text-[#00b4d8]'>Healthcare </span>performance</h3>
        <div className="flex py-3  ">
          <a href="https://github.com/LuA1i">
            <FaGithub size={20} className="mx-3" />
          </a>
          <a href="https://www.linkedin.com/in/luqman-ali-b577552b4/">
            <FaLinkedin size={20} />
          </a>
        </div>
        <div className="flex justify-center items-center gap-4">
          <button 
            onClick={handleDownload}
            className="border-2 rounded-xl border-[#00b4d8] text-[#00b4d8] text-sm font-bold px-4 py-1 mt-2 md:px-6 md:text-base hover:bg-[#00b4d8] hover:text-black ease-in-out duration-500 uppercase"
          >
            CV
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero