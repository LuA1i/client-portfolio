import React from 'react'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
} from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col md:flex-row items-center justify-between mx-auto py-36 pt-44  px-10"
    >
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold mb-4 text-[#00b4d8]">About Me</h2>
        <p className="text-lg text-gray-300">
          I am a passionate developer with experience in building dynamic web
          applications. I enjoy turning complex problems into simple, beautiful,
          and intuitive designs. I love working with modern technologies and
          continuously strive to learn and grow in the field of software
          development. My goal is to create efficient, user-friendly solutions
          that make a positive impact.
        </p>
      </div>

      <div className="md:w-1/2 mt-14 md:mb-0">
        <h2 className="text-4xl font-bold mb-4  text-[#00b4d8]">
          My Tech Stack
        </h2>
        <ul className="list-none text-lg text-gray-300 flex flex-wrap justify-between gap-3">
          <li className="pt- w-1/3 md:w-1/4 flex justify-center">
            <FaHtml5 size={50} />
          </li>
          <li className="pt- w-1/3 md:w-1/4 flex justify-center">
            <FaCss3Alt size={50} />
          </li>
          <li className="pt- w-1/3 md:w-1/4 flex justify-center">
            <FaJs size={50} />
          </li>
          <li className="pt- w-1/3 md:w-1/4 flex justify-center">
            <FaReact size={50} />
          </li>
          <li className="pt- w-1/3 md:w-1/4 flex justify-center">
            <FaNodeJs size={50} />
          </li>
          <li className="pt- w-1/3 md:w-1/4 flex justify-center">
            <FaGit size={50} />
          </li>
          <li className="pt- w-1/3 md:w-1/4 flex justify-center">
            <RiTailwindCssFill size={50} />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default About
