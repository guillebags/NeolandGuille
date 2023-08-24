import { APIuser } from "./serviceApiUser.config";

//! ------------------------------- REGISTER -----------------------------------
export const registerUser = async (formData) => {
  return APIuser.post("/users/register", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => error);
};

//! -------- LOGIN
export const login = async (formData) => {
  return APIuser.post("/users/login", formData)
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((error) => error);
};
