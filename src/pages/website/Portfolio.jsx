import React, { useState } from "react";
import { webPortfolio, appPortfolio } from "../../constant";
import Banner from "../../components/website/Banner";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Combine and format portfolio data
  const formattedWebPortfolio = webPortfolio.map((item) => ({
    ...item,
    category: "Web Development",
  }));

  const formattedAppPortfolio = appPortfolio.map((item) => ({
    ...item,
    category: "App Development",
  }));

  const allPortfolio = [...formattedWebPortfolio, ...formattedAppPortfolio];

  // Filter portfolio items based on active filter
  const filteredPortfolio =
    activeFilter === "All"
      ? allPortfolio
      : allPortfolio.filter((item) => item.category === activeFilter);

  return (
    <>
      <Banner page="Our Portfolio" />

      {/* Portfolio Section */}
      <div className="wrapper py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-6">Our Featured Projects</h2>
          <p className="desc max-w-3xl mx-auto">
            We take pride in delivering cutting-edge solutions that address
            complex business challenges. Here's a showcase of our recent work
            across various technologies and industries.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            {["All", "Web Development", "App Development"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-accent2 text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolio.map((item, index) => (
            <div
              key={item.id || index}
              className="group relative"
              data-aos="fade-up"
              data-aos-delay={(index % 6) * 100}
            >
              {/* Gradient border effect */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-white/10 to-white/20 rounded-lg blur-[1px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Card content */}
              <div className="card hover-lift relative h-full flex flex-col">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 text-sm text-white bg-accent2 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl text-white font-bold mb-3">{item.title}</h3>

                  {item.link && (
                    <div className="mt-auto pt-4">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-highlight hover:text-tertiary transition-colors font-medium flex items-center"
                      >
                        Visit Project
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredPortfolio.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-white">
              No projects found for this category.
            </h3>
            <p className="mt-2 text-tertiary">
              Please try another filter or check back later.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-20 text-center relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl blur-lg opacity-70"></div>
          <div className="relative bg-accent1/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-card">
            <h3 className="heading-3 text-gradient mb-6">
              Ready to Build Your Next Project?
            </h3>
            <p className="desc max-w-2xl mx-auto mb-8">
              Let's collaborate to create innovative solutions that drive your
              business forward.
            </p>
            <a href="/contact-us" className="primary-btn w-fit mx-auto inline-block">
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
