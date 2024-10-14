'use client';

import React from 'react';
import projects from '@/../public/data'; // Ensure this path is correct
import { CldImage } from 'next-cloudinary';
import { motion } from 'framer-motion';

function Project() {
  return (
    <div id='project'>
      {/* Projects section design */}
      <section className="portfolio mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Latest <span className="text-primary">Projects</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="portfolio-box border-4  border-gray-500 hover:border-primary shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <CldImage
                src={project.imgSrc}
                alt={project.title}
                width={400}
                height={300}
                className="object-cover w-full h-48"
              />
              <div className="portfolio-layer p-6">
                <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-flex items-center px-4 py-2 text-white hover:text-white bg-primary hover:bg-gray-500 rounded hover:bg-primary-dark transition-colors duration-300"
                >
                  View Project
                  <i className="bx bx-link-external ml-2"></i>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Project;
