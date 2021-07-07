import SHOP_DATA from './shop.data';
import shopActionType from './shop.types';

const INTIAL_STATE = {
    collection: null,
    isFetching: false,
    errorMessage: undefined
}

const shopReducer = (state=INTIAL_STATE, action) => {
    switch(action.type) {
        case shopActionType.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }

        case shopActionType.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collection: action.payload
            }

        case shopActionType.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }

        default:
            return state;
    }
}

export default shopReducer;