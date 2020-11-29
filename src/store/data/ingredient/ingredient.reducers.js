import * as ingredientActions from './ingredient.constants';

const initState = {
    ingredients: JSON.parse('[]')
}
//'[{"id":"7b93b1ed-70e5-4288-9be3-c1c35b7971d5","name":"sos","price":1},{"id":"5e9d4fe1-9da6-47dd-9928-42becdbe4c70","name":"ser","price":2},{"id":"7b0d02fa-d128-45d3-8b6a-bf9df93c1c0e","name":"pieczarki","price":2},{"id":"88907b27-0f64-4de5-b6ca-35062b4201ec","name":"szynka","price":3},{"id":"83c6f599-035f-4222-b76b-c997e685d1d1","name":"salami","price":3},{"id":"c7b91e9b-018b-4ee7-8a4e-f2dfffde5b52","name":"ananas","price":2},{"id":"e7d94ea8-2671-4714-86a4-4b41a901f8d7","name":"papryka","price":2},{"id":"0ffbe1ad-6072-4111-bf76-1602563d179f","name":"cebula","price":2},{"id":"78950bbc-7703-46e4-b28c-fc7ee11239bc","name":"pomidor","price":2}]'
const reducer = (state = initState.ingredients, action) => {
    switch(action.type)
    {
        case ingredientActions.SET_INGREDIENTS:
        {
            return Object.assign([], state, action.payload);
        }   

        case ingredientActions.FETCH_BY_NAME:
        {
            return state;//.filter(ingredient => ingredient.name.toLowerCase() === action.payload.name);
        }

        default:
        {
            return state;
        }
    }
}

export default reducer;