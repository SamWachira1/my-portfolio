"use client";

export default function ProjectCard({ title, description, image, link }) {
  return (
    <div className="bg-white text-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href={link}
          className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-full"
        >
          View Project
        </a>
      </div>
    </div>
  );
}
