import React from "react";
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

const AboutUs = () => {
  return (
    <>
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
                    Our mission is simple: to empower businesses with innovative
                    technology that drives efficiency, productivity, and growth.
                    We are committed to delivering highquality, scalable
                    solutions that help our clients stay ahead of the
                    competition in an ever-changing digital landscape.
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
                    To be a global leader in technology innovation, delivering
                    smart, secure, and scalable solutions that help businesses
                    unlock their full potential. We aim to create impactful
                    experiences for businesses and their customers by blending
                    creativity, technology, and strategic thinking.
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
            What Sets Us Apart?
          </h2>
          <div className="mt-4">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              {[
                {
                  Icon: Icon1,
                  title: "AI Expertise",
                  desc: "As a leader in AI development, we help businesses integrate AI solutions to streamline operations, enhance customer experience, and gain actionable insights.",
                },
                {
                  Icon: Icon2,
                  title: "Blockchain Solutions",
                  desc: "We specialize in creating decentralized, secure, and transparent solutions that enable businesses to innovate and grow.",
                },
                {
                  Icon: Icon3,
                  title: "Scalability",
                  desc: "Whether you are a startup or an established enterprise, we design solutions that can scale with your business, ensuring long-term success.",
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
      <OurServices length={3} />
      <Testimonials />
    </>
  );
};

export default AboutUs;
