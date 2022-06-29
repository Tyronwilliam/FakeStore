import React, { useState } from "react";
import { XCircleIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import { connect } from "react-redux";
function ProductTemplate(props) {
  let stars = [];
  const star = <StarIcon className="w-6 h-6 text-orange-500" />;
  const [open, setOpen] = useState(false);

  const randomStar = () => {
    // const stars = Array.from({length: numberOfstars}, () => star)

    const numberOfstar = Math.floor(Math.random() * 5) + 1;
    for (let i = 0; i < numberOfstar; i++) {
      stars.push(star);
    }
    // retourne un tableau d'objet
    return stars;
  };

  return (
    <div>
      <div
        className=" lg:w-[400px] md:w-[350px] w-[300px] md:h-[500px] h-[420px]  flex flex-col justify-between md:justify-around border-2 p-5 mb-5 rounded-md mx-auto
    lg:mx-0  shrink-0 cursor-pointer  "
        onClick={() => {
          setOpen(true);
        }}
      >
        {/* Image */}
        <div className="md:w-[200px] lg:w-[250px] w-[150px] h-[200px] md:h-80 mx-auto">
          <img src={props.image} alt="" className="w-full h-full" />
        </div>
        {/* Title  */}
        <p className="font-semibold">{props.title}</p>
        {/* Price */}
        <p className="text-orange-500 font-semibold text-lg">{props.price} $</p>
        {/* Star rate */}
        <div className="flex items-center">
          <p className="flex">{randomStar()}</p>
          <p>({props.count} reviews)</p>
        </div>
      </div>
      {open && (
        <div className={`w-full h-[100%] fixed top-0 left-0 z-50   `}>
          {/* Background grey */}
          <div
            className={`w-full h-[100%] bg-gray-500  relative opacity-90 `}
            onClick={() => {
              setOpen(false);
            }}
          ></div>
          {/* Modal Products */}
          {props.children}
          {/* Icone to close Modal */}
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

const mapStateToProps = (store) => {
  return {
    article: store.article,
  };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductTemplate);
