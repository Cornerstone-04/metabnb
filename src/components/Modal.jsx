import React from "react";
import { Arrow, Close, MetaMask, Wallet } from "../assets";

const Modal = ({ setOpenModal }) => {
  return (
    <div>
      <div>
        <p>Connect Wallet</p>
        <img
          src={Close}
          alt=""
          onClick={() => {
            setOpenModal(false);
          }}
        />
        <div>
          <p>Choose your preferred wallet:</p>
          <button>
            <span>
              <img src={MetaMask} alt="" />
              <span>Metamask</span>
            </span>
            <span>
              <img src={Arrow} alt="" />
            </span>
          </button>
          <button>
            <span>
              <img src={Wallet} alt="" />
              <span>WalletConnect</span>
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
