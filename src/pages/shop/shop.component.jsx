import React from "react";

import "./shop.style.scss";

import PreviewCollection from "../../components/collection-preview/collection-preview.component";

import SHOP_DATA from "./shop.data";

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shopData: SHOP_DATA,
    };
  }

  render() {
    const { shopData } = this.state;

    return (
      <div className="shop-page">
        {shopData.map(({id, ...otherProps}) => (
          <PreviewCollection key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
