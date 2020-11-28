import * as pizzaActions from './pizza.constants';

const initState = {
    pizzas: JSON.parse('[{}]')
}
//[{"id":"cc791a5c-4db4-4ae5-b60c-7e02cfd165f7","name":"MARGHERITA","price":15,"ingredients":["68753bfd-3940-46f4-bc08-c3e2c95e3d1e","b8f17b45-e50b-4c6a-9d08-cf161d66a6c0"]},{"id":"c3acd9c9-47c9-4ac1-bbd7-9e0dcbf14dfb","name":"FUNGHI","price":16,"ingredients":["68753bfd-3940-46f4-bc08-c3e2c95e3d1e","b8f17b45-e50b-4c6a-9d08-cf161d66a6c0","f3891d80-a02a-43e2-b236-780d2a5c7089"]},{"id":"5458eaa0-3f0a-4a4f-a243-0ea9da3f9055","name":"VESUVIO","price":17,"ingredients":["68753bfd-3940-46f4-bc08-c3e2c95e3d1e","b8f17b45-e50b-4c6a-9d08-cf161d66a6c0","637b9a3a-c0cd-4c5c-9a11-d3c7b83e5e34"]},{"id":"f700be34-48ef-4c1c-8910-2bf05c1de308","name":"SALAMI","price":17,"ingredients":["68753bfd-3940-46f4-bc08-c3e2c95e3d1e","b8f17b45-e50b-4c6a-9d08-cf161d66a6c0","09a1d120-bc2e-4f19-b4e3-c5c5f76b7b42"]},{"id":"f96ac2bf-2c2a-4b95-b794-d260c1b6f85d","name":"CAPRICCIOSA","price":20,"ingredients":["68753bfd-3940-46f4-bc08-c3e2c95e3d1e","b8f17b45-e50b-4c6a-9d08-cf161d66a6c0","f3891d80-a02a-43e2-b236-780d2a5c7089","637b9a3a-c0cd-4c5c-9a11-d3c7b83e5e34"]},{"id":"02c17486-c0a4-447f-94ac-dc88670174ed","name":"HAWAJSKA","price":20,"ingredients":["68753bfd-3940-46f4-bc08-c3e2c95e3d1e","b8f17b45-e50b-4c6a-9d08-cf161d66a6c0","637b9a3a-c0cd-4c5c-9a11-d3c7b83e5e34","157bb9a1-ba83-40bc-b58c-82eb21a3e788"]},{"id":"56532359-33e8-4ba5-b9b0-d82637a49272","name":"VERONA","price":21,"ingredients":["68753bfd-3940-46f4-bc08-c3e2c95e3d1e","b8f17b45-e50b-4c6a-9d08-cf161d66a6c0","09a1d120-bc2e-4f19-b4e3-c5c5f76b7b42","157bb9a1-ba83-40bc-b58c-82eb21a3e788"]},{"id":"3f443d89-857e-4ac9-b1e7-b1ca71e3b543","name":"ROMA","price":22,"ingredients":["68753bfd-3940-46f4-bc08-c3e2c95e3d1e","b8f17b45-e50b-4c6a-9d08-cf161d66a6c0","09a1d120-bc2e-4f19-b4e3-c5c5f76b7b42","a4aa81b3-ffa7-4d9b-90aa-6a194814ddeb","25a85d2b-47a6-4da1-9960-cdcd98d78d3a"]},{"id":"fc3ce4d3-844d-4da1-ae1c-88fe9f600126","name":"COLOSSEUM","price":22,"ingredients":["68753bfd-3940-46f4-bc08-c3e2c95e3d1e","b8f17b45-e50b-4c6a-9d08-cf161d66a6c0","f3891d80-a02a-43e2-b236-780d2a5c7089","637b9a3a-c0cd-4c5c-9a11-d3c7b83e5e34","32911338-ec5c-43c6-975f-da3cc61c3d00","a4aa81b3-ffa7-4d9b-90aa-6a194814ddeb"]}]
const reducer = (state = initState.pizzas, action) => {
    switch(action.type)
    {
        case pizzaActions.SET_PIZZAS:
        {
            console.log(action);
            return Object.assign([], state, action.payload);
        }

        case pizzaActions.FETCH_BY_NAME:
        {
            return state.filter(pizza => pizza.name.toLowerCase() === action.payload.name);
        }

        default:
        {
            return state;
        }
    }
}

export default reducer;