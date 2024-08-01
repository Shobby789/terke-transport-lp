import React from "react";
import { styles } from "../../styles/styles";
import { TruckImg } from "../../assets/export";

const ShipmentTracking = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className={`${styles.paddingX} bg-black`}>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-1 flex items-center">
          <form
            onSubmit={handleSubmit}
            className="w-full p-6 2xl:p-10 rounded-2xl bg-zinc-900"
          >
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-sm font-normal">
                Shipment Tracking
              </p>
              <p className="text-gray-400 text-sm font-normal">Shipment Rate</p>
            </div>

            <div className="bg-zinc-800 p-4 rounded-2xl mt-4 flex flex-col gap-3">
              <p className="font-semibold text-base text-white">
                Track Shipment
              </p>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Enter your shipment code"
                  className="w-full rounded-xl p-4 2xl:py-5 bg-zinc-900 text-sm outline-none"
                />
              </div>
              <div className="w-full">
                <select
                  name="service"
                  id="service"
                  className="w-full rounded-xl p-4 2xl:py-5 bg-zinc-900 text-sm outline-none text-gray-400"
                >
                  <option value="1">Option 1</option>
                  <option value="1">Option 1</option>
                  <option value="1">Option 1</option>
                </select>
              </div>
              <button
                className={`w-full ${styles.bgOrange} text-white py-3 2xl:py-4 rounded-xl`}
              >
                Track Now
              </button>
            </div>
          </form>
        </div>

        <div className="col-span-2 lg:pl-20 ">
          <img
            src={TruckImg}
            alt="truck-img"
            className="lg:h-[80vh] 2xl:h-[65vh] float-end object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ShipmentTracking;
