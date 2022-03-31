import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Product } from "../Context";

function Navbar() {
  const { cart } = useContext(Product);

  return (
    <nav>
      <div className="title">
        <h1>Shopping</h1>
      </div>
      <div className="links">
        <Link to="/react-shopping-app">Home</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
      </div>
    </nav>
  );
}

export default Navbar;
