import { Card } from 'semantic-ui-react'

const { Component } = require("react");

class Ingredient extends Component
{    
    state = {
        ingredient: this.props.ingredient
    };

    render()
    {
        return(
            <Card>
                <Card.Content>
                    <Card.Header style={{textAlign: 'center'}}>{this.state.ingredient.name}</Card.Header>
                </Card.Content>
                <Card.Content extra>
                    <span>
                        Price: { this.state.ingredient.price } zl
                    </span>
                </Card.Content>
            </Card>
        );
    }
}

export default Ingredient;