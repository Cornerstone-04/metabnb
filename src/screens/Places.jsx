import React from "react";
import { Star } from "../assets";
import { Navbar } from "../components";
import metaBNB from "../data/data";

const Places = () => {
  return (
    <div>
      <Navbar />
      <main className="w-full flex flex-col justify-between px-100 mt-32 gap-places">
        <div className="w-full flex gap-12">
          <span className="text-text text-xl font-normal font-default">
            Restaurant
          </span>
          <span className="text-text text-xl font-normal font-default">
            Cottage
          </span>
          <span className="text-text text-xl font-normal font-default">
            Castle
          </span>
          <span className="text-text text-xl font-normal font-default">
            Fantast City
          </span>
          <span className="text-text text-xl font-normal font-default">
            Beach
          </span>
          <span className="text-text text-xl font-normal font-default">
            Cabins
          </span>
          <span className="text-text text-xl font-normal font-default">
            Off-grid
          </span>
          <span className="text-text text-xl font-normal font-default">
            Farm
          </span>
        </div>
        <div className="w-full grid grid-cols-4 gap-6 place-items-center mx-auto max-w-full">
          {metaBNB &&
            metaBNB.map((data) => (
              <div
                key={data.id}
                className="w-box m-0 flex flex-col justify-start items-center rounded-box border bg-white border-border p-4 gap-3"
              >
                <section className="w-boxImg h-boxImg rounded-box overflow-hidden border border-border">
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
    </div>
  );
};

export default Places;
