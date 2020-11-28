import { combineReducers } from 'redux';

import labelReducer from './data/label/label.reducers';
import pizzaReducer from './data/pizza/pizza.reducers';
import ingredientReducer from './data/ingredient/ingredient.reducers';

export default combineReducers({
  label: labelReducer,
  pizzas: pizzaReducer,
  ingredients: ingredientReducer
});
