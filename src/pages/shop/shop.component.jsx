import React from "react";
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import selectShopCollection from '../../redux/shop/shop.selectors';

import "./shop.style.scss";

import PreviewCollection from "../../components/collection-preview/collection-preview.component";

const Shop = ({shopData}) => (
    <div className="shop-page">
      {shopData.map(({id, ...otherProps}) => (
        <PreviewCollection key={id} {...otherProps} />
      ))}
    </div>
  );

const mapStateToProps = createStructuredSelector({
  shopData: selectShopCollection
})

export default connect(mapStateToProps)(Shop);
