import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectShopCollection} from '../../redux/shop/shop.selectors';

import PreviewCollection from '../collection-preview/collection-preview.component';

import './collection-overview.scss';

const CollectionOverview = ({collections}) => (
    <div className="collection-overview">
    {
        collections.map(({id, ...otherProps}) => <PreviewCollection  key={id} {...otherProps} />)
    }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollection
})

export default connect(mapStateToProps)(CollectionOverview);
