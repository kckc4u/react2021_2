import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.util";
import { CartIcon } from "../cart-icon/cart-icon.component";
import { CartDropdown } from "../cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from "../../assests/crown.svg";

import "./header.style.scss";

export const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGNOUT
          </div>
        ) : (
          <Link to="/signin" className="option">
            SIGNIN
          </Link>
        )}
        <CartIcon />
      </div>
      <CartDropdown />
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
