import React from "react";
import { Link } from "react-router-dom";

const ExtendedAboutUs = () => {
  return (
    <section className="py-[5rem] bg-black text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000000_80%)] opacity-50"></div>
      <div className="wrapper relative z-10">
        <div className="max-w-5xl mx-auto">
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="heading-2 text-gradient">
              Empowering Innovation. Engineering Growth. Elevating Experiences.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div data-aos="fade-right" className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-white/5 to-white/10 rounded-xl blur-lg opacity-70"></div>
              <div className="relative bg-accent1/50 backdrop-blur-sm rounded-xl p-8 h-full">
                <p className="desc text-tertiary">
                  At ALFOX AI, we don't just build technology—we build the future. We are a team of creators, 
                  engineers, strategists, and problem-solvers dedicated to helping businesses transform their 
                  ideas into powerful digital realities.
                </p>
                
                <p className="desc text-tertiary mt-6">
                  Whether you're a startup looking to disrupt your industry or an enterprise in need of scaling, 
                  we provide custom tech solutions designed around your goals.
                </p>
                
                <div className="mt-8">
                  <Link to="/contact-us" className="primary-btn">
                    Start Your Journey
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Right Content */}
            <div data-aos="fade-left">
              <h3 className="text-2xl font-semibold text-white mb-6">What sets us apart?</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent2 flex justify-center items-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-white mb-2">Creativity meets Engineering</h4>
                    <p className="desc text-tertiary">
                      We blend creative thinking with technical precision to deliver solutions 
                      that are both innovative and reliable.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent2 flex justify-center items-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-white mb-2">Human-Centric Design</h4>
                    <p className="desc text-tertiary">
                      Technology should serve people, not the other way around. We create solutions 
                      that prioritize user experience and accessibility.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent2 flex justify-center items-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-white mb-2">Long-Term Vision</h4>
                    <p className="desc text-tertiary">
                      We balance immediate results with sustainable growth, ensuring that our 
                      solutions continue to deliver value as your business evolves.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Quote */}
          <div data-aos="fade-up" className="mt-16 text-center">
            <blockquote className="text-2xl font-medium text-white italic">
              "Your growth is at the core of everything we build."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtendedAboutUs;