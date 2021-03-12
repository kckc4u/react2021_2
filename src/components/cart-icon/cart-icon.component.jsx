import React from "react";

import "./cart-icon.style.scss";
import { ReactComponent as ShopingIcon } from "../../assests/shopping-bag.svg";

export const CartIcon = () => (
    <div className="cart-icon">
        <ShopingIcon className="shopping-icon"/>
        <span className="item-count">0</span>
    </div>
)


export default CartIcon;