import { Card, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { store } from '../../store';
import * as basketActions from '../../store/data/basket/basket.actions'; 

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
                    <Button inverted primary floated="right" onClick={() => {
                        store.dispatch(basketActions.addProduct(this.state.pizza));
                    }}>
                        Dodaj
                    </Button>                 
                </Card.Content> 
            </Card>
        );
    }
}

export default connect(mapStateToProps)(Pizza);