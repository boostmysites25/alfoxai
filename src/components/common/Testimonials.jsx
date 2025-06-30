import React from "react";
import { useKeenSlider } from "keen-slider/react";
import profileImg1 from "../../assets/images/profileimg-1.jpg";
import profileImg2 from "../../assets/images/profileimg-2.png";
import profileImg3 from "../../assets/images/profileimg-3.png";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";

const reviews = [
  {
    id: 1,
    profileImg: profileImg1,
    name: "Nisha Verma",
    role: "CEO | FinTrak Solutions",
    desc: "Outstanding Results with Their AI Calling Agency. Working with ALFOX AI completely changed the way we handle customer outreach. Their AI Calling solutions increased our lead conversion by over 40%, and the AI sounded incredibly human. The automation freed up hours of manual calling. We highly recommend them!",
  },
  {
    id: 2,
    profileImg: profileImg1,
    name: "Rahul S.",
    role: "Product Manager | GameVault Studios",
    desc: "Game Development That Exceeded Expectations. The game they developed for us was beyond our expectations�visually stunning, perfectly optimized, and highly engaging. Their team worked like partners, not just developers. We're already planning the next release with them.",
  },
  {
    id: 3,
    profileImg: profileImg1,
    name: "Jessica Moore",
    role: "Marketing Lead | FitTrack Health",
    desc: "Seamless Mobile App Development Process. The team made the whole mobile app development process feel effortless. They guided us from design to deployment, delivering a beautiful, user-centric app that's already driving engagement.",
  },
  {
    id: 4,
    profileImg: profileImg1,
    name: "Arjun R.",
    role: "Founder | ProDesk SaaS",
    desc: "Expert Web Development, Delivered On Time. We needed a scalable full-stack web solution for our SaaS startup, and ALFOX AI delivered it flawlessly. Clean code, great communication, and perfect execution.",
  },
  {
    id: 5,
    profileImg: profileImg1,
    name: "Emily Tran",
    role: "CTO | SecureWorld Enterprises",
    desc: "Cybersecurity That Made Us Feel Secure. Their cybersecurity team helped us identify vulnerabilities we didn't even know existed. We now sleep better knowing our data is secure.",
  },
  {
    id: 6,
    profileImg: profileImg1,
    name: "Vikram Patel",
    role: "Operations Manager | BizFlow Corp.",
    desc: "RPA That Saved Us Hours Every Week. Implementing Robotic Process Automation with their team helped us cut down repetitive tasks by 60%. It's been a game-changer for operational efficiency.",
  },
  {
    id: 7,
    profileImg: profileImg1,
    name: "Alicia Gomez",
    role: "IT Director | TechSavvy Systems",
    desc: "Cloud Migration Without the Stress. Our cloud migration was handled professionally, securely, and on time. They truly are cloud computing experts.",
  },
  {
    id: 8,
    profileImg: profileImg1,
    name: "Daniel R.",
    role: "Product Owner | ShopStream E-commerce",
    desc: "Real Results with Their AI & ML Solutions. Thanks to their AI/ML development team, we've automated our recommendation engine, increasing sales by 30%. They're knowledgeable, fast, and reliable.",
  },
  {
    id: 9,
    profileImg: profileImg1,
    name: "Pooja K.",
    role: "Growth Manager | HealthFit Hub",
    desc: "Data Analytics That Helped Us Scale Faster. The data analytics dashboards they developed gave us real-time insight into customer behavior. We now make faster, smarter decisions.",
  },
  {
    id: 10,
    profileImg: profileImg1,
    name: "Sameer Desai",
    role: "CTO | SmartWare Industries",
    desc: "IoT Development That Connected Everything. Their IoT development connected all of our devices into one intelligent platform. This increased efficiency by over 25% in our manufacturing process.",
  },
  {
    id: 11,
    profileImg: profileImg1,
    name: "Laura Bennett",
    role: "CMO | FutureTech Hardware",
    desc: "Next-Level Engagement with AR/VR Solutions. The VR/AR application they created for our product demo took our marketing to the next level. Prospects were impressed, and it led to more sales.",
  },
  {
    id: 12,
    profileImg: profileImg1,
    name: "Harish Iyer",
    role: "CEO | DigitalLedger Hub",
    desc: "Blockchain Development with Serious Expertise. We partnered with ALFOX AI for our NFT marketplace development. The team handled everything�smart contracts, wallet integration, all of it. Highly professional.",
  },
  {
    id: 13,
    profileImg: profileImg1,
    name: "Priya Sharma",
    role: "Customer Success Lead | GreenLife Foods",
    desc: "AI Chatbots That Sound Like Humans. We deployed their AI chatbots for customer service and saw a 35% increase in resolution speed. Customers love it. Our team loves it. Win-win.",
  },
  {
    id: 14,
    profileImg: profileImg1,
    name: "Oliver Grant",
    role: "Head of Product | Zenith Software",
    desc: "Best UX/UI Design Partners We've Worked With. Their UX/UI design wasn't just beautiful it increased our user engagement by making every step intuitive and easy. Fantastic team.",
  },
];

const Testimonials = () => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 1,
        spacing: 20,
      },
      breakpoints: {
        "(max-width: 1024px)": {
          slides: {
            perView: 1,
            spacing: 20,
          },
        },
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  // Button click handler
  const handleNextClick = () => {
    if (instanceRef.current) {
      instanceRef.current.next(); // Move to the next slide
    }
  };

  const handlePrevClick = () => {
    if (instanceRef.current) {
      instanceRef.current.prev(); // Move to the prev slide
    }
  };
  return (
    <div className="py-[5rem]">
      <div className="wrapper flex flex-col items-center gap-7">
        <div className="gradient-rounded-text-box" data-aos="fade-up">
          Testimonials
        </div>
        <h2
          className="heading-2 text-white mb-2 text-center"
          data-aos="fade-up"
        >
          What Our Clients Say
        </h2>
        <div
          ref={sliderRef}
          className="keen-slider max-w-3xl"
          data-aos="fade-up"
        >
          {reviews.map((item) => (
            <div
              key={item.id}
              className="keen-slider__slide min-h-[18rem] justify-between text-white p-7 bg-[#101010] rounded-xl flex flex-col gap-4"
            >
              <p className="italic desc">" {item.desc} "</p>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  {/* <img
                    src={item.profileImg}
                    alt={item.name}
                    className="h-[3rem] w-[3rem] min-w-[3rem] aspect-square rounded-full object-cover"
                  /> */}
                  <RxAvatar className="h-[3rem] w-[3rem] min-w-[3rem] aspect-square rounded-full text-tertiary/50" />
                  <div className="flex flex-col h-full">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          data-aos="fade-up"
          className="flex justify-center items-center gap-10 mt-2"
        >
          <button
            className="text-accent3 text-5xl hover:text-accent3/70 transition-all duration-200"
            onClick={handlePrevClick}
            aria-label="Previous slide"
          >
            <IoArrowBackCircleOutline />
          </button>
          <button
            className="text-accent3 text-5xl hover:text-accent3/70 transition-all duration-200"
            onClick={handleNextClick}
            aria-label="Next slide"
          >
            <IoArrowForwardCircleOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
