import React, { useState } from "react";
import { styles } from "../../styles/styles";
import { Link } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const handleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav
      className={`w-full flex items-center justify-between ${styles.paddingX} bg-black text-white py-6 relative`}
    >
      <h1 className={`text-4xl font-bold ${styles.textOrange}`}>terke</h1>

      <div className="hidden lg:flex items-center gap-x-10">
        <a href="/" className="text-base font-medium text-white">
          Home
        </a>
        <a href="#about" className="text-base font-medium text-white">
          About
        </a>
        <a href="#services" className="text-base font-medium text-white">
          Service
        </a>
        <a href="#offices" className="text-base font-medium text-white">
          Office
        </a>
        <a
          href="#contact"
          className={`${styles.bgOrange} text-white px-6 py-3 rounded-full font-medium text-sm`}
        >
          Get in touch
        </a>
      </div>

      <div className="flex items-center lg:hidden justify-end gap-2">
        {/* <Link
          to="/"
          className={`${styles.bgOrange} text-white px-4 py-2 rounded-full font-medium text-xs`}
        >
          Get in touch
        </Link> */}
        <button
          className={`w-8 h-8 ${styles.bgOrange} p-1.5 rounded-lg`}
          onClick={handleNav}
        >
          <CgMenuRight className="w-full h-full text-white" />
        </button>
      </div>
      <div
        className={`w-full h-screen fixed top-0 right-0 left-0 bottom-0 bg-transparent ${
          showNav ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500`}
        onClick={handleNav}
      >
        <div className="bg-zinc-900 rounded-xl py-6 pl-6 pr-16 absolute top-16 right-4 shadow-md flex flex-col items-start gap-4 z-50">
          <a href="/" className="text-base font-medium text-white">
            Home
          </a>
          <a href="#about" className="text-base font-medium text-white">
            About
          </a>
          <a href="/#services" className="text-base font-medium text-white">
            Service
          </a>
          <a href="/#offices" className="text-base font-medium text-white">
            Office
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
