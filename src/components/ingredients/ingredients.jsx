import React from 'react';
import {Card} from 'semantic-ui-react';
import Ingredient from "./ingredient";
import { store } from '../../store';
const { Component } = require("react");

class Ingredients extends Component{

    constructor()
    {
        super();
        this.state={
            ingredients: store.getState().ingredients
        }
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