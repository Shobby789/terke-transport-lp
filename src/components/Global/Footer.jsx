import React from "react";
import { styles } from "../../styles/styles";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className={`${styles.paddingX} py-6 bg-black`}>
      <div className="bg-zinc-950 rounded-2xl p-4 md:p-8 flex flex-col items-center gap-6">
        <h1 className="text-white text-4xl lg:text-6xl font-bold text-center uppercase">
          let us deliver your <br /> package to its <br /> destination
        </h1>
        <div className="w-full flex-col md:flex-row flex items-center justify-center gap-6">
          <button
            className={`${styles.bgOrange} px-8 py-4 rounded-full text-white text-sm font-semibold uppercase flex items-center justify-center gap-1`}
          >
            Learn more <FiArrowRight className="text-lg" />
          </button>
          <button
            className={`bg-white px-8 py-4 rounded-full text-black text-sm font-semibold uppercase flex items-center justify-center gap-1`}
          >
            download app <FiArrowRight className="text-lg" />
          </button>
        </div>

        <div className="w-full border border-gray-600 my-6" />

        <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6">
          <div className="col-span-5 lg:col-span-2 flex flex-col gap-4 md:gap-6">
            <h1 className="text-2xl font-semibold text-white">terke</h1>
            <p className="text-white text-sm font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quod
              modi eligendi adipisci.
            </p>
          </div>
          <div className="col-span-5 lg:col-span-1 flex flex-col gap-3">
            <Link to="/" className="text-base font-normal text-white">
              Home
            </Link>
            <Link to="/" className="text-base font-normal text-white">
              About Us
            </Link>
            <Link to="/" className="text-base font-normal text-white">
              Services
            </Link>
            <Link to="/" className="text-base font-normal text-white">
              Office
            </Link>
          </div>
          <div className="col-span-5 lg:col-span-1 flex flex-col gap-3">
            <Link to="/" className="text-base font-normal text-white">
              Lisence
            </Link>
            <Link to="/" className="text-base font-normal text-white">
              Privacy Policy
            </Link>
            <Link to="/" className="text-base font-normal text-white">
              Copyright
            </Link>
            <Link to="/" className="text-base font-normal text-white">
              Email Address
            </Link>
          </div>
          <div className="col-span-5 lg:col-span-1 flex flex-col gap-3">
            <h3 className="text-base font-normal text-white">Social Media</h3>
            <Link to="/" className="text-base font-normal text-white">
              Instagram
            </Link>
            <Link to="/" className="text-base font-normal text-white">
              Facebook
            </Link>
            <Link to="/" className="text-base font-normal text-white">
              Twitter
            </Link>
          </div>
        </div>

        <div className="w-full pb-4">
          <p className="text-sm text-white font-normal text-start">
            2022 Terke. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
