import React from "react";
import {
  Home1,
  Home2,
  Home3,
  Home4,
  MBToken,
  MetaMaskWhite,
  OpenSea,
} from "../assets";

import { Footer, Navbar } from "../components/";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <section className="flex justify-between px-100 mt-32 mb-67 relative">
        <div className="flex flex-col gap-12 w-span basis-2/4">
          <h1 className="text-text font-normal font-default text-56">
            Rent a <span className="text-primary font-bold">Place</span> away
            from <span className="text-primary font-bold">Home</span> in the{" "}
            <span className="text-primary font-bold">Metaverse</span>
          </h1>
          <p className="font-default font-normal text-text text-2xl">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <form className="flex">
            <input
              type="text"
              placeholder="Search for location"
              className="h-13 w-full max-w-input border border-priBorder bg-white rounded-tl-lg rounded-bl-lg px-4 py-18 placeholder:text-placeholder placeholder:font-normal placeholder:font-default placeholder:text-base text-text font-normal font-default text-base outline-none"
            />
            <button className="bg-primary flex justify-center items-center w-formBtn h-13 py-4 rounded-tr-lg rounded-br-lg text-white font-normal font-default text-base">
              Search
            </button>
          </form>
        </div>
        <div className="grid grid-cols-2 gap-2 h-span relative basis-2/4">
          <img src={Home1} alt="" className="absolute right-242 top-99" />
          <img src={Home2} alt="" className="absolute  top-0 right-0" />
          <img src={Home3} alt="" className="absolute bottom-0 right-242" />
          <img src={Home4} alt="" className="absolute right-0 top-184" />
        </div>
      </section>
      {/* divider */}
      <div className="w-full bg-primary flex justify-evenly h-70 items-center">
        <span className="flex items-center ">
          <img src={MBToken} alt="" />
          <span className="font-bold text-white font-token text-3.5">
            MBToken
          </span>
        </span>
        <img src={MetaMaskWhite} alt="" />
        <span className="flex items-center gap-3">
          <img src={OpenSea} alt="" />
          <span className="font-bold text-white font-openSea text-3.5">
            OpenSea
          </span>
        </span>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
