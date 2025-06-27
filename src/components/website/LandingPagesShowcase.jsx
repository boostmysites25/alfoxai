import React from "react";
import { Link } from "react-router-dom";
import {
  webDevBanner,
  appDevBanner,
  aiDevBanner,
  iotDevBanner,
  webDevelopmentServices,
  appDevelopmentServices,
  aiServices,
  iotServices,
} from "../../constant";
import { PiCaretDoubleRightBold } from "react-icons/pi";

const LandingPagesShowcase = () => {
  // Landing pages data with their related services
  const landingPages = [
    {
      id: 1,
      title: "Web Development",
      description:
        "From responsive websites to complex web applications, we create digital experiences that captivate your audience and drive business growth.",
      image: webDevBanner,
      path: "/web-development",
      services: webDevelopmentServices.slice(0, 2), // Show only 2 services for preview
    },
    {
      id: 2,
      title: "Mobile App Development",
      description:
        "We build native and cross-platform mobile apps that connect you with your customers wherever they are, delivering exceptional user experiences.",
      image: appDevBanner,
      path: "/app-development",
      services: appDevelopmentServices.slice(0, 2), // Show only 2 services for preview
    },
    {
      id: 3,
      title: "AI Development",
      description:
        "Our custom AI solutions transform raw data into actionable insights, automate complex processes, and create intelligent systems.",
      image: aiDevBanner,
      path: "/ai-development",
      services: aiServices.slice(0, 2), // Show only 2 services for preview
    },
    {
      id: 4,
      title: "IoT Development",
      description:
        "Our Internet of Things solutions connect your physical assets to the digital world, enabling real-time monitoring and data-driven optimization.",
      image: iotDevBanner,
      path: "/iot-development",
      services: iotServices.slice(0, 2), // Show only 2 services for preview
    },
  ];

  return (
    <section className="section-padding bg-accent1 text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000000_80%)] opacity-50"></div>
      <div className="wrapper relative z-10">
        <div className="text-center mb-12">
          <div data-aos="fade-up" className="gradient-rounded-text-box mx-auto">
            Our Specialized Solutions
          </div>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="heading-2 text-gradient mt-4 max-w-[50rem] mx-auto"
          >
            Comprehensive Digital Services
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="desc max-w-[50rem] mx-auto mt-4"
          >
            Explore our specialized service areas, each designed to address
            specific aspects of your digital transformation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {landingPages.map((page, index) => (
            <div
              key={page.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative"
            >
              {/* Card glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary/10 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>

              <div className="relative h-full bg-accent2/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors duration-300 rounded-xl overflow-hidden">
                {/* Banner image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={page.image}
                    alt={page.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent2 to-transparent opacity-80"></div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-0">
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {page.title}
                  </h3>
                  <p className="text-tertiary mb-6">{page.description}</p>

                  {/* Services preview */}
                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-white mb-3">
                      Key Services:
                    </h4>
                    <div className="space-y-3">
                      {page.services.map((service) => (
                        <div
                          key={service.id}
                          className="flex items-start gap-3"
                        >
                          <div className="w-8 h-8 flex-shrink-0 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                            <service.icon className="w-4 h-4 fill-white" />
                          </div>
                          <div>
                            <h5 className="font-medium text-white">
                              {service.title}
                            </h5>
                            <p className="text-sm text-tertiary">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={page.path}
                    className="inline-flex items-center gap-2 text-white hover:text-white/70 transition-colors duration-300 group"
                  >
                    <span>Explore {page.title}</span>
                    <PiCaretDoubleRightBold className="group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingPagesShowcase;
