import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const UnlockEfficiency = () => {
  return (
    <section
      className="section-padding relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-accent2 z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000000_80%)] opacity-50 z-0"></div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[100px]"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxMTExMTEiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMzBjMCAxNi41NjktMTMuNDMxIDMwLTMwIDMwQzEzLjQzMSA2MCAwIDQ2LjU2OSAwIDMwIDAgMTMuNDMxIDEzLjQzMSAwIDMwIDBjMTYuNTY5IDAgMzAgMTMuNDMxIDMwIDMweiIgc3Ryb2tlPSIjMjIyIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-5 z-0"></div>

      {/* Content */}
      <div className="wrapper relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Border Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-white/20 rounded-2xl blur-lg opacity-70"></div>

            {/* Main Content Card */}
            <div className="relative bg-accent1/80 backdrop-blur-sm rounded-2xl p-12 shadow-card">
              <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Left Content */}
                <div className="flex flex-col text-white items-start gap-6 text-left max-w-2xl">
                  <div className="gradient-rounded-text-box">
                    Unlock Efficiency
                  </div>

                  <h2 className="heading-2 text-gradient">
                    Elevate Your Business with Smart Technology
                  </h2>

                  <p className="desc text-tertiary">
                    Transform your operations and customer experiences with our
                    cutting-edge digital solutions designed to maximize
                    efficiency and drive sustainable growth.
                  </p>

                  <Link
                    to="/contact-us"
                    className="primary-btn mt-4 group flex items-center gap-2"
                  >
                    <span>Contact Us</span>
                    <BsArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>

                {/* Right Decorative Element */}
                <div className="relative">
                  <div className="w-[200px] h-[200px] relative">
                    <div className="absolute inset-0 border-2 border-white/10 rounded-full animate-spin-slow"></div>
                    <div className="absolute inset-[15%] border-2 border-white/20 rounded-full animate-spin-slow-reverse"></div>
                    <div className="absolute inset-[30%] border-2 border-white/30 rounded-full animate-spin-slow"></div>
                    <div className="absolute inset-[45%] bg-white/80 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Bottom Decorative Line */}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnlockEfficiency;
