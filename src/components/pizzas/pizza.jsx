import { Card } from 'semantic-ui-react'

const { Component } = require("react");

class Pizza extends Component
{    
    constructor(props)
    {
        super(props);

        this.state = {
            pizza: this.props.pizza,
            ingredients: []
        };    
    }
    componentDidMount()
    {
        this.fetchIngredients();
    }

    fetchIngredients()
    {
        const url = "http://localhost:3333/api/ingredient/";

        fetch(url, {
                    method: 'GET'
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }else {
                    throw new Error(`Http error: ${response.status}`);
                }
            })
            .then(data => {
                this.setState({ingredients: data});
            })
            .catch(error => {
                console.error(error)
            });        
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
                        Ingredients:
                        <ul style={{maxHeight: '150px', overflow: 'auto'}}>
                            {pizzaIngredients.map(
                                ingredient => ( ingredient !== undefined && <li key={Math.random()}>{ingredient.name}</li>)
                            )}
                        </ul>
                    </Card.Description>
                </Card.Content>
                
                <Card.Content extra>
                    Price: {this.state.pizza.price}
                </Card.Content> 
            </Card>
        );
    }
}

export default Pizza;