import React from 'react'

import './cart-item.style.scss';

export const CartItem = ({item : {imageUrl, price, quantity, name}}) => {
    return (
        <div className="cart-item">
            <img src={imageUrl} alt={name} />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{`${quantity} X $${price}`}</span>
            </div>
        </div>
    )
}
