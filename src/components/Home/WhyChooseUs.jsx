import React from "react";
import { styles } from "../../styles/styles";
import { chooseus } from "../../constants/whychooseus";

const WhyChooseUs = () => {
  return (
    <section className={`${styles.paddingX} bg-black py-6 lg:py-20`}>
      <div className="w-full flex flex-col items-start gap-6 bg-zinc-900 p-8 rounded-2xl">
        <h3 className={`${styles.textOrange} text-xl`}>About Us</h3>
        <h1 className="text-6xl uppercase font-bold text-white">
          Why Choose Us.
        </h1>
        <p className="text-base font-normal text-gray-400">
          Because TERKE will make it easier for you to send your package with
          the features we have.
        </p>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chooseus.map((about, index) => {
            return (
              <div
                className="w-full p-6 rounded-2xl bg-zinc-800 flex flex-col items-start gap-4 group hover:bg-orange-600 transition-all duration-300"
                key={index}
              >
                <h1 className="uppercase text-2xl font-bold text-white">
                  0{about.stack}
                </h1>
                <h1 className={`uppercase text-2xl font-bold text-white`}>
                  {about.title}
                </h1>
                <p className="text-gray-400 text-sm font-normal group-hover:text-white transition-all duration-300">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolor hic praesentium soluta cumque amet?
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
