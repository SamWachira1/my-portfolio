// /src/components/ProjectCard.jsx
"use client";

export default function ProjectCard({ title, description, embedUrl, image, link }) {
  return (
    <div className="bg-gray-800 bg-opacity-90 text-gray-200 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
      {embedUrl ? (
        <iframe
          src={embedUrl}
          className="w-full h-64 rounded-t-lg mt-4"
          style={{ height: '300px', maxWidth: '100%', margin: '0 auto', border: 'none' }}
        ></iframe>
      ) : (
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      )}
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-2 rounded-full transition-colors duration-300"
        >
          View Project
        </a>
      </div>
    </div>
  );
}
