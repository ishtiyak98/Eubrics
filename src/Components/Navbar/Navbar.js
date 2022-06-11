import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <section>
      <div className="navbar bg-primary text-white px-5 lg:px-36">
        <div className="flex-1">
          <div className="normal-case text-2xl font-bold">Eubrics</div>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink to={"/login"}>Login</NavLink>
            </li>
            <li>
              <NavLink to={"/registration"}>Registration</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
