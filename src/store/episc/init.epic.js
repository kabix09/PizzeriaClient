import { ofType } from 'redux-observable';
import { map, switchMap, mergeMap } from 'rxjs/operators';
import { fromFetch } from 'rxjs/fetch';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as pizzaActions from '../data/pizza/pizza.constants';
import * as ingredientActions from '../data/ingredient/ingredient.constants';
import {FETCH_DATA_ERROR} from '../data/error/error.constants';

export const epic = action$ => action$.pipe(
    ofType(pizzaActions.FETCH_PIZZAS, ingredientActions.FETCH_INGREDIENTS),
    mergeMap((action) => fromFetch(action.source)
        .pipe(
            switchMap(response => response.json()),
            map(data => action.onSuccess(data)),
            catchError(error => of({
                type: FETCH_DATA_ERROR,
                payload: error,
                error: true
              }))
        )
    )
);
