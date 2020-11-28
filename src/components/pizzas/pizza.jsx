import { Card } from 'semantic-ui-react'
import { store } from '../../store';
const { Component } = require("react");

class Pizza extends Component
{    
    constructor(props)
    {
        super(props);

        this.state = {
            pizza: this.props.pizza,
            ingredients: store.getState().ingredients
        };    
    }

    render()
    {
        const pizzaIngredients = this.state.pizza.ingredients.map((pizzaIngredient) => {
            return this.state.ingredients.find(ingredient => ingredient.id === pizzaIngredient);
        });
        
        return(
            <Card style={{height: '300px'}}>
                <Card.Content>
                    <Card.Header style={{textAlign: 'center'}}>{this.state.pizza.name}</Card.Header>
                    <Card.Description>
                        Składniki:
                        <ul style={{maxHeight: '150px', overflow: 'auto'}}>
                            {pizzaIngredients.map(
                                ingredient => ( ingredient !== undefined && <li key={Math.random()}>{ingredient.name}</li>)
                            )}
                        </ul>
                    </Card.Description>
                </Card.Content>
                
                <Card.Content extra>
                    Cena: {this.state.pizza.price} zl
                </Card.Content> 
            </Card>
        );
    }
}

export default Pizza;