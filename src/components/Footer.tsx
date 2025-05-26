import React from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container-section">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Logo and Description */}
          <div>
            <a href="#home" className="text-2xl font-bold">
              Mahamudul<span className="text-teal-400">.Dev</span>
            </a>
            <p className="mt-4 text-slate-400">
              SQA Engineer & Web Developer
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2">
            <div>
              <h4 className="text-lg font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-slate-400 hover:text-teal-400 transition-colors">Home</a>
                </li>
                <li>
                  <a href="#about" className="text-slate-400 hover:text-teal-400 transition-colors">About</a>
                </li>
                <li>
                  <a href="#skills" className="text-slate-400 hover:text-teal-400 transition-colors">Skills</a>
                </li>
                <li>
                  <a href="#experience" className="text-slate-400 hover:text-teal-400 transition-colors">Experience</a>
                </li>
                <li>
                  <a href="#projects" className="text-slate-400 hover:text-teal-400 transition-colors">Projects</a>
                </li>
                <li>
                  <a href="#contact" className="text-slate-400 hover:text-teal-400 transition-colors">Contact</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Social</h4>
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com/in/mahamudul-asif" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="https://github.com/mahamudul-asif" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors"
                >
                  <Github size={18} />
                </a>
                <a 
                  href="https://twitter.com/mahamudul_asif" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center py-6 border-t border-slate-800">
          <p className="text-slate-400">
            &copy; {new Date().getFullYear()} Mahamudul Hasan Asif. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;