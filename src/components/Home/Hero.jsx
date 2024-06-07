import React from "react";
import { styles } from "../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`bg-black text-white w-full py-6 lg:py-12 ${styles.paddingX} flex flex-col gap-y-6 lg:flex-row items-start justify-between`}
    >
      <h1 className="text-white text-5xl lg:text-8xl font-bold uppercase">
        we will <span className={`${styles.textOrange}`}>deliver</span> your
        package all over{" "}
        <span className={`${styles.textOrange}`}>the world.</span>
      </h1>

      <div className="flex flex-col items-start gap-8">
        <p className="text-base font-normal text-gray-400">
          The fastest, easiest way to bood and manage your international
          shipments.
        </p>
        <button
          className={`${styles.bgOrange} text-white font-medium text-base px-8 py-4 rounded-full uppercase`}
        >
          learn more
        </button>
      </div>
    </div>
  );
};

export default Hero;
