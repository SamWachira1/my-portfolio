"use client";
import { TypeAnimation } from 'react-type-animation';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Hero = () => {
  const particlesInit = async (main) => {
    await loadFull(main); // Load all the tsParticles features
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}
      ></div>

      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
                resize: true,
              },
              modes: {
                repulse: { distance: 200, duration: 0.4 },
              },
            },
            particles: {
              color: { value: "#ffffff" },
              links: { enable: true, color: "#ffffff", distance: 150 },
              move: { enable: true, speed: 2 },
              number: { value: 50 },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
          className="w-full h-full"
        />
      </div>

      <div className="relative z-10 text-center p-5">
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
          Hello, I'm Samuel Wachira
        </h1>
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
        <div className="flex justify-center space-x-4">
          <a
            href="#about"
            className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg shadow-md transform transition duration-300 hover:scale-105"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white px-6 py-3 rounded-lg shadow-md transform transition duration-300 hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce text-teal-500">
        <a href="#next-section">↓ Scroll down</a>
      </div>
    </div>
  );
};

export default Hero;
