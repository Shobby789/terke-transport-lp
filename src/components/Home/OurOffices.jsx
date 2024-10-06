import React from "react";
import { styles } from "../../styles/styles";
import { MapImage } from "../../assets/export";

const OurOffices = () => {
  return (
    <section className={`${styles.paddingX} py-6 bg-black`} id="offices">
      <div className="flex flex-col items-start gap-6 p-8 rounded-2xl bg-zinc-900">
        <h1 className="text-4xl md:text-6xl uppercase font-bold text-white">
          <span className={`${styles.textOrange}`}>our offices</span>
          are spread throughout world.
        </h1>
        <p className="text-base font-normal text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          repudiandae nesciunt maiores impedit harum mollitia.
        </p>
        <img src={MapImage} alt="" className="w-full lg:h-[70vh]" />
      </div>
    </section>
  );
};

export default OurOffices;
