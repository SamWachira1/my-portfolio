import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4">
      <div className="container mx-auto flex flex-col items-center">
        <div className="mb-2">
          &copy; {new Date().getFullYear()} Samuel Wachira. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/samuel-w-14794a135/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/SamWachira1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-colors"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
