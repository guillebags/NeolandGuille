import React from "react";
import { Link, Outlet } from "react-router-dom";
import { getHeroes } from "../../data/data";
import Listado from "../../components/Listado/Listado";

const Heroes = () => {
  const heroes = getHeroes();
  return (
    <>
      <div>
        <h1>All heroes 🦸‍♂️🦸‍♀️</h1>
        <ul>
          {heroes.map((heroe) => (
            <li key={heroe.id}>
              <Link to={`/heroes/${heroe.id}`}>
                <Listado heroe={heroe} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Heroes;
