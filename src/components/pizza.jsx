const { Component } = require("react");

class Pizza extends Component
{    
    state = {
        pizza: this.props.pizza
    };

    render()
    {
        return(
            <div>
                <span>{this.state.pizza.name}</span>
                <div>Price: {this.state.pizza.price}</div>
                <div>
                    Ingredients:
                    <ul>
                        {this.state.pizza.ingredients.map(
                            ingredient => <li>{ingredient}</li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Pizza;