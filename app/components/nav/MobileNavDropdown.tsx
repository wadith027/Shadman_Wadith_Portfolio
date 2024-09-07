"use client"

import React, { useEffect, useState } from 'react';
import { navLinks } from './Navbar';
import Link from 'next/link';

const HamburgerDropdownIcon = ({ toggleDropdown }: { toggleDropdown: () => void }) => {
  return (
    <button onClick={toggleDropdown} className="p-2 text-gray-700 hover:text-purple-600 transition-all duration-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h8m-8 6h16" />
      </svg>
    </button>
  );
};

const MobileNavDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdownMenu = document.getElementById('dropdown-menu');
      const button = document.getElementById('dropdown-button');
      if (dropdownMenu && !dropdownMenu.contains(event.target as Node) && button && !button.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative md:hidden">
      <div id="dropdown-button">
        <HamburgerDropdownIcon toggleDropdown={toggleDropdown} />
      </div>
      <div className={`fixed left-0 top-20 z-50 w-56 transform transition-all duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} origin-top-right`}>
        <ul
          id="dropdown-menu"
          className=" bg-white rounded-lg shadow-lg overflow-hidden transition-all ease-in-out duration-300"
          style={{ boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)' }}
        >
          {navLinks.filter(link => link.mobile).map((link, index) => (
            <li key={index} onClick={() => setIsOpen(false)}>
              <Link
                href={link.href}
                className="block text-gray-700 py-3 px-5 hover:bg-purple-100 hover:text-purple-600 transition-all duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileNavDropdown;
