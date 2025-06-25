import React from "react";
import {
  aiServices,
  appDevelopmentServices,
  iotServices,
  webDevelopmentServices,
} from "../../constant";
import { Link as ScrollLink } from "react-scroll";

const LandingServices = ({ page }) => {
  // Determine which services to display based on page type
  let services;
  let serviceTitle, serviceDescription;

  if (page === "web") {
    services = webDevelopmentServices;
    serviceTitle = "Comprehensive Web Development Solutions";
    serviceDescription = "From responsive websites to complex web applications, we deliver high-performance digital experiences that drive engagement and conversions.";
  } else if (page === "app") {
    services = appDevelopmentServices;
    serviceTitle = "End-to-End Mobile App Development";
    serviceDescription = "Native and cross-platform mobile applications designed to connect your business with customers and streamline operations.";
  } else if (page === "ai") {
    services = aiServices;
    serviceTitle = "Intelligent AI Solutions for Modern Business";
    serviceDescription = "Custom artificial intelligence implementations that transform data into insights and automate complex processes.";
  } else {
    services = iotServices;
    serviceTitle = "Connected IoT Ecosystems";
    serviceDescription = "End-to-end Internet of Things solutions that bridge the physical and digital worlds to optimize operations and create new opportunities.";
  }

  return (
    <div id="services" className="section-padding bg-gradient-to-b from-accent2 to-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000000_80%)] opacity-50"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px]"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-white/10 rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 border border-white/10 rounded-full"></div>
      
      <div className="wrapper relative z-10 flex flex-col items-center gap-8">
        {/* Section Header */}
        <div data-aos="fade-up" className="gradient-rounded-text-box mx-auto">
          Our Services
        </div>
        
        <h2 data-aos="fade-up" className="heading-2 text-gradient text-center max-w-3xl leading-tight">
          {serviceTitle}
        </h2>
        
        <p data-aos="fade-up" className="text-center max-w-2xl desc text-tertiary text-lg">
          {serviceDescription}
        </p>
        
        {/* Service Cards Grid */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 mx-auto max-w-6xl w-full"
        >
          {services.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative"
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary/10 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              
              {/* Card Content */}
              <div className="relative bg-accent1/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors duration-300 h-full flex flex-col gap-6 items-center text-center text-white p-8 rounded-xl hover:-translate-y-1 duration-300">
                <div className="w-20 h-20 flex justify-center items-center rounded-full bg-gradient-to-br from-primary/80 to-primary/60 p-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-10 h-10 transition-all duration-200 fill-white" />
                </div>
                
                <h3 className="font-semibold text-2xl font-raleway text-white">
                  {item.title}
                </h3>
                
                <p className="text-tertiary desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="mt-12">
          <ScrollLink
            to="contact"
            smooth
            offset={-90}
            className="primary-btn group inline-flex"
          >
            <span>Discuss Your Project</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default LandingServices;
