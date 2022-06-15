import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadData } from "../../action/apiData/apiDataAction";
function FiltreList(props) {
  const [array, setArray] = useState([]);
  // useEffect(() => {
  //   getAll().then((res) => {
  //     return setArray(res);
  //   });
  //   console.log(array, "so? ");
  // }, []);
  useEffect(() => {
    setArray(props.article.article);
  }, [props.article]);
  // Trier article du moins au plus
  const sortByLowtoHigh = () => {
    array.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    return props.loadData(array);
  };
  // Trier article du plus au moins

  const sortByHightoLow = () => {
    array.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    return props.loadData(array);
  };

  return (
    <div>
      <ul className="md:flex">
        <li
          className="cursor-pointer hover:text-orange-500"
          onClick={() => {
            sortByLowtoHigh();
          }}
        >
          Prix : - au + cher
        </li>
        <li
          className="md:ml-10 mb-5 md:mb-0 cursor-pointer hover:text-orange-500"
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
