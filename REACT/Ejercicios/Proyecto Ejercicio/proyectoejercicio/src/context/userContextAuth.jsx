import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  //const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    return localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
  });

  //login
  const login = (data) => {
    setUser(data);
    const stringUser = JSON.stringify(data);
    localStorage.setItem("user", stringUser);
    //navigate("/Home")

    //si hubiera aentrutado de la pagina, nos iriamos aqui a la home o dashboard
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    //navigate("/login")
  };

  return (
    <UserContext.Provider value={{ user, setUser, login }}>
      {children}
    </UserContext.Provider>
  );
};
