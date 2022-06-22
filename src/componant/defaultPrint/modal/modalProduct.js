import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addToWish } from "../../../action/wishlist/addToWishlistAction";
import { addToBasket } from "../../../action/basket/basketAction";
import { HeartIcon } from "@heroicons/react/outline";
import Facebook from "../../../asset/facebook.png";
import Instagram from "../../../asset/instagram.png";
import Twitter from "../../../asset/twitter.png";

function ModalProduct(props) {
  const [color, setColor] = useState(false);

  useEffect(() => {
    let arrWish = props.product.product;
    arrWish.includes(props.produit) ? setColor(true) : setColor(false);
  }, []);
  return (
    <div className="w-[300px] bg-white h-[400px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-y-auto md:w-[700px] md:flex   ">
      {/* Image */}
      <div className="max-w-[250px] max-h-[400px] mx-auto mt-5 self-center md:mt-0">
        <img src={props.image} alt="" />
      </div>
      {/* Infos */}
      <div className=" mt-5 px-3  w-[95%] mx-auto md:w-[350px] pb-4">
        {/* Titre */}
        <h4 className="mb-2">{props.title}</h4>
        {/* Stars - Review */}
        <div className="flex text-sm text-gray-500 mb-3 items-center">
          {props.stars}
          <p>({props.count} reviews)</p>
        </div>
        {/* Price */}
        <p className="text-orange-500 font-semibold text-lg mb-3 ">
          {props.price}$
        </p>
        {/* Avaible in stock */}
        <div className="flex mb-4">
          <p>Available : </p>
          <p className="text-green-500 ml-1"> In stock</p>
        </div>
        {/* Color */}
        <div className="flex mb-3">
          <p>color :</p>
          <div className="flex justify-between w-36 ml-1">
            <div className="w-6 h-6  bg-red-500"></div>
            <div className="w-6 h-6 bg-orange-500"></div>
            <div className="w-6 h-6 bg-blue-500"></div>
            <div className="w-6 h-6 bg-green-500"></div>
            <div className="w-6 h-6 bg-purple-500"></div>
          </div>
        </div>
        {/* Size */}
        {props.category === "women's clothing" ||
        props.category === "men's clothing" ? (
          <div className="flex mb-2">
            <p>size :</p>
            <div className="flex justify-between w-32 ml-3  text-gray-500 text-sm">
              <div className="w-6 h-6 border flex items-center justify-center cursor-pointer  ">
                <p>S</p>
              </div>
              <div className="w-6 h-6 border flex items-center justify-center cursor-pointer ">
                <p>M</p>
              </div>
              <div className="w-6 h-6 border flex items-center justify-center cursor-pointer ">
                <p>L</p>
              </div>
              <div className="w-6 h-6 border flex items-center justify-center cursor-pointer ">
                <p>XL</p>
              </div>
            </div>
          </div>
        ) : null}
        {/* Quantity and add to cart add to like */}
        <div className="flex items-center pb-3 mb-5 border-b">
          <p>qty : </p>
          <input type="number" className="border w-10 text-center ml-2" />
          <button
            className="ml-3 bg-orange-500 text-white text-xs p-2"
            onClick={() => {
              props.addToBasket(props.produit);
            }}
          >
            Ajouter au panier
          </button>
          {/* Coup de coeur  */}
          <HeartIcon
            className={
              color
                ? "text-red-600 w-4 h-4 cursor-pointer ml-5 fill-red-600"
                : "w-4 h-4 cursor-pointer text-gray-500 ml-5"
            }
            onClick={() => {
              props.addToWish(props.produit);
              setColor(true);
            }}
          />
        </div>
        {/* Category - Share on Social media  */}

        <div>
          <div className="flex">
            <p>category : </p>
            <p className="text-gray-500 ml-2">{props.category}</p>
          </div>
          <div className="flex justify-between items-center w-28">
            <p>share :</p>
            <img
              src={Facebook}
              alt="Logo social media"
              className="w-3 h-3 cursor-pointer"
            />
            <img
              src={Instagram}
              alt="Logo social media"
              className="w-3 h-3 cursor-pointer"
            />
            <img
              src={Twitter}
              alt="Logo social media"
              className="w-3 h-3 cursor-pointer"
            />
          </div>
        </div>
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
  addToWish,
  addToBasket,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalProduct);
