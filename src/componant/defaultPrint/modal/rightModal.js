import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { deleteItemBasket } from "../../../action/basket/basketAction";
import { deleteToWish } from "../../../action/wishlist/addToWishlistAction";
import { XCircleIcon } from "@heroicons/react/outline";
import ModalWIsh from "./modalWish";
import ModalBasket from "./modalBasket";
import { useNavigate } from "react-router-dom";

function RightModal(props) {
  const [wish, setWish] = useState([]);
  const [basket, setBasket] = useState([]);
  const [disable, setDisable] = useState(true);
  let navigate = useNavigate();
  //

  //
  useEffect(() => {
    setWish(props.product.product);
  }, [props.product]);
  useEffect(() => {
    setBasket(props.item.item);
    console.log(basket.length);
  }, [props.item]);

  return (
    <div className={props.className}>
      {/* Get className from BigNav  */}
      <div className="flex justify-between items-center mb-5">
        <h1 className=" text-sm md:text-lg ">{props.content}</h1>
        <XCircleIcon
          className="w-6 h-6  top-[35px] right-24 text-orange-500 cursor-pointer"
          onClick={() => {
            props.handle(props.value);
          }}
        />
      </div>
      {props.content === "Wishlist" && (
        <>
          {wish?.map((produit, index) => {
            return (
              <ModalWIsh
                key={index}
                image={produit.image}
                title={produit.title}
                price={produit.price}
                count={produit.rating.count}
                id={produit.id}
                produits={produit}
              />
            );
          })}
        </>
      )}
      {props.content === "Shopping Cart" && (
        <>
          {basket?.map((produit, index) => {
            return (
              <ModalBasket
                key={index}
                image={produit.image}
                title={produit.title}
                price={produit.price}
                count={produit.rating.count}
                id={produit.id}
              />
            );
          })}
          <button
            className={`h-10 w-20 px-5 py-3 text-white border border-grey-200 flex items-center justify-center mx-auto  rounded-lg ${
              disable ? "bg-gray-200 " : "bg-orange-500"
            }`}
            onClick={() => {
              navigate("/checkout", { replace: true });
            }}
            disabled={disable}
          >
            Pay
          </button>
        </>
      )}
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
  deleteItemBasket,
  deleteToWish,
};
export default connect(mapStateToProps, mapDispatchToProps)(RightModal);
