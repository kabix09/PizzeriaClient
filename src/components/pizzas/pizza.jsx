import { Card } from 'semantic-ui-react'

const { Component } = require("react");

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
        return(
            <Card style={{height: '300px'}}>
                <Card.Content>
                    <Card.Header style={{textAlign: 'center'}}>{this.state.pizza.name}</Card.Header>
                    <Card.Description>
                        Ingredients:
                        <ul style={{maxHeight: '150px', overflow: 'auto'}}>
                            {this.state.pizza.ingredients.map(
                                ingredient => <li key={Math.random()}>{ingredient}</li>
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