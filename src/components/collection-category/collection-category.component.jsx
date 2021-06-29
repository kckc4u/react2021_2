import React from 'react';
import {connect} from 'react-redux';

import {selectCollection} from '../../redux/shop/shop.selectors';
import CollectionItem from '../collection-item/collection-item.component';

import './collection-category.style.scss';

const CollectionCategory = ({collection, match}) => {

    // if (!collection) {
    //     return <div className="collection-category">{`No item found for requested collection: ${match.params.categoryId}`}</div>
    // }
    const {title, items} = collection;

    return (
        <div className="collection-category">
            <h2 className="title">{title}</h2>
            <div className="items">
            {
                items.map(item => <CollectionItem key={item.id} item={item} />)
            }
            </div>
        </div>
    );

}


const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.categoryId)(state)
})


export default connect(mapStateToProps)(CollectionCategory);