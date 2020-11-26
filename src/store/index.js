import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas';
import rootReducer from './init.reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const saga = createSagaMiddleware();

const enhancers = composeEnhancers(
  applyMiddleware(...[
    saga
  ])
);

export const store = createStore(
  rootReducer,
  {},
  enhancers
);

saga.run(rootSaga);
