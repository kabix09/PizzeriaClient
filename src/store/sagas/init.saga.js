import { takeEvery, put } from 'redux-saga/effects';

import * as initStore from '../init.constants';

import { fetchPizzas } from '../data/pizza/pizza.actions';
import { fetchIngredients } from '../data/ingredient/ingredient.actions';
import { setLabel } from '../data/label/label.actions';
import { initBasket } from '../data/basket/basket.actions';

export function* worker(action) {
        // set beginer label
        yield put(setLabel(window.location.pathname.split("/")[1]));
        
        // fetch data
        yield put(fetchIngredients);
        yield put(fetchPizzas);

        // init basket
        yield put(initBasket);
}

export function* watcher(){
    yield takeEvery(
        [initStore.INITIALIZE],
        worker
    );
}