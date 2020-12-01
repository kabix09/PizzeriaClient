import * as priceActions from './price.constats';

export const countPrice = price => ({
    type: priceActions.COUNT_PRICE,
    payload: price
});