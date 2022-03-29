import React, { useState } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import { XIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/outline";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

function SmallNav() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  return (
    <div className="p-4 max-w-[425px] md:hidden relative">
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
              <li className="hover:text-orange-500 flex">
                Accueil{" "}
                <ChevronDownIcon className="w-6 h-6 mr-2 cursor-pointer" />
              </li>
              <li className="hover:text-orange-500 flex">
                Boutique{" "}
                <ChevronDownIcon className="w-6 h-6 mr-2 cursor-pointer" />
              </li>
              <li className="hover:text-orange-500 flex">
                Collections{" "}
                <ChevronDownIcon className="w-6 h-6 mr-2 cursor-pointer" />
              </li>
              <li className="hover:text-orange-500 flex">
                Blog <ChevronDownIcon className="w-6 h-6 mr-2 cursor-pointer" />
              </li>
              <li className="hover:text-orange-500 flex">
                Pages{" "}
                <ChevronDownIcon className="w-6 h-6 mr-2 cursor-pointer" />
              </li>
              <li className="hover:text-orange-500 flex">
                Element{" "}
                <ChevronDownIcon className="w-6 h-6 mr-2 cursor-pointer" />
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

export default SmallNav;
