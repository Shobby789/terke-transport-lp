import React from "react";
import { styles } from "../../styles/styles";

const OurServicesSection = () => {
  return (
    <section className={`${styles.paddingX} bg-black py-6 text-white`}>
      <div className="w-full flex flex-col items-start gap-6 rounded-2xl">
        <h3 className={`${styles.textOrange} text-xl`}>Our Services</h3>
        <h1 className="text-4xl lg:text-6xl uppercase font-bold text-white">
          manage yoyr package <br /> from local to
          <span className={`${styles.textOrange}`}>the world.</span>
        </h1>
        <p className="text-base font-normal text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          repudiandae nesciunt maiores impedit harum mollitia, asperiores iusto
          est perspiciatis architecto? Officia quas rem atque neque?
        </p>
      </div>
    </section>
  );
};

export default OurServicesSection;
