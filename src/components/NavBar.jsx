import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="bg-blue-500">
      <div className="flex flex-row justify-between">
        <NavLink to="/">
          <div>
            <img src="../../public/logo.png" alt="" />
          </div>

        </NavLink>
        <div>
          <NavLink to="/">
            {" "}
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div>
              <FaShoppingCart /> <p>Home</p>
            </div>
          </NavLink>

        </div>
      </div>
    </div>
  );
};

export default NavBar;
