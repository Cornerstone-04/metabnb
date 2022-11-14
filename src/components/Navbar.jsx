import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../assets";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between px-12 lg:px-100 mt-43 h-12">
      <div>
        <img src={Logo} alt="" loading="lazy" />
      </div>

      <div className="flex justify-center items-center gap-12 text-xl">
        <Link to="/" className="nav__link">
          Home
        </Link>
        <Link to="/places-to-stay" className="nav__link">
          Places To Stay
        </Link>
        <Link to="/" className="nav__link">
          NFTs
        </Link>
        <Link to="/" className="nav__link">
          Community
        </Link>
      </div>

      <button className="h-12 rounded-xl flex justify-center items-center w-btn bg-gradient-to-t from-primary to-primary text-white font-default font-light font-base">
        Connect Wallet
      </button>
    </nav>
  );
};

export default Navbar;
