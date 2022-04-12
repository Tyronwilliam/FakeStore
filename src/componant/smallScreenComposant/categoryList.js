import React, { useEffect, useState, useRef } from "react";
import { getAll } from "../Api/fonction";
import { getElectro } from "../Api/fonction";
import { getMen } from "../Api/fonction";
import { getWomen } from "../Api/fonction";
import { getJew } from "../Api/fonction";
import { connect } from "react-redux";
import { loadData } from "../../action/apiData/apiDataAction";
function CategoryList(props) {
  const whatProduct = async (param) => {
    switch (param) {
      case "Toute":
        try {
          const res = await getAll();
          props.loadData(res);
          return res;
        } catch (err) {
          console.log(err, "mon erreur");
          return err;
        }
        break;
      case "Electro":
        try {
          const res_1 = await getElectro();
          props.loadData(res_1);
          return res_1;
        } catch (err_1) {
          console.log(err_1, "mon erreur");
          return err_1;
        }
        break;
      case "Bijoux":
        try {
          const res_2 = await getJew();
          props.loadData(res_2);
          return res_2;
        } catch (err_2) {
          console.log(err_2, "mon erreur");
          return err_2;
        }
        break;
      case "Men":
        try {
          const res_3 = await getMen();
          props.loadData(res_3);
          return res_3;
        } catch (err_3) {
          console.log(err_3, "mon erreur");
          return err_3;
        }
        break;
      case "Women":
        try {
          const res_4 = await getWomen();
          props.loadData(res_4);
          return res_4;
        } catch (err_4) {
          console.log(err_4, "mon erreur");
          return err_4;
        }
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <ul className="md:flex md:justify-between mb-5 md:mb-0">
        <li
          className="hover:text-orange-500 cursor-pointer "
          onClick={() => {
            whatProduct("Toute");
          }}
        >
          Toutes
        </li>
        <li
          className="hover:text-orange-500 cursor-pointer "
          onClick={() => {
            whatProduct("Electro");
          }}
        >
          Electronique
        </li>
        <li
          className="hover:text-orange-500 cursor-pointer "
          onClick={() => {
            whatProduct("Bijoux");
          }}
        >
          Bijoux
        </li>
        <li
          className="hover:text-orange-500 cursor-pointer "
          onClick={() => {
            whatProduct("Men");
          }}
        >
          Vêtement Homme
        </li>
        <li
          className="hover:text-orange-500 cursor-pointer "
          onClick={() => {
            whatProduct("Women");
          }}
        >
          Vêtement Femme
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
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
