import React, { useState } from "react";
import { allServices } from "../../constant";
import { PiCaretDoubleRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import Drawer from "react-modern-drawer";
import { IoMdClose } from "react-icons/io";

const OurServices = ({ length }) => {
  const [isOpen, setIsOpen] = useState(false);
  const services = allServices.slice(0, length || allServices.length);
  const [selectedService, setSelectedService] = useState(services[0]);

  const handleSelectServiceToShowDetail = (service) => {
    setSelectedService(service);
    setIsOpen(true);
  };
  
  return (
    <section className="section-padding bg-accent2 text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000000_80%)] opacity-50"></div>
      <div className="wrapper flex flex-col text-center gap-8 items-center relative z-10">
        <div className="text-center mb-2">
          <div data-aos="fade-up" className="gradient-rounded-text-box mx-auto">
            Our Services
          </div>
          <h2 data-aos="fade-up" data-aos-delay="100" className="heading-2 text-gradient mt-4 max-w-[50rem] mx-auto">
            Transformative Digital Solutions
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="desc max-w-[50rem] mx-auto mt-4">
            We create powerful digital experiences that help businesses streamline operations, 
            engage customers, and accelerate growth in today's technology-driven marketplace.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 w-full">
          {services.map((service, index) => (
            <div
              onClick={() => handleSelectServiceToShowDetail(service)}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              key={service.id}
              className="group relative"
            >
              <div className="absolute -inset-[1px] bg-gradient-to-r from-white/10 to-white/20 rounded-lg blur-[1px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="card hover-lift relative h-full flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                  <h5 className="font-semibold text-xl font-raleway text-white">
                    {service.title}
                  </h5>
                  <p className="desc text-tertiary">{service.desc}</p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectServiceToShowDetail(service);
                  }}
                  className="mt-6 flex items-center gap-2 text-white/70 group-hover:text-white transition-all duration-300 text-sm"
                >
                  <span>Learn More</span>
                  <PiCaretDoubleRightBold className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {length && (
          <Link 
            to="/services" 
            data-aos="fade-up"
            className="primary-btn mt-8 group"
          >
            <span>All Services</span>
            <PiCaretDoubleRightBold className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        )}
      </div>

      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="top"
        className="z-50"
        lockBackgroundScroll
      >
        <div className="bg-accent1 text-white min-h-screen p-6 md:p-10 custom-scrollbar">
          <div className="flex justify-end mb-6">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-tertiary transition-colors p-2 rounded-full bg-accent2 hover:bg-accent3"
            >
              <IoMdClose className="text-2xl" />
            </button>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="animate-fade-in">
              <h1 className="heading-2 text-gradient mb-6">{selectedService.title}</h1>
              <p className="desc whitespace-pre-line mb-10">
                {selectedService.detailContent}
              </p>
              
              <div className="relative mb-10">
                <div className="absolute -inset-1 bg-gradient-to-r from-white/5 to-white/10 rounded-lg blur-lg opacity-50"></div>
                <div className="relative bg-accent2 p-6 rounded-lg">
                  <h2 className="heading-3 text-center mb-8">
                    What We Offer
                  </h2>
                  
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 stagger-children">
                    {selectedService.whatWeOffer.map((offer, index) => (
                      <div 
                        key={index}
                        className="card animate-fade-in hover-lift"
                      >
                        <h4 className="text-xl font-medium font-raleway mb-3 text-white">
                          {offer.title}
                        </h4>
                        <p className="desc text-tertiary">
                          {offer.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <button
                  onClick={() => setIsOpen(false)}
                  className="secondary-btn"
                >
                  Back to Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </section>
  );
};

export default OurServices;
