import React from "react";
import { TrashIcon } from "@heroicons/react/outline";
import { connect } from "react-redux";
import { addToWish } from "../../../action/wishlist/addToWishlistAction";
import { deleteToWish } from "../../../action/wishlist/addToWishlistAction";
function NavProductTemplate(props) {
  return (
    <div
      className=" lg:w-[400px] md:w-[350px] w-[300px] md:h-[500px] h-[420px]  flex flex-col justify-between md:justify-around border-2 p-5 mb-5 rounded-md mx-auto
lg:mx-0  shrink-0 cursor-pointer  "
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
        <p>({props.count} reviews)</p>
      </div>
      <TrashIcon
        onClick={() => {
          props.deleteToWish(props.id);
          console.log(props.id);
        }}
      />
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    product: store.product,
  };
};
const mapDispatchToProps = {
  addToWish,
  deleteToWish,
};
export default connect(mapStateToProps, mapDispatchToProps)(NavProductTemplate);
