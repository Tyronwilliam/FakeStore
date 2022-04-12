import React, { useState } from "react";
import Facebook from "../asset/facebook.png";
import Instagram from "../asset/instagram.png";
import Twitter from "../asset/twitter.png";
import France from "../asset/france.png";
import { ChevronDownIcon } from "@heroicons/react/solid";
import BigNav from "./bigNav";
import SmallNav from "./smallScreenComposant/smallNav";
function Header() {
  const [open, setOpen] = useState(false);
  const [registration, setRegistration] = useState("login");
  const handleClick = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  return (
    <div>
      <header className=" w-full h-12 border-b flex lg:justify-between items-center relative lg:px-4">
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
              <img
                src={Facebook}
                alt="Logo social media"
                className="w-6 h-6 cursor-pointer"
              />
              <img
                src={Instagram}
                alt="Logo social media"
                className="w-6 h-6 cursor-pointer"
              />
              <img
                src={Twitter}
                alt="Logo social media"
                className="w-6 h-6 cursor-pointer"
              />
            </div>
          </div>
          {/* Language */}
          <div className="flex border-r-2 md:w-24 items-center ml-3 justify-center">
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
              <p
                onClick={() => {
                  handleClick();
                }}
              >
                Mon compte
              </p>
            </div>
          </div>
        </div>
        {open && (
          <div className="w-full bg-white h-screen z-50 absolute px-5 pt-20 flex flex-col items-center   left-0 top-0 border-b-2 border-gray-200 ">
            <div className="flex mb-5">
              <p
                className={
                  registration === "login"
                    ? "cursor-pointer"
                    : "text-gray-500 cursor-pointer"
                }
                onClick={() => {
                  setRegistration("login");
                }}
              >
                SE CONNECTER
              </p>
              <p
                className={
                  registration !== "login"
                    ? "cursor-pointer ml-5"
                    : "text-gray-500 cursor-pointer  ml-5"
                }
                onClick={() => {
                  setRegistration("register");
                }}
              >
                S'ENREGISTRER
              </p>
            </div>
            {registration === "login" ? (
              <div>
                <p className="text-sm mb-10 xl:text-lg">
                  Bienvenue à nouveau, veuillez entrer votre email et votre mot
                  de passe pour vous connecter
                </p>{" "}
                <form className="flex flex-col w-72 sm:w-80 gap-4 mx-auto">
                  <input
                    type="text"
                    name="email"
                    className="border border-gray-500 rounded-sm p-2 w-full"
                    placeholder="Email"
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Mot de passe"
                    className="border border-gray-500 rounded-sm p-2 w-full mb-4"
                  />
                  <button className="w-full bg-orange-500 p-3 rounded-sm text-white font-semibold">
                    ME CONNECTER
                  </button>
                </form>
              </div>
            ) : (
              <div>
                <p className="text-sm mb-10 xl:text-lg">
                  Bienvenue, veuillez entrer votre email et votre mot de passe
                  pour vous connecter
                </p>{" "}
                <form className="flex flex-col w-72 sm:w-80 gap-4 mx-auto">
                  <input
                    type="text"
                    name="email"
                    className="border border-gray-500 rounded-sm p-2 w-full"
                    placeholder="Email"
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Mot de passe"
                    className="border border-gray-500 rounded-sm p-2 w-full"
                  />
                  <input
                    type="password"
                    name="password2"
                    placeholder=" Confirmez votre mot de passe"
                    className="border border-gray-500 rounded-sm p-2 w-full mb-4"
                  />
                  <button className="w-full bg-orange-500 p-3 rounded-sm text-white font-semibold">
                    S'ENREGISTRER
                  </button>
                </form>
              </div>
            )}
          </div>
        )}
      </header>
      <SmallNav />

      <BigNav />
    </div>
  );
}

export default Header;
