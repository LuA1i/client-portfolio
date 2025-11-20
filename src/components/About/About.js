import React from 'react'
import img1 from '../../assets/graph.jpg'

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col md:flex-row items-center justify-between mx-auto py-36 pt-44  px-10"
    >
      <div className="md:w-1/2 md:px-30">
        <h2 className="text-4xl font-bold mb-4 text-[#00b4d8]">About Us</h2>
        <p className="text-lg text-gray-300">
          Theres ongoing pressure on NHS teams to deliver safe, effcient care
          and patient waiting list data needs to be accurate and reliable. Our
          models <span className="text-[#00b4d8]">LUNA</span>/
          <span className="text-[#00b4d8]">ROVA</span> gives NHS teams the tools
          to improve their data, reducing the risk, improving safety and helping
          them manage data reducing backlogs.
        </p>
      </div>

      <div className="md:w-1/2 mt-14 md:mb-0 ">
        <ul className="list-none text-lg text-gray-300 flex flex-wrap justify-between gap-10 ">
          <img src={img1} className="rounded-2xl"></img>
        </ul>
      </div>
    </div>
  )
}

export default About
