import axios from "axios";

export async function getAll() {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
}
export function getElectro() {
  return axios
    .get("https://fakestoreapi.com/products/category/electronics")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
}
export function getJew() {
  return axios
    .get("https://fakestoreapi.com/products/category/jewelery")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
}
export function getMen() {
  return axios
    .get("https://fakestoreapi.com/products/category/men%27s%20clothing")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
}
export function getWomen() {
  return axios
    .get("https://fakestoreapi.com/products/category/women%27s%20clothing")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
}
