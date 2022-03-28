import React, { useEffect, useState } from "react";
import axios from "axios";
function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=5")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        return err;
      });
  }, []);
  return (
    <div className="max-w-[750px] flex flex-col h-auto px-3 lg:flex-row lg:flex-wrap  justify-between mx-auto lg:px-0">
      {products?.map((produit, index) => {
        return (
          <div
            key={index}
            className="flex flex-col border-2 p-5 mb-5 rounded-sm w-[300px] md:w-[400px] mx-auto lg:w-[350px] hover:opacity-75
            lg:mx-0"
          >
            <div className="mb-10">
              <p className="mb-3">{produit.title}</p>
              <p className="text-orange-500">{produit.price}€</p>
            </div>
            <div className="max-w-[250px] h-80 md:h-64 mx-auto">
              <img src={produit.image} alt="" className="w-full h-full" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
