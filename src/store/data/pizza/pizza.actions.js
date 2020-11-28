import * as pizzaActions from './pizza.constants.js';

export const initPizzas = () => ({
    type: pizzaActions.INIT_PIZZAS
});

// Action creator
export const setPizzas = pizzas => ({
    type: pizzaActions.SET_PIZZAS,
    payload: pizzas
});

export const fetchPizzas = {
    type: pizzaActions.FETCH_PIZZAS,
    source: 'http://localhost:3333/api/pizza',
    onSuccess: setPizzas
};

export const getPizzaByName = name => ({
    type: pizzaActions.FETCH_BY_NAME,
    payload: {
        name: name
    }
});