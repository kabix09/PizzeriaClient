import { takeEvery, put } from 'redux-saga/effects';

import * as labelActions from '../data/label/label.constants';
import * as basketActions from '../data/basket/basket.constants';

import { fetchPizzas } from '../data/pizza/pizza.actions';
import { fetchIngredients } from '../data/ingredient/ingredient.actions';
import { setLabel } from '../data/label/label.actions';

export function* worker(action) {
    if(action.type === labelActions.INIT_LABEL)
    {
        yield put(setLabel(window.location.pathname.split("/")[1]));
        yield put(fetchIngredients);
        yield put(fetchPizzas);
    }
}

export function* watcher(){
    yield takeEvery(
        [labelActions.INIT_LABEL],
        worker
    );
}
//, pizzaActions.INIT_PIZZAS, ingredientActions.INIT_INGREDIENTS