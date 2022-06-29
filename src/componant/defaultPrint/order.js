import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
function Order(props) {
  const [total, setTotal] = useState(0);

  const sum = () => {
    let totalPrice = 0;
    props.item.item?.map((article) => {
      return (totalPrice += article.price);
    });
    setTotal(totalPrice);
  };
  useEffect(() => {
    sum();
  }, [props.item]);
  return (
    <div>
      {/* Order title */}
      <div className="flex justify-between border-b-2 mb-5">
        <p>Product</p>
        <p>Total</p>
      </div>
      {/* Order item  */}
      {props.item.item?.map((article) => {
        return (
          <div
            className="flex justify-between items-center  mb-5"
            key={article.id}
          >
            <p className="text-sm">{article.title}</p>
            <p className="text-green-600 font-bold text-sm">${article.price}</p>
          </div>
        );
      })}
      {/* Total order */}
      <div className="flex justify-between items-center  border-t-2 py-5">
        <h1>Order Totals</h1>
        <p className="text-red-600 font-bold">${total}</p>
      </div>
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    item: store.item,
  };
};
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Order);
