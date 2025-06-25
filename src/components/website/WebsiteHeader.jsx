import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import { IoMdClose } from "react-icons/io";
import React, { useState, useEffect } from "react";
import { logoImg, routes } from "../../constant";
import { Link, useLocation } from "react-router-dom";

const WebsiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`py-4 fixed top-0 w-full z-50 text-white transition-all duration-300 ${
        scrolled
          ? "bg-accent2/90 backdrop-blur-md shadow-soft"
          : "bg-black/40 backdrop-blur-sm"
      }`}
    >
      <div className="wrapper flex justify-between items-center gap-10">
        <div className="flex justify-between items-center gap-20 w-full pl-[1rem] lg:pl-0">
          <Link
            to="/"
            className="transition-transform duration-300 hover:scale-105"
          >
            <img
              src={logoImg}
              className="h-[2rem] md:h-[3rem] scale-110"
              alt="logo"
            />
          </Link>
          <div className="lg:flex items-center gap-8 hidden">
            {routes.slice(0, 3).map(({ name, path }) => (
              <Link
                to={`${path}`}
                className={`link text-sm font-medium ${
                  pathname === `${path}` && "active-link"
                }`}
                key={path}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden lg:block">
          <Link to="/contact-us" className="primary-btn !min-w-[11rem]">
            Connect with Us
          </Link>
        </div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="py-4 px-10 z-10"
        >
          <div className="mb-6 flex items-center justify-between py-[.4rem]">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <img src={logoImg} className="h-[2.5rem]" alt="logo" />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-[2.2rem] hover:text-accent3 transition-colors duration-300"
            >
              <IoMdClose />
            </button>
          </div>
          <div className="flex flex-col gap-8 mt-10">
            {routes.map(({ name, path }) => (
              <Link
                onClick={() => setIsOpen(false)}
                key={path}
                className="text-2xl text-white font-medium transition-all duration-300 hover:pl-2 hover:text-highlight"
                to={path}
              >
                {name}
              </Link>
            ))}
          </div>
        </Drawer>
        <div
          className="block lg:hidden justify-self-end"
          onClick={toggleDrawer}
        >
          <Hamburger
            color="white"
            size="23"
            toggled={isOpen}
            rounded
            toggle={setIsOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default WebsiteHeader;
