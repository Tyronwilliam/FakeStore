import React, { useState } from "react";
import Man from "../asset/manglasses.jpg";
import { XCircleIcon } from "@heroicons/react/outline";
import CategoryList from "./smallScreenComposant/categoryList";
import FiltreList from "./smallScreenComposant/filtreList";
import { getAll } from "./Api/fonction";

function Boutique() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [allProducts, setAllProducts] = useState([]);

  const handleOpen = () => {
    open ? setOpen(false) : setOpen(true);
  };
  const handleOpen1 = () => {
    open1 ? setOpen1(false) : setOpen1(true);
  };

  const whatProduct = (param) => {
    switch (param) {
      case "Toute":
        return getAll()
          .then((res) => {
            console.log(res, "via cat");
            setAllProducts(res);
            return res;
          })
          .catch((err) => {
            console.log(err, "mon erreur");
            return err;
          });

        break;

      default:
        break;
    }
  };
  return (
    <div className="">
      {/* Banner Boutique on Top  */}
      <div className="w-full h-80 relative">
        <img
          src={Man}
          alt="Man with glasses"
          className="w-full h-full object-cover"
        />
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 md:text-lg lg:text-xl">
          Boutique Standard
        </h1>
      </div>
      {/* Category */}
      <div className="px-5 pt-5 max-w-[1000px] mx-auto text-sm md:px-20">
        <h2
          onClick={() => {
            handleOpen(open);
          }}
          className="hover:border-b border-orange-500 w-fit mb-5 md:hidden "
        >
          Voir catégorie
        </h2>
        {open && <CategoryList />}
        {/* Filter  */}
        <div className="hidden md:block mb-5">
          <CategoryList />
        </div>
        <h2
          onClick={() => {
            handleOpen1(open1);
          }}
          className="hover:border-b border-orange-500 w-fit mb-5 md:hidden  "
        >
          Filtre
        </h2>
        {open1 && <FiltreList />}
        <div className="hidden md:block mb-5">
          <FiltreList />
        </div>
        {/* Number of Products */}
        <div className="md:flex">
          <p className="">Nombre + produits trouvés</p>
          <div className="flex items-center md:ml-5">
            <XCircleIcon className="w-4 h-4" />
            <p>Supprimer les filtres</p>
          </div>
        </div>
        {/* Products */}
        {}
      </div>
      {/* View */}
    </div>
  );
}

export default Boutique;
