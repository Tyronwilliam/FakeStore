import React, { useEffect, useRef, useState } from "react";
import Man from "../asset/manglasses.jpg";
import { XCircleIcon } from "@heroicons/react/outline";
import CategoryList from "./smallScreenComposant/categoryList";
import FiltreList from "./smallScreenComposant/filtreList";
import { connect } from "react-redux";
import { loadData } from "../action/apiData/apiDataAction";
import ProductTemplate from "./defaultPrint/productTemplate";
import { getAll } from "./Api/fonction";
function Boutique(props) {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [pagination, setPagination] = useState(4);
  const [slice, setSlice] = useState(selectedProducts.slice(0, pagination));
  // Slice the array

  // Open Modal Handler
  const handleOpen = () => {
    open ? setOpen(false) : setOpen(true);
  };
  // Open Modal Handler
  const handleOpen1 = () => {
    open1 ? setOpen1(false) : setOpen1(true);
  };
  // Add 4 to the Array
  const loadMore = () => {
    setPagination(pagination + pagination);
  };
  // By default products take all of them
  useEffect(() => {
    getAll().then((res) => {
      props.loadData(res);
      return setSelectedProducts(res);
    });
  }, []);
  // If user select a category set Product to the category
  useEffect(() => {
    setSelectedProducts(props.article.article);
    console.log(props.article.article, "my article that change ? ");
    setPagination(4);
  }, [props.article]);

  return (
    <div>
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
        <div className="hidden md:block mb-5">
          <CategoryList />
        </div>
        {/* Filter  */}
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
        <div className="md:flex mb-5">
          <div className="flex">
            <p className="font-semibold text-orange-500">
              {selectedProducts.length}{" "}
            </p>
            <p className="ml-1 font-semibold">produits trouvés |</p>
          </div>
          <div className="flex items-center  md:ml-1 text-orange-500">
            <XCircleIcon className="w-4 h-4" />
            <p>Supprimer les filtres</p>
          </div>
        </div>
        {/* Products */}
        <div className="flex flex-wrap md:gap-7 justify-center">
          {selectedProducts.slice(0, pagination)?.map((products) => {
            return (
              <ProductTemplate
                key={products.id}
                image={products.image}
                title={products.title}
                price={products.price}
                count={products.rating.count}
                category={products.category}
              />
            );
          })}
        </div>
        <button
          className="p-3 border border-gray-400 rounded-sm mx-auto block mt-5 font-semibold active:bg-black active:text-white hover:bg-black hover:text-white"
          onClick={() => {
            loadMore();
          }}
        >
          LOAD MORE
        </button>
      </div>
      {/* View */}
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    article: store.article,
  };
};
const mapDispatchToProps = {
  loadData,
};
export default connect(mapStateToProps, mapDispatchToProps)(Boutique);
