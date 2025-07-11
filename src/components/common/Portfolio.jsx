import React from "react";
import { appPortfolio, webPortfolio } from "../../constant";
import { Link } from "react-router-dom";

const Portfolio = ({ page }) => {
  if (page === "ai" || page === "iot") return null;
  const isWebDevelopment = Boolean(page === "web");
  let portfolio = isWebDevelopment ? webPortfolio : appPortfolio;
  return (
    <div id="portfolio" className="bg-[#101010] text-white py-[5rem]">
      <div className="wrapper">
        <div className="flex flex-col items-center gap-5 text-white">
          <div className="gradient-rounded-text-box">Portfolio</div>
          <h2 className="heading-2 text-center mb-5">Our Selected Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {portfolio.map((item) => (
              <div
                data-aos="fade-up"
                key={item.id}
                className="flex flex-col gap-3 rounded-md overflow-hidden relative group w-full"
              >
                <img
                  src={item.img}
                  alt=""
                  className="w-fit h-fit object-contain group-hover:scale-110 transition-all duration-300"
                />
                <div className="absolute bottom-0 left-0 w-full p-2 bg-primary/80 text-white flex flex-col gap-2">
                  <Link to={item.link} target="_blank" rel="noreferrer">
                    <h3 className="font-medium text-center link">
                      {item.title}
                    </h3>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
