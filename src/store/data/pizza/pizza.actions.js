import * as pizzaActions from './pizza.constants.js';

export const endAction = (object) => ({
    type: object.type,
    payload: object.payload
});

// Action creator
export const initPizzas = () => ({
    type: pizzaActions.INIT_PIZZAS
});

export const setPizzas = pizzas => ({
    type: pizzaActions.SET_PIZZAS,
    payload: pizzas
});

export const fetchPizzas = {
    type: pizzaActions.FETCH_PIZZAS,
    source: 'api/pizza',
    onSuccess: setPizzas,
    onFailure: endAction
};
