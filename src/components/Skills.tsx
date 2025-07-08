
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Python", level: 85 },
        { name: "Node.js", level: 75 },
        { name: "PostgreSQL", level: 80 },
        { name: "API Development", level: 75 }
      ]
    },
    {
      title: "Mobile Development",
      skills: [
        { name: "Kotlin", level: 70 },
        { name: "Android Development", level: 70 },
        { name: "React Native", level: 65 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "Database Design", level: 80 },
        { name: "Problem Solving", level: 90 },
        { name: "UI/UX Design", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    {category.title}
                  </h3>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-700 font-medium">{skill.name}</span>
                          <span className="text-blue-600 font-semibold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
