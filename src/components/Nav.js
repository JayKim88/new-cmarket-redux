import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Nav() {
  const state = useSelector((state) => state.itemReducer);

  return (
    <div id="nav-body">
      <span id="title">
        <img
          id="logo"
          src="https://jcafebucket.s3.ap-northeast-2.amazonaws.com/JayLogo.png"
          alt="logo"
        />
        <Link to="/">
          <span id="name">J Cafe</span>
        </Link>
      </span>
      <div id="menu">
        <Link to="new-cmarket-redux/">Menus</Link>
        <Link to="new-cmarket-redux/shoppingcart">
          Cart Items<span id="nav-item-counter">{state.cartItems.length}</span>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
