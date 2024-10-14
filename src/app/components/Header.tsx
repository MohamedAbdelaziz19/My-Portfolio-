"use client";

import { useState } from 'react';
import Link from 'next/link'; 

import DarkMode from './DarkMode/DarkMode';
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
          <p className="text-2xl font-bold cursor-pointer">
          AZIZ<span className="text-primary">MAAREF</span>
          </p>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          <Link href="#home">
            <p className="hover:text-primary">Home</p>
          </Link>
          <Link href="#about">
            <p className="hover:text-primary">About</p>
          </Link>
          <Link href="#services">
            <p className="hover:text-primary">Services</p>
          </Link>
          <Link href="#portfolio">
            <p className="hover:text-primary">Project</p>
          </Link>
          <Link href="#contact">
            <p className="hover:text-primary">Contact</p>
          </Link>
          <DarkMode />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none text-white">
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-2 p-4 ">
            <Link href="#home">
              <p className="hover:text-primary">Home</p>
            </Link>
            <Link href="#about">
              <p className="hover:text-primary">About</p>
            </Link>
            <Link href="#services">
              <p className="hover:text-primary">Services</p>
            </Link>
            <Link href="#portfolio">
              <p className="hover:text-primary">Project</p>
            </Link>
            <Link href="#contact">
              <p className="hover:text-primary">Contact</p>
            </Link>
            <DarkMode />
          </nav>
          
        </div>
      )}
    </header>
  );
};

export default Header;
