import React from "react";
import aboutUsImg from "../../assets/images/landing-aboutus.webp";
import { Link } from "react-router-dom";

const AboutCompany = () => {
  return (
    <section className="py-[5rem] bg-black text-white wrapper">
      <div
        data-aos="fade-right"
        className="gradient-rounded-text-box mx-auto lg:mx-0"
      >
        About Us
      </div>
      <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
        <div data-aos="fade-right" className="flex h-full flex-col gap-7">
          <div className="flex flex-col gap-7 text-center lg:text-start">
            <h2 className="heading-2">Shaping the Future with Technology</h2>
            <p className="desc">
              At ALFOX AI, we donâ€™t just adapt to the futureâ€”we shape it. As a
              next-generation technology company offering both AI-driven
              products and tailored service solutions, we empower visionary
              businesses across the globe to innovate, scale, and lead. In
              todayâ€™s rapidly evolving digital landscape, businesses need more
              than just toolsâ€”they need intelligent, adaptable, and future-ready
              solutions. Thatâ€™s where ALFOX AI comes in.
              <br />
              <br />
              ðŸ’¡ What We Offer:
              <br />
              <ul className="list-outside list-disc pl-7 pt-2 space-y-2">
                <li>
                  Product Solutions â€“ From AI agents to intelligent platforms,
                  we build scalable, plug-and-play solutions designed to
                  automate, optimize, and transform.
                </li>
                <li>
                  Service Expertise â€“ Our full-stack services cover AI/ML
                  development, cybersecurity, data analytics, RPA, cloud
                  computing, and moreâ€”customized to your industry needs.
                </li>
              </ul>
            </p>
          </div>
          <div className="flex gap-5 mt-4 justify-center lg:justify-start">
            <Link to="/contact-us" className="primary-btn">
              Contact Us
            </Link>
            <Link to="/services" className="secondary-btn">
              Our Services
            </Link>
          </div>
        </div>
        <div data-aos="fade-left" className="h-full">
          <img
            src={aboutUsImg}
            className="object-cover h-full aspect-video rounded-lg shadow-lg shadow-accent3"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
