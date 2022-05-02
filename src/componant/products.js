import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductTemplate from "./defaultPrint/productTemplate";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=5")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        return err;
      });
    console.log(products, "mine");
  }, []);

  return (
    <div className="max-w-[950px] flex flex-wrap h-auto px-3 lg:flex-row lg:flex-wrap  justify-around mx-auto lg:px-0">
      {products?.map((produit, index) => {
        return (
          <ProductTemplate
            key={produit.id}
            image={produit.image}
            array={products}
            title={produit.title}
            price={produit.price}
            count={produit.rating.count}
            category={produit.category}
          />
        );
      })}
    </div>
  );
}

export default Products;
