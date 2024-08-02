"use client";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white">
      <h1 className="text-5xl font-bold mb-6">Hello, I'm Samuel Wachira</h1>
      <TypeAnimation
        sequence={[
          'Full Stack Developer',
          2000,
          'Senior Technical Recruiter',
          2000,
          'I love building and learning',
          2000,
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        className="text-2xl mb-8"
      />
      <div>
        <a href="#about" className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg mr-4">
          Learn More
        </a>
        <a href="#contact" className="border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white px-6 py-3 rounded-lg">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Hero;
