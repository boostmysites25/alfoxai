import React, { useEffect } from "react";
import section5Img1 from "../../assets/images/section-5-img-1.png";
import section5Img2 from "../../assets/images/section-5-img-2.png";
import section5Img3 from "../../assets/images/section-5-img-3.png";
import section5Img4 from "../../assets/images/section-5-img-4.png";
import section5Img5 from "../../assets/images/section-5-img-5.png";
import section5Img6 from "../../assets/images/section-5-img-6.png";
import section5Img7 from "../../assets/images/section-5-img-7.png";
import Contact from "../../components/landingPages/Contact";
import {
  aiDevBanner,
  aiLandingAbout,
  appDevBanner,
  appLandingAbout,
  iotDevBanner,
  iotLandingAbout,
  webDevBanner,
  webLandingAbout,
} from "../../constant";
import { Link as ScrollLink } from "react-scroll";
import WhyChooseUs from "../../components/common/WhyChooseUs";
import EndlessOpportunitiesSection from "../../components/common/EndlessOpportunitiesSection";
import LandingServices from "../../components/landingPages/LandingServices";
import UnlockEfficiency from "../../components/common/UnlockEfficiency";
import ContactForm from "../../components/common/ContactForm";
import Portfolio from "../../components/common/Portfolio";
import gsap from "gsap";
import Testimonials from "../../components/common/Testimonials";
import BrandLogos from "../../components/common/BrandLogos";

const LandingPage = ({ page }) => {
  // Dynamic content based on page type
  let bannerImg,
    bannerTitle,
    serviceName,
    bannerDesc,
    aboutImg,
    aboutTitle,
    aboutDesc,
    keyFeatures = [];

  // Set page-specific content
  if (page === "web") {
    bannerImg = webDevBanner;
    bannerTitle = "Elevate Your Digital Presence with Custom Web Solutions";
    serviceName = "Web Development";
    bannerDesc = "From responsive websites to complex web applications, we create digital experiences that captivate your audience and drive business growth.";
    aboutImg = webLandingAbout;
    aboutTitle = "Crafting Digital Experiences That Define Your Brand";
    aboutDesc = "Your website is more than just an online presence—it's the digital headquarters of your business. At ALFOX AI, we build websites that work as hard as you do. Our development team creates responsive, high-performance web solutions that combine stunning design with powerful functionality to deliver measurable results. Whether you need an e-commerce platform, a corporate site, or a custom web application, we build with your business goals at the center.";
    keyFeatures = [
      {
        title: "Responsive Design",
        description: "Websites that look and perform flawlessly across all devices and screen sizes.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        title: "Performance Optimization",
        description: "Lightning-fast load times and smooth interactions for optimal user experience.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )
      },
      {
        title: "SEO-Friendly Architecture",
        description: "Built-in optimization that helps your site rank higher in search results.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        )
      }
    ];
  } else if (page === "app") {
    bannerImg = appDevBanner;
    bannerTitle = "Transform Your Business with Powerful Mobile Applications";
    serviceName = "App Development";
    bannerDesc = "We build native and cross-platform mobile apps that connect you with your customers wherever they are, delivering exceptional user experiences that drive engagement and loyalty.";
    aboutImg = appLandingAbout;
    aboutTitle = "Mobile Solutions That Put Your Business in Your Customers' Hands";
    aboutDesc = "In today's mobile-first world, having a powerful app can be your greatest competitive advantage. Our app development team creates intuitive, feature-rich applications that solve real business problems and delight users. We specialize in both native (iOS/Android) and cross-platform development, ensuring your app performs flawlessly across all devices while maintaining a consistent brand experience. From concept to deployment and beyond, we handle every aspect of the app development lifecycle.";
    keyFeatures = [
      {
        title: "Intuitive UX Design",
        description: "User-centered interfaces that make navigation effortless and engagement natural.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        )
      },
      {
        title: "Cross-Platform Compatibility",
        description: "Consistent performance across iOS, Android, and web platforms from a single codebase.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        )
      },
      {
        title: "Scalable Architecture",
        description: "Future-proof design that grows with your business and adapts to changing needs.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        )
      }
    ];
  } else if (page === "ai") {
    bannerImg = aiDevBanner;
    bannerTitle = "Harness the Power of AI to Revolutionize Your Business";
    serviceName = "AI Development";
    bannerDesc = "Our custom AI solutions transform raw data into actionable insights, automate complex processes, and create intelligent systems that give your business a competitive edge.";
    aboutImg = aiLandingAbout;
    aboutTitle = "AI Solutions That Turn Complexity Into Clarity";
    aboutDesc = "Artificial Intelligence isn't just a technology—it's a transformative force that can redefine how your business operates. At ALFOX AI, we specialize in developing practical AI solutions that solve real business challenges. From predictive analytics and natural language processing to computer vision and machine learning models, we build intelligent systems that automate processes, uncover insights, and create new opportunities for growth. Our AI implementations are designed to be transparent, explainable, and aligned with your business objectives.";
    keyFeatures = [
      {
        title: "Custom AI Models",
        description: "Tailored machine learning solutions built specifically for your business challenges.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        title: "Predictive Analytics",
        description: "Forecast trends, identify opportunities, and make data-driven decisions with confidence.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        )
      },
      {
        title: "Intelligent Automation",
        description: "Streamline operations by automating complex processes with AI-powered workflows.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
          </svg>
        )
      }
    ];
  } else {
    bannerImg = iotDevBanner;
    bannerTitle = "Connect, Monitor, and Optimize with IoT Solutions";
    serviceName = "IoT Development";
    bannerDesc = "Our Internet of Things solutions connect your physical assets to the digital world, enabling real-time monitoring, predictive maintenance, and data-driven optimization.";
    aboutImg = iotLandingAbout;
    aboutTitle = "Creating Connected Ecosystems for the Intelligent Enterprise";
    aboutDesc = "The Internet of Things (IoT) is transforming how businesses interact with the physical world. At ALFOX AI, we develop end-to-end IoT solutions that connect devices, gather critical data, and enable intelligent decision-making. From sensor integration and device management to data analytics and visualization dashboards, we build secure, scalable IoT ecosystems that deliver tangible business value. Our solutions help you monitor assets, optimize operations, and create new data-driven services that can transform your business model.";
    keyFeatures = [
      {
        title: "End-to-End Connectivity",
        description: "Seamless integration of devices, gateways, cloud platforms, and business applications.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        )
      },
      {
        title: "Real-Time Monitoring",
        description: "Live dashboards and alerts that provide instant visibility into your connected assets.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        )
      },
      {
        title: "Secure Data Management",
        description: "Enterprise-grade security protocols that protect your IoT ecosystem from vulnerabilities.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        )
      }
    ];
  }

  // GSAP animation for project showcase
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to("#to-top", {
      y: -200,
      yoyo: true,
      repeat: -1,
      duration: 1,
      ease: "back.inOut",
    }).to("#to-bottom", {
      y: -100,
      yoyo: true,
      repeat: -1,
      duration: 1,
      ease: "back.inOut",
      delay: 0.25,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      {/* Hero Banner Section - Modernized with animated elements */}
      <div id="banner" className="h-screen relative overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <img
          src={bannerImg}
          className="w-full h-full object-cover object-right absolute scale-105 transition-transform duration-10000 hover:scale-100"
          alt={`${serviceName} Banner`}
        />
        
        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000000_100%)] opacity-70"></div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/70 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary/50 rounded-full animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-primary/70 rounded-full animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-primary/50 rounded-full animate-pulse animation-delay-3000"></div>
        </div>
        
        {/* Content Container */}
        <div
          data-aos="fade-up"
          className="pt-[3rem] wrapper flex items-center h-full relative z-10"
        >
          <div className="relative z-10 px-6 justify-center h-full flex flex-col items-center gap-8 text-center md:max-w-[60rem] mx-auto animate-slide-up">
            {/* Service Badge */}
            <div className="rounded-text-box border-accent3/30 font-medium text-white backdrop-blur-sm">
              {serviceName}
            </div>
            
            {/* Main Heading with Gradient */}
            <h1 className="heading-1 text-gradient leading-tight">
              {bannerTitle}
            </h1>
            
            {/* Description with improved typography */}
            <p className="text-tertiary desc max-w-2xl text-lg">
              {bannerDesc}
            </p>
            
            {/* CTA Buttons with enhanced styling */}
            <div className="flex flex-col sm:flex-row gap-5 mt-6">
              <ScrollLink
                to="contact"
                smooth
                offset={-90}
                className="primary-btn group text-lg px-8 py-4"
              >
                <span>Get Started</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </ScrollLink>
              <ScrollLink
                to="services"
                smooth
                offset={-80}
                className="secondary-btn text-lg px-8 py-4"
              >
                Explore Services
              </ScrollLink>
            </div>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <ScrollLink
            to="about"
            smooth
            offset={-90}
            className="animate-bounce cursor-pointer text-white/50 hover:text-white transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </ScrollLink>
        </div>
      </div>

      {/* Contact Form - Preserved as requested */}
      <ContactForm />

      {/* About Section - Redesigned with modern layout */}
      <section id="about" className="section-padding bg-gradient-to-b from-black to-accent2 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000000_80%)] opacity-50"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px]"></div>
        
        <div className="wrapper relative z-10">
          {/* Section Header */}
          <div
            data-aos="fade-up"
            className="gradient-rounded-text-box mx-auto mb-12"
          >
            {serviceName}
          </div>
          
          <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-16 mt-7">
            {/* Content Column */}
            <div
              data-aos="fade-right"
              className="flex h-full flex-col gap-8 text-center lg:text-start"
            >
              <div className="flex flex-col gap-8">
                <h2 className="heading-2 text-gradient leading-tight">{aboutTitle}</h2>
                <p className="desc text-tertiary leading-relaxed text-lg">{aboutDesc}</p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-5 mt-6">
                <ScrollLink
                  to="contact"
                  smooth
                  offset={-90}
                  className="primary-btn group"
                >
                  <span>Contact Us</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </ScrollLink>
                <ScrollLink
                  to="services"
                  smooth
                  offset={-80}
                  className="secondary-btn"
                >
                  Our Services
                </ScrollLink>
              </div>
            </div>
            
            {/* Image Column with enhanced effects */}
            <div data-aos="fade-left" className="h-full relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent3/20 to-highlight/20 rounded-2xl blur-xl group-hover:opacity-100 transition-opacity duration-500 opacity-70"></div>
              <div className="absolute inset-0 border border-white/10 rounded-2xl"></div>
              <img
                src={aboutImg}
                className="object-contain max-h-[30rem] relative z-10 transition-transform duration-500 group-hover:scale-105 p-4"
                alt={`${serviceName} Illustration`}
              />
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/50 rounded-tr-2xl"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-primary/50 rounded-bl-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Preserved as requested */}
      <LandingServices page={page} />
      
      {/* Portfolio Section - Preserved as requested */}
      <Portfolio page={page} />
      
      {/* Why Choose Us Section - Preserved as requested */}
      <WhyChooseUs />

      {/* Key Features Section - Redesigned with modern cards */}
      <section className="section-padding bg-gradient-to-b from-accent2 to-black text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000000_80%)] opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-primary/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[10%] right-[5%] w-80 h-80 bg-primary/15 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="wrapper relative z-10 text-center flex flex-col gap-8">
          {/* Section Header */}
          <div
            data-aos="fade-up"
            className="gradient-rounded-text-box mx-auto mb-4"
          >
            Key Features
          </div>
          
          <h2
            data-aos="fade-up"
            className="heading-2 text-gradient md:max-w-3xl mx-auto leading-tight"
          >
            Innovative Solutions Designed for Your Success
          </h2>
          
          <p data-aos="fade-up" className="desc text-tertiary max-w-[50rem] mx-auto leading-relaxed text-lg">
            At ALFOX AI, we combine cutting-edge technology with strategic thinking to create solutions that don't just meet your current needs—they anticipate future challenges and opportunities. Our approach is built on deep technical expertise, industry knowledge, and a commitment to delivering measurable results.
          </p>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {keyFeatures.map((item, index) => (
              <div 
                key={index} 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
                className="group relative"
              >
                {/* Card Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary/10 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                
                {/* Card Content */}
                <div className="relative bg-accent1/80 backdrop-blur-sm rounded-xl p-8 h-full flex flex-col items-center text-center gap-6 hover:bg-accent1/90 transition-colors duration-300">
                  <div className="bg-accent2 p-4 rounded-full mb-2 group-hover:bg-primary/20 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-raleway font-semibold text-white">{item.title}</h3>
                  <p className="text-tertiary">{item.description}</p>
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
              className="primary-btn group inline-flex w-fit mx-auto"
            >
              <span>Discuss Your Project</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </ScrollLink>
          </div>
        </div>
      </section>

      {/* Project Showcase Section - Enhanced with modern styling */}
      <section className="section-padding bg-gradient-to-b from-black to-accent2 overflow-hidden relative">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000000_80%)] opacity-50"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px]"></div>
        
        <div className="wrapper relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            {/* Project Images Column */}
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-accent3/20 to-highlight/20 rounded-xl blur-xl opacity-70"></div>
                <div className="relative z-10 flex gap-5 justify-center">
                  {/* First Column of Images */}
                  <div
                    data-aos="fade-up"
                    id="to-top"
                    className="flex flex-col gap-4"
                  >
                    <img
                      src={section5Img1}
                      className="h-[8rem] md:h-[10rem] object-contain rounded-xl shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                      alt="Project showcase"
                    />
                    <img
                      src={section5Img2}
                      className="h-[8rem] md:h-[10rem] object-contain rounded-xl shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                      alt="Project showcase"
                    />
                    <img
                      src={section5Img3}
                      className="h-[8rem] md:h-[10rem] object-contain rounded-xl shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                      alt="Project showcase"
                    />
                  </div>
                  
                  {/* Second Column of Images */}
                  <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    id="to-bottom"
                    className="flex flex-col gap-4 mt-10"
                  >
                    <img
                      src={section5Img4}
                      className="h-[8rem] md:h-[10rem] object-contain rounded-xl shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                      alt="Project showcase"
                    />
                    <img
                      src={section5Img5}
                      className="h-[8rem] md:h-[10rem] object-contain rounded-xl shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                      alt="Project showcase"
                    />
                    <img
                      src={section5Img6}
                      className="h-[8rem] md:h-[10rem] object-contain rounded-xl shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                      alt="Project showcase"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content Column */}
            <div
              data-aos="fade-left"
              className="md:w-1/2 flex flex-col gap-8 text-center md:text-left"
            >
              <div className="relative inline-block">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-raleway text-gradient">
                  Innovate
                </h2>
                <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-primary to-transparent"></div>
              </div>
              
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <img
                  src={section5Img7}
                  className="h-[3rem] lg:h-[4rem] object-contain"
                  alt="Decorative element"
                />
                <div className="relative inline-block">
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-raleway text-gradient">
                    & Transform
                  </h2>
                  <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-primary to-transparent"></div>
                </div>
              </div>
              
              <p className="desc text-tertiary max-w-xl text-lg">
                We don't just build technology—we create digital experiences that transform businesses. 
                Our solutions are designed to solve real problems, drive measurable results, and position 
                your organization for long-term success in an increasingly digital world.
              </p>
              
              <div className="mt-8">
                <ScrollLink
                  to="contact"
                  smooth
                  offset={-90}
                  className="primary-btn inline-flex group"
                >
                  <span>Start Your Transformation</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </ScrollLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preserved Components as requested */}
      <Testimonials />
      <UnlockEfficiency />
      <EndlessOpportunitiesSection />
      <BrandLogos />
      <Contact />
      
      {/* Custom CSS for animations */}
      <style jsx="true">{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </>
  );
};

export default LandingPage;