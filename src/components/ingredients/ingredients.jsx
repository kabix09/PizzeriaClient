import React from 'react';
import {Card} from 'semantic-ui-react';
import Ingredient from "./ingredient";

const { Component } = require("react");


class Ingredients extends Component{

    constructor()
    {
        super();
        this.state={
            ingredients: this.fetchIngredientsData()
        }
        console.log(this.state.ingredients);
    }

    fetchIngredientsData()
    {
        const url = "http://localhost:3333/api/ingredient";
        const ingredientAPI = '[{"id":"0a98bb9a-89a2-42bd-8c1b-c4557c05e3ca","name":"sos","price":1},{"id":"f4db38b1-3f4a-4892-9d20-0f3305dc653f","name":"ser","price":2},{"id":"cbef9854-6abb-4eed-a71d-63b962d17f14","name":"pieczarki","price":2},{"id":"8c4d8484-27d7-42b9-8588-352e9212ccbb","name":"szynka","price":3},{"id":"2d0dcd7e-d9b5-4fef-a518-f03eee85ca7e","name":"salami","price":3},{"id":"cc03c2fa-742d-48c2-a358-c15dbb16e932","name":"ananas","price":2},{"id":"fe405655-fd65-41a9-bf7b-f08703e32e79","name":"papryka","price":2},{"id":"54f765b2-4564-4500-9f3b-791b71914e74","name":"cebula","price":2},{"id":"9b9c5c2e-5938-41a4-b30f-1c02938ada1d","name":"pomidor","price":2}]';
        return JSON.parse(ingredientAPI);
    }

    render()
    {
        return (
            <React.Fragment>
                <h1 style={{textAlign: 'center'}}>Ingredients list:</h1>
                <Card.Group centered>
                    {
                        this.state.ingredients.map(
                            element => <Ingredient key={element.id} ingredient={element}/>  
                        )
                    }
                </Card.Group>
            </React.Fragment>
        );
    };
}

export default Ingredients;