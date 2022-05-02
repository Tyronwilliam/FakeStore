import React from "react";
import { HeartIcon } from "@heroicons/react/outline";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/outline";
// import { ChevronDownIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

function BigNav() {
  return (
    <div className="hidden md:flex justify-between items-center px-4 pt-6 mb-8 md:text-[15px]">
      {/* Logo */}
      <h1 className="cursor-pointer font-bold md:hidden lg:block lg:text-lg">
        <Link to="/"> TheFakeStore.</Link>
      </h1>
      {/* Nav */}
      <div className="flex justify-between  ">
        <nav className="relative">
          <ul className="flex justify-between w-[400px]">
            <li className="hover:text-orange-500 cursor-pointer flex">
              <Link to="/">
                <p>Home</p>
              </Link>
            </li>

            <li className="hover:text-orange-500 cursor-pointer flex">
              <Link to="/boutique">Shop </Link>
            </li>

            <li className="hover:text-orange-500 cursor-pointer flex">
              Collections
            </li>
            <li className="hover:text-orange-500 cursor-pointer flex">Blog</li>
            <li className="hover:text-orange-500 cursor-pointer flex">
              Pages{" "}
            </li>
            <li className="hover:text-orange-500 cursor-pointer flex">
              Elements{" "}
            </li>
          </ul>
        </nav>
      </div>
      {/* Basket Whislist */}
      <div className="flex justify-between w-24">
        <SearchIcon className="w-5 h-5 cursor-pointer text-gray-800" />
        <HeartIcon className="w-5 h-5 cursor-pointer text-gray-800" />
        <ShoppingBagIcon className="w-5 h-5 cursor-pointer text-gray-800" />
      </div>
      {/* SearchBar */}
      {/* <div className="">
        <input type="text" placeholder="Recherchez" className="" />
      </div> */}
    </div>
  );
}

export default BigNav;
