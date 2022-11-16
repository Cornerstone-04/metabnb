import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Menu = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    // <div className="fixed top-0 left-0 w-screen h-screen px-8 bg-pale flex justify-center items-center z-50">
      <div className="w-[210px] p-[20px] z-[100] bg-primary rounded-xl flex flex-col items-end lg:hidden gap-6 fixed top-[100px] right-[15px]">
        <div className="flex flex-col justify-center items-end gap-6">
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

        <button
          className="h-12 rounded-xl flex justify-center items-center w-[170px] bg-white text-primary font-default font-medium text-base"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Connect Wallet
        </button>
        {modalOpen && <Modal setOpenModal={setModalOpen} />}
      </div>
    // </div>
  );
};

export default Menu;
