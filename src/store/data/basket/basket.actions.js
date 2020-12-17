import * as basketActions from './basket.constants';

export const initBasket = {
    type: basketActions.INIT_BASKET
}

// Action creator
export const addProduct = product => ({
    type: basketActions.ADD_PRODUCT,
    payload: {
        product: product
    }
});

export const increment = key => ({
    type: basketActions.INCREMENT,
    payload: {
        key: key
    }
});

export const decrement = key => ({
    type: basketActions.DECREMENT,
    payload: {
        key: key
    }
});