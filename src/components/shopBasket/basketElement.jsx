import React, { Component } from 'react';
import {Card, Button, Container} from 'semantic-ui-react';
import { store } from '../../store';
import * as basketActions from '../../store/data/basket/basket.actions'; 

class BasketElement extends Component{

    render() {
        return (
            <Container style={{display: 'flex', flexWrap: 'no-wrap', justifyContent: 'center', alignItems: 'center'}}>
                <Card style={{margin: '0.5rem 1rem 0.5rem 0.5rem', }}>
                    <Card.Content>
                        <Card.Header style={{textAlign: 'center'}}>{this.props.product.value.name}</Card.Header>
                        <Card.Description>
                            Cena: {this.props.product.value.price} zl
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

export default BasketElement;