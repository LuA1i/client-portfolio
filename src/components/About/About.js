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
            To deliver safe, efficient care and reduce backlogs, NHS teams need accurate waiting list data. <span className='text-[#00b4d8]'>LUNA</span>/<span className='text-[#00b4d8]'>ROVA</span> provides the tools to improve data quality, which reduces risk and enhances patient safety. With a median wait of <span className='text-[#00b4d8]'>13.4 weeks</span> for those wating for treatments and <span className='text-[#00b4d8]'>2.8 million</span> wating over <span className='text-[#00b4d8]'>18 weeks</span>, by combining our expertise we provide you complete oversight of patient oversight and boost productivity.
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