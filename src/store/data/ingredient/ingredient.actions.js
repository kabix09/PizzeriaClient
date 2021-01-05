import * as ingredientActions from './ingredient.constants.js';

// Action creator
export const initIngredients = () => ({
    type: ingredientActions.INIT_INGREDIENTS
});

export const setIngredients = ingredients => ({
    type: ingredientActions.SET_INGREDIENTS,
    payload: ingredients
});

export const fetchIngredients = {
    type: ingredientActions.FETCH_INGREDIENTS,
    source: 'http://localhost:3333/api/ingredient',
    onSuccess: setIngredients
};

// many names in array
export const getIngredientByName = (name) => ({
    type: ingredientActions.FETCH_BY_NAME,
    payload: name

});