import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadData } from "../../action/apiData/apiDataAction";
function FiltreList(props) {
  let arrayOfNumber = [];
  const [array, setArray] = useState([]);
  useEffect(() => {
    setArray(props.article.article);
  }, [props.article]);
  const sortByLowtoHigh = () => {
    array.map((prix) => {
      arrayOfNumber.push(prix.price);

      arrayOfNumber.sort((a, b) => a - b);
      return loadData(arrayOfNumber);
    });
  };
  const sortByHightoLow = () => {
    array.map((prix) => {
      arrayOfNumber.push(prix.price);

      arrayOfNumber.sort((a, b) => b - a);
      return loadData(arrayOfNumber);
    });
  };
  useEffect(()=>{

  }, [])
  return (
    <div>
      <ul className="md:flex">
        <li
          className="cursor-pointer"
          onClick={() => {
            sortByLowtoHigh();
          }}
        >
          Prix : - au + cher
        </li>
        <li
          className="md:ml-10 mb-5 md:mb-0 cursor-pointer"
          onClick={() => {
            sortByHightoLow();
          }}
        >
          Prix : + au - cher
        </li>
      </ul>
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    article: store.article,
  };
};
const mapDispatchToProps = {
  loadData,
};
export default connect(mapStateToProps, mapDispatchToProps)(FiltreList);
