'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import Typed from 'typed.js';
import { FaGithub, FaLinkedinIn, FaInstagram, FaBehance} from 'react-icons/fa';

const HeroSection: React.FC = () => {
  useEffect(() => {
    const options = {
      strings: ['Web Developer', 'Filmmaker'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    };
    const typed = new Typed('#Multiple-text', options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id='hero' className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 mx-auto xl:w-[80%] ">
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <h3 className="text-lg font-semibold mb-2">Hello, It&apos;s Me</h3>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Maaref<br /> Mohamed Abdelaziz
        </h1>
        <h3 className="text-2xl font-medium mb-4">
          And I&apos;m a <span id="Multiple-text" className="text-primary"></span>
        </h3>
        <p className="text-base mb-6">
          Thank you for visiting my website! I&apos;m excited to share my work with you and hope you find something that interests you. If you have any questions or comments, please don&apos;t hesitate to reach out. I&apos;m always happy to help. Thanks again for stopping by!
        </p>
        <div className="flex gap-4 mb-6">
        <a href="https://github.com/aziz-maaref" aria-label="GitHub" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/aziz-maaref-86863023b/" aria-label="LinkedIn" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
            <FaLinkedinIn size={24} />
          </a>
          <a href="https://www.instagram.com/aziz_maaref_/" aria-label="Instagram" className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.behance.net/azizomohamed" aria-label="Behance" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
    <FaBehance size={24} />
          </a>
        </div>
        <a href="Maaref_Abdelaziz_cv.pdf" className="inline-block px-6 py-3 bg-primary text-white hover:text-primary font-semibold rounded-lg shadow-md hover:bg-white transition duration-300">
          Download CV
        </a>
      </div>
      <div className="mt-8 md:mt-0">
  <Image
    src="/img/aziz1.jpg"
    alt="Aziz Maaref"
    width={500}
    height={500}
    className="max-w-xs mr-[-20px] shadow-[0_0_10px_goldenrod] font-semibold rounded-[80px] opacity-0 animate-zoomInAndFloat"
  />
</div>
    </section>
  );
};

export default HeroSection;
