// /src/components/Navbar.jsx

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 fixed top-0 w-full z-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-gray-300">
          <a href="#home" className="hover:text-teal-400 transition-colors">
            Home
          </a>
        </div>
        <div className="space-x-6">
          <a
            href="#about"
            className="text-gray-300 hover:text-teal-400 transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-gray-300 hover:text-teal-400 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-teal-400 transition-colors"
          >
            Contact
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-teal-400 transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
