
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Gikomba Upcycling App",
      description: "A digital platform connecting traders with upcyclers to promote sustainable business practices and reduce waste in Kenya's largest market.",
      tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Recipe Finder App",
      description: "A smart recipe discovery application that helps users find delicious meals based on available ingredients and dietary preferences.",
      tech: ["JavaScript", "React", "API Integration", "CSS"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
      github: "https://github.com/esthernkariuki/Recipe-apis",
      demo: "https://recipe-apis.vercel.app/"
    },
    {
      title: "Smart To-Do List",
      description: "An intelligent task management application with priority sorting, deadline tracking, and productivity analytics.",
      tech: ["Python", "Flask", "SQLite", "HTML/CSS"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
      github: "https://github.com/esthernkariuki/To-do-list",
      demo: "https://to-do-list-ebon-theta.vercel.app/"
    },
    {
      title: "Digital Contact Book",
      description: "A comprehensive contact management system with search functionality, categorization, and backup features.",
      tech: ["Kotlin", "Android", "SQLite", "Material Design"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop",
      github: "https://github.com/esthernkariuki/Contact-book",
      demo: "https://contact-book-kohl.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Live Demo
                    </Button>
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

export default Projects;
