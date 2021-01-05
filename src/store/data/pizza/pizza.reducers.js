import * as pizzaActions from './pizza.constants';

const initState = {
    pizzas: JSON.parse('[]')
}

const reducer = (state = initState.pizzas, action) => {
    switch(action.type)
    {
        case pizzaActions.SET_PIZZAS:
        {
            return Object.assign([], state, action.payload);
        }

        case pizzaActions.FETCH_BY_NAME:
        {
            return state.filter(pizza => pizza.name.toLowerCase() === action.payload);
        }

        default:
        {
            return state;
        }
    }
}

export default reducer;