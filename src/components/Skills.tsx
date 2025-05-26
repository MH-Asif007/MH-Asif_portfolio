import React, { useEffect, useRef } from 'react';
import { Check, Code, Briefcase } from 'lucide-react';

interface Skill {
  name: string;
  percentage: number;
  category: 'testing' | 'development' | 'tools';
}

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  
  // Testing Skills
  const testingSkills: Skill[] = [
    { name: 'Manual Testing', percentage: 95, category: 'testing' },
    { name: 'Automation Testing', percentage: 85, category: 'testing' },
    { name: 'API Testing', percentage: 90, category: 'testing' },
    { name: 'Performance Testing', percentage: 80, category: 'testing' },
    { name: 'Security Testing', percentage: 75, category: 'testing' },
  ];
  
  // Development Skills
  const developmentSkills: Skill[] = [
    { name: 'HTML/CSS', percentage: 90, category: 'development' },
    { name: 'JavaScript', percentage: 80, category: 'development' },
    { name: 'Bootstrap', percentage: 85, category: 'development' },
    { name: 'PHP', percentage: 70, category: 'development' },
    { name: 'Python', percentage: 75, category: 'development' },
  ];
  
  // Tools
  const toolSkills: Skill[] = [
    { name: 'Selenium', percentage: 90, category: 'tools' },
    { name: 'Postman', percentage: 95, category: 'tools' },
    { name: 'JMeter', percentage: 80, category: 'tools' },
    { name: 'Burp Suite', percentage: 75, category: 'tools' },
    { name: 'Jira/ClickUp/Trello', percentage: 90, category: 'tools' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillBars = document.querySelectorAll('.skill-bar-fill');
            skillBars.forEach((bar) => {
              bar.classList.add('animate');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  // Skill bar component
  const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
    return (
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="font-medium">{skill.name}</span>
          <span className="text-teal-600 font-medium">{skill.percentage}%</span>
        </div>
        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
          <div 
            className="skill-bar-fill h-full bg-teal-600 rounded-full"
            style={{ '--percent': `${skill.percentage}%` } as React.CSSProperties}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="bg-slate-50">
      <div className="container-section" ref={skillsRef}>
        <div className="text-center mb-16">
          <h2 className="section-title">My Skills</h2>
          <span className="section-title-line"></span>
          <p className="max-w-2xl mx-auto mt-6 text-slate-600">
            I've developed a diverse set of skills spanning testing, development, and project management tools.
            Here's an overview of my technical expertise:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testing Skills */}
          <div className="card">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-lg mr-4">
                <Check size={24} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold">Testing</h3>
            </div>
            
            {testingSkills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>

          {/* Development Skills */}
          <div className="card">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-lg mr-4">
                <Code size={24} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold">Development</h3>
            </div>
            
            {developmentSkills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>

          {/* Tools */}
          <div className="card md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-lg mr-4">
                <Briefcase size={24} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-bold">Tools</h3>
            </div>
            
            {toolSkills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;