﻿import React from "react";
import {
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
} from "../../constant";
import UnlockEfficiency from "../../components/common/UnlockEfficiency";
import OurServices from "../../components/website/OurServices";
import Testimonials from "../../components/common/Testimonials";
import AboutCompany from "../../components/website/AboutCompany";
import WhyChooseUs from "../../components/common/WhyChooseUs";
import { ReactComponent as Icon1 } from "../../assets/svgs/AI Expertise.svg";
import { ReactComponent as Icon2 } from "../../assets/svgs/Blockchain Solutions.svg";
import { ReactComponent as Icon3 } from "../../assets/svgs/Scalability.svg";
import Featured from "../../components/common/Featured";
import ExtendedAboutUs from "../../components/website/ExtendedAboutUs";
import CEOProfile from "../../components/website/CEOProfile";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Alfox AI</title>
        <meta name="description" content="Learn more about ALFOX AI, our mission, vision, and how we drive digital innovation for businesses worldwide." />
        <link rel="canonical" href="https://www.alfoxai.com/about-us" />
        <meta property="og:title" content="About Us | Alfox AI" />
        <meta property="og:description" content="Learn more about ALFOX AI, our mission, vision, and how we drive digital innovation for businesses worldwide." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.alfoxai.com/about-us" />
        <meta property="og:image" content="/logo.png" />
      </Helmet>
      <div
        data-aos="fade-down"
        className="h-[40vh] sm:h-[55vh] md:h-[70vh] relative"
      >
        <img
          src={aboutUsBanner}
          className="object-cover grayscale object-[100%_35%] h-full w-full"
          alt=""
        />
      </div>
      <AboutCompany />
      <ExtendedAboutUs />
      <div className="text-white text-center">
        <div className="wrapper flex flex-col items-center gap-5 mb-[5rem]">
          <div className="">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col-reverse sm:grid text-start grid-cols-1 gap-5 max-w-5xl mx-auto">
                <div
                  data-aos="fade-right"
                  className="rounded-xl p-5 text-center bg-gradient-to-r from-primary/60 to-primary/80"
                >
                  <div
                    data-aos="fade-left"
                    className="max-h-[15rem] flex items-center"
                  >
                    <img
                      src={aboutUsGridImg1}
                      alt="Innovation at Heart"
                      className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                    />
                  </div>
                  <h6 className="font-bold text-3xl font-raleway">
                    Our Mission
                  </h6>
                  <p className="desc mt-2">
                    We strive to create meaningful digital experiences that transform 
                    how businesses operate and connect with their customers. Through 
                    innovative technology and strategic thinking, we aim to deliver 
                    solutions that not only solve today's challenges but also build 
                    foundations for future growth and adaptation.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:grid text-start grid-cols-1 gap-5 max-w-5xl mx-auto">
                <div
                  data-aos="fade-left"
                  className="rounded-xl p-5 text-center"
                >
                  <div
                    data-aos="fade-right"
                    className="max-h-[15rem] flex items-center"
                  >
                    <img
                      src={aboutUsGridImg2}
                      alt="Client-Centric Approach"
                      className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                    />
                  </div>
                  <h6 className="font-bold text-3xl font-raleway">
                    Our Vision
                  </h6>
                  <p className="desc mt-2">
                    To become a trusted partner in digital innovation, recognized for 
                    creating technology solutions that make a meaningful difference. 
                    We envision a future where our work empowers organizations to 
                    harness the full potential of technology while maintaining a 
                    human-centered approach to every digital interaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <WhyChooseUs />
        <UnlockEfficiency />
        <div className="wrapper flex flex-col items-center gap-5 my-[5rem]">
          <h2 data-aos="fade-up" className="heading-2">
            Our Core Strengths
          </h2>
          <div className="mt-4">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              {[
                {
                  Icon: Icon1,
                  title: "Technology Integration",
                  desc: "We seamlessly integrate cutting-edge technologies into your existing systems, creating cohesive solutions that enhance functionality while minimizing disruption to your operations.",
                },
                {
                  Icon: Icon2,
                  title: "User-Centered Design",
                  desc: "Our design philosophy puts users first, creating intuitive interfaces and experiences that delight customers while achieving your business objectives.",
                },
                {
                  Icon: Icon3,
                  title: "Future-Ready Solutions",
                  desc: "We build with scalability and adaptability in mind, ensuring your digital investments continue to deliver value as your business grows and technology evolves.",
                },
              ].map(({ Icon, title, desc }) => (
                <div className="flex flex-col-reverse sm:grid text-start shadow-2xl shadow-primary/40 rounded-xl grid-cols-1 gap-5 max-w-5xl mx-auto">
                  <div
                    data-aos="fade-right"
                    className="rounded-xl p-5 text-center bg-[#111111]"
                  >
                    <div
                      data-aos="fade-left"
                      className="max-h-[5rem] mx-auto aspect-square rounded-full p-3 bg-primary flex items-center"
                    >
                      <Icon className="h-full fill-white max-h-[3rem] my-auto object-contain mx-auto" />
                    </div>
                    <h6 className="mt-5 font-bold text-2xl font-raleway">
                      {title}
                    </h6>
                    <p className="desc mt-2">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <Featured /> */}
      <CEOProfile />
      <OurServices length={3} />
      <Testimonials />
    </>
  );
};

export default AboutUs;
