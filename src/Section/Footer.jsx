import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-[#0b1116] border-t border-gray-800 py-8">
      <div className="container mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Left */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              <span className="text-[#20b2a6]"></span>
            </h2>

            <p className="text-gray-400 mt-2 text-sm">
              Frontend Developer | React.js | Tailwind CSS
            </p>
          </div>

          {/* Center */}
          <div className="flex gap-8 text-gray-400">
            <a href="#about" className="hover:text-[#20b2a6] transition">
              About
            </a>

            <a href="#projects" className="hover:text-[#20b2a6] transition">
              Projects
            </a>

            <a href="#experience" className="hover:text-[#20b2a6] transition">
              Experience
            </a>

            <a href="#contact" className="hover:text-[#20b2a6] transition">
              Contact
            </a>
          </div>

          {/* Right */}
          <div className="flex gap-4">
            <a
              href="https://github.com/kalpana-4321"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#20b2a6] text-2xl transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/kalpana-bhandari-154126306"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#20b2a6] text-2xl transition"
            >
              <FaLinkedin />
            </a>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} KalaDevi Rishidev. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};