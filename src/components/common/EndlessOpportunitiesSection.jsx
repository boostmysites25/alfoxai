import React, { useEffect } from "react";
import {
  endlessOpportunitiesImg1,
  endlessOpportunitiesImg2,
  endlessOpportunitiesImg3,
} from "../../constant";
import gsap from "gsap";
import img1 from "../../assets/images/client-logos/1.png";
import img2 from "../../assets/images/client-logos/2.png";
import img3 from "../../assets/images/client-logos/3.png";
import img4 from "../../assets/images/client-logos/4.png";
import img5 from "../../assets/images/client-logos/5.png";
import img6 from "../../assets/images/client-logos/6.png";
import img7 from "../../assets/images/client-logos/7.png";
import img8 from "../../assets/images/client-logos/8.png";
import img9 from "../../assets/images/client-logos/9.png";
import img10 from "../../assets/images/client-logos/10.png";

const EndlessOpportunitiesSection = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to("#from-right", {
      translateX: -300,
      yoyo: true,
      repeat: -1,
      duration: 1,
      ease: "back.inOut",
    })
    .to("#from-left", {
      translateX: -300,
      yoyo: true,
      repeat: -1,
      duration: 1,
      ease: "back.inOut",
      delay: 0.5,
    });

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <>
      <section className="wrapper flex flex-col items-center justify-center py-14 text-center md:py-20 text-white">
        <div data-aos="fade-up">
          <div className="flex justify-center flex-col">
            <div data-aos="fade-up" className="flex md:-translate-x-[30%]">
              <h2 className="text-[1rem] sm:text-3xl text-end font-raleway">
                One <br />
                Solution
              </h2>
              <h2 className="text-5xl sm:text-7xl font-raleway font-medium md:mt-1">
                Limitless
              </h2>
            </div>
            <h2
              data-aos="fade-up"
              className="text-5xl sm:text-7xl md:translate-x-[30%] font-raleway font-medium"
            >
              Potential
            </h2>
          </div>
        </div>
      </section>
      <section className="pb-[5rem] bg-black overflow-hidden">
        <div className="wrapper">
          <div className="flex flex-col gap-5">
            <div
              id="from-right"
              className="flex items-center gap-2 md:translate-x-[25vw]"
            >
              <div className="bg-white w-fit rounded-full">
                <img
                  src={img1}
                  className="min-w-[10rem] w-[10rem] md:min-w-[15rem] md:w-[15rem] object-contain"
                  alt=""
                />
              </div>
              <div className="bg-white w-fit rounded-full">
                <img
                  src={img2}
                  className="min-w-[10rem] w-[10rem] md:min-w-[15rem] md:w-[15rem] object-contain"
                  alt=""
                />
              </div>
              <div className="bg-white w-fit rounded-full">
                <img
                  src={img3}
                  className="min-w-[10rem] w-[10rem] md:min-w-[15rem] md:w-[15rem] object-contain"
                  alt=""
                />
              </div>
              <div className="bg-white w-fit rounded-full">
                <img
                  src={img4}
                  className="min-w-[10rem] w-[10rem] md:min-w-[15rem] md:w-[15rem] object-contain"
                  alt=""
                />
              </div>
              <div className="bg-white w-fit rounded-full">
                <img
                  src={img5}
                  className="min-w-[10rem] w-[10rem] md:min-w-[15rem] md:w-[15rem] object-contain"
                  alt=""
                />
              </div>
              {/* <img
                src={endlessOpportunitiesImg1}
                className="h-[4rem] md:h-[7rem] object-cover rounded-full"
                alt=""
              />
              <img
                src={endlessOpportunitiesImg2}
                className="h-[4rem] md:h-[7rem] object-cover rounded-full"
                alt=""
              />
              <img
                src={endlessOpportunitiesImg3}
                className="h-[4rem] md:h-[7rem] object-cover rounded-full"
                alt=""
              />
              <img
                src={endlessOpportunitiesImg2}
                className="h-[4rem] md:h-[7rem] object-cover rounded-full"
                alt=""
              /> */}
            </div>

            <div
              id="from-left"
              className="flex items-center gap-2 md:translate-x-[25vw]"
            >
              <div className="bg-white w-fit rounded-full">
                <img
                  src={img6}
                  className="min-w-[10rem] w-[10rem] md:min-w-[15rem] md:w-[15rem] object-contain"
                  alt=""
                />
              </div>
              <div className="bg-white w-fit rounded-full">
                <img
                  src={img7}
                  className="min-w-[10rem] w-[10rem] md:min-w-[15rem] md:w-[15rem] object-contain"
                  alt=""
                />
              </div>
              <div className="bg-white w-fit rounded-full">
                <img
                  src={img8}
                  className="min-w-[10rem] w-[10rem] md:min-w-[15rem] md:w-[15rem] object-contain"
                  alt=""
                />
              </div>
              <div className="bg-white w-fit rounded-full">
                <img
                  src={img9}
                  className="min-w-[10rem] w-[10rem] md:min-w-[15rem] md:w-[15rem] object-contain"
                  alt=""
                />
              </div>
              <div className="bg-white w-fit rounded-full">
                <img
                  src={img10}
                  className="min-w-[10rem] w-[10rem] md:min-w-[15rem] md:w-[15rem] object-contain"
                  alt=""
                />
              </div>
              {/* <img
                src={endlessOpportunitiesImg3}
                className="h-[4rem] md:h-[7rem] object-cover rounded-full"
                alt=""
              />
              <img
                src={endlessOpportunitiesImg2}
                className="h-[4rem] md:h-[7rem] object-cover rounded-full"
                alt=""
              />
              <img
                src={endlessOpportunitiesImg3}
                className="h-[4rem] md:h-[7rem] object-cover rounded-full"
                alt=""
              />
              <img
                src={endlessOpportunitiesImg1}
                className="h-[4rem] md:h-[7rem] object-cover rounded-full"
                alt=""
              /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EndlessOpportunitiesSection;
