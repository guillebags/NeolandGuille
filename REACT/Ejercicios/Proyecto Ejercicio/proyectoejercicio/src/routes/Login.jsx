import React from "react";
import { useForm } from "react-hook-form";
import { login } from "../services/user.service";

const Login = () => {
  const { handleSubmit, register } = useForm();

  //componetizar por una parte el welcome y por otra el login, y este componente que se encargue de saber si está logado o no
  return false ? (
    <div>
      <h1>Welcome, {username}!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  ) : (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(login)}>
        <label>
          <span>Email:</span>
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: true,
              minLength: 2,
            })}
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: true,
            })}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
