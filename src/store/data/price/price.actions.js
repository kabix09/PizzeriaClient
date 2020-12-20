import * as priceActions from './price.constats';

export const setPrice = price => ({
    type: priceActions.SET_PRICE,
    payload: price
})
