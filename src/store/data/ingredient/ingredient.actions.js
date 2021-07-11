import * as ingredientActions from './ingredient.constants.js';

export const endAction = (object) => ({
    type: object.type,
    payload: object.payload
});
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
    source: 'api/ingredient',
    onSuccess: setIngredients,
    onFailure: endAction
}

// many names in array
export const getIngredientByName = (name) => ({
    type: ingredientActions.FETCH_BY_NAME,
    payload: name

});