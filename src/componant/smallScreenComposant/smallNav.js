import React, { useState, useRef } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import { XIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/outline";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
function SmallNav() {
  const [open, setOpen] = useState(false);
  const close = useRef(null);

  const handleClick = () => {
    open ? setOpen(false) : setOpen(true);
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
            <HeartIcon className="w-6 h-6 mr-3" />
            <ShoppingBagIcon className="w-6  h-6 " />
          </div>
          {/* SearchBar */}
          <div className="mb-5 w-full">
            <input type="text" placeholder="Recherchez" className="w-full" />
          </div>

          <nav className="w-full h-48">
            <ul className="flex flex-col justify-between w-full h-full ">
              <li className="hover:text-orange-500 flex" ref={close}>
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
    </div>
  );
}

export default SmallNav;
