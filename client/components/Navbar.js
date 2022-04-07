import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    <h1>Joshua Constine</h1>
    <nav>
      <div>
        {/* The navbar will show these links after you log in */}
        <Link to="/home">Home</Link>
      </div>
    </nav>
    <hr />
  </div>
);

/**
 * CONTAINER
 */

export default Navbar;
