import React, { useState, useEffect } from "react";
import Formu from "../componant/defaultPrint/form";
import Order from "./defaultPrint/order";
function CheckOut() {
  return (
    <div className="border-t">
      <h1 className="text-center text-xl my-12">Checkout</h1>
      <div className=" w-full h-screen md:flex md:w-4/5 md:mx-auto">
        {/* Billing Detail */}
        <div className=" w-full h-[650px] px-5 pt-5">
          <h2 className="mb-5">Billing detail</h2> <Formu />
        </div>
        {/* Order details */}
        <div className="w-full h-80">
          <div className="w-full h-auto bg-gray-100  px-5 pt-5 mb-5 ">
            <h2 className="mb-5">Your order</h2>
            <Order />
          </div>
          {/* Button to pay  */}
          <button className="w-full bg-orange-400 text-white font-medium h-5 py-5 px-4 flex justify-center items-center">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
