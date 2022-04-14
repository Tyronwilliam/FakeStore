import React, { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import ModalProduct from "./modal/modalProduct";
function ProductTemplate(props) {
  const star = <StarIcon className="w-6 h-6 text-orange-500" />;
  const stars = [];
  const [open, setOpen] = useState(false);

  const randomStar = () => {
    // const stars = Array.from({length: numberOfstars}, () => star)

    const numberOfstar = Math.floor(Math.random() * 5) + 1;
    for (let i = 0; i < numberOfstar; i++) {
      stars.push(star);
    } // retourne un tableau d'objet
    return stars;
  };
  randomStar();

  return (
    <div
      className=" lg:w-[400px] md:w-[350px] w-[300px] h-[500px] flex flex-col justify-around border-2 p-5 mb-5 rounded-md mx-auto
    lg:mx-0  shrink-0 "
      onClick={() => {
        setOpen(true);
      }}
    >
      <div className="max-w-[250px] max-h-80 mx-auto">
        <img src={props.image} alt="" className="w-full h-full" />
      </div>
      <p className="font-semibold">{props.title}</p>
      <p className="text-orange-500 font-semibold text-lg">{props.price}€</p>
      <div className="flex">
        {stars}
        <p>({props.count})</p>
      </div>
      {open && (
        <div className="w-full h-[100%] fixed top-0 left-0 z-50 ">
          <div className="w-full h-[100%] bg-gray-500 opacity-90 relative "></div>
          <ModalProduct />
        </div>
      )}
    </div>
  );
}

export default ProductTemplate;
