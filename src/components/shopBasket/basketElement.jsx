import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Card, Button, Container, Popup, Icon, List} from 'semantic-ui-react';
import { store } from '../../store';
import * as basketActions from '../../store/data/basket/basket.actions'; 

const mapStateToProps = (state) => {
    return {
        ingredients: state.ingredients
    }
}

class BasketElement extends Component{

    selectIngredients = () => {
        return (this.props.ingredients !== undefined)? 
                this.props.product.value.ingredients.map(
                    (ingredientID) => {
                        return this.props.ingredients.list.find(ingredient => ingredient.id === ingredientID);
                    }
                ) : undefined;
    }

    render() {
        const ingredients =  this.selectIngredients();

        return (
            <Container style={{display: 'flex', flexWrap: 'no-wrap', justifyContent: 'center', alignItems: 'center'}}>
                <Card style={{margin: '0.5rem 1rem 0.5rem 0.5rem', }}>
                    <Card.Content>
                        <Card.Header style={{textAlign: 'center'}}>{this.props.product.value.name}</Card.Header>
                        <Card.Description>
                            Cena: {this.props.product.value.price} zl
                        
                            <Popup 
                                trigger={<Icon name='info circle' size='large' style={{float: 'right'}}/>}
                                position='right center'

                                content={
                                    <List bulleted>
                                    {
                                        ingredients !== undefined &&
                                        ingredients.map(
                                                ingredient => ( ingredient !== undefined && <List.Item key={Math.random()}>{ingredient.name}</List.Item>))
                                    }
                                    </List>          
                                }
                            />
                        </Card.Description>
                    </Card.Content>
                </Card>
                    <Button.Group compact floated='right'>
                        <Button onClick={ () => {
                            store.dispatch(basketActions.decrement(this.props.product)); 
                        }}>-</Button>
                        <Button.Or text={this.props.product.count}/>
                        <Button color='violet' onClick={ () => {
                            store.dispatch(basketActions.increment(this.props.product));
                        }}>+</Button>
                    </Button.Group>
            </Container>
        );
    }
}

export default connect(mapStateToProps)(BasketElement);