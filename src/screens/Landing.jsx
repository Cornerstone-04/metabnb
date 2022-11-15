import React from "react";
import {
  Home1,
  Home2,
  Home3,
  Home4,
  MBToken,
  MetaMaskWhite,
  NFT1,
  NFT2,
  NFT3,
  OpenSea,
  Star,
} from "../assets";

import { Footer, Navbar } from "../components/";
import home from "../data/home";

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
      {/* next adventure */}
      <section className="px-100 mt-58 flex flex-col items-center gap-43">
        <h1 className="text-black text-5xl font-bold font-default">Inspiration for your next adventure</h1>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center mx-auto max-w-full mb-53">
          {home &&
            home.map((data) => (
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
      </section>
      {/* Metabnb Nfts */}
      <section className="bg-primary p-100 flex justify-between items-center">
        <div className="w-full max-w-nft flex flex-col basis-2/4">
          <h1 className="font-default font-bold text-white text-5xl mb-35">
            Metabnb NFTs
          </h1>
          <p className="mb-14 text-white font-default">
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <button className="h-12 rounded-lg flex justify-center items-center w-whitebtn bg-white text-primary font-default font-light font-base">
            Learn More
          </button>
        </div>
        <div className="relative h-575 w-full max-w-704">
          <img src={NFT1} alt="" className="absolute left-0 bottom-0 z-10" />
          <img src={NFT2} alt="" className="absolute right-0 top-0 z-0" />
          <img src={NFT3} alt="" className="absolute bottom-0 right-0 z-20" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Landing;
