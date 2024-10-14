/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useState } from 'react';
import { FaCode, FaVideo } from 'react-icons/fa';
import styles from './Service.module.css';
import Modal from './Modal';

const Service: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentService, setCurrentService] = useState<string | null>(null);

  const handleReadMoreClick = (service: string) => {
    setCurrentService(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentService(null);
  };

  return (
    <section id="services" className="py-16 px-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 w-[90%] mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Our <span className="text-primary">Services</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
        <div
          className={`${styles.servicesBox} p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col items-center`}
        >
          <FaCode size={32} className="text-primary mb-4" />
          <h3 className="text-2xl font-semibold mb-2 text-center">Web Development</h3>
          <button
            onClick={() => handleReadMoreClick('Web Development')}
            className="btn inline-block px-6 py-2 bg-primary text-white hover:text-primary font-semibold rounded-lg shadow-md hover:bg-white transition duration-300"
          >
            Read More
          </button>
        </div>
        <div
          className={`${styles.servicesBox} p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col items-center`}
        >
          <FaVideo size={32} className="text-primary mb-4" />
          <h3 className="text-2xl font-semibold mb-2 text-center">Filmmaker</h3>
          <button
            onClick={() => handleReadMoreClick('Filmmaker')}
            className="btn inline-block px-6 py-2 bg-primary text-white hover:text-primary font-semibold rounded-lg shadow-md hover:bg-white transition duration-300"
          > 
            Read More
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={modalOpen} onClose={closeModal} title={currentService ?? ''}>
        {currentService === 'Web Development' && (
          <p>
            Our expert web development team creates responsive and user-friendly websites tailored to meet your business needs. From e-commerce platforms to content management systems, we've got you covered. Whether you need a brand-new website or enhancements to your existing one, we are here to make your online presence stand out. For more, contact us.
          </p>
        )}
        {currentService === 'Filmmaker' && (
          <p>
            Our filmmaking team specializes in creating compelling videos that engage and captivate your audience. Whether it's a promotional video, documentary, or event coverage, we bring your narrative to life. Through the lens, we turn your ideas into visual masterpieces. Let us help you share your story in a way that leaves a lasting impression on your viewers. For more, contact us.
          </p>
        )}
      </Modal>
    </section>
  );
};

export default Service;
