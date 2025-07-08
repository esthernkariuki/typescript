
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            About Me
          </h2>
          
          <Card className="mb-12 border-0 shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Hello! I'm Esther
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Based in the beautiful town of Naivasha, Kenya, I'm a passionate software engineer 
                    who believes technology should serve people and communities. My journey in tech 
                    started with curiosity and has grown into a mission to create solutions that matter.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    I specialize in full-stack development, working with modern technologies to build 
                    web and mobile applications. From crafting user interfaces to designing databases, 
                    I love every aspect of bringing ideas to life through code.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    What Drives Me
                  </h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Building products that impact real communities
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Solving complex problems with creative solutions
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Continuous learning and growth in tech
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Empowering others through technology
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
