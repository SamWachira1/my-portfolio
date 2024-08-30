"use client";

import ProjectCard from './ProjectCard.jsx';

export default function Projects() {
  const projects = [
    {
      title: "hYpercomm",
      description: "Welcome to HyperComm, your streamlined and efficient alternative to Discord. Designed with simplicity and performance in mind, HyperComm enables users to create and manage servers and channels effortlessly. Dive into seamless communication and foster vibrant communities with ease.",
      embedUrl: "https://lottie.host/embed/fab29e03-26fe-4251-83c1-0f7a6e5b654d/EpJgNopya6.json",
      link: "https://hypercomm.onrender.com/"
    },
    {
      title: "EquiFlow",
      description: "Welcome to EquiFlow, your comprehensive solution for managing and tracking your stock investments. EquiFlow is designed with a focus on simplicity and efficiency, enabling you to effortlessly navigate through your portfolio, track your favorite stocks, and make informed investment decisions. Dive into the world of stock trading and portfolio management with ease, using features tailored to enhance your trading experience.",
      embedUrl: "https://lottie.host/embed/366e7c78-4562-44b8-bb63-0d82944ba7a3/PmjNnmdYM4.json",
      link: "https://equiflow.onrender.com/"
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center py-20 px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white"
    >
      <div className="container mx-auto text-center max-w-4xl"> {/* Limited max-width */}
        <h2 className="text-5xl font-extrabold mb-12">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-items-center"> {/* Reduced gap */}
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              embedUrl={project.embedUrl}
              link={project.link}
              className="w-full sm:max-w-sm" 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
