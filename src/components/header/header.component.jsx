import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.util";

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
      </div>
    </div>
  );
};

export default Header;
