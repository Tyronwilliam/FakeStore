import React, { useState } from "react";
import { HeartIcon } from "@heroicons/react/outline";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import HomeModal from "./modal/homeModal";

function BigNav() {
  const [open, setOpen] = useState(false);
  const [navTitle, setNavTitle] = useState("");
  const handleClick = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  return (
    <div className="hidden md:flex justify-between px-4 pt-6 mb-8 md:text-[15px]">
      {/* Logo */}
      <h1 className="cursor-pointer font-bold md:hidden lg:block lg:text-lg">
        TheFakeStore.
      </h1>
      {/* Nav */}
      <div className="flex justify-between lg:w-[700px] md:w-full ">
        <nav className="relative">
          <ul className="flex justify-between">
            <li
              className="hover:text-orange-500 cursor-pointer flex"
              onClick={() => {
                setNavTitle("accueil");
                handleClick();
              }}
            >
              <p>Accueil</p>
              <ChevronDownIcon className="w-6 h-6 mr-2 cursor-pointer" />
            </li>
            {open === true && navTitle === "accueil" ? (
              <HomeModal title="Home" link="" />
            ) : null}

            <li
              className="hover:text-orange-500 cursor-pointer flex"
              onClick={() => {
                setNavTitle("boutique");
                handleClick();
              }}
            >
              Boutique{" "}
              <ChevronDownIcon className="w-6 h-6 mr-2 cursor-pointer" />
            </li>
            {open === true && navTitle === "boutique" ? (
              <HomeModal title="Test" link="boutique" />
            ) : null}

            <li className="hover:text-orange-500 cursor-pointer flex">
              Collections
              <ChevronDownIcon className="w-6 h-6 mr-2 cursor-pointer" />
            </li>
            <li className="hover:text-orange-500 cursor-pointer flex">
              Blog <ChevronDownIcon className="w-6 h-6 mr-2 cursor-pointer" />
            </li>
            <li className="hover:text-orange-500 cursor-pointer flex">
              Pages <ChevronDownIcon className="w-6 h-6 mr-2 cursor-pointer" />
            </li>
            <li className="hover:text-orange-500 cursor-pointer flex">
              Element{" "}
              <ChevronDownIcon className="w-6 h-6 mr-2 cursor-pointer" />
            </li>
          </ul>
        </nav>
        {/* Basket Whislist */}
        <div className="flex justify-between w-24">
          <SearchIcon className="w-6 h-6 cursor-pointer" />
          <HeartIcon className="w-6 h-6 cursor-pointer" />
          <ShoppingBagIcon className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
      {/* SearchBar */}
      {/* <div className="">
        <input type="text" placeholder="Recherchez" className="" />
      </div> */}
    </div>
  );
}

export default BigNav;
