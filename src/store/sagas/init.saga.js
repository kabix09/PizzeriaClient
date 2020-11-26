import { takeEvery, put } from 'redux-saga/effects';
import * as labelActions from '../data/label/label.constants';

import { setLabel } from '../data/label/label.actions';

export function* worker(action) {
    if(action.type === labelActions.INIT_LABEL)
    {    
        yield put(setLabel(window.location.pathname.split("/")[1]));    // set begining value before <NavBar/> will be rendered
    }else
        console.log("worker", action);
}

export function* watcher(){
    yield takeEvery(
        [labelActions.INIT_LABEL],
        worker
    );
}