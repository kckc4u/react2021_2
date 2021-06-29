import {createSelector} from 'reselect';

const COLLECTION_ID_MAP = {
    'hats': 1,
    'sneakers': 2,
    'jackets': 3,
    'womens': 4,
    'mens': 5
}

const selectShopData = state => state.shop;

export const selectShopCollection = createSelector(
    [selectShopData],
    shopData => shopData.collection
)

export const selectCollection = collectionTitle => createSelector (
    [selectShopCollection],
    collections => {
        const c = collections ? collections.find(collection => collection.title.toLowerCase() === collectionTitle.toLowerCase()) : null;
        console.log(c);
        return c;
    }
)