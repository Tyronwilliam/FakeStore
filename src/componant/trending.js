import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductTemplate from "./productTemplate";

function Trending() {
  const [trend, setTrend] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=8&sort=desc")
      .then((res) => {
        console.log(res.data, "je viens de trending");
        setTrend(res.data);
      })
      .catch((err) => {
        return err;
      });
  }, []);
  return (
    <div className="px-5 lg:px-10 max-w-[1024px] mx-auto">
      <div className="mb-10">
        <h1 className="text-2xl mb-3 font-semibold">Produits Tendances</h1>
        <p className="text-gray-600">
          Nos produits les plus tendances sur la base des ventes. Mise à jour
          par heure.
        </p>
      </div>
      <div className="flex flex-wrap md:gap-7 justify-center">
        {trend?.map((tre) => {
          return (
            <ProductTemplate
              key={tre.id}
              image={tre.image}
              title={tre.title}
              price={tre.price}
            />
          );
        })}
      </div>
      <button className="p-3 border border-gray-400 rounded-sm mx-auto block mt-5 font-medium active:bg-black active:text-white">
        LOAD MORE
      </button>
    </div>
  );
}

export default Trending;
