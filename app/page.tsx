import Link from "next/link"
import { FaFacebook, FaGithub, FaLinkedin, FaXTwitter, FaGoogleScholar } from "react-icons/fa6"

const ProfilePicture = () => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/selfAbout.jpg" alt="Profile picture of Shadman Wadith" className="h-80 w-80 bg-white-100 rounded-full p-3 shadow-lg" />
  )
}
const bioBullets = [
  {
     link: "https://en.wikipedia.org/wiki/Dhaka",
     emoji: "🏠",
     text: "Lives in Dhaka,Bangladesh",
  },
  {
     link: 'https://cse.sds.bracu.ac.bd/',
     emoji: "💼",
     text: "Lecturer at Brac University"
  },
  {
     link: "https://github.com/wadith027",
     emoji: "💻",
     text: "Full-Stack Developer"
  }
];

const BulletPoints = () => {
  return (
    <ul className="space-y-1 px-5 md:px-0 md:text-left font-sans font-normal text-lg">
      {bioBullets.map((bio, index) => (
                  <li key={index} className="hover:-translate-y-0.5">
                      <a href={bio.link} target="_blank"> {bio.emoji} {bio.text} </a>
                  </li>
              ))}
    </ul>
  )
}

const WavingHand = () => {
  return (
    <span className="animate-wave inline-block">🤚🏻</span>
  )
}

const socials = [
  {
    icon: <FaGithub />,
    href: "https://github.com/wadith027"
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/shadman-wadith-4a6376149/"
  },
  {
    icon: <FaGoogleScholar/>,
    href: "https://scholar.google.com/citations?user=DfDSSDQAAAAJ&hl=en"
  },
  {
    icon: <FaFacebook />,
    href: "https://www.facebook.com/shadman.wadith/"
  },
  {
    icon: <FaXTwitter/>,
    href: "https://x.com/wadith027"
  }
  

]

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-center pt-4 items-center gap-10 md:gap-20 px-16 mb-10">
      {/* picture of me */}
      <ProfilePicture />
      {/* little bio */}
      <div>
        <div className="text-center md:text-left mb-4 font-sans font-bold">
          <h1 className="text-4xl lg:text-5xl ">
            Hi, I'm <span className="bg-gradient-to-tl from-indigo-500 to-fuchsia-500 text-transparent bg-clip-text font-bold">Wadith</span><WavingHand />
          </h1>
          <h2 className="text-2xl lg:text-3xl">I'm a Lecturer.</h2>
        </div>
        <BulletPoints />
        {/* socials */}
        <ul className="flex justify-center md:justify-start text-3xl gap-10 mt-7">
          {socials.map((social, index) => (
            <li key={index} className="hover:scale-110 hover:-translate-y-1">
              <Link href={social.href} target="_blank">{social.icon}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
