import React, { useEffect, useState } from "react";
import ModalProduct from "./modal/modalProduct";
import { XCircleIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

function ProductTemplate(props) {
  const stars = [];
  const star = <StarIcon className="w-6 h-6 text-orange-500" />;
  const starModal = <StarIcon className="w-3 h-3 text-orange-500" />;
  const [open, setOpen] = useState(false);

  const randomStar = () => {
    // const stars = Array.from({length: numberOfstars}, () => star)

    const numberOfstar = Math.floor(Math.random() * 5) + 1;
    for (let i = 0; i < numberOfstar; i++) {
      stars.push(star);
    } // retourne un tableau d'objet

    return stars;
  };

  return (
    <div
    //   className=" lg:w-[400px] md:w-[350px] w-[300px] h-[500px] flex flex-col justify-around border-2 p-5 mb-5 rounded-md mx-auto
    // lg:mx-0  shrink-0 cursor-pointer  "
    >
      <div
        className=" lg:w-[400px] md:w-[350px] w-[300px] md:h-[500px] h-[420px]  flex flex-col justify-between md:justify-around border-2 p-5 mb-5 rounded-md mx-auto
    lg:mx-0  shrink-0 cursor-pointer  "
        onClick={() => {
          setOpen(true);
        }}
      >
        <div className="md:w-[200px] lg:w-[250px] w-[150px] h-[200px] md:h-80 mx-auto">
          <img src={props.image} alt="" className="w-full h-full" />
        </div>
        <p className="font-semibold">{props.title}</p>
        <p className="text-orange-500 font-semibold text-lg">{props.price} $</p>
        <div className="flex items-center">
          {randomStar()}
          <p>({props.count} reviews)</p>
        </div>
      </div>
      {open && (
        <div className="w-full h-[100%] fixed top-0 left-0 z-50">
          <div
            className="w-full h-[100%] bg-gray-500 opacity-90 relative "
            onClick={() => {
              setOpen(false);
            }}
          ></div>
          <ModalProduct
            image={props.image}
            title={props.title}
            stars={props.starModal}
            category={props.category}
            price={props.price}
            count={props.count}
          />
          <XCircleIcon
            className="w-8 h-8 absolute top-2 right-2 text-orange-500 cursor-pointer"
            onClick={() => {
              setOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
}
export default ProductTemplate;
