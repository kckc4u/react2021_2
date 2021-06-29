import SHOP_DATA from './shop.data';
import shopActionType from './shop.types';

const INTIAL_STATE = {
    collection: null
}

const shopReducer = (state=INTIAL_STATE, action) => {
    switch(action.type) {
        case shopActionType.UPDATE_COLLECTIONS:
            return {
                ...state,
                collection: action.payload
            }
        default:
            return state;
    }
}

export default shopReducer;