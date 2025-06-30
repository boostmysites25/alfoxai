import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { companyDetails, logoImg, routes } from "../../constant";
import { Link } from "react-router-dom";

const WebsiteFooter = () => {
  return (
    <footer className="py-20 border-t border-accent3 bg-gradient-to-b from-black to-accent2">
      <div className="wrapper text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col items-center md:items-start lg:col-span-2">
            <img
              src={logoImg}
              className="h-[5rem] mb-4 hover:opacity-90 transition-opacity duration-300"
              alt="Company Logo"
            />
            <p className="desc md:max-w-[18rem] text-sm text-center md:text-left text-tertiary">
              We have rapidly grown into a trusted partner for organizations
              seeking digital transformation, enhanced operational efficiency,
              and innovative solutions.
            </p>
            <div className="flex gap-4 mt-6">
              <Link
                to={companyDetails.facebook}
                rel="noopener noreferrer"
                target="_blank"
                className="bg-accent1 p-2 rounded-full hover:bg-accent3 hover:text-primary transition-all duration-300"
              >
                <BsFacebook className="text-lg" />
              </Link>
              <Link
                to={companyDetails.twitter}
                rel="noopener noreferrer"
                target="_blank"
                className="bg-accent1 p-2 rounded-full hover:bg-accent3 hover:text-primary transition-all duration-300"
              >
                <BsTwitter className="text-lg" />
              </Link>
              <Link
                to={companyDetails.linkedin}
                rel="noopener noreferrer"
                target="_blank"
                className="bg-accent1 p-2 rounded-full hover:bg-accent3 hover:text-primary transition-all duration-300"
              >
                <BsLinkedin className="text-lg" />
              </Link>
              <Link
                to={companyDetails.instagram}
                rel="noopener noreferrer"
                target="_blank"
                className="bg-accent1 p-2 rounded-full hover:bg-accent3 hover:text-primary transition-all duration-300"
              >
                <BsInstagram className="text-lg" />
              </Link>
              <Link
                to={companyDetails.youtube}
                rel="noopener noreferrer"
                target="_blank"
                className="bg-accent1 p-2 rounded-full hover:bg-accent3 hover:text-primary transition-all duration-300"
              >
                <BsYoutube className="text-lg" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h6 className="font-medium text-lg mb-2 text-highlight">
              Quick Links
            </h6>
            {routes
              .filter((route) => !route.path.includes(":"))
              .map(({ name, path }) => (
                <Link
                  key={path}
                  to={path}
                  className="text-tertiary text-sm hover:text-highlight transition-all duration-300 hover:translate-x-1 flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  {name}
                </Link>
              ))}
          </div>

          <div className="flex flex-col gap-4">
            <h6 className="font-medium text-lg mb-2 text-highlight">
              Contact Us
            </h6>
            <div className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-accent3 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div>
                <h6 className="text-[.9rem] mb-1 text-highlight">Phone</h6>
                <Link
                  to={`tel:${companyDetails.phone}`}
                  className="text-tertiary text-sm hover:text-highlight transition-colors duration-300"
                >
                  {companyDetails.phone}
                </Link>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-accent3 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div>
                <h6 className="text-[.9rem] mb-1 text-highlight">Email</h6>
                <Link
                  to={`mailto:${companyDetails.email}`}
                  className="text-tertiary text-sm hover:text-highlight transition-colors duration-300"
                >
                  {companyDetails.email}
                </Link>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-accent3 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div>
                <h6 className="text-[.9rem] mb-1 text-highlight">
                  Office Address
                </h6>
                <p className="text-tertiary text-sm max-w-[15rem]">
                  {companyDetails.address}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-10 border-t border-accent3/20 text-center">
          <p className="text-tertiary text-sm">
            © {new Date().getFullYear()} Alfox AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default WebsiteFooter;
