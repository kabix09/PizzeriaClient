import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Card, Button, Container, Popup, Icon, List} from 'semantic-ui-react';
import { store } from '../../store';
import * as basketActions from '../../store/data/basket/basket.actions'; 

const mapStateToProps = (state) => {
    return {
        ingredients: (state.ingredients.list.length > 0) ? state.ingredients.list : undefined
    }
}

class BasketElement extends Component{

    selectIngredients = () => {
        return (this.props.ingredients !== undefined && this.props.product !== undefined) ? 
                // suppose, check if ids in value.ingrenients exists in ingredients uuid
                this.props.product.value.ingredients.map(
                    (ingredientID) => {
                        return this.props.ingredients.find(ingredient => ingredient.id === ingredientID);
                    }
                ) : [];
    }

    reduceElements = (inputArray) => {
        let ingredientsArray = [];
    
        if(!inputArray || inputArray.includes(undefined))
            return undefined;

        inputArray.forEach(ingredient => {
            var ingredientReference = ingredientsArray.find(element => (element.key === ingredient.id));
            if(ingredientReference)
            {
                ingredientReference.count++;
            }else{
                ingredientsArray.push({
                    key: ingredient.id,
                    value: Object.assign({}, ingredient),
                    count: 1
                })
            }
        });

        return ingredientsArray;
    }

    render() {
        const ingredients = this.reduceElements(this.selectIngredients());

        return (
            <Container style={{display: 'flex', flexWrap: 'no-wrap', justifyContent: 'center', alignItems: 'center'}}>
                <Card style={{margin: '0.5rem 1rem 0.5rem 0.5rem', }}>
                    <Card.Content>
                        <Card.Header style={{textAlign: 'center'}}>{this.props.product.value.name}</Card.Header>
                        <Card.Description>
                            Price: {this.props.product.value.price} zl
                        
                            <Popup 
                                trigger={<Icon name='info circle' size='large' style={{float: 'right'}}/>}
                                position='right center'

                                content={
                                    <List bulleted>
                                    {
                                        ingredients !== undefined &&
                                        ingredients.map(ingredient => ( ingredient !== undefined &&
                                                                            <List.Item key={Math.random()}>
                                                                                {`${ingredient.count}x - ${ingredient.value.name}`}
                                                                            </List.Item>
                                                                        )
                                                        )
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