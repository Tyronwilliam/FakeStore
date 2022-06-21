import React, { useEffect, useState } from "react";
import { HeartIcon } from "@heroicons/react/outline";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import WishList from "./defaultPrint/modal/rightModal";
import Basket from "./defaultPrint/modal/rightModal";
function BigNav() {
  const [show, setShow] = useState(false);
  const [showBasket, setShowBasket] = useState(false);
  const handle = () => {
    setShow(!show);
  };
  const handleBasket = () => {
    setShowBasket(!showBasket);
  };
  useEffect(() => {}, [show]);
  return (
    <div className="hidden md:flex justify-between items-center px-4 pt-6 mb-8 md:text-[15px] relative">
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
      {/* Basket Whislist SearchBar*/}
      <div className="flex justify-between w-24">
        <SearchIcon className="w-5 h-5 cursor-pointer text-gray-800" />
        <HeartIcon
          className="w-5 h-5 cursor-pointer text-gray-800"
          onClick={() => {
            setShow(!show);
          }}
        />
        <ShoppingBagIcon
          className="w-5 h-5 cursor-pointer text-gray-800"
          onClick={() => {
            setShowBasket(!showBasket);
          }}
        />
      </div>
      {/* Whislist */}

      <WishList
        handle={handle}
        className={`top-0 right-0 w-[35vw] border-l-2 bg-white px-5 pt-5  fixed h-full z-50 ease-in-out duration-300 overflow-y-auto ${
          show ? "translate-x-0 " : "translate-x-full"
        }`}
        content="Wishlist"
      />
      {/* Basket  */}
      <Basket
        handle={handleBasket}
        className={`top-0 right-0 w-[35vw] border-l-2 bg-white  px-5 pt-5 fixed h-full z-50 ease-in-out duration-300 overflow-y-auto ${
          showBasket ? "translate-x-0 " : "translate-x-full"
        }`}
        content="Shopping Cart"
      />
      {/* <div className="">
        <input type="text" placeholder="Recherchez" className="" />
      </div> */}
    </div>
  );
}

export default BigNav;
