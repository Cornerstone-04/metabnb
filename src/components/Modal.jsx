import React from "react";
import { Arrow, Close, MetaMask, Wallet } from "../assets";

const Modal = ({ setOpenModal }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen px-8 bg-pale flex justify-center items-center z-50">
      <div className="w-full max-w-modal bg-white rounded-2xl h-modal">
        <div className="w-full flex justify-between items-center py-6 px-9 border-b border-b-gray">
          <p className="font-bold font-default text-alt text-2xl">
            Connect Wallet
          </p>
          <img
            src={Close}
            alt=""
            onClick={() => {
              setOpenModal(false);
            }}
            className="cursor-pointer"
          />
        </div>
        <div className="p-8 flex flex-col gap-4">
          <p className="font-normal font-default text-alt text-base">
            Choose your preferred wallet:
          </p>
          <button className="modal__btn">
            <span className="flex justify-center items-center gap-4">
              <img src={MetaMask} alt="" />
              <span className="font-semibold font-sora text-alt text-lg">
                Metamask
              </span>
            </span>
            <span>
              <img src={Arrow} alt="" />
            </span>
          </button>
          <button className="modal__btn">
            <span className="flex justify-center items-center gap-4">
              <img src={Wallet} alt="" />
              <span className="font-bold font-sora text-alt text-lg">
                WalletConnect
              </span>
            </span>
            <span>
              <img src={Arrow} alt="" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
