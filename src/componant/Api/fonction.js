import axios from "axios";

export const getAll = () => {
  return axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
