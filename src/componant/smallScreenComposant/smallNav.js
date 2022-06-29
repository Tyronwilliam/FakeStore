import React, { useState } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import { XIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/outline";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import WishList from "../defaultPrint/modal/rightModal";
import Basket from "../defaultPrint/modal/rightModal";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
function SmallNav(props) {
  const [open, setOpen] = useState(false);
  const [showBasket, setShowBasket] = useState(false);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    open ? setOpen(false) : setOpen(true);
  };
  const handleBasket = () => {
    setShowBasket(!showBasket);
  };
  const handle = () => {
    setShow(!show);
  };

  return (
    <div className="p-4 max-w-[425px] md:hidden relative text-sm">
      {open === true ? (
        <XIcon
          className="w-8 h-8 mb-3"
          onClick={() => {
            handleClick();
          }}
        />
      ) : (
        <MenuIcon
          className="w-8 h-8"
          onClick={() => {
            handleClick();
          }}
        />
      )}

      {open && (
        <div className="px-5 pt-5 max-w-[320px] h-80 border-2  absolute z-50 bg-white">
          {/* Wishlist And basket */}
          <div className="flex justify-end mb-2">
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
            <div className="relative ml-2">
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
            </div>{" "}
          </div>
          {/* SearchBar */}
          <div className="mb-5 w-full">
            <input type="text" placeholder="Recherchez" className="w-full" />
          </div>

          <nav className="w-full h-48">
            <ul className="flex flex-col justify-between w-full h-full ">
              <li className="hover:text-orange-500 flex">
                <Link to="/">Accueil</Link>
              </li>
              <li
                className="hover:text-orange-500 flex"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <Link to="/boutique">Boutique</Link>
              </li>
              <li className="hover:text-orange-500 flex">Collections </li>
              <li className="hover:text-orange-500 flex">Blog</li>
              <li className="hover:text-orange-500 flex">Pages </li>
              <li className="hover:text-orange-500 flex">Element </li>
            </ul>
          </nav>
        </div>
      )}
      {/* Whislist */}

      <WishList
        handle={handle}
        className={`top-0 right-0 w-full border-l-2 bg-white px-5 pt-5  fixed h-full z-50 ease-in-out duration-300 overflow-y-auto ${
          show ? "translate-x-0 " : "translate-x-full"
        }`}
        content="Wishlist"
      />
      {/* Basket  */}
      <Basket
        handle={handleBasket}
        className={`top-0 right-0 w-full border-l-2 bg-white  px-5 pt-5 fixed h-full z-50 ease-in-out duration-300 overflow-y-auto ${
          showBasket ? "translate-x-0 " : "translate-x-full"
        }`}
        content="Shopping Cart"
      />
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
export default connect(mapStateToProps, mapDispatchToProps)(SmallNav);
