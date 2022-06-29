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
  // Check if we add wish to basket
  const productExistinBasket = () => {
    let arrWish = props.product.product;
    let arrBasket = props.item.item;
    let same = arrWish?.filter((x) => !arrBasket.includes(x));
    setWish(same);
  };
  //
  let navigate = useNavigate();

  //
  useEffect(() => {
    setWish(props.product.product);
  }, [props.product]);
  useEffect(() => {
    setBasket(props.item.item);
    productExistinBasket();
  }, [props.item, basket]);
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
            className=" h-10 w-20 px-5 py-3 text-white border border-grey-200 flex items-center justify-center mx-auto bg-orange-500 rounded-lg"
            onClick={() => {
              navigate("/checkout", { replace: true });
            }}
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
