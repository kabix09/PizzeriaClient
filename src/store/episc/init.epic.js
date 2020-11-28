import { ofType } from 'redux-observable';
import { map, switchMap, mergeMap } from 'rxjs/operators';
import { fromFetch } from 'rxjs/fetch';

import * as pizzaActions from '../data/pizza/pizza.constants';
import * as ingredientActions from '../data/ingredient/ingredient.constants';

export const epic = action$ => action$.pipe(
    ofType(pizzaActions.FETCH_PIZZAS, ingredientActions.FETCH_INGREDIENTS),
    mergeMap((action) => fromFetch(action.source)
        .pipe(
            switchMap(response => response.json()),
            map(data => action.onSuccess(data))
        )
    )
);
