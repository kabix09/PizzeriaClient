import * as errorActions from './error.constants';

const initState = {
    error: []
}

const reducer = (state = initState.error, action) => {
    switch(action.type)
    {
        case errorActions.FETCH_DATA_ERROR:
        {
            console.log(action);
            return Object.assign([], state, action.payload.error);
        }   

        default:
        {
            return state;
        }
    }
}

export default reducer;