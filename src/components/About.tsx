import React from 'react';
import { Clock, Award, Code, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <span className="section-title-line"></span>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="aspect-[4/5] bg-slate-100 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/5989926/pexels-photo-5989926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Professional headshot of Mahamudul Hasan Asif" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Experience Card */}
            <div className="absolute -bottom-6 -right-6 bg-teal-600 text-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold">3+</div>
              <div className="text-sm font-medium">Years of Experience</div>
            </div>
          </div>
          
          {/* Content Column */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              I'm a <span className="text-teal-600">QA Engineer</span> with a passion for ensuring software quality
            </h3>
            
            <p className="mb-6 text-slate-600">
              I specialize in comprehensive quality assurance and software testing, helping teams deliver reliable, 
              high-performance applications. With expertise in both manual and automated testing approaches, 
              I ensure that software meets the highest standards before reaching end-users.
            </p>
            
            <p className="mb-8 text-slate-600">
              I've received formal training in SQA from EDGE under ICT division Bangladesh (2024-2025) and completed 
              Full Stack Web Development training from Shikhbe Shobai institute in 2022, giving me a holistic 
              understanding of the software development lifecycle.
            </p>
            
            {/* Key Facts */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-md mr-4">
                  <Clock size={24} className="text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Training</h4>
                  <p className="text-sm text-slate-600">SQA from EDGE, Web Dev from Shikhbe Shobai</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-md mr-4">
                  <Award size={24} className="text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Certification</h4>
                  <p className="text-sm text-slate-600">ICT Division Bangladesh, 2024-2025</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-md mr-4">
                  <Code size={24} className="text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Development</h4>
                  <p className="text-sm text-slate-600">HTML, CSS, JavaScript, PHP, Python</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-md mr-4">
                  <Briefcase size={24} className="text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Testing</h4>
                  <p className="text-sm text-slate-600">Manual, Automation, API, Performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;