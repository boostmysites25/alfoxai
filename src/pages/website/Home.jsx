import React from "react";
import { Link } from "react-router-dom";
import Contact from "../../components/landingPages/Contact";
import WhyChooseUs from "../../components/common/WhyChooseUs";
import ReactPlayer from "react-player";
import { homeBannerVideo } from "../../constant";
import OurServices from "../../components/website/OurServices";
import EndlessOpportunitiesSection from "../../components/common/EndlessOpportunitiesSection";
import UnlockEfficiency from "../../components/common/UnlockEfficiency";
import AboutCompany from "../../components/website/AboutCompany";
import Featured from "../../components/common/Featured";
import CEOProfile from "../../components/website/CEOProfile";
import BrandLogos from "../../components/common/BrandLogos";
import LandingPagesShowcase from "../../components/website/LandingPagesShowcase";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Alfox AI - Home</title>
        <meta name="description" content="ALFOX AI is a Software AI company providing both services and products. We craft exceptional solutions to empower businesses in their digital journey." />
        <link rel="canonical" href="https://www.alfoxai.com/" />
        <meta property="og:title" content="Alfox AI - Home" />
        <meta property="og:description" content="ALFOX AI is a Software AI company providing both services and products. We craft exceptional solutions to empower businesses in their digital journey." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.alfoxai.com/" />
        <meta property="og:image" content="/logo.png" />
      </Helmet>
      <div id="banner" className="h-screen relative">
        <ReactPlayer
          url={homeBannerVideo}
          loop
          muted
          width="100%"
          height="100%"
          playsinline
          playing
          className="absolute"
        />
        <div className="bg-gradient-to-r to-black/50 from-transparent absolute w-full h-full"></div>
        <div className="pt-[3rem] wrapper flex items-center h-full">
          <div
            data-aos="fade-up"
            className="relative z-10 px-6 justify-center h-full text-white flex flex-col items-center gap-5 text-center md:max-w-[60rem] mx-auto"
          >
            <div className="rounded-text-box border-white/70 font-medium">
              Technology Solutions
            </div>
            <h1 className="heading-1">Design. Develop. Deliver.</h1>
            <p className="desc">
              ALFOX AI is a Software AI company, we are providing both services
              and Products Based. We specialize in crafting exceptional
              solutions that empower businesses to reach their digital
              potential. Our expert team turns your vision into reality with
              precision and innovation.
            </p>
            <Link to="/contact-us" className="primary-btn mt-2">
              Schedule Your Strategy Session
            </Link>
          </div>
        </div>
      </div>

      <AboutCompany />
      <LandingPagesShowcase />
      <OurServices length={3} />
      <WhyChooseUs />
      <UnlockEfficiency />
      <CEOProfile />
      <EndlessOpportunitiesSection />
      <Contact />
      <section className="pb-16">
        <BrandLogos />
      </section>
    </>
  );
};

export default Home;
