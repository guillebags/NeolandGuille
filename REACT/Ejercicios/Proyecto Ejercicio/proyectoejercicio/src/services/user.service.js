import { APIUser } from "./service.config";

//user provisional hasta que meta todos los campos en el componente
const defaultUser = {
  email: "default3@gmail.com",
  name: "default",
  password: "default",
  year: 2013,
  gender: "mujer",
  rol: "user",
};

export const registerUser = async (formData) => {
  return APIUser.post("/users/register", { ...defaultUser, ...formData })
    .then((res) => res)
    .catch((error) => error);
};

export const login = async (formData) => {
  return APIUser.post("/users/login", formData)
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((error) => error);
};
