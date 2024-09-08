
import Link from 'next/link';
import { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { faMicrochip,  faBook, faChess, faPlane, faCamera, faDumbbell, faRunning, faGamepad, faFilm, faGuitar, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import {
  faCode,               // General programming
  faDatabase,           // Database
  faCog,                // Tools and frameworks
  faBrain,              // AI/ML
  faCloud,              // Cloud services
  faChartLine,          // Analytics tools'
  
} from '@fortawesome/free-solid-svg-icons';

import {
  faHtml5,              // HTML
  faCss3Alt,            // CSS
  faNodeJs,             // NodeJS
  faReact,              // ReactJS
  faPython,             // Python
  faJava,               // Java
  faJsSquare,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

export const metadata: Metadata = {
  title: 'Shadman Wadith | About',
  description: 'Learn more about Shadman Wadith, a full-stack developer specializing in React, Next.js and FastAPI. He is a lecturer of Department of CSE, Brac University',
  openGraph: {
    title: 'Shadman Wadith | About',
    description: 'Learn more about Shadman Wadith, a full-stack developer specializing in React, Next.js and FastAPI. He is a lecturer of Department of CSE, Brac University',
    url: 'https://www.shadmanwadith.xyz/about',
  },
  alternates: {
    canonical: 'https://www.shadmanwadith.xyz/about', 
  },
};

// Define the type for icons
type SkillIconKeys =
  | 'faCode'
  | 'faDatabase'
  | 'faCog'
  | 'faMicrochip'
  | 'faBrain'
  | 'faHtml5'
  | 'faCss3Alt'
  | 'faNodeJs'
  | 'faReact'
  | 'faPython'
  | 'faJava'
  | 'faJsSquare'
  | 'faGithub'
  | 'faCloud'
  | 'faBook'
  | 'faChartLine';
  const skillIcons: Record<SkillIconKeys, any> = {
    faCode,
    faDatabase,
    faCog,
    faMicrochip,
    faBrain,
    faHtml5,
    faCss3Alt,
    faNodeJs,
    faReact,
    faPython,
    faJava,
    faJsSquare,
    faCloud,
    faBook,
    faChartLine,
    faGithub
  };
  const technicalSkills = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', icon: 'faPython' },
        { name: 'C/C++', icon: 'faCode' },
        { name: 'Java', icon: 'faJava' },        
        { name: 'JavaScript', icon: 'faJsSquare' }
      ]
    },
    {
      category: 'Framework & Tools',
      skills: [
        { name: 'FastAPI', icon: 'faPython' },
        { name: 'NodeJS', icon: 'faNodeJs' },
        { name: 'NextJS', icon: 'faReact' },
        { name: 'Django', icon: 'faCog' },
        { name: 'Flask', icon: 'faCog' },
        { name: 'TailwindCSS', icon: 'faCss3Alt' },
        { name: 'Git', icon: 'faGithub' },
        { name: 'Jupyter Notebook', icon: 'faBook' },
        { name: 'Flutter', icon: 'faCode' },
        { name: 'AWS', icon: 'faCloud' }
      ]
    },
    {
      category: 'Database',
      skills: [
        { name: 'MongoDB', icon: 'faDatabase' },
        { name: 'PostgreSQL', icon: 'faDatabase' },
        { name: 'MySQL', icon: 'faDatabase' },
        { name: 'SQLite', icon: 'faDatabase' },
        { name: 'Redis', icon: 'faDatabase' }
      ]
    },
    {
      category: 'ML Toolkit',
      skills: [
        { name: 'PyTorch', icon: 'faBrain' },
        { name: 'TensorFlow', icon: 'faBrain' },
        { name: 'NumPy', icon: 'faChartLine' },
        { name: 'Pandas', icon: 'faChartLine' },
        { name: 'Scikit-Learn', icon: 'faChartLine' },
        { name: 'Matplotlib', icon: 'faChartLine' }
      ]
    }
  ];
  

const ProfilePicture = () => {
  return (
    <Image 
      src="/selfAbout.jpg" 
      alt="Profile picture of Shadman Wadith" 
      className="bg-white-100 rounded-full p-3 shadow-lg" 
      width={320} 
      height={320}/>
  )
}
const workExperiences = [
    {
      position: "Lecturer",
      company: "Brac University",
      years: "Sep, 2024 - Present",
    },
    {
      position: "Lecturer",
      company: "Green University of Bangladesh",
      years: "Feb, 2023 - Sep, 2024",
      responsibilities: [
        "Core Committee Member of the Curriculum Development of AI & Data Science Department",
        "General Secretary of Community and Outreach Board",
        // eslint-disable-next-line react/jsx-key
        <span><strong>Courses Taught: </strong> Algorithms, Structured Programming, Cloud Computing, Database Systems, Computer Networking, Mobile Application Development, Digital Logic Design Lab, Engineering Drawing Lab</span>
      ]
    },
    {
      position: "Full-Stack Developer",
      company: "Inceptus Tech",
      years: "July, 2024 - Present",
      responsibilities: [
        "Developed a full-featured SaaS application that enables users to upload and extract information from various types of files (e.g., PDF, CSV, images) using advanced parsing and machine learning techniques.",
        "Led the entire development lifecycle from design and backend infrastructure (FastAPI) to frontend integration (Next.js).",
        "Collaborated with a cross-functional team to ensure smooth deployment and continuous improvement of the product."
      
      ]
    },
    {
      position: "Full-Stack Developer",
      company: "Crantech LLC",
      years: "Feb, 2023 - July, 2024",
      responsibilities: [
        "Designed and implemented the backend infrastructure using NodeJS to manage data and API integrations.",
        "Developed the frontend using ReactJS to create an interactive and user-friendly interface for the TV ad project.",
        "Built and optimized the Android application to ensure seamless integration and functionality across different devices.",
        "Collaborated with the design team to create a visually appealing and engaging user experience."
      ]
    }
  ];
  const education = [
    {
      degree: "M.Sc. in Computer Science and Engineering",
      institution: "University of Dhaka",
      years: "2023 - 2024",
      description: "CGPA: 3.92/4.00(2nd Position)"
    },
    {
      degree: "B.Sc. in Computer Science and Engineering",
      institution: "University of Dhaka",
      years: "2018 - 2022",
      description: "CGPA: 3.66/4.00(3rd Position)"
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Dhaka City College",
      years: "2017",
      description: "GPA: 5.00/5.00(General Board Scholarship)"
    },
    {
      degree: "Secondary School Certificate",
      institution: "Ideal School and College",
      years: "2015",
      description: "GPA: 5.00/5.00"
    }
  ];
  type HobbyIconKeys = 'faMicrochip' | 'faBook' | 'faChess' | 'faPlane' | 'faGamepad' | 'faCamera' | 'faRunning' | 'faFilm' | 'faGuitar' | 'faDumbbell';

  // Define a mapping of icons
  const hobbyIcons: Record<HobbyIconKeys, IconDefinition> = {
    faMicrochip,
    faBook,
    faChess,
    faPlane,
    faCamera,
    faRunning,
    faFilm,
    faGuitar,
    faDumbbell,
    faGamepad
  };
  const hobbies = [
    { name: "Workout", icon: 'faDumbbell' },
    { name: "Running", icon: 'faRunning' },
    { name: "Gaming", icon: 'faGamepad' },
    { name: "Movies", icon: 'faFilm' },
    { name: "Guitar", icon: 'faGuitar' }
  ];
  // achievementsData.js

const achievements = [
  {
    title: "Best Thesis Award",
    description: "Undergraduate Thesis/Project Final Presentation, University of Dhaka",
    year: "2021"
  },
  {
    title: "ICT Fellowship Research Grant",
    description: "Funded by ICT Division, Govt. of Bangladesht",
    year: "2024"
  },
  {
    title: "4th Position",
    description: "Code Samurai Hackathon",
    year: "2022"
  },
  {
    title: "Campus Semi-Finalist",
    description: "Hult Prize",
    year: "2019"
  },
  {
    title: "24th Position",
    description: "Battle of Brains Programming Contest",
    year: "2019"
  },
  {
    title: "18th Position",
    description: "Flag Hunt",
    year: "2022"
  }
];

  
const About = () => {
  return (
    <div className="container mx-auto md:px-0 lg:px-10 xl:px-72  py-8">
      {/* Introduction Section */}
      <section>
        
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 md:gap-20 text-justify">
          {/* picture of me */}
            <ProfilePicture />
          {/* little bio */}
          <div className='lg:px-2 sm: px-20'>
            <h1 className="text-4xl font-bold mb-4">About Me!</h1>
            <p className='text-base mb-6'>
             Hello, I'm  Shadman Wadith. I graduated from the Department of CSE, {' '}
             <Link
                href="https://du.ac.bd/body/CSE"
                target="_blank"
                className="text-purple-600 hover:text-purple-700 transition-all duration-200"
              >
                University of Dhaka 
               </Link>.{' '}
               {/* https://cse.sds.bracu.ac.bd/ */}
               Currently, I am working as a <b>lecturer</b> at the Department of Computer Science and Engineering, {' '}
               <Link
                href="https://du.ac.bd/body/CSE"
                target="_blank"
                className="text-purple-600 hover:text-purple-500 transition-all duration-200"
              >
                Brac University
               </Link>
               . Also, I am in the final semester of my Master, which I am pursuing at the Department of CSE, University of Dhaka. I specialize in <b>Reinforcement Learning</b>, <b>Computer Vision</b> and <b>Natural Language Processing</b>. Alongside my academic role, I am also a full-stack developer with expertise in FastAPI, NextJS, and NodeJS. I'm passionate about problem-solving, exploring new technologies, and gaming. A fast learner by nature, I thrive on continuously expanding my knowledge and taking on new challenges.
               </p>
        </div>
      </div>
      </section>
      

      {/* Work Experience Section */}
      <section className="mt-16 px-20">
        <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>
        <div className="flex flex-col relative">
          
          {/* Vertical timeline line */}
          <div className="absolute left-4 top-0 h-full w-1 bg-gray-300"></div>

          {/* Timeline items */}
          {workExperiences.map((experience, index) => (
            <div key={index} className="flex items-start mb-8">
              {/* Dot indicator */}
              <div className="flex-shrink-0 w-4 h-4 left-2.5 bg-gray-400 border-4 border-gray-700 rounded-full relative z-10"></div>
              <div className="ml-8">
                <h3 className="text-xl font-semibold">{experience.company}</h3>
                <p className="text-lg text-gray-600 font-semibold">{experience.position}</p>
                <p className="text-sm text-gray-500">{experience.years}</p>
                {experience.responsibilities && 
                
                  <ul className="list-disc list-inside mt-2 text-gray-800 text-sm">
                        {experience.responsibilities.map((responsibility, idx) => (
                          
                          <li key={idx} className=" flex items-start space-x-4">                          
                            <div className="flex-shrink-0 w-2 h-2 bg-gray-400 border-2  rounded-full mt-1.5"></div>
                            <div className="text-left">
                              {responsibility}  
                            </div>
                          </li>
                        ))}
                  </ul>
                }
                
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Education Section */}
      <section className="mt-16 px-20">
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
        <div className="flex flex-col relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 top-0 h-full w-1 bg-gray-300"></div>

          {/* Timeline items */}
          {education.map((edu, index) => (
            <div key={index} className="flex items-start mb-8">
              {/* Dot indicator */}
              <div className="flex-shrink-0 left-2.5 w-4 h-4 bg-gray-400 border-4 border-gray-700 rounded-full relative z-10"></div>
              <div className="ml-8">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-lg text-gray-500">{edu.institution} | {edu.years}</p>
                <p className="text-sm mt-2 text-gray-500">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Achievement Section */}
      <section className="py-8 px-8 sm:px-6 lg:py-18 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Achievements
          </h2>
          <p className="mt-4 px-4 text-lg text-gray-500">
            Some of the milestones I have achieved in my academic and professional journey.
          </p>
        </div>

        <div className="mt-10 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Map over the achievements data */}
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gray-50 py-4 px-10 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-gray-500">{achievement.title}</h3>
              <p className="mt-2 text-gray-700 text-sm ">{achievement.description}, {achievement.year}</p>
            </div>
          ))}
        </div>
      </section>   
      {/* Technical Skills Section */}
      <section className="mt-16 px-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Technical Skills</h2>
        {technicalSkills.map((category, idx) => (
          <div key={idx} className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">{category.category}</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.skills.map((skill, index) => (
                <li key={index} className="flex items-center p-4 bg-white shadow-md rounded-lg hover:bg-gray-100 transition-all duration-300">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full mr-4">
                    <FontAwesomeIcon icon={skillIcons[skill.icon as SkillIconKeys]} className="text-gray-600 w-6 h-6" />
                  </div>
                  <span className="text-lg font-medium text-gray-800">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>


      {/* Hobbies Section */}
      <section className="mt-16 px-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Hobbies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 hover:bg-gray-100 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gray-200 text-gray-600 rounded-full mb-4">
                <FontAwesomeIcon icon={hobbyIcons[hobby.icon as HobbyIconKeys]} className="w-8 h-8" />
              </div>
              <span className="text-lg font-semibold text-gray-800">{hobby.name}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
    

  );
}

export default About;

