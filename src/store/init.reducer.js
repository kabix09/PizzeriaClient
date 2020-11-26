/*
import pizzaReducer from './data/pizza/pizza.reducers';
import ingredientReducer from './data/ingredient/ingredient.reducers';
const rootReducers = {
    label: labelReducer,
    pizza: pizzaReducer
}
const store = createStore(combineReducers(rootReducers));
*/

import { combineReducers } from 'redux';

import labelReducer from './data/label/label.reducers';

export default combineReducers({
  label: labelReducer
});
