import React from "react";
import Facebook from "../asset/facebook.png";
import Instagram from "../asset/instagram.png";
import Twitter from "../asset/twitter.png";
import France from "../asset/france.png";
import { ChevronDownIcon } from "@heroicons/react/solid";
function Header() {
  return (
    <div>
      <header className=" w-full h-12 border-b flex lg:justify-between items-center px-5">
        {/* Name of the Website  */}
        {/* Left Section */}
        <div className="hidden lg:inline-block">
          <p>Bienvenue sur Fake Store Paris</p>
        </div>
        {/* Right Section */}

        <div className=" flex text-center items-center justify-center w-full lg:w-[650px]">
          {/* Social Media */}
          <div className=" border-r-2 hidden md:inline-block">
            <div className="flex justify-between items-center md:w-28 mr-5">
              <img src={Facebook} alt="Logo social media" className="w-6 h-6 cursor-pointer" />
              <img
                src={Instagram}
                alt="Logo social media"
                className="w-6 h-6 cursor-pointer"
              />
              <img src={Twitter} alt="Logo social media" className="w-6 h-6 cursor-pointer" />
            </div>
          </div>
          {/* Language */}
          <div className="flex border-r-2 md:w-24 items-center justify-center">
            <img src={France} alt="Logo Country" className="w-6 h-6" />
            <p className="ml-2 cursor-pointer">FR</p>
            <ChevronDownIcon className="w-6 h-6 mr-2 cursor-pointer" />
          </div>
          {/* Currency */}
          <div className="border-r-2 md:w-20 hidden md:inline-block cursor-pointer">
            <p>EUR</p>
          </div>
          {/* Track Order */}
          <div className="border-r-2 md:w-48">
            <p className="mx-3 cursor-pointer">Suivre ma commande</p>
          </div>
          {/* Account  */}
          <div className=" ml-5 md:w-24">
            <div className="text-center w-full cursor-pointer">
              <p>Mon compte</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
