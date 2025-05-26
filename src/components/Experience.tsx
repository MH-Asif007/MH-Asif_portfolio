import React from 'react';
import { Calendar, BookOpen } from 'lucide-react';

interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'education' | 'training';
}

const Experience: React.FC = () => {
  const timelineItems: TimelineItem[] = [
    {
      id: 1,
      title: 'BSc in Computer Science and Engineering',
      organization: 'International University of Business Agriculture and Technology (IUBAT)',
      period: '2020 - Present',
      description: 'Currently pursuing BSc in CSE with a CGPA of 3.65. Focusing on software engineering principles, algorithms, and quality assurance methodologies.',
      type: 'education'
    },
    {
      id: 2,
      title: 'SQA Training',
      organization: 'EDGE under ICT Division Bangladesh',
      period: 'October 2024 - May 2025',
      description: 'Comprehensive training in software quality assurance methodologies, covering manual testing, automation, performance, and security testing practices.',
      type: 'training'
    },
    {
      id: 3,
      title: 'Full Stack Web Development Training',
      organization: 'Shikhbe Shobai Institute',
      period: '2022',
      description: 'Intensive training program focusing on front-end and back-end web development technologies including HTML, CSS, JavaScript, PHP, and related frameworks.',
      type: 'education'
    }
  ];

  return (
    <section id="experience" className="bg-white">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="section-title">Education & Training</h2>
          <span className="section-title-line"></span>
          <p className="max-w-2xl mx-auto mt-6 text-slate-600">
            My educational journey and professional training that have shaped my expertise in software quality assurance and development.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 transform md:translate-x-0 translate-x-12"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div 
                key={item.id} 
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-12 md:left-1/2 w-6 h-6 bg-teal-600 rounded-full transform -translate-x-3 md:-translate-x-3 border-4 border-white z-10"></div>
                
                {/* Content */}
                <div className="pl-20 md:pl-0 md:w-1/2 md:px-10">
                  <div className={`card ${
                    item.type === 'education' ? 'border-l-4 border-indigo-500' : 'border-l-4 border-teal-500'
                  }`}>
                    <div className="flex items-center mb-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                        item.type === 'education' ? 'bg-indigo-100' : 'bg-teal-100'
                      }`}>
                        {item.type === 'education' ? 
                          <BookOpen size={20} className="text-indigo-600" /> : 
                          <Calendar size={20} className="text-teal-600" />
                        }
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{item.title}</h3>
                        <p className="text-slate-500 text-sm">{item.organization}</p>
                      </div>
                    </div>
                    
                    <div className="mb-3 inline-block px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">
                      {item.period}
                    </div>
                    
                    <p className="text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {/* Empty Space for Alternating Layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;