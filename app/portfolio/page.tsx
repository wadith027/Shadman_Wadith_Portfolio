import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { FaGlobeAmericas } from "react-icons/fa";
import Image from 'next/image'
const projects = [
  {
      image: "/img/hotkey_2.png",
      source: "https://github.com/wadith027/hotkey-1",
      demo: "https://www.youtube.com/watch?v=XpOH6iowrnU&t=12s",
      description: "A cross platform solution for controlling your PC from a mobile device.",
      title: "Hotkey"
  },
  {
      image: "/img/Luftwaffe.png",
      demo: "https://www.youtube.com/watch?v=3xZ9guxnCXU",
      source: "https://github.com/wadith027/Luftwaffe-1940",
      description: "“Luftwaffe 1940” is an old school arcade style game based on the World War 2",
      title: "Luftwaffe 1940"
  },
  {
      image: "/img/virtual_drumkit.png",
      source: "https://github.com/wadith027/Virtual-Drum-Kit/tree/master",
      demo: "https://wadith-drumkit.netlify.app/",
      description: "A virtual drum kit. where you can press some button and create drum noises",
      title: "Virtual Drumkit"
  },
  {
      image: "/img/simon_2.png",
      source: "https://github.com/wadith027/Simons-Game",
      demo: "https://simon-wadith-app.netlify.app/",
      description: "A traditional simple simons game",
      title: "Simons"
  },
  {
      image: "/img/dictionIO.png",
      source: "https://github.com/wadith027/DictionIO",
      demo: "https://dictionio.netlify.app/",
      description: "A Dictionary App with Perfect Hashing Feature Ensuring Minimal Collission and Fast Access Time",
      title: "DictionIO"
  },
];

const Portfolio = () => {
  return (
    <section className="py-8 px-10 lg:px-20 xl:30 2xl:px-56">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12"> {/* Adjusted the grid-cols */}
          {projects.map((project, index) => (
            <div key={index} className="shadow-lg rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300 hover:bg-gray-200">
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{project.title}</h2>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <div className="flex justify-center gap-8">
                  <Link href={project.demo} target="_blank">
                    <button className="flex items-center gap-2 text-white bg-gray-500 hover:bg-gray-800 px-4 py-2 rounded-full transition duration-300 ease-in-out">
                      <FaGlobeAmericas className="w-5 h-5" />
                      Live
                    </button>
                  </Link>
                  <Link href={project.source} target="_blank">
                    <button className="flex items-center gap-2 text-white bg-purple-600 hover:bg-purple-800 px-4 py-2 rounded-full transition duration-300 ease-in-out">
                      <FaGithub className="w-5 h-5" />
                      Code
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>

  )
}

export default Portfolio