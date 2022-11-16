import React from "react";
import {
  HomeGroup,
  MBToken,
  MetaMaskWhite,
  NFT1,
  NFT2,
  NFT3,
  NFTGroup,
  OpenSea,
  Star,
} from "../assets";

import { Footer, Navbar } from "../components/";
import home from "../data/home";

const Landing = () => {
  return (
    <div className="relative">
      <Navbar />
      <section className="flex flex-col items-center gap-14 lg:flex-row justify-between px-12 lg:px-100 mt-32 mb-67 relative">
        <div className="flex flex-col gap-12 md:w-span lg:basis-2/4">
          <h1 className="text-text font-normal font-default text-[32px] lg:text-56">
            Rent a <span className="text-primary font-bold">Place</span> away
            from <span className="text-primary font-bold">Home</span> in the{" "}
            <span className="text-primary font-bold">Metaverse</span>
          </h1>
          <p className="font-default font-normal text-text text-xl lg:text-2xl">
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
        <div className="h-span">
          <img src={HomeGroup} alt="" />
        </div>
      </section>
      {/* divider */}
      <div className="w-full bg-primary flex justify-evenly h-70 items-center">
        <span className="flex items-center ">
          <img src={MBToken} alt="" />
          <span className="font-bold text-white font-inter text-base lg:text-3.5">
            MBToken
          </span>
        </span>
        <img src={MetaMaskWhite} alt="" className="w-[110px] lg:max-w-full" />
        <span className="flex items-center gap-3">
          <img src={OpenSea} alt="" />
          <span className="font-bold text-white font-poppins text-base lg:text-3.5">
            OpenSea
          </span>
        </span>
      </div>
      {/* next adventure */}
      <section className="px-100 mt-58 flex flex-col items-center gap-43">
        <h1 className="text-black text-5xl font-bold font-default">
          Inspiration for your next adventure
        </h1>
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
      <section className="bg-primary p-8 md:p-100 flex flex-col md:flex-row justify-between items-center gap-5">
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
        <div className="relative w-full max-w-704">
          <img src={NFTGroup} alt="" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Landing;
