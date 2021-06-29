import shopActionType from './shop.types';

export const updateCollections = collectionMap => ({
    type: shopActionType.UPDATE_COLLECTIONS,
    payload: collectionMap
})