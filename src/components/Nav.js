import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

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
        {/* <BrowserRouter> */}
        <Link to="/">Menus</Link>
        <Link to="/shoppingcart">
          Cart Items
          <span id="nav-item-counter">{state.cartItems.length}</span>
        </Link>
        {/* </BrowserRouter> */}
      </div>
    </div>
  );
}

export default Nav;
