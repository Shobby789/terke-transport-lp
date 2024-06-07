import React from "react";
import { styles } from "../../styles/styles";
import { FaArrowLeft } from "react-icons/fa6";
import { AboutUsImg } from "../../assets/export";

const AboutUs = () => {
  return (
    <section className={`${styles.paddingX} bg-black py-6`}>
      <div className="w-full flex flex-col items-start gap-6 bg-zinc-900 p-8 rounded-2xl">
        <h3 className={`${styles.textOrange} text-xl`}>About Us</h3>
        <h1 className="text-3xl md:text-4xl lg:text-6xl uppercase font-bold text-white">
          <span className={`${styles.textOrange}`}>terke</span> is one of the
          best shipping and logistics companies.
        </h1>
        <p className="text-base font-normal text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          repudiandae nesciunt maiores impedit harum mollitia, asperiores iusto
          est perspiciatis architecto? Officia quas rem atque neque?
        </p>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="w-full flex flex-col gap-4">
            <h1 className="text-white font-bold text-4xl">100K+</h1>
            <p className="text-base text-gray-400 font-normal">
              Operational Vehicles
            </p>
          </div>
          <div className="w-full flex flex-col gap-4">
            <h1 className="text-white font-bold text-4xl">1K+</h1>
            <p className="text-base text-gray-400 font-normal">Offices</p>
          </div>
          <div className="w-full flex flex-col gap-4">
            <h1 className="text-white font-bold text-4xl">10+</h1>
            <p className="text-base text-gray-400 font-normal">
              Years Experience
            </p>
          </div>
          <div className="w-full flex flex-col gap-4">
            <h1 className="text-white font-bold text-4xl">3M+</h1>
            <p className="text-base text-gray-400 font-normal">Happy Clients</p>
          </div>
        </div>

        <img
          src={AboutUsImg}
          alt=""
          className="w-full rounded-2xl md:h-[70vh] brightness-50"
        />
      </div>
    </section>
  );
};

export default AboutUs;
