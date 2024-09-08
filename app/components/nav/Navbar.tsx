"use client"; // Add this to make sure the component is treated as a client component

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MobileNavDropdown from './MobileNavDropdown'
import Image from "next/image"

const Logo = ({ className }: { className?: string }) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <Image 
      alt="Shadman Wadith" 
      src="/logo.png" 
      className={`${className}`} 
      height={500}
      width={160}
      />
  )
}

export const navLinks = [
  {
    label: 'Home',
    href: '/',
    mobile: true
  },
  {
    label: 'About',
    href: '/about',
    mobile: true
  },
  {
    label: 'Projects',
    href: '/portfolio',
    mobile: true
  },
  {
    label: 'Publications',
    href: '/publications',
    mobile: true
  }
]

const Navbar = () => {
  const pathname = usePathname(); 

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-100 z-50 shadow-lg">
      <div className="w-full flex justify-between items-center p-1 lg:px-20">

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-10 text-base font-bold font-sans">
          {navLinks.map((link, index) => (
            <li key={index} className="relative">
              <Link href={link.href}>
                <span
                  className={`block py-2 px-4 transition-colors duration-300 rounded ${
                    pathname === link.href ? 'text-purple-500' : 'text-gray-800'
                  } hover:bg-gray-200`}
                >
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <div className="md:hidden flex items-center">
          <MobileNavDropdown />
        </div>

        {/* Logo */}
        <Link href="/">
          <Logo />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
