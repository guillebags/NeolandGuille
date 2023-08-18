import { NavLink, Outlet } from "react-router-dom";
import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <nav>
        <NavLink to="">Home</NavLink>
        <NavLink to="heroes">Heroes</NavLink>
        <NavLink to="about">About</NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default NavBar;
