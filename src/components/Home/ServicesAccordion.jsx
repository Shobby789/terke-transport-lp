import React, { useState } from "react";
import { styles } from "../../styles/styles";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { AccordionImage } from "../../assets/export";

const ServicesAccordion = () => {
  const [accordion1, setAccordion1] = useState(false);
  const [accordion2, setAccordion2] = useState(false);
  const [accordion3, setAccordion3] = useState(false);
  return (
    <section className={`${styles.paddingX} bg-black py-6`}>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="col-span-2 lg:col-span-1">
          <img
            src={AccordionImage}
            alt=""
            className="w-full rounded-2xl brightness-75 object-cover"
          />
        </div>
        <div className="col-span-2 lg:col-span-1 flex flex-col items-start justify-center">
          <div className="w-full flex flex-col gap-4 border-t border-gray-500 py-8">
            <div
              className="w-full flex items-center justify-between cursor-pointer"
              onClick={() => setAccordion1(!accordion1)}
            >
              <h1 className="font-bold text-xl lg:text-4xl text-white">
                <span className={`${styles.textOrange}`}>Worlwide</span>{" "}
                Shipping
              </h1>
              <button className={`w-8 h-8 rounded-full p-2 ${styles.bgOrange}`}>
                {accordion1 ? (
                  <FaMinus className={`text-white text-xl w-full h-full`} />
                ) : (
                  <FaPlus className={`text-white text-xl w-full h-full`} />
                )}
              </button>
            </div>
            {accordion1 && (
              <p className="text-sm font-normal text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                repellat harum quasi sit odio explicabo, aspernatur vitae at non
                ratione!
              </p>
            )}
          </div>
          <div className="w-full flex flex-col gap-4 border-t border-gray-500 py-8">
            <div
              className="w-full flex items-center justify-between cursor-pointer"
              onClick={() => setAccordion2(!accordion2)}
            >
              <h1 className="font-bold text-xl lg:text-4xl text-white">
                <span className={`${styles.textOrange}`}>Sea</span> Shipping
              </h1>
              <button className={`w-8 h-8 rounded-full p-2 ${styles.bgOrange}`}>
                {accordion2 ? (
                  <FaMinus className={`text-white text-xl w-full h-full`} />
                ) : (
                  <FaPlus className={`text-white text-xl w-full h-full`} />
                )}
              </button>
            </div>
            {accordion2 && (
              <p className="text-sm font-normal text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                repellat harum quasi sit odio explicabo, aspernatur vitae at non
                ratione!
              </p>
            )}
          </div>
          <div className="w-full flex flex-col gap-4 border-t border-gray-500 border-b py-8">
            <div
              className="w-full flex items-center justify-between cursor-pointer"
              onClick={() => setAccordion3(!accordion3)}
            >
              <h1 className="font-bold text-xl lg:text-4xl text-white">
                <span className={`${styles.textOrange}`}>Ground</span> Shipping
              </h1>
              <button className={`w-8 h-8 rounded-full p-2 ${styles.bgOrange}`}>
                {accordion3 ? (
                  <FaMinus className={`text-white text-xl w-full h-full`} />
                ) : (
                  <FaPlus className={`text-white text-xl w-full h-full`} />
                )}
              </button>
            </div>
            {accordion3 && (
              <p className="text-sm font-normal text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                repellat harum quasi sit odio explicabo, aspernatur vitae at non
                ratione!
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesAccordion;
