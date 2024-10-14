/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="flex flex-col gap-16  md:flex-row items-center py-16 px-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 xl:w-[90%] mx-auto justify-center">
      {/* Image Section */}
      <div className="flex mx-auto  mb-8 md:mb-0 xl:w-[60%]">
        <Image 
          src="/img/azizvector.jpg" 
          alt="Aziz Vector" 
          width={200} 
          height={200} 
          className="mx-auto md:mr-0 max-w-xs md:max-w-md rounded-full shadow-lg animate-floatImage" 
        />
      </div>
      
      {/* About Content */}
      <div className=" text-center md:text-left">
        <h2 className="text-4xl font-bold mb-4">
          About <span className="text-yellow-500">Me</span>
        </h2>
        <h3 className="text-2xl font-semibold mb-4">Full-Stack Developer</h3>
        <p className="text-base mb-6">
    
        Hello! My name is Mohamed Abdelaziz, and I am a Full-Stack Developer from Tunisia. With over three years of experience, I am passionate about developing robust and innovative web solutions. I specialize in both front-end and back-end technologies, particularly in frameworks like <strong>Next.js</strong>, <strong>Django</strong>, and <strong>Symfony</strong>. I also have a strong grasp of design tools like <strong>Figma</strong>, and I'm proficient in <strong>Linux</strong> environments, along with a keen interest in <strong>Cybersecurity</strong>. I am constantly exploring new ways to refine my skills and deliver high-quality solutions for my clients. Whether working independently or collaborating with a team, I am committed to achieving excellence and helping businesses meet their goals. I'm excited to continue growing and making meaningful contributions to the tech community.
        </p>
        <a 
          href="#" 
          className="inline-block px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300 transform hover:scale-105"
        >
          Read More
        </a>
      </div>
    </section>
  );
};

export default About;
