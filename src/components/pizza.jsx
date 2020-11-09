const { Component } = require("react");

class Pizza extends Component
{    
    state = {
        pizza: this.props.pizza
    };

    render()
    {
        return(
            <div className="card" style={{width: '25rem', margin: '1rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{this.state.pizza.name}</h5>
                    <div className="card-subtitle mb-2 text-muted">Price: {this.state.pizza.price}</div>
                    <div className="card-text">
                        Ingredients:
                        <ul>
                            {this.state.pizza.ingredients.map(
                                ingredient => <li>{ingredient}</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pizza;