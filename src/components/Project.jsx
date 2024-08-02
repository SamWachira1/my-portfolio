"use client";

import ProjectCard from './ProjectCard.jsx';

export default function Projects() {
  // Example project data
  const projects = [
    {
      title: "Project One",
      description: "A brief description of Project One.",
      image: "/path/to/image1.jpg",
      link: "#"
    },
    {
      title: "Project Two",
      description: "A brief description of Project Two.",
      image: "/path/to/image2.jpg",
      link: "#"
    },
    // Add more projects as needed
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center py-20 px-8 bg-primary text-white"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-6">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
