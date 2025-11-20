import React from 'react'
import img1 from '../../assets/graph.jpg'

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center mx-auto py-12 lg:py-56 px-6 md:px-16"
    >
      <div className="flex flex-col 2xl:flex-row items-center justify-between w-full max-w-8xl gap-6 xl:gap-48">
        <div className="w-full 2xl:w-2/5 flex flex-col items-center 2xl:items-start text-center 2xl:text-left">
          <h2 className="text-3xl lg:text-6xl font-bold mb-6 lg:mb-12 text-[#00b4d8]">About Us</h2>
          <p className="text-base lg:text-2xl text-gray-300 leading-relaxed lg:leading-loose max-w-3xl">
            There's ongoing pressure on NHS teams to deliver safe, efficient care
            and patient waiting list data needs to be accurate and reliable. Our
            models <span className="text-[#00b4d8] font-semibold">LUNA</span>/
            <span className="text-[#00b4d8] font-semibold">ROVA</span> gives NHS teams the tools
            to improve their data, reducing the risk, improving safety and helping
            them manage data reducing backlogs.
          </p>
        </div>

        <div className="w-full 2xl:w-3/5 flex justify-center mt-6 2xl:mt-0">
          <div className="max-w-md 2xl:max-w-4xl w-full">
            <img 
              src={img1} 
              alt="Data visualization graph showing NHS analytics"
              className="rounded-3xl w-full h-auto object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About