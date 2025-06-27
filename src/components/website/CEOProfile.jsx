import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import ceoImage from "../../assets/images/ceo.png";

const CEOProfile = () => {
  return (
    <section className="py-[8rem] bg-gradient-to-b from-black to-accent2 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000000_80%)] opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-accent3 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[10%] right-[5%] w-80 h-80 bg-accent3 rounded-full blur-[100px] animate-pulse-slow animation-delay-2000"></div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-[15%] w-6 h-6 border border-accent3 rounded-full animate-float-slow"></div>
      <div className="absolute bottom-32 right-[20%] w-8 h-8 border border-white/10 rounded-full animate-float-slow animation-delay-1000"></div>
      <div className="absolute top-1/3 right-[10%] w-3 h-3 bg-accentborder-accent3 rounded-full animate-ping-slow"></div>
      <div className="absolute bottom-1/4 left-[30%] w-4 h-4 bg-accentborder-accent3 rounded-full animate-ping-slow animation-delay-2000"></div>

      <div className="wrapper relative z-10">
        {/* Section Header with Animated Underline */}
        <div className="text-center mb-20">
          <div data-aos="fade-up" className="gradient-rounded-text-box mx-auto">
            Leadership
          </div>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="heading-2 text-gradient mt-4 inline-block relative"
          >
            Meet Our Visionary
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></span>
          </h2>
        </div>

        {/* Main Content - Asymmetric Layout */}
        <div className="relative">
          {/* CEO Image - Offset to create visual interest */}
          <div
            data-aos="fade-up"
            className="relative z-20 mx-auto md:mx-0 md:absolute md:top-0 md:left-0 md:w-[45%] lg:w-[40%]"
          >
            <div className="group">
              {/* Animated Glow Effect */}
              <div
                className="absolute -inset-3 bg-gradient-to-r from-primary/40 to-primary/60 rounded-full blur-xl opacity-70 
                group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
              ></div>

              {/* Image Container with Hexagonal Mask */}
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                {/* Hexagonal Clip Path */}
                <div className="relative">
                  <div className="aspect-square w-full overflow-hidden clip-path-hexagon">
                    <img
                      src={ceoImage}
                      alt="Gangaraju V. S. – Founder & CEO, ALFOX AI"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/70 rounded-tl-xl"></div>
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/70 rounded-br-xl"></div>
                  </div>
                </div>
              </div>

              {/* Name Badge */}
              <div
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-primary/80 
                px-8 py-3 rounded-full shadow-xl group-hover:shadow-primary/30 transition-all duration-500"
              >
                <h3 className="text-xl font-bold text-white whitespace-nowrap">
                  Gangaraju V. S.
                </h3>
              </div>
            </div>
          </div>

          {/* Content Cards - Offset to right */}
          <div className="mt-20 md:mt-0 md:ml-auto md:w-[65%] lg:w-[70%] relative z-10">
            {/* Title and Quote Card */}
            <div
              data-aos="fade-left"
              className="bg-gradient-to-br from-accent1/40 to-accent1/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl mb-8 md:ml-[15%]"
            >
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm">
                    CEO
                  </span>
                  Founder & CEO, ALFOX AI
                </h3>
                
                <div className="mt-3 mb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-accent2/80 px-3 py-1 rounded-full text-xs text-white font-medium">AI Expert</span>
                    <span className="bg-accent2/80 px-3 py-1 rounded-full text-xs text-white font-medium">Tech Visionary</span>
                    <span className="bg-accent2/80 px-3 py-1 rounded-full text-xs text-white font-medium">Startup Mentor</span>
                  </div>
                  <p className="text-tertiary desc leading-relaxed">
                    I wasn't born with privilege. I built every skill from scratch and earned every opportunity through grit. To anyone starting from nothing — <span className="text-white font-medium">Your background doesn't limit you. Your mindset shapes your future.</span> Keep going. Build. Believe.
                  </p>
                  <p className="text-primary font-semibold text-sm mt-2">
                    Let's Build The Future Together.
                  </p>
                </div>

                <blockquote className="relative mt-3 mb-2">
                  <div className="absolute -left-2 -top-2 text-5xl text-accent3/70 leading-none">
                    "
                  </div>
                  <p className="italic text-2xl md:text-3xl font-medium text-white pl-6 pr-6 leading-relaxed">
                    I didn't start ALFOX AI to follow trends—I started it to
                    lead with purpose.
                  </p>
                  <div className="absolute -bottom-4 right-0 text-5xl text-accent3/70 leading-none">
                    "
                  </div>
                </blockquote>
              </div>
            </div>

            {/* Journey Card */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="bg-gradient-to-br from-accent1/40 to-accent1/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl mb-8 md:ml-[15%]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-1 bg-primary rounded-full"></div>
                <h4 className="text-xl font-semibold text-white">My Journey</h4>
              </div>

              <p className="desc text-tertiary">
                I come from a background where every opportunity had to be
                earned, and every skill had to be self-built. My journey into AI
                wasn't accidental—it was a deep calling. With a Master's degree
                in Artificial Intelligence and a fire for research and
                innovation, I've always been driven by one goal:
                <span className="text-white font-medium">
                  {" "}
                  To build something meaningful that creates real impact—not
                  just hype.
                </span>
              </p>

              <p className="desc text-tertiary mt-4">
                I spent years mastering how AI works—not just the theory, but
                the reality. I've developed intelligent algorithms, explored
                countless models, and understood one thing very clearly:
              </p>

              <div className="mt-6 p-4 bg-white/5 rounded-xl border-l-4 border-primary">
                <p className="text-white font-medium">
                  Most businesses don't just need technology. They need someone
                  who understands their problems deeply and can solve them with
                  intelligence, integrity, and trust.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="bg-gradient-to-br from-accent1/30 to-transparent backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl mb-8 md:ml-[10%]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-1 bg-primary rounded-full"></div>
                <h4 className="text-xl font-semibold text-white">
                  Why I Built ALFOX AI
                </h4>
              </div>

              <p className="desc text-tertiary">
                I founded ALFOX AI because I saw a gap in the industry. Too many
                companies offer tools without purpose, and solutions without
                strategy. I wanted to change that.
              </p>

              <p className="desc text-tertiary mt-4">
                At ALFOX AI, we don't just "do AI"—we partner with businesses to
                transform the way they grow, operate, and compete. Whether
                you're a startup trying to scale or an enterprise looking to
                modernize, we bring custom intelligence designed around your
                goals.
              </p>
            </div>

            {/* Expectations Card */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="bg-gradient-to-br from-black/60 to-accent1/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl transform md:-translate-y-4"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-1 bg-primary rounded-full"></div>
                <h4 className="text-xl font-semibold text-white">
                  What You Can Expect from ALFOX AI
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  "Deep technical expertise – real AI, real results",
                  "A research-driven mindset – always improving, always learning",
                  "Full transparency and integrity – no jargon, just value",
                  "Long-term partnerships – we grow with you",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 group p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
                  >
                    <span className="text-primary text-2xl mt-0.5 group-hover:scale-110 transition-transform duration-300">
                      ✓
                    </span>
                    <span className="desc text-tertiary group-hover:text-white transition-colors duration-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Link
                  to="/contact-us"
                  className="primary-btn group inline-flex items-center gap-2 px-8 py-3"
                >
                  <span>Let's Connect</span>
                  <BsArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for hexagonal clip path */}
      <style jsx="true">{`
        .clip-path-hexagon {
          clip-path: polygon(
            50% 0%,
            95% 25%,
            95% 75%,
            50% 100%,
            5% 75%,
            5% 25%
          );
        }

        .animate-float-slow {
          animation: float 6s ease-in-out infinite;
        }

        .animate-ping-slow {
          animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-pulse-slow {
          animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes ping {
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.2;
          }
        }
      `}</style>
    </section>
  );
};

export default CEOProfile;
