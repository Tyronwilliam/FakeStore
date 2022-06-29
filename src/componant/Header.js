import React, { useState } from "react";
import Facebook from "../asset/facebook.png";
import Instagram from "../asset/instagram.png";
import Twitter from "../asset/twitter.png";
import England from "../asset/england.png";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { XIcon } from "@heroicons/react/outline";
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
          <p>Welcome to The FakeStore</p>
        </div>
        {/* Right Section */}

        <div className=" flex text-center items-center justify-center w-full lg:w-[650px] text-sm">
          {/* Social Media */}
          <div className=" border-r-2 hidden md:flex justify-center items-center  h-7">
            <div className="flex justify-between items-center md:w-28 mr-5">
              <img
                src={Facebook}
                alt="Logo social media"
                className="w-5 h-5 cursor-pointer"
              />
              <img
                src={Instagram}
                alt="Logo social media"
                className="w-5 h-5 cursor-pointer"
              />
              <img
                src={Twitter}
                alt="Logo social media"
                className="w-5 h-5 cursor-pointer"
              />
            </div>
          </div>
          {/* Language */}
          <div className="flex border-r-2 md:w-24 items-center ml-3 justify-center text-sm h-7 ">
            <img src={England} alt="Logo Country" className="w-6 h-6" />
            <p className="ml-2 cursor-pointer">EN</p>
            <ChevronDownIcon className="w-4 h-4 mr-2 cursor-pointer text-gray-800" />
          </div>
          {/* Currency */}
          <div className="border-r-2 md:w-20 hidden cursor-pointer  h-7 md:flex justify-center items-center">
            <p>USD</p>
            <ChevronDownIcon className="w-4 h-4  text-gray-800" />
          </div>
          {/* Track Order */}
          <div className="border-r-2 text-sm  h-7 flex justify-center items-center">
            <p className="mx-3 cursor-pointer">Track My Order</p>
          </div>
          {/* Account  */}
          <div className=" ml-3 md:w-24 text-sm">
            <div className="text-center w-full cursor-pointer">
              <p
                onClick={() => {
                  handleClick();
                }}
              >
                My Account
              </p>
            </div>
          </div>
        </div>
        {open && (
          // Modal for login and registration
          <div>
            <div className="w-full bg-white h-screen z-50 absolute px-5 pt-20 flex flex-col items-center   left-0 top-0 border-b-2 border-gray-200 ">
              <div className="flex mb-5">
                {/* Onclick set login is login or register is register  */}
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
                  SIGN IN
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
                  REGISTER{" "}
                </p>
              </div>
              {/* Condition for login or register on the page */}
              {registration === "login" ? (
                <div>
                  <p className="text-sm mb-10 xl:text-lg">
                    Welcome back, please enter your email and password to login
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
                      SIGN IN{" "}
                    </button>
                  </form>
                </div>
              ) : (
                // Login
                <div>
                  <p className="text-sm mb-10 xl:text-lg">
                    Welcome, please enter your email and choose a password to login
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
                      REGISTER{" "}
                    </button>
                  </form>
                </div>
              )}
            </div>
            {/* close the modal */}
            <XIcon
              className="w-6 h-6 text-orange-500 z-50 absolute left-10 top-50 cursor-pointer"
              onClick={() => {
                handleClick();
              }}
            />
          </div>
        )}
      </header>
      {/* Nav for smallScreen */}
      <SmallNav />
      {/* Nav for BigScreen */}
      <BigNav />
    </div>
  );
}

export default Header;
