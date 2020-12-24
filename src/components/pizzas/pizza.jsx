import { Card, Button, Modal} from 'semantic-ui-react'
import PersonalizeBox from './personalizeBox';
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
            modalState: false
        };    
    }

    selectIngredients = () => {
        return (this.props.ingredients !== undefined  && this.props.pizza !== undefined) ? 
            this.props.pizza.ingredients.map((pizzaIngredient) => {
                return this.props.ingredients.find(ingredient => ingredient.id === pizzaIngredient);
            }) : undefined;
    }

    PersonalizeModal = () => {
        return(
            <Modal
                onClose={() => this.setState({modalState: false})}
                onOpen={() => this.setState({modalState: true})}
                open={this.state.modalState}
                trigger={ 
                    <a style={{fontStyle: 'italic', textDecoration: 'underline'}}>
                        Personalizuj
                    </a>
                }
            >
                <PersonalizeBox pizza={this.props.pizza} ingredients={this.props.ingredients}/>
            </Modal>
        );
    }

    render()
    {
        const pizzaIngredients = this.selectIngredients();
        
        return(
            <Card style={{height: '300px'}}>
                <Card.Content style={{position: 'relative'}}>
                    <Card.Header style={{textAlign: 'center'}}>{this.props.pizza.name}</Card.Header>
                    <Card.Description>
                        Składniki:
                        <ul style={{maxHeight: '150px', overflow: 'auto'}}>
                        {
                            pizzaIngredients !== undefined &&
                                pizzaIngredients.map(
                                    ingredient => ( ingredient !== undefined && <li key={Math.random()}>{ingredient.name}</li>))
                        }
                        </ul>
                    </Card.Description>

                    <Card.Meta style={{position: 'absolute', bottom: '0.5rem', right: '2rem'}}>
                    {
                        this.PersonalizeModal()
                    }
                    </Card.Meta>
                </Card.Content>
                
                <Card.Content extra>
                    Cena: {this.props.pizza.price} zl
                    <Button inverted primary floated="right" onClick={() => {
                        store.dispatch(basketActions.addProduct(this.props.pizza));
                    }}>
                        Dodaj
                    </Button>                 
                </Card.Content> 
            </Card>
        );
    }
}

export default connect(mapStateToProps)(Pizza);