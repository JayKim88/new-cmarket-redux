import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Nav() {
  const state = useSelector((state) => state.itemReducer);

  return (
    <div id="nav-body">
      <span id="title">
        <img id="logo" src="../JayLogo.png" alt="logo" />
        <Link to="/">
          <span id="name">J Cafe</span>
        </Link>
      </span>
      <div id="menu">
        <Link to="/">Menus</Link>
        <Link to="/shoppingcart">
          Cart Items<span id="nav-item-counter">{state.cartItems.length}</span>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
