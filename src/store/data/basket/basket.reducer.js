import * as basketActions from './basket.constants';
 
const initState = {
    products: []
}

function put(inputArray, newElement)
{
    let object = inputArray.find(element => element.key === newElement.id);

    if (object) 
    { 
        inputArray.find(el => el.key === newElement.id).count++;    /* increment amount */
    } else 
    { 
        inputArray.push({ key: newElement['id'], value: newElement, count: 1});   /* add new element */
    }

    return inputArray;
}

function increment(inputArray, key)
{
    let newArray = inputArray.slice(0);
    
    newArray.find(element => element.key === key).count++;

    return newArray;    
}

function decrement(inputArray, key)
{
    let newArray = inputArray.slice(0);

    let finded = newArray.find(element => element.key === key);

    if(finded !== undefined && finded.count == 1)
    {
        newArray = newArray.filter(element => {return element.key !== finded.key});
    }else
        finded.count--; 
        
    return newArray;
}

const reducer = (state = initState.products, action) => {
    switch(action.type)
    {
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