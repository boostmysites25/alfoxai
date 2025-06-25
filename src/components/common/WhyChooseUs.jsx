import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  whyChooseUsIcon1,
  whyChooseUsIcon2,
  whyChooseUsIcon3,
  whyChooseUsIcon4,
  whyChooseUsPng,
} from "../../constant";

const WhyChooseUs = () => {
  const totalYrs = 3;
  const totalOnTimeCompletionPercentage = 100;
  const totalExperts = 30;
  const totalClients = 50;

  const [yrs, setYrs] = useState(0);
  const [onTimeCompletion, setOnTimeCompletion] = useState(0);
  const [experts, setExperts] = useState(0);
  const [clients, setClients] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      // Animate Years of Experience
      const yrsInterval = setInterval(() => {
        setYrs((prev) => Math.min(prev + 1, totalYrs));
      }, 100);

      // Animate Experts
      const expertsInterval = setInterval(() => {
        setExperts((prev) => Math.min(prev + 1, totalExperts));
      }, 100);

      // Animate Clients
      const clientsInterval = setInterval(() => {
        setClients((prev) => Math.min(prev + 1, totalClients));
      }, 50);

      // Animate On Time Completion Percentage
      const completionInterval = setInterval(() => {
        setOnTimeCompletion((prev) =>
          Math.min(prev + 1, totalOnTimeCompletionPercentage)
        );
      }, 20);

      // Clear intervals when animation reaches target values
      return () => {
        clearInterval(yrsInterval);
        clearInterval(expertsInterval);
        clearInterval(clientsInterval);
        clearInterval(completionInterval);
      };
    }
  }, [inView]);

  return (
    <section className="section-padding bg-gradient-to-b from-black to-accent2 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000000_80%)] opacity-50"></div>
      <div className="wrapper text-center text-white flex flex-col gap-10 relative z-10">
        <div className="text-center mb-6">
          <div data-aos="fade-up" className="gradient-rounded-text-box mx-auto">
            Why Choose Us
          </div>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="heading-2 text-gradient mt-4"
          >
            The Pillars of Our Excellence
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="desc max-w-[40rem] mx-auto mt-4"
          >
            Our approach combines strategic thinking with technical precision to deliver 
            solutions that exceed expectations and create lasting value for your business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-8 mt-6">
          <div className="flex flex-col gap-8 h-full">
            {/* First Card */}
            <div
              data-aos="fade-right"
              className="group relative"
            >
              <div className="absolute -inset-[1px] bg-gradient-to-r from-white/10 to-white/20 rounded-lg blur-[1px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="card hover-lift relative overflow-hidden h-full">
                <div className="flex flex-col w-full text-start items-start gap-5 relative z-10">
                  <div className="bg-accent2 p-3 rounded-lg">
                    <img
                      src={whyChooseUsIcon1}
                      className="h-10 w-10 object-contain invert"
                      alt="Expertise icon"
                    />
                  </div>
                  <div>
                    <h5 className="text-xl font-raleway font-semibold text-white mb-3">
                      Strategic Vision
                    </h5>
                    <p className="desc text-tertiary text-start">
                      We look beyond immediate challenges to create solutions that 
                      support your long-term business goals and position you for 
                      sustainable growth in a digital-first world.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Card */}
            <div
              data-aos="fade-right"
              data-aos-delay="100"
              className="group relative"
            >
              <div className="absolute -inset-[1px] bg-gradient-to-r from-white/10 to-white/20 rounded-lg blur-[1px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="card hover-lift relative overflow-hidden h-full">
                <div className="flex flex-col w-full text-start items-start gap-5 relative z-10">
                  <div className="bg-accent2 p-3 rounded-lg">
                    <img
                      src={whyChooseUsIcon2}
                      className="h-10 w-10 object-contain invert"
                      alt="Solutions icon"
                    />
                  </div>
                  <div>
                    <h5 className="text-xl font-raleway font-semibold text-white mb-3">
                      Client-Centered Approach
                    </h5>
                    <p className="desc text-tertiary text-start">
                      Your success is our priority. We take the time to understand your 
                      unique challenges and business context to deliver solutions that 
                      address your specific needs with precision.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div
            data-aos="fade-up"
            className="w-full flex justify-center items-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-white/5 to-white/10 rounded-full blur-xl opacity-70 animate-pulse"></div>
              <img
                src={whyChooseUsPng}
                className="object-contain max-h-[25rem] mx-auto relative z-10 animate-float"
                alt="why choose us"
              />
            </div>
          </div>

          <div className="flex flex-col gap-8 h-full">
            {/* Third Card */}
            <div
              data-aos="fade-left"
              className="group relative"
            >
              <div className="absolute -inset-[1px] bg-gradient-to-r from-white/10 to-white/20 rounded-lg blur-[1px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="card hover-lift relative overflow-hidden h-full">
                <div className="flex flex-col w-full text-start items-start gap-5 relative z-10">
                  <div className="bg-accent2 p-3 rounded-lg">
                    <img
                      src={whyChooseUsIcon3}
                      className="h-10 w-10 object-contain invert"
                      alt="Services icon"
                    />
                  </div>
                  <div>
                    <h5 className="text-xl font-raleway font-semibold text-white mb-3">
                      Technical Excellence
                    </h5>
                    <p className="desc text-tertiary text-start">
                      Our team of skilled developers and designers brings deep expertise 
                      in the latest technologies and best practices to create robust, 
                      scalable, and future-proof digital solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fourth Card */}
            <div
              data-aos="fade-left"
              data-aos-delay="100"
              className="group relative"
            >
              <div className="absolute -inset-[1px] bg-gradient-to-r from-white/10 to-white/20 rounded-lg blur-[1px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="card hover-lift relative overflow-hidden h-full">
                <div className="flex flex-col w-full text-start items-start gap-5 relative z-10">
                  <div className="bg-accent2 p-3 rounded-lg">
                    <img
                      src={whyChooseUsIcon4}
                      className="h-10 w-10 object-contain invert"
                      alt="Global icon"
                    />
                  </div>
                  <div>
                    <h5 className="text-xl font-raleway font-semibold text-white mb-3">
                      Continuous Innovation
                    </h5>
                    <p className="desc text-tertiary text-start">
                      We stay at the forefront of technological advancements, 
                      constantly exploring new tools and methodologies to bring 
                      innovative solutions that give your business a competitive edge.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="pt-16 mt-6">
          <div ref={ref} data-aos="fade-up" className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl blur-lg opacity-70"></div>
            <div className="relative bg-accent1 rounded-2xl p-10 shadow-card">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { value: yrs, label: "Years of Experience", suffix: "+" },
                  { value: experts, label: "Expert Team", suffix: "+" },
                  { value: clients, label: "Clients", suffix: "+" },
                  {
                    value: onTimeCompletion,
                    label: "On Time Completion",
                    suffix: "%",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="w-full flex flex-col items-center justify-center group"
                  >
                    <div className="relative mb-4">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-full blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                      <div className="w-24 h-24 rounded-full bg-accent2 border border-white/10 flex items-center justify-center relative">
                        <div className="text-4xl font-bold text-white">
                          {stat.value}
                        </div>
                        <span className="absolute top-4 right-4 text-lg text-white">
                          {stat.suffix}
                        </span>
                      </div>
                    </div>
                    <p className="font-medium text-tertiary group-hover:text-white transition-colors duration-300">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
