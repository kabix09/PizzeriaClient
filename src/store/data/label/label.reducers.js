import * as labelActions from './label.constants';
 
const initState = {
    name: "home"
}

const reducer = (state = initState, action) => {
    switch(action.type)
    {
        case labelActions.INIT_LABEL:
        {
            return state;
        }

        case labelActions.SET_LABEL:
        {
            return Object.assign({}, state, {name: action.payload});
        }

        default:
        {
            return state;
        }
    }
}

export default reducer;