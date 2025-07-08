
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const achievements = [
    {
      title: "AkiraChix Bootcamp Graduate",
      description: "Successfully completed the intensive software development bootcamp, mastering full-stack development skills and building real-world projects.",
      highlight: "100% Completion Rate"
    },
    {
      title: "Community Impact Project",
      description: "Led the development of the Gikomba Upcycling platform, connecting over 50 traders with upcyclers in the first month of launch.",
      highlight: "50+ Active Users"
    },
    {
      title: "Technical Problem Solver",
      description: "Consistently solved complex algorithmic challenges and optimized database queries, improving application performance by 40%.",
      highlight: "40% Performance Boost"
    },
    {
      title: "Mentorship & Leadership",
      description: "Mentored 5 junior developers in web development fundamentals and best practices during community coding workshops.",
      highlight: "5 Mentees Guided"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            What I'm Proud Of
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Milestones and achievements that showcase my growth and impact in the tech community
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-bold text-lg">{index + 1}</span>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {achievement.description}
                      </p>
                      <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        {achievement.highlight}
                      </div>
                    </div>
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

export default Testimonials;
