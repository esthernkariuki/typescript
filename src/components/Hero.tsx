
import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <Avatar className="w-32 h-32 mx-auto mb-8 ring-4 ring-blue-100">
            <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop&crop=face" alt="Esther Nyambura Kariuki" />
            <AvatarFallback className="text-2xl font-bold bg-blue-100 text-blue-600">ENK</AvatarFallback>
          </Avatar>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
            Esther Nyambura
            <span className="block text-blue-600">Kariuki</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-medium">
            Crafting Code for Real-World Change
          </p>
          
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Software Engineer from Naivasha, Kenya, passionate about building impactful tech solutions 
            that transform communities and solve real problems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
