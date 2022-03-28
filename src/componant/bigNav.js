import React from "react";

import { HeartIcon } from "@heroicons/react/outline";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/outline";

function BigNav() {
  return (
    <div className="hidden md:flex justify-between px-4 pt-6 mb-8">
      {/* Logo */}
      <h1 className="cursor-pointer font-bold">TheFakeStore.</h1>
      {/* Nav */}
      <div className="flex justify-between w-[570px]">
        <nav className="w-[400px]">
          <ul className="flex justify-between">
            <li className="hover:text-orange-500 cursor-pointer">Accueil</li>
            <li className="hover:text-orange-500 cursor-pointer">Boutique</li>
            <li className="hover:text-orange-500 cursor-pointer">
              Collections
            </li>
            <li className="hover:text-orange-500 cursor-pointer">Blog</li>
            <li className="hover:text-orange-500 cursor-pointer">Pages</li>
            <li className="hover:text-orange-500 cursor-pointer">Element</li>
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
