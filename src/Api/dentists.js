import { useFetch } from "../helpers/hooks/useFetch";

export const getDentists = () => {
  return useFetch("https://jsonplaceholder.typicode.com/users", []);
};

export const getDentistById = (id) => {
  return useFetch(`https://jsonplaceholder.typicode.com/users/${id}`, {});
};
