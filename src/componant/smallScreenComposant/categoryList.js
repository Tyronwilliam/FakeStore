import React, { useState } from "react";
import { getAll } from "../Api/fonction";
function CategoryList() {
  const [allProducts, setAllProducts] = useState([]);

  return (
    <div>
      <ul className="md:flex md:justify-between mb-5 md:mb-0">
        <li
          className="hover:text-orange-500 cursor-pointer "
          onClick={() => {}}
        >
          Toutes
        </li>
        <li
          className="hover:text-orange-500 cursor-pointer "
          onClick={() => {}}
        >
          Electronique
        </li>
        <li
          className="hover:text-orange-500 cursor-pointer "
          onClick={() => {}}
        >
          Bijoux
        </li>
        <li
          className="hover:text-orange-500 cursor-pointer "
          onClick={() => {}}
        >
          Vêtement Homme
        </li>
        <li
          className="hover:text-orange-500 cursor-pointer "
          onClick={() => {}}
        >
          Vêtement Femme
        </li>
      </ul>
    </div>
  );
}

export default CategoryList;
