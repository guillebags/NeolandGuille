import axios from "axios";

export const APIUser = axios.create({
  baseURL: `http://localhost:8080/api/v1`,
  timeout: 60000,
});
