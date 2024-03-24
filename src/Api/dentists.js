import axios from "axios";

export const getDentists = async () => {
  let res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return res.data;
};

export const getDentistById = async (id) => {
  let res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  return res.data;
};
