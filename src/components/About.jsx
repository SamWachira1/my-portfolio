"use client";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center py-20 px-8 bg-gradient-to-r from-blue-900 via-purple-800 to-pink-700 text-white"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Side - About Me */}
        <div className="md:w-1/2 flex flex-col items-center mb-8 md:mb-0">
          <h2 className="text-center text-5xl font-extrabold mb-6">About Me</h2>
          <p className="text-lg max-w-prose mb-8 text-center">
            I am a full-stack developer with a passion for creating beautiful and functional user experiences. My expertise spans across various technologies and frameworks, enabling me to build seamless and efficient web applications. Whether it's front-end design or back-end logic, I enjoy tackling new challenges and continuously improving my skills.
          </p>
          <a
            href="#contact"
            className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg transition-transform transform hover:scale-105"
          >
            Contact Me
          </a>
        </div>

        {/* Right Side - Tech Stack */}
        <div className="md:w-1/2 flex flex-col items-center mb-16">
          <h2 className="text-5xl font-extrabold mb-6">Tech Stack</h2> {/* Adjusted font size and alignment */}
          <div className="overflow-hidden w-full">
            {/* First Row */}
            <div className="flex gap-3 animate-carousel-right my-4 justify-center">
              <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" className="w-[100px] h-[30px]" />
              <img src="https://img.shields.io/badge/python-%233776AB.svg?style=for-the-badge&logo=python&logoColor=white" alt="Python" className="w-[100px] h-[30px]" />
              <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" className="w-[100px] h-[30px]" />
              <img src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" alt="Redux" className="w-[100px] h-[30px]" />
              <img src="https://img.shields.io/badge/express.js-%23000000.svg?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" className="w-[100px] h-[30px]" />
            </div>

            {/* Second Row */}
            <div className="flex gap-3 animate-carousel-left my-4 justify-center">
              <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" className="w-[100px] h-[30px]" />
              <img src="https://img.shields.io/badge/sequelize-%235993d8.svg?style=for-the-badge&logo=sequelize&logoColor=white" alt="Sequelize" className="w-[100px] h-[30px]" />
              <img src="https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white" alt="Flask" className="w-[100px] h-[30px]" />
              <img src="https://img.shields.io/badge/sql-%23000000.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="SQL" className="w-[100px] h-[30px]" />
              <img src="https://img.shields.io/badge/tailwindcss-%2338b2ac.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" className="w-[100px] h-[30px]" />
            </div>

            {/* Third Row */}
            <div className="flex gap-3 animate-carousel-right my-4 justify-center">
              <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" className="w-[100px] h-[30px]" />
              <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" className="w-[100px] h-[30px]" />
              <img src="https://img.shields.io/badge/WebSocket.io-%23000000.svg?style=for-the-badge&logo=socket.io&logoColor=white" alt="WebSocket.io" className="w-[100px] h-[30px]" />
              <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" alt="Git" className="w-[100px] h-[30px]" />
              <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" className="w-[100px] h-[30px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
