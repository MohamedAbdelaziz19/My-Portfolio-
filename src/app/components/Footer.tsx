'use client';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaInstagram, FaBehance } from 'react-icons/fa';
import { CldImage } from 'next-cloudinary';

const Footer = () => {
  return (
    <footer className="text-white bg-gray-900">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <CldImage
            src="https://res.cloudinary.com/dzo2bvw5a/image/upload/v1723116603/profileImage_npkuum.jpg"
            alt="Profile"
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
        </div>
        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-400">
          I am Maaref Abdelaziz, a Full-Stack Developer passionate about crafting innovative and efficient web solutions. I have a solid foundation in both front-end and back-end technologies, working with modern frameworks and libraries.
        </p>

        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li>
            <Link href="#hero" className="text-gray-400 transition hover:text-yellow-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="text-gray-400 transition hover:text-yellow-500">
              About
            </Link>
          </li>
          <li>
            <Link href="#services" className="text-gray-400 transition hover:text-yellow-500">
              Services
            </Link>
          </li>
          <li>
            <Link href="#project" className="text-gray-400 transition hover:text-yellow-500">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-gray-400 transition hover:text-yellow-500">
              Contact
            </Link>
          </li>
        </ul>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <a href="https://github.com/aziz-maaref" aria-label="GitHub" className="text-gray-400 hover:text-gray-900">
              <FaGithub size={24} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/aziz-maaref-86863023b/" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-600">
              <FaLinkedinIn size={24} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/aziz_maaref_/" aria-label="Instagram" className="text-gray-400 hover:text-pink-600">
              <FaInstagram size={24} />
            </a>
          </li>
          <li>
            <a href="https://www.behance.net/azizomohamed" aria-label="Behance" className="text-gray-400 hover:text-blue-600">
              <FaBehance size={24} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
