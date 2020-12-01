import * as priceActions from './price.constats';

const initState = {
    value: 0
}

const reducer = (state = initState, action) => {
    switch(action.type)
    {
        case priceActions.COUNT_PRICE:
        {
            return Object.assign({}, state, {value: state.value + action.payload});
        }

        default:
        {
            return state;
        }
    }
}

export default reducer;