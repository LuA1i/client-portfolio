import React from 'react'
import img1 from '../../assets/graph.jpg'

const About = () => {
  return (
    <div
      id="about"
      className="max-w-screen-2xl mx-auto py-16 md:py-36 pt-28 md:pt-44 px-6 md:px-10"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-12 lg:gap-20">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-[#00b4d8]">
            About Us
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed">
            There's ongoing pressure on NHS teams to deliver safe, efficient
            care and patient waiting list data needs to be accurate and
            reliable. Our models <span className="text-[#00b4d8]">LUNA</span>/
            <span className="text-[#00b4d8]">ROVA</span> gives NHS teams the
            tools to improve their data, reducing the risk, improving safety and
            helping them manage data reducing backlogs.
          </p>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="w-full max-w-md">
            <img
              src={img1}
              alt="Data analytics graph"
              className="rounded-2xl w-full h-auto object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About