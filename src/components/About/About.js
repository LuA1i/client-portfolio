import React from 'react'
import img1 from '../../assets/graph.jpg'

const About = () => {
  return (
    <div
      id="about"
      className="mx-auto px-10 pt-28 mt-52 pb-48 text-white"
    >
      <h2 className="text-4xl text-[#00b4d8] font-bold text-left mb-12">
        About Us
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12">
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
          <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
            There's ongoing pressure on NHS teams to deliver safe, efficient
            care and patient waiting list data needs to be accurate and
            reliable. Our models <span className="text-[#00b4d8]">LUNA</span>/
            <span className="text-[#00b4d8]">ROVA</span> gives NHS teams the
            tools to improve their data, reducing the risk, improving safety and
            helping them manage data reducing backlogs.
          </p>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="max-w-md w-full">
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