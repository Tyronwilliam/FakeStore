import React from "react";
import { TrashIcon } from "@heroicons/react/outline";
import { connect } from "react-redux";
import { deleteToWish } from "../../../action/wishlist/addToWishlistAction";
import { deleteItemBasket } from "../../../action/basket/basketAction";
function ModalWish(props) {
  return (
    <div
      className="w-full flex flex-col justify-between md:justify-around border-2 p-5 mb-5 rounded-md mx-auto
lg:mx-0  cursor-pointer  "
    >
      {/* Trash Icone */}
      <TrashIcon
        className="w-6 h-6 text-orange-500"
        onClick={() => {
          props.deleteToWish(props.id);
        }}
      />
      {/* Image */}
      <div className="w-[150px] h-[200px] mx-auto mb-2">
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
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    product: store.product,
    item: store.item,
  };
};
const mapDispatchToProps = {
  deleteToWish,
  deleteItemBasket,
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalWish);
