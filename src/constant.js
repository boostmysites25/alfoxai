import logoImg from "./assets/images/logo/logo.png";
import whyChooseUsIcon1 from "./assets/images/ph_target-light.png";
import whyChooseUsIcon2 from "./assets/images/mage_light-bulb.png";
import whyChooseUsIcon3 from "./assets/images/tdesign_user-talk.png";
import whyChooseUsIcon4 from "./assets/images/healthicons_ui-secure-outline.png";
import whyChooseUsPng from "./assets/images/whychooseus-png.png";
import faqPng from "./assets/images/faq-character.png";
import appDevBanner from "./assets/images/app-dev-banner.webp";
import webDevBanner from "./assets/images/web-landing-banner.webp";
import aiDevBanner from "./assets/images/ai-landing-banner.jpg";
import iotDevBanner from "./assets/images/iot-landing-banner.jpg";
import webLandingAbout from "./assets/images/web-landing-about1.png";
import appLandingAbout from "./assets/images/app-landing-about.png";
import aiLandingAbout from "./assets/images/ai-landing-about.png";
import iotLandingAbout from "./assets/images/iot-landing-about.png";
import endlessOpportunitiesImg1 from "./assets/images/section-8-img-1.png";
import endlessOpportunitiesImg2 from "./assets/images/section-8-img-2.png";
import endlessOpportunitiesImg3 from "./assets/images/section-8-img-3.png";
import homeBannerVideo from "./assets/videos/home-banner.mp4";
import defaultBanner from "./assets/images/banner.jpg";
import aboutUsBanner from "./assets/images/about-us-banner.webp";
import aboutUsGridImg1 from "./assets/images/aboutus-png1.png";
import aboutUsGridImg2 from "./assets/images/aboutus-png2.png";
import aboutUsGridImg3 from "./assets/images/aboutus-png3.png";
import aboutUsGridImg4 from "./assets/images/aboutus-png4.png";
import aboutUsGridImg5 from "./assets/images/aboutus-png5.png";

// ai services icons
import { ReactComponent as aiIcon1 } from "./assets/svgs/AI Chatbots.svg";
import { ReactComponent as aiIcon2 } from "./assets/svgs/AI Voice Bots.svg";
import { ReactComponent as aiIcon3 } from "./assets/svgs/Machine Learning Models.svg";
import { ReactComponent as aiIcon4 } from "./assets/svgs/Natural Language Processing (NLP).svg";
import { ReactComponent as aiIcon5 } from "./assets/svgs/AI-Powered Analytics.svg";
import { ReactComponent as aiIcon6 } from "./assets/svgs/Automation Solutions.svg";

// app services icons
import { ReactComponent as appIcon1 } from "./assets/svgs/Native App Development.svg";
import { ReactComponent as appIcon2 } from "./assets/svgs/Cross-Platform Apps.svg";
import { ReactComponent as appIcon3 } from "./assets/svgs/App Maintenance and Support.svg";
import { ReactComponent as appIcon4 } from "./assets/svgs/App Monetization Strategies.svg";

// web services icons
import { ReactComponent as webIcon1 } from "./assets/svgs/E-commerce Development.svg";
import { ReactComponent as webIcon2 } from "./assets/svgs/Responsive Web Design.svg";
import { ReactComponent as webIcon3 } from "./assets/svgs/SEO & Performance Optimization.svg";
import { ReactComponent as webIcon4 } from "./assets/svgs/Content Management Systems.svg";

// iot services icons
import { ReactComponent as iotIcon1 } from "./assets/svgs/Smart Device Integration.svg";
import { ReactComponent as iotIcon2 } from "./assets/svgs/Real-Time Data Analytics.svg";
import { ReactComponent as iotIcon3 } from "./assets/svgs/Automation.svg";
import { ReactComponent as iotIcon4 } from "./assets/svgs/Secure IoT Solutions.svg";

import { lazy } from "react";
const Home = lazy(() => import("./pages/website/Home"));
const Services = lazy(() => import("./pages/website/Services"));
const ContactUs = lazy(() => import("./pages/website/ContactUs"));
const AboutUs = lazy(() => import("./pages/website/AboutUs"));
const Portfolio = lazy(() => import("./pages/website/Portfolio"));
const Careers = lazy(() => import("./pages/website/Careers"));
const Blogs = lazy(() => import("./pages/website/Blogs"));
const BlogPost = lazy(() => import("./pages/website/BlogPost"));

export {
  logoImg,
  whyChooseUsPng,
  whyChooseUsIcon1,
  whyChooseUsIcon2,
  whyChooseUsIcon3,
  whyChooseUsIcon4,
  faqPng,
  appDevBanner,
  webDevBanner,
  webLandingAbout,
  appLandingAbout,
  endlessOpportunitiesImg1,
  endlessOpportunitiesImg2,
  endlessOpportunitiesImg3,
  homeBannerVideo,
  defaultBanner,
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
  aiDevBanner,
  aiLandingAbout,
  iotDevBanner,
  iotLandingAbout,
};

// company details
export const companyDetails = {
  phone: "+919880636948",
  whatsapp: "919880636948",
  email: "info@alfoxai.com",
  address:
    "WeWork, Salarpuria Symbiosis, Bannerghatta Road, Venugopal Reddy Layout, Arekere, Bengaluru, Karnataka - 560076",
  twitter: "https://x.com/Alfox_ai?t=XRhKLlmuBrsCsMXmb8yW2g&s=08",
  linkedin: "https://www.linkedin.com/company/alfox-ai/",
  instagram: "https://www.instagram.com/alfox.ai?igsh=cTNwdmxjbmMzNjF6",
  facebook: "https://www.facebook.com/share/1J9GcHPmJx/",
  youtube: "https://www.youtube.com/channel/UCo-nq9CzM1ANR8wqANnmG4w",
};

// website routes
export const routes = [
  {
    name: "Home",
    path: "/",
    component: <Home />,
  },
  {
    name: "About Us",
    path: "/about-us",
    component: <AboutUs />,
  },
  {
    name: "Services",
    path: "/services",
    component: <Services />,
  },
  {
    name: "Our Products",
    path: "",
  },
  {
    name: "Portfolio",
    path: "/portfolio",
    component: <Portfolio />,
  },
  {
    name: "Careers",
    path: "/careers",
    component: <Careers />,
  },
  {
    name: "Blogs",
    path: "/blogs",
    component: <Blogs />,
  },
  {
    name: "Blog Post",
    path: "/blogs/:slug",
    component: <BlogPost />,
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    component: <ContactUs />,
  },
];

export const faqs = [
  {
    id: 1,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 2,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 3,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 4,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 5,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Development",
    icon: webIcon1,
    description:
      "Build and scale your online store with custom features that enhance the shopping experience for your customers.",
  },
  {
    id: 2,
    title: "Responsive Web Design",
    icon: webIcon2,
    description:
      "We create mobile-optimized websites that look great on any device, ensuring a seamless user experience.",
  },
  {
    id: 3,
    title: "SEO & Performance Optimization",
    icon: webIcon3,
    description:
      "Your website will be built with best practices for SEO, helping you rank higher in search engines, while ensuring speed and functionality.",
  },
  {
    id: 4,
    title: "Content Management Systems",
    icon: webIcon4,
    description:
      "Manage your website content easily with platforms like WordPress or custom CMS solutions.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "Native App Development",
    icon: appIcon1,
    description:
      "We specialize in creating native mobile apps for both iOS and Android, ensuring an optimal experience for each platform.",
  },
  {
    id: 2,
    title: "Cross-Platform Apps",
    icon: appIcon2,
    description:
      "Our cross-platform apps enable you to reach a larger audience with minimal development costs, making it easy to deploy on both iOS and Android.",
  },
  {
    id: 3,
    title: "App Maintenance and Support",
    icon: appIcon3,
    description:
      "After launch, we provide continuous support, updates, and improvements to keep your app running smoothly and ensure it stays relevant.",
  },
  {
    id: 4,
    title: "App Monetization Strategies",
    icon: appIcon4,
    description:
      "We can help design your app with revenue generating features like in-app purchases, subscriptions, or ads.",
  },
];

// ai services
export const aiServices = [
  {
    id: 1,
    title: "AI Chatbots",
    icon: aiIcon1,
    description:
      "Enhance customer interactions with AI-driven chatbots. Offer real-time support, answer queries, and assist decision-making—all while continuously learning and improving from every interaction.",
  },
  {
    id: 2,
    title: "AI Voice Bots",
    icon: aiIcon2,
    description:
      "Revolutionize customer service with voice bots that deliver seamless voice-based interactions, personalized experiences, and efficient query management.",
  },
  {
    id: 3,
    title: "Machine Learning Models",
    icon: aiIcon3,
    description:
      "Leverage predictive models that identify trends, optimize processes, and deliver real-time insights, empowering you to make data-driven decisions.",
  },
  {
    id: 4,
    title: "Natural Language Processing",
    icon: aiIcon4,
    description:
      "Create chatbots and virtual assistants that understand and respond like humans, taking customer engagement and support to the next level.",
  },
  {
    id: 5,
    title: "AI-Powered Analytics",
    icon: aiIcon5,
    description:
      "Turn data into a competitive advantage with AI-powered analytics that identify patterns and deliver insights to keep you ahead of the curve.",
  },
  {
    id: 6,
    title: "Automation Solutions",
    icon: aiIcon6,
    description:
      "Streamline operations by automating repetitive tasks, saving time, reducing human error, and improving operational efficiency.",
  },
];

// iot services
export const iotServices = [
  {
    id: 1,
    title: "Smart Home Automation",
    icon: iotIcon1,
    description:
      "Connect sensors, devices, and machines to create intelligent systems that enhance decision-making and efficiency.",
  },
  {
    id: 2,
    title: "Real-Time Data Analytics",
    icon: iotIcon2,
    description:
      "Analyze data from connected devices instantly to gain actionable insights and drive smarter business strategies.",
  },
  {
    id: 3,
    title: "Automation",
    icon: iotIcon3,
    description:
      "Automate tasks, reduce costs, and boost productivity with IoT powered solutions tailored to your operations.",
  },
  {
    id: 4,
    title: "Secure IoT Solutions",
    icon: iotIcon4,
    description:
      "Protect your IoT systems with robust security protocols, safeguarding your data and devices.",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    title: "AI Development",
    desc: "Transforming business operations with intelligent solutions that adapt, learn, and deliver measurable results for your enterprise.",
    detailContent:
      "Artificial Intelligence is revolutionizing how businesses operate in today's digital landscape. At Alfox AI, we craft intelligent solutions that transform raw data into strategic assets, automate complex workflows, and create personalized customer experiences. Our AI implementations are designed to be transparent, ethical, and aligned with your specific business challenges and opportunities.",
    whatWeOffer: [
      {
        title: "Intelligent Virtual Assistants",
        desc: "Deploy sophisticated conversational AI that handles customer inquiries 24/7, learns from each interaction, and seamlessly escalates to human agents when necessary.",
      },
      {
        title: "Speech Recognition Systems",
        desc: "Implement advanced voice technology that understands natural language, adapts to different accents, and enables hands-free operation across your digital touchpoints.",
      },
      {
        title: "Predictive Intelligence",
        desc: "Harness the power of your data with custom algorithms that forecast trends, identify opportunities, and help you make proactive business decisions.",
      },
      {
        title: "Cognitive Language Solutions",
        desc: "Integrate systems that comprehend context, sentiment, and intent in human communication, enabling more meaningful digital interactions.",
      },
      {
        title: "Business Intelligence Platforms",
        desc: "Transform complex datasets into visual insights that reveal hidden patterns and strategic opportunities specific to your industry.",
      },
      {
        title: "Workflow Intelligence",
        desc: "Streamline operations with smart systems that identify bottlenecks, suggest process improvements, and handle routine tasks with minimal human intervention.",
      },
    ],
  },
  {
    id: 2,
    title: "Mobile App Development",
    desc: "Creating intuitive, high-performance mobile experiences that strengthen your brand and deliver value across all user touchpoints.",
    detailContent:
      "In today's mobile-first world, exceptional app experiences are no longer optional. Our development team combines technical expertise with strategic thinking to create applications that users love to engage with. We focus on intuitive interfaces, performance optimization, and seamless functionality that reflects your brand values while solving real user problems.",
    whatWeOffer: [
      {
        title: "Platform-Specific Development",
        desc: "Build apps that leverage the unique capabilities of iOS and Android platforms, delivering optimized performance and native user experiences.",
      },
      {
        title: "Unified Mobile Solutions",
        desc: "Develop once and deploy everywhere with frameworks that maintain consistent functionality and design across multiple platforms while reducing time-to-market.",
      },
      {
        title: "Lifecycle Management",
        desc: "Benefit from comprehensive post-launch services including performance monitoring, regular updates, security patches, and feature enhancements.",
      },
      {
        title: "Revenue Optimization",
        desc: "Implement sophisticated monetization frameworks with subscription models, in-app purchases, and strategic ad placements designed for maximum conversion.",
      },
    ],
  },
  {
    id: 3,
    title: "Custom Software Development",
    desc: "Tailored digital solutions engineered to address your specific operational challenges and create sustainable competitive advantages.",
    detailContent:
      "Off-the-shelf software often requires businesses to adapt their processes to the technology. Our custom development approach reverses this paradigm, creating purpose-built solutions that align perfectly with your existing workflows and future growth plans. We specialize in transforming complex business requirements into elegant, scalable software that evolves with your organization.",
    whatWeOffer: [
      {
        title: "Enterprise Management Systems",
        desc: "Unify your business operations with integrated platforms that connect departments, streamline information flow, and provide actionable insights for leadership.",
      },
      {
        title: "Process Digitization",
        desc: "Transform manual workflows into efficient digital processes that reduce errors, accelerate completion times, and create measurable operational improvements.",
      },
      {
        title: "Cloud-Native Architecture",
        desc: "Leverage modern cloud infrastructure for applications that scale dynamically, maintain high availability, and optimize resource utilization.",
      },
      {
        title: "Future-Proof Engineering",
        desc: "Benefit from modular design principles that allow your software to adapt to changing business requirements without requiring complete redevelopment.",
      },
    ],
  },
  {
    id: 4,
    title: "Web Development",
    desc: "Crafting digital experiences that balance aesthetic appeal with technical excellence to drive meaningful user engagement and business results.",
    detailContent:
      "Your website is often the first and most frequent touchpoint with your audience. At Alfox AI, we create web experiences that make powerful first impressions while delivering ongoing value through intuitive navigation, compelling content presentation, and frictionless conversion paths. Our development approach emphasizes both the visible elements users interact with and the technical foundation that ensures performance and security.",
    whatWeOffer: [
      {
        title: "Adaptive Interface Design",
        desc: "Create seamless experiences across devices with interfaces that intelligently adjust to different screen sizes while maintaining functionality and visual integrity.",
      },
      {
        title: "Digital Commerce Solutions",
        desc: "Transform browsers into buyers with customized shopping experiences featuring intuitive product discovery, frictionless checkout, and personalized recommendations.",
      },
      {
        title: "Technical Optimization",
        desc: "Maximize visibility and user satisfaction with sites engineered for speed, search engine visibility, and accessibility compliance.",
      },
      {
        title: "Content Ecosystem Development",
        desc: "Implement flexible content frameworks that empower your team to update and expand your digital presence without technical dependencies.",
      },
    ],
  },

  {
    id: 5,
    title: "UI/UX Design",
    desc: "Crafting digital interactions that feel intuitive, purposeful, and emotionally resonant while driving measurable business outcomes.",
    detailContent:
      "Exceptional digital experiences don't happen by accident. They result from a deliberate design process that balances user needs, business objectives, and technical possibilities. Our design team specializes in creating interfaces that not only look appealing but fundamentally improve how users interact with technology. We transform complex functions into simple, enjoyable experiences that build loyalty and drive adoption.",
    whatWeOffer: [
      {
        title: "Experience Research",
        desc: "Develop deep understanding of your users through structured research methodologies that reveal motivations, pain points, and behavioral patterns.",
      },
      {
        title: "Interaction Modeling",
        desc: "Visualize and refine user journeys through interactive prototypes that simulate real-world usage and validate design concepts before development.",
      },
      {
        title: "Cross-Device Experience Design",
        desc: "Create cohesive experiences that maintain consistency and functionality across desktop, tablet, mobile, and emerging digital touchpoints.",
      },
      {
        title: "Usability Validation",
        desc: "Verify design effectiveness through structured evaluation sessions that identify improvement opportunities and confirm intuitive user interaction.",
      },
    ],
  },
  {
    id: 6,
    title: "Internet of Things (IoT) Development",
    desc: "Connecting the physical and digital worlds through smart, networked solutions that generate actionable insights and enable automated decision-making.",
    detailContent:
      "IoT is transforming industries by creating smart, connected ecosystems. We develop IoT solutions that allow businesses to gather real-time data, automate tasks, and make data-driven decisions. Whether it’s smart homes, industrial IoT, or healthcare, our IoT services empower businesses to harness the power of connected devices.",
    whatWeOffer: [
      {
        title: "Connected Environment Systems",
        desc: "Create intelligent spaces where devices communicate seamlessly to optimize conditions, enhance security, and respond to human presence.",
      },
      {
        title: "Operational Intelligence",
        desc: "Transform raw sensor data into meaningful business intelligence through advanced analytics platforms that identify patterns and anomalies in real-time.",
      },
      {
        title: "Process Autonomy",
        desc: "Develop self-regulating systems that monitor conditions, make adjustments, and maintain optimal performance with minimal human intervention.",
      },
      {
        title: "Secure IoT Architecture",
        desc: "Implement multi-layered security frameworks that protect connected devices, data transmission, and cloud infrastructure from emerging threats.",
      },
    ],
  },
  {
    id: 7,
    title: "Blockchain Development",
    desc: "From decentralized apps (dApps) to smart contracts, we help you leverage blockchain technology for secure, scalable, and efficient solutions.",
    detailContent:
      "Blockchain is revolutionizing industries with its unmatched security, transparency, and efficiency. At Alfox AI, we offer comprehensive blockchain services to help businesses innovate and streamline operations. From decentralized apps (dApps) to smart contracts, we help you leverage blockchain technology for secure, scalable, and efficient solutions.",
    whatWeOffer: [
      {
        title: "Smart Contract Development",
        desc: "Automate and secure agreements with self executing contracts on the blockchain, ensuring transparency and reducing errors.",
      },
      {
        title: "Blockchain Consulting",
        desc: "Our experts guide you through the process of adopting blockchain, identifying the best solutions for your business.",
      },
      {
        title: "Tokenization",
        desc: "Convert physical or digital assets into blockchain-based tokens, allowing secure, fractional ownership.",
      },
      {
        title: "Blockchain Integration",
        desc: "Seamlessly integrate blockchain into your existing systems, improving security, data integrity, and transaction efficiency.",
      },
      {
        title: "Blockchain Security",
        desc: "We ensure that your blockchain solutions are secure, tamper-proof, and resilient to cyber threats.",
      },
    ],
  },
  {
    id: 8,
    title: "AI Calling Agency",
    desc: "Revolutionize the way you connect with your customers through intelligent, conversational voice solutions that operate around the clock.",
    detailContent:
      "Our AI Calling Agency transforms how businesses engage with customers through voice channels. We've developed sophisticated AI systems that conduct natural, productive conversations at scale. These solutions handle everything from initial outreach to ongoing support, creating personalized interactions that feel remarkably human while operating with machine efficiency. This technology allows you to maintain consistent customer communication without the limitations of traditional call centers.",
    whatWeOffer: [
      {
        title: "Intelligent Outbound Campaigns",
        desc: "Deploy targeted calling campaigns that intelligently adapt to customer responses, qualifying leads and nurturing prospects without human intervention.",
      },
      {
        title: "Conversational AI Support",
        desc: "Provide 24/7 customer service through AI agents that understand context, resolve issues, and seamlessly escalate to human representatives when necessary.",
      },
      {
        title: "Automated Appointment Scheduling",
        desc: "Eliminate scheduling friction with AI assistants that handle appointment booking, confirmations, and rescheduling through natural voice conversations.",
      },
      {
        title: "Voice Analytics & Insights",
        desc: "Gain valuable business intelligence from every call with advanced analytics that identify patterns, sentiment, and opportunities for improvement.",
      },
    ],
  },
  {
    id: 9,
    title: "Game Development",
    desc: "Create captivating digital experiences that entertain, engage, and generate revenue across multiple platforms and gaming environments.",
    detailContent:
      "Game development is where technology meets creativity to produce interactive experiences that captivate audiences. At Alfox AI, our game development team combines artistic vision with technical expertise to create games that resonate with players and achieve business objectives. Whether you're looking to entertain, educate, or engage users in new ways, our comprehensive development approach ensures your game stands out in a competitive market.",
    whatWeOffer: [
      {
        title: "Cross-Platform Game Creation",
        desc: "Develop immersive games that perform flawlessly across mobile, desktop, console, and web platforms, maximizing your potential audience reach.",
      },
      {
        title: "Advanced Graphics & Animation",
        desc: "Bring your game world to life with stunning visuals, fluid animations, and special effects that create memorable, visually impressive experiences.",
      },
      {
        title: "Game Monetization Strategy",
        desc: "Implement effective revenue models including in-app purchases, premium features, subscription services, and strategic ad placement.",
      },
      {
        title: "Multiplayer & Social Integration",
        desc: "Create engaging social experiences with robust multiplayer functionality, leaderboards, and seamless integration with social platforms.",
      },
    ],
  },
  {
    id: 10,
    title: "Cybersecurity Solutions",
    desc: "Protect your digital assets with comprehensive security strategies that defend against evolving threats while enabling business growth.",
    detailContent:
      "In today's interconnected world, cybersecurity isn't just an IT concern—it's a business imperative. Our cybersecurity solutions provide multi-layered protection for your organization's most valuable digital assets. We combine advanced technology with strategic expertise to identify vulnerabilities, implement robust defenses, and respond effectively to security incidents. Our approach balances strong protection with operational flexibility, ensuring security enhances rather than hinders your business operations.",
    whatWeOffer: [
      {
        title: "Vulnerability Assessment & Penetration Testing",
        desc: "Identify security weaknesses before attackers do with comprehensive testing that simulates real-world attack scenarios and provides actionable remediation plans.",
      },
      {
        title: "Security Architecture Design",
        desc: "Build security into your systems from the ground up with architectures that implement defense-in-depth strategies and follow zero-trust principles.",
      },
      {
        title: "Incident Response Planning",
        desc: "Prepare for security events with customized response plans, regular drills, and rapid-response protocols that minimize potential damage.",
      },
      {
        title: "Compliance & Governance",
        desc: "Navigate complex regulatory requirements with frameworks that ensure your security measures satisfy legal obligations while protecting sensitive data.",
      },
    ],
  },
  {
    id: 11,
    title: "Robotic Process Automation",
    desc: "Transform business efficiency by automating repetitive tasks and workflows, freeing your team to focus on strategic, high-value activities.",
    detailContent:
      "Robotic Process Automation (RPA) represents the next evolution in business efficiency. At Alfox AI, we implement intelligent automation solutions that handle routine, rule-based tasks with perfect accuracy and tireless consistency. Our RPA implementations work across your existing systems without requiring major infrastructure changes, delivering rapid ROI through reduced operational costs, improved accuracy, and enhanced employee satisfaction as teams shift from repetitive tasks to meaningful work.",
    whatWeOffer: [
      {
        title: "Process Analysis & Optimization",
        desc: "Identify ideal automation candidates through detailed workflow analysis that quantifies potential time savings and ROI before implementation begins.",
      },
      {
        title: "Custom Bot Development",
        desc: "Create specialized software robots tailored to your specific processes, capable of working across multiple applications just as human operators would.",
      },
      {
        title: "Intelligent Document Processing",
        desc: "Automate the extraction, validation, and processing of information from documents using AI-enhanced capabilities that handle semi-structured data.",
      },
      {
        title: "Enterprise Automation Strategy",
        desc: "Develop comprehensive automation roadmaps that prioritize high-impact opportunities and create a foundation for scaling automation across your organization.",
      },
    ],
  },
  {
    id: 12,
    title: "Cloud Computing Solutions",
    desc: "Harness the full potential of cloud technology with tailored solutions that enhance scalability, security, and cost-efficiency.",
    detailContent:
      "Cloud computing has transformed from a technological advantage to a business necessity. Our cloud solutions help organizations leverage this powerful paradigm to achieve unprecedented flexibility and efficiency. Whether you're making your first move to the cloud or optimizing an existing implementation, our team provides the expertise to maximize your investment. We design cloud environments that scale with your needs, maintain robust security, and optimize costs through intelligent resource management.",
    whatWeOffer: [
      {
        title: "Cloud Migration & Modernization",
        desc: "Transition from legacy systems to cloud platforms with carefully planned migrations that minimize disruption while transforming application architecture.",
      },
      {
        title: "Multi-Cloud Strategy",
        desc: "Develop balanced approaches that leverage the strengths of different cloud providers while avoiding vendor lock-in and optimizing for performance and cost.",
      },
      {
        title: "Cloud-Native Development",
        desc: "Build applications specifically designed for cloud environments, utilizing microservices, containers, and serverless architectures for maximum efficiency.",
      },
      {
        title: "Cloud Security & Compliance",
        desc: "Implement comprehensive security controls that protect cloud-based assets while ensuring compliance with relevant regulatory requirements.",
      },
    ],
  },
  {
    id: 13,
    title: "Data Analytics & Business Intelligence",
    desc: "Transform raw data into strategic insights that drive informed decision-making and reveal new opportunities for growth and optimization.",
    detailContent:
      "In the age of information, your data is one of your most valuable assets—if you can extract its insights. Our Data Analytics and Business Intelligence solutions transform scattered information into cohesive, actionable intelligence. We build comprehensive data ecosystems that collect, process, analyze, and visualize information from across your organization. The result is a clear view of your business performance, customer behavior, and market opportunities that empowers leaders to make confident, data-driven decisions.",
    whatWeOffer: [
      {
        title: "Data Strategy & Architecture",
        desc: "Develop comprehensive frameworks for collecting, storing, and managing data across your organization to ensure quality, accessibility, and governance.",
      },
      {
        title: "Interactive Dashboards & Reporting",
        desc: "Create intuitive visual interfaces that transform complex data into clear insights, enabling stakeholders to monitor KPIs and identify trends at a glance.",
      },
      {
        title: "Predictive Analytics",
        desc: "Leverage advanced statistical models and machine learning to forecast trends, anticipate changes, and identify future opportunities and challenges.",
      },
      {
        title: "Big Data Processing",
        desc: "Implement solutions that efficiently handle large volumes of structured and unstructured data, extracting value from information assets of any scale.",
      },
    ],
  },
  {
    id: 14,
    title: "VR/AR Solutions",
    desc: "Create immersive digital experiences that transform how users interact with products, services, and educational content.",
    detailContent:
      "Virtual and Augmented Reality technologies are redefining what's possible in customer engagement, training, and product visualization. At Alfox AI, we develop immersive VR/AR experiences that bridge the gap between physical and digital worlds. Our solutions help businesses showcase products in interactive 3D, train employees in risk-free virtual environments, and create memorable brand experiences that drive engagement. We focus on creating practical applications of these technologies that deliver measurable business value alongside technological innovation.",
    whatWeOffer: [
      {
        title: "Interactive Product Visualization",
        desc: "Enable customers to experience products virtually with interactive 3D models that can be viewed, customized, and explored from any angle.",
      },
      {
        title: "Immersive Training Simulations",
        desc: "Develop VR training environments that allow employees to practice complex or dangerous procedures in safe, realistic virtual settings.",
      },
      {
        title: "Augmented Reality Marketing",
        desc: "Create engaging AR experiences that bring marketing materials to life, allowing users to interact with your brand through their mobile devices.",
      },
      {
        title: "Virtual Showrooms & Tours",
        desc: "Build virtual spaces that showcase properties, facilities, or products, allowing remote exploration with rich interactive elements.",
      },
    ],
  },
  {
    id: 15,
    title: "AI Chatbot Development",
    desc: "Deploy intelligent conversational interfaces that engage users, resolve inquiries, and drive conversions across digital touchpoints.",
    detailContent:
      "AI chatbots have evolved from simple scripted responders to sophisticated conversational agents capable of understanding context and intent. Our chatbot solutions leverage advanced natural language processing to create digital assistants that engage users in meaningful, productive interactions. These intelligent systems can handle customer support, sales inquiries, appointment scheduling, and more—operating 24/7 across websites, messaging platforms, and mobile apps to provide immediate assistance whenever and wherever your customers need it.",
    whatWeOffer: [
      {
        title: "Conversational AI Design",
        desc: "Craft natural dialogue flows and personality traits that align with your brand voice while efficiently guiding users toward their goals.",
      },
      {
        title: "Multi-Channel Deployment",
        desc: "Implement consistent chatbot experiences across websites, mobile apps, messaging platforms, and voice assistants for seamless customer engagement.",
      },
      {
        title: "Integration with Business Systems",
        desc: "Connect chatbots with your CRM, knowledge base, e-commerce, and other systems to provide personalized service and execute transactions.",
      },
      {
        title: "Continuous Learning & Improvement",
        desc: "Implement feedback loops and machine learning capabilities that allow your chatbot to improve over time based on real user interactions.",
      },
    ],
  },
  {
    id: 16,
    title: "Full-Stack Web Development",
    desc: "Build powerful, scalable web applications with seamless front-end experiences backed by robust server-side architecture.",
    detailContent:
      "Full-stack web development encompasses the complete spectrum of web application creation—from the user interface to the server infrastructure. Our development team excels at creating cohesive web experiences where front-end elegance is perfectly matched with back-end performance. We build applications that not only look impressive but also scale efficiently, process data securely, and integrate seamlessly with your existing systems. Our full-stack approach ensures consistency and quality across every layer of your web application.",
    whatWeOffer: [
      {
        title: "Modern Front-End Development",
        desc: "Create responsive, interactive user interfaces using cutting-edge frameworks that deliver exceptional user experiences across all devices.",
      },
      {
        title: "Robust Back-End Architecture",
        desc: "Build secure, scalable server-side systems that efficiently handle data processing, user authentication, and third-party integrations.",
      },
      {
        title: "API Development & Integration",
        desc: "Design and implement RESTful APIs and microservices that enable seamless communication between your application components and external services.",
      },
      {
        title: "Progressive Web Applications",
        desc: "Develop applications that combine the best of web and mobile experiences, with offline capabilities, push notifications, and app-like interfaces.",
      },
    ],
  },
  {
    id: 17,
    title: "Artificial Intelligence & Machine Learning",
    desc: "Harness the transformative power of AI and ML to extract insights from data, automate complex tasks, and create intelligent systems.",
    detailContent:
      "Artificial Intelligence and Machine Learning are revolutionizing how businesses operate, innovate, and compete. Our AI/ML solutions help organizations move beyond traditional analytics to systems that can learn, adapt, and make intelligent decisions. We develop custom algorithms and models tailored to your specific business challenges, whether you're looking to predict customer behavior, optimize operations, or create entirely new AI-powered products and services.",
    whatWeOffer: [
      {
        title: "Custom ML Model Development",
        desc: "Build specialized machine learning models that address your unique business challenges, from predictive maintenance to customer churn prevention.",
      },
      {
        title: "Computer Vision Solutions",
        desc: "Implement systems that can analyze and interpret visual information from images and video, enabling applications from quality control to security monitoring.",
      },
      {
        title: "Natural Language Understanding",
        desc: "Develop AI systems that comprehend text and speech, extracting meaning, sentiment, and intent to enable intelligent document processing and conversational interfaces.",
      },
      {
        title: "AI Strategy & Implementation",
        desc: "Create comprehensive roadmaps for AI adoption that align with your business goals, data capabilities, and organizational readiness.",
      },
    ],
  },
  {
    id: 18,
    title: "UX/UI Design",
    desc: "Create intuitive, engaging digital experiences that delight users while achieving your business objectives through strategic design.",
    detailContent:
      "Great design goes beyond aesthetics—it's about creating intuitive experiences that solve real user problems while advancing business goals. Our UX/UI design team combines creative vision with data-driven methodology to craft digital experiences that users love to engage with. We focus on understanding both user needs and business objectives, creating interfaces that are not only visually appealing but fundamentally useful, usable, and effective at driving desired outcomes.",
    whatWeOffer: [
      {
        title: "User-Centered Design Process",
        desc: "Apply proven design methodologies that place real user needs at the center of every decision, resulting in products people genuinely want to use.",
      },
      {
        title: "Interface Design Systems",
        desc: "Create comprehensive design systems with reusable components that ensure visual consistency, accelerate development, and simplify future updates.",
      },
      {
        title: "Interaction Design",
        desc: "Craft intuitive, satisfying interactions that guide users naturally through your digital product, reducing friction and enhancing engagement.",
      },
      {
        title: "Conversion-Focused Design",
        desc: "Develop interfaces specifically engineered to guide users toward key actions, with elements strategically designed to improve conversion rates.",
      },
    ],
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("./assets/images/portfolio/web-development/cold-creekcap.webp"),
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 2,
    img: require("./assets/images/portfolio/web-development/think-reality.webp"),
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
  {
    id: 3,
    img: require("./assets/images/portfolio/web-development/akash-mega-mart.webp"),
    title: "Akash Mega Mart",
    link: "https://akashmegamart.com/",
  },
  {
    id: 4,
    img: require("./assets/images/portfolio/web-development/midwam.webp"),
    title: "Midwam",
    link: "https://www.midwam.com/en/about",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("./assets/images/portfolio/app-development/akash_mega_mart-app.webp"),
    title: "Akash Mega Mart Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
  },
  {
    id: 2,
    img: require("./assets/images/portfolio/app-development/feelit_app.webp"),
    title: "FeelIt Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
  },
  {
    id: 3,
    img: require("./assets/images/portfolio/app-development/klikomics.webp"),
    title: "Klikomics Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 4,
    img: require("./assets/images/portfolio/app-development/autosnap-app.webp"),
    title: "AutoSnap Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 5,
    img: require("./assets/images/portfolio/app-development/rentop.webp"),
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];

// featured
export const featuredContent = [
  {
    img: "",
    website: "INC91",
    headline: "Alfox AI : Revolutionizing IT and AI Developments",
    link: "",
  },
  {
    img: "",
    website: "Hindustan Bytes",
    headline:
      "Alfox AI : Transforming the IT Landscape with Cutting Edge AI Solutions",
    link: "",
  },
];

// ceo interviews
export const ceoInterviews = [
  {
    source: "Interview",
    headline: "An insightful conversation with our CEO",
    videoId: "b-L_V-z-FDs",
  },
  {
    source: "Interview",
    headline: "Our CEO shares key insights on business growth",
    videoId: "K7pZ0nibsUg",
  },
];
