import * as basketActions from './basket.constants';
import { loadState } from '../../../localStorage/load';
import { saveState } from '../../../localStorage/save';

const initState = {
    products: []
}

function put(inputArray, newElement)
{
    let newArray = inputArray.slice(0);
    
    // if id and ingredients list are the same
    if (inputArray.find(element => (element.key === newElement.id && element.value.ingredients.equals(newElement.ingredients))) !== undefined) 
    { 
        newArray.find(el => el.key === newElement.id).count++;    /* increment amount */
    } else 
    { 
        console.log("push");
        newArray.push({ key: newElement['id'], value: newElement, count: 1});   /* add new element */
    }

    // save in local
    saveState(newArray, 'basket');
    
    return newArray;
}

function increment(inputArray, key)
{
    let newArray = inputArray.slice(0);
    
    newArray.find(element => element.key === key).count++;

    saveState(newArray, 'basket');

    return newArray;    
}

function decrement(inputArray, key)
{
    let newArray = inputArray.slice(0);

    let finded = newArray.find(element => element.key === key);

    if(finded !== undefined && finded.count === 1)
    {
        newArray = newArray.filter(element => {return element.key !== finded.key});
    }else
        finded.count--; 
        
    saveState(newArray, 'basket');

    return newArray;
}

const reducer = (state = initState.products, action) => {
    switch(action.type)
    {
        case basketActions.INIT_BASKET:
        {
            return Object.assign([], state, loadState('basket'));
        }

        case basketActions.ADD_PRODUCT:
        {
            return put(
                    state,
                    action.payload.product
                );
        }

        case basketActions.INCREMENT:
        {
            return increment(state, action.payload.key);
        }

        case basketActions.DECREMENT:
        {
            return decrement(state, action.payload.key);
        }

        default:
        {
            return state;
        }
    }
}

export default reducer;