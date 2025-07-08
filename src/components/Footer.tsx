
import React from 'react';
import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Esther Nyambura Kariuki</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Software Engineer passionate about creating impactful solutions that make a difference 
              in communities across Kenya and beyond.
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="mailto:esthernnyamburaa@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Email
            </a>
            <a 
              href="https://github.com/esthernkariuki"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a 
              href="tel:+254716088246"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Phone
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Esther Nyambura Kariuki. Built with React & Tailwind CSS.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Crafting code for real-world change, one project at a time.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
