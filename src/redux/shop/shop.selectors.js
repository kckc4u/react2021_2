import {createSelector} from 'reselect';

const selectShopData = state => state.shop;

const selectShopCollection = createSelector(
    [selectShopData],
    shopData => shopData.collection
)

export default selectShopCollection;