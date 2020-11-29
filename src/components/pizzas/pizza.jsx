import { Card } from 'semantic-ui-react'
import { store } from '../../store';
import { connect } from 'react-redux';
const { Component } = require("react");

const mapStateToProps = (state) => {
    return {
        ingredients: state.ingredients
    }
}

class Pizza extends Component
{    
    constructor(props)
    {
        super(props);

        this.state = {
            pizza: this.props.pizza
        };    
    }

    render()
    {
        const pizzaIngredients =
            (this.props.ingredients !== undefined  && this.state.pizza !== undefined) ? 
                this.state.pizza.ingredients.map((pizzaIngredient) => {
                    return this.props.ingredients.find(ingredient => ingredient.id === pizzaIngredient);
                }) : undefined;
        
    
        
        return(
            <Card style={{height: '300px'}}>
                <Card.Content>
                    <Card.Header style={{textAlign: 'center'}}>{this.state.pizza.name}</Card.Header>
                    <Card.Description>
                        Składniki:
                        <ul style={{maxHeight: '150px', overflow: 'auto'}}>
                            {
                                pizzaIngredients !== undefined &&
                                    pizzaIngredients.map(
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

export default connect(mapStateToProps)(Pizza);