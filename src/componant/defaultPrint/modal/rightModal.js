import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addToWish } from "../../../action/wishlist/addToWishlistAction";
import { deleteToWish } from "../../../action/wishlist/addToWishlistAction";
import { TrashIcon } from "@heroicons/react/outline";

import { XCircleIcon } from "@heroicons/react/outline";
import NavProductTemplate from "./navProductTemplate";

function RightModal(props) {
  const [wish, setWish] = useState([]);

  useEffect(() => {
    setWish(props.product.product);
    console.log(wish);
  }, [props.product]);
  return (
    <div className={props.className}>
      <div className="flex justify-between items-center">
        <h1 className="text-lg">{props.content}</h1>
        <XCircleIcon
          className="w-6 h-6  top-[35px] right-24 text-orange-500 cursor-pointer"
          onClick={() => {
            props.handle(props.value);
          }}
        />
      </div>
      {props.content === "COUP DE COEUR" && (
        <>
          {wish?.map((produit, index) => {
            return (
              <NavProductTemplate
                key={index}
                image={produit.image}
                title={produit.title}
                price={produit.price}
                count={produit.count}
                id={produit.id}
              />
            );
          })}
        </>
      )}
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
export default connect(mapStateToProps, mapDispatchToProps)(RightModal);
