import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  skills: string[];
  link: string;
  category: 'testing' | 'development';
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'testing' | 'development'>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'AmaderHR Test',
      description: 'Developed comprehensive test plans, test cases, manual testing and automated test scripts for a HR management platform.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      skills: ['Selenium', 'Manual Testing', 'API Testing', 'Test case'],
      link: 'https://github.com/MH-Asif007/AmaderHR',
      category: 'testing'
    },
    {
      id: 2,
      title: 'AmaderEMS Test',
      description: 'Developed comprehensive test plans, test cases, manual testing and automated test scripts for an Education Management System platform.',
      image: 'https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      skills: ['Python', 'Selenium', 'Jmeter', 'Manual Testing', 'Test Case'],
      link: 'https://github.com/MH-Asif007/EMS_Test',
      category: 'testing'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Designed and developed a responsive portfolio website using modern web technologies and best practices for performance and accessibility.',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      skills: ['React', 'Tailwind CSS', 'TypeScript'],
      link: 'https://github.com/MH-Asif007/MH-Asif_Portfolio',
      category: 'development'
    },
    {
      id: 4,
      title: 'Phramacy Management System',
      description: 'Built a full-stack pharmacy management application with features like inventory and e-commerce.',
      image: 'https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      skills: ['PHP', 'Javascript', 'MySQL','Bootstrap', 'HTML', 'Responsive CSS'],
      link: 'https://github.com/MH-Asif007/Pharmacy_management_System',
      category: 'development'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="bg-white">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="section-title">My Projects</h2>
          <span className="section-title-line"></span>
          <p className="max-w-2xl mx-auto mt-6 text-slate-600">
            Explore some of my recent work and projects that showcase my testing and development skills
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <button 
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              filter === 'all' 
                ? 'bg-teal-600 text-white' 
                : 'text-slate-600 hover:text-teal-600'
            }`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              filter === 'testing' 
                ? 'bg-teal-600 text-white' 
                : 'text-slate-600 hover:text-teal-600'
            }`}
            onClick={() => setFilter('testing')}
          >
            Testing
          </button>
          <button 
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              filter === 'development' 
                ? 'bg-teal-600 text-white' 
                : 'text-slate-600 hover:text-teal-600'
            }`}
            onClick={() => setFilter('development')}
          >
            Development
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="group card overflow-hidden hover:-translate-y-2 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.skills.map(skill => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;