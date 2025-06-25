import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const EnhancedWhyChooseUs = () => {
  // Service categories with their respective services
  const serviceCategories = [
    {
      title: "AI & Automation",
      services: [
        "Experts in AI Calling Agency for scalable customer engagement",
        "Advanced AI & Machine Learning custom solutions",
        "Intelligent AI Chatbots to automate customer support",
        "Automation specialists in Robotic Process Automation (RPA)"
      ]
    },
    {
      title: "Development",
      services: [
        "End-to-end Mobile App Development (Android, iOS & Cross-platform)",
        "High-performance Full-Stack Web Development",
        "Game Development and immersive experiences",
        "IoT Development for smarter, connected businesses"
      ]
    },
    {
      title: "Security & Infrastructure",
      services: [
        "Trusted Cybersecurity & threat protection partners",
        "Seamless Cloud Computing Migration & optimization experts",
        "Secure, transparent Blockchain Development",
        "Data-first approach with Business Intelligence (BI) and Analytics"
      ]
    },
    {
      title: "Experience Design",
      services: [
        "Human-centered UX/UI Design for memorable user experiences",
        "Cutting-edge VR/AR Solutions for next-gen engagement"
      ]
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-black to-accent2 text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000000_80%)] opacity-50"></div>
      <div className="wrapper relative z-10">
        <div className="text-center mb-16">
          <div data-aos="fade-up" className="gradient-rounded-text-box mx-auto">
            Why Choose Us
          </div>
          <h2 data-aos="fade-up" data-aos-delay="100" className="heading-2 text-gradient mt-4">
            Empowering Innovation. Engineering Growth.
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="desc max-w-[50rem] mx-auto mt-4">
            At ALFOX AI, we don't just build technology—we build the future. We are a team of creators, 
            engineers, strategists, and problem-solvers dedicated to helping businesses transform their 
            ideas into powerful digital realities.
          </p>
        </div>

        {/* Core Benefits */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              title: "Tailor-Made Solutions",
              desc: "No one-size-fits-all here. Every project is customized to your goals."
            },
            {
              title: "End-to-End Expertise",
              desc: "Strategy, development, design, deployment—we do it all."
            },
            {
              title: "Future-Ready Technologies",
              desc: "Stay ahead of the curve with emerging tech and trends."
            },
            {
              title: "Transparent Communication",
              desc: "We believe in clarity, collaboration, and commitment."
            }
          ].map((benefit, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative"
            >
              <div className="absolute -inset-[1px] bg-gradient-to-r from-white/10 to-white/20 rounded-lg blur-[1px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="card hover-lift relative h-full flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-primary text-2xl">✓</span>
                    <h5 className="font-semibold text-xl font-raleway text-white">
                      {benefit.title}
                    </h5>
                  </div>
                  <p className="desc text-tertiary">{benefit.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Businesses Trust Us */}
        <div className="relative mb-16">
          <div className="absolute -inset-1 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl blur-lg opacity-70"></div>
          <div className="relative bg-accent1/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-card">
            <h3 className="heading-3 text-gradient mb-8 text-center">Why Businesses Trust Us</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Custom-First Approach",
                  desc: "Every business is unique. So is every solution we build."
                },
                {
                  title: "Deep Expertise, Broad Vision",
                  desc: "We don't just follow trends—we help create them."
                },
                {
                  title: "Long-Term Partnership",
                  desc: "We're here for more than just projects; we're here for your success."
                }
              ].map((item, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-primary text-2xl">✓</span>
                    <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                  </div>
                  <p className="desc text-tertiary">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Service Categories */}
        <div className="mb-16">
          <h3 className="heading-3 text-center mb-10">Our Comprehensive Expertise</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {serviceCategories.map((category, catIndex) => (
              <div 
                key={catIndex}
                data-aos="fade-up"
                data-aos-delay={catIndex * 100}
                className="relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-white/5 to-white/10 rounded-lg blur-lg opacity-50"></div>
                <div className="relative bg-accent1/50 backdrop-blur-sm rounded-lg p-6 h-full">
                  <h4 className="text-xl font-semibold text-white mb-4">{category.title}</h4>
                  <ul className="space-y-3">
                    {category.services.map((service, servIndex) => (
                      <li key={servIndex} className="flex items-start gap-3">
                        <span className="text-primary text-xl mt-0.5">✓</span>
                        <span className="desc text-tertiary">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="heading-3 text-gradient mb-4">Let's Build Something Great Together</h3>
          <p className="desc max-w-[40rem] mx-auto mb-8">
            Ready to elevate your business? Let's discuss how we can make your vision a reality.
          </p>
          <Link 
            to="/contact-us" 
            className="primary-btn group inline-flex items-center gap-2"
          >
            <span>Contact Us Today</span>
            <BsArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EnhancedWhyChooseUs;