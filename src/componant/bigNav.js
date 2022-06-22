import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { HeartIcon } from "@heroicons/react/outline";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/outline";
import { XCircleIcon } from "@heroicons/react/outline";

import { Link } from "react-router-dom";
import WishList from "./defaultPrint/modal/rightModal";
import Basket from "./defaultPrint/modal/rightModal";
import ModalSearch from "./defaultPrint/modal/modalSearch";
function BigNav(props) {
  const [show, setShow] = useState(false);
  const [showBasket, setShowBasket] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handle = () => {
    setShow(!show);
  };
  const handleBasket = () => {
    setShowBasket(!showBasket);
  };
  const handleSearch = () => {
    showSearch ? setShowSearch(false) : setShowSearch(true);
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
        <SearchIcon
          className="w-5 h-5 cursor-pointer text-gray-800"
          onClick={() => handleSearch()}
        />
        <div className="relative">
          {/* Icone WishList */}
          <HeartIcon
            className="w-5 h-5 cursor-pointer text-gray-800"
            onClick={() => {
              setShow(!show);
            }}
          />
          {/* Round and Number of item in Wishlist */}

          <div className="w-3 h-3 bg-orange-300 absolute top-0 -right-1 rounded-full flex items-center justify-center cursor-pointer">
            <p className="text-white text-[8px] font-semibold">
              {props.product.product.length}
            </p>
          </div>
        </div>
        <div className="relative">
          {/* Icone Cart  */}
          <ShoppingBagIcon
            className="w-5 h-5 cursor-pointer text-gray-800"
            onClick={() => {
              setShowBasket(!showBasket);
            }}
          />
          {/* Round and Number of item in cart */}
          <div className="w-3 h-3 bg-orange-300 absolute top-0 -right-1 rounded-full flex items-center justify-center cursor-pointer">
            <p className="text-white text-[8px] font-semibold ">
              {props.item.item.length}
            </p>
          </div>
        </div>
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
      </div> */}
      {showSearch && (
        <div className="bg-white absolute w-3/4 h-full top-1/2">
          <ModalSearch />
          <XCircleIcon
            onClick={() => handleSearch()}
            className="w-5 h-5 text-orange-500 absolute right-2 z-50 top-[5px] cursor-pointer"
          />
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    product: store.product,
    item: store.item,
  };
};
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(BigNav);
