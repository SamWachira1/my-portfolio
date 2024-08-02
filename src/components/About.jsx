"use client";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center py-20 px-8 bg-gradient-to-r from-blue-900 via-purple-800 to-pink-700 text-white"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-6">About Me</h2>
        <p className="text-lg max-w-prose mx-auto mb-8">
          I am a full-stack developer with a passion for creating beautiful and functional user experiences. My expertise spans across various technologies and frameworks, enabling me to build seamless and efficient web applications. Whether it's front-end design or back-end logic, I enjoy tackling new challenges and continuously improving my skills.
        </p>
        <a
          href="#contact"
          className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg transition-transform transform hover:scale-105 mr-4"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
