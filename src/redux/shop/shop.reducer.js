import SHOP_DATA from './shop.data';

const INTIAL_STATE = {
    collection: SHOP_DATA
}

const shopReducer = (state=INTIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default shopReducer;