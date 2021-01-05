import * as pizzaActions from './pizza.constants.js';

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
    source: 'http://localhost:3333/api/pizza',
    onSuccess: setPizzas
};
