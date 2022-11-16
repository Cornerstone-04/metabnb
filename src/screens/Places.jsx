import React from "react";
import { Setting, Star } from "../assets";
import { Footer, Navbar } from "../components";
import metaBNB from "../data/data";

const Places = () => {
  return (
    <div className="relative">
      <Navbar />
      <main className="w-full mx-auto flex flex-col justify-between item px-12 pb-24 lg:px-[100px] mt-12 lg:mt-32 gap-10 lg:gap-[75px]">
        <div className="w-full max-w-full flex lg:justify-center items-center gap-6 lg:gap-12 overflow-x-auto">
          <span className="text-text text-sm lg:text-xl font-normal font-default">
            Restaurant
          </span>
          <span className="text-text text-sm lg:text-xl font-normal font-default">
            Cottage
          </span>
          <span className="text-text text-sm lg:text-xl font-normal font-default">
            Castle
          </span>
          <span className="break-keep text-text text-sm lg:text-xl font-normal font-default">
            Fantast&nbsp;City
          </span>
          <span className="text-text text-sm lg:text-xl font-normal font-default">
            Beach
          </span>
          <span className="text-text text-sm lg:text-xl font-normal font-default">
            Cabins
          </span>
          <span className="break-keep text-text text-sm lg:text-xl font-normal font-default whitespace-nowrap">
            Off-grid
          </span>
          <span className="text-text text-sm lg:text-xl font-normal font-default">
            Farm
          </span>
          <button className="h-12 w-[161px] bg-white flex items-center justify-center gap-10 py-3 px-4 border border-borderAlt rounded-lg">
            <span>Location</span>
            <img src={Setting} alt="" />
          </button>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center mx-auto max-w-full">
          {metaBNB &&
            metaBNB.map((data) => (
              <div
                key={data.id}
                className="w-[292px] m-0 flex flex-col justify-start items-center rounded-[15px] border bg-white border-border p-4 gap-3"
              >
                <section className="w-[260px] h-boxImg rounded-[15px] overflow-hidden border border-border">
                  <img src={data.image} alt="" className="m-0" />
                </section>
                <section className="w-full flex flex-col gap-2.5">
                  <div className="w-full flex justify-between">
                    {" "}
                    <span className="text-text text-xs font-normal font-default">
                      {data.name}
                    </span>
                    <span className="text-text text-xs font-normal font-default">
                      {data.price}
                    </span>
                  </div>
                  <div className="w-full flex justify-between">
                    {" "}
                    <span className="text-text text-xs font-normal font-default">
                      {data.distance}
                    </span>
                    <span className="text-text text-xs font-normal font-default">
                      {data.duration}
                    </span>
                  </div>
                  <div className="w-full flex justify-start items-center gap-2">
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                  </div>
                </section>
              </div>
            ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Places;
