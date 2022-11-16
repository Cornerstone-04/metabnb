import React from "react";
import { Facebook, Instagram, LogoWhite, Twitter } from "../assets";

const Footer = () => {
  return (
    <footer className="w-full lg:h-footer pt-16 pb-9 px-10 lg:px-100 bg-footer flex flex-col gap-8 lg:flex-row justify-between items-start">
      <section className="flex flex-col gap-8 lg:gap-24">
        <img src={LogoWhite} alt="" />
        <div className="flex flex-col gap-4 lg:gap-14">
          <div className="flex items-center gap-8">
            <img src={Facebook} alt="" />
            <img src={Twitter} alt="" />
            <img src={Instagram} alt="" />
          </div>
          <p className="font-normal text-white font-default text-base flex gap-2.5">
            <span>&copy;</span>
            <span>2022 Metabnb</span>
          </p>
        </div>
      </section>
      <section className="flex flex-col gap-2 lg:gap-6">
        <p className="font-bold text-lg text-white font-default">Community</p>
        <div className="flex flex-col gap-3.5">
          <p className="footer__link">NFT</p>
          <p className="footer__link">Tokens</p>
          <p className="footer__link">Landlords</p>
          <p className="footer__link">Discord</p>
        </div>
      </section>
      <section className="flex flex-col gap-2 lg:gap-6">
        <p className="font-bold text-lg text-white font-default">Places</p>
        <div className="flex flex-col gap-3.5">
          <p className="footer__link">Castle</p>
          <p className="footer__link">Farms</p>
          <p className="footer__link">Beach</p>
          <p className="footer__link">Learn more</p>
        </div>
      </section>
      <section className="flex flex-col gap-2 lg:gap-6">
        <p className="font-bold text-lg text-white font-default">About us</p>
        <div className="flex flex-col gap-3.5">
          <p className="footer__link">Road map</p>
          <p className="footer__link">Creators </p>
          <p className="footer__link">Career</p>
          <p className="footer__link">Contact us</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
