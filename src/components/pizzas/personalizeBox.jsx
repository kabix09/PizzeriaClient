import React from 'react';
import {Card, Header, Button, Input, Label} from 'semantic-ui-react';
import IngerdeitnLabel from "../ingredients/ingredientLabel";
const { Component } = require("react");

class PersonalizeBox extends Component {
    constructor(props)
    {
        super(props)

        this.state = {
            pizza: this.props.pizza
        }
    }

    addIngredient = (ingredient, e) => 
    {
        e.preventDefault();
        
        if(
            this.state.pizza.ingredients.filter(element => element === ingredient.id).length < 4
        ){
            const newPizza = {...this.state.pizza};
            newPizza.ingredients = [...this.state.pizza.ingredients, ingredient.id];
            newPizza.price += ingredient.price
    
            this.setState({
                pizza: newPizza
              })
        }
    }

    removeIngredient = (ingredient, e) =>
    {
        e.preventDefault();
        
        if(
            this.state.pizza.ingredients.filter(element => element === ingredient.id).length > 0
        ){
            const newPizza = {...this.state.pizza};

            // remove exacly one element
            const index = this.state.pizza.ingredients.indexOf(ingredient.id);
            if(index > -1)
            {
                newPizza.ingredients.splice(index, 1);
                newPizza.price -= ingredient.price
            }

            this.setState({
                pizza: newPizza
            })
        }
    }

    //ToDo 
    //  -> send data to basket store

    render()
    {
        return(

            <Card style={{width: '100%'}}>
                <Card.Content>
                    <Card.Header style={{textAlign: 'center', margin: '0.5rem'}}>
                        <Header>{this.state.pizza.name}</Header>
                    </Card.Header>
                    <Card.Description style={{paddingTop: '0.5rem'}}>
                        <Card.Group style={{fontSize: '0.85rem'}} centered>
                        {
                            this.props.ingredients &&
                            this.props.ingredients.map(ingredeint => 
                                <IngerdeitnLabel key={Math.random()}  
                                    ingredient={ingredeint} 
                                    amount={
                                        this.state.pizza !== undefined 
                                            ? this.state.pizza.ingredients.filter(element => element === ingredeint.id).length
                                            : 0
                                        } 
                                    addIngredient={this.addIngredient} 
                                    removeIngredient={this.removeIngredient}/>
                            )
                        }
                        </Card.Group>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                        <Input 
                            labelPosition='right'
                            type='text'
                            readOnly='readonly'
                            placeholder='Price'
                        >
                            <input style={{width: '80px'}} value={this.state.pizza.price}/>
                            <Label>zl</Label>
                        </Input>
                        <Button primary floated='right'
                            onClick={(e) => {
                                this.props.addToBasket(this.state.pizza, e); 
                                this.props.close();
                            }}
                        >
                            Dodaj
                        </Button>
                </Card.Content>
            </Card>
                

        );
    }
}

export default PersonalizeBox;