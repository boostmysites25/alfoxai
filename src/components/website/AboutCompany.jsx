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
            <h2 className="heading-2">Pioneering Digital Excellence</h2>
            <p className="desc">
              At ALFOX AI, we're architects of digital transformation. Our mission is to 
              bridge the gap between cutting-edge technology and practical business solutions. 
              We combine innovative thinking with technical expertise to create digital 
              experiences that drive growth and efficiency for our clients. In an era where 
              technology evolves at lightning speed, we provide the stability and vision 
              needed to stay ahead of the curve.
              <br />
              <br />
               Our Expertise:
              <br />
              <ul className="list-outside list-disc pl-7 pt-2 space-y-2">
                <li>
                  Innovative Solutions – We develop custom applications and platforms 
                  that streamline operations, enhance customer experiences, and create 
                  new revenue opportunities for your business.
                </li>
                <li>
                  Technical Excellence – Our team brings together expertise in web development, 
                  mobile applications, AI integration, cloud architecture, and data analytics 
                  to deliver comprehensive solutions tailored to your specific challenges.
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
