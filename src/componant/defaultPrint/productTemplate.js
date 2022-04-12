import React from "react";

function ProductTemplate(props) {
  return (
    <div
      className=" lg:w-[400px] md:w-[350px] w-[300px] h-[500px] flex flex-col justify-around border-2 p-5 mb-5 rounded-md mx-auto  hover:opacity-75
    lg:mx-0  shrink-0"
    >
      <div className="max-w-[250px] max-h-80 mx-auto">
        <img src={props.image} alt="" className="w-full h-full" />
      </div>
      <p className="font-semibold">{props.title}</p>
      <p className="text-orange-500 font-semibold text-lg">{props.price}€</p>
    </div>
  );
}

export default ProductTemplate;
