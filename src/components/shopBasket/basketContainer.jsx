import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button, Card, Container, Grid} from 'semantic-ui-react';
import BasketElement from './basketElement';

import Loader from 'react-loader-spinner';

const mapStateToProps = (state) => {
    return {
        basket: state.basket,
        price: state.price
    }
}

class BasketContainer extends Component {

    constructor()
    {
        super()

        this.state = {
            isLoading: false
        }
    }

    buildOrder()
    {
        const pizzas = this.props.basket.reduce(
            (result, currentElement, index, inputArray) => {
                for(let i=0; i < currentElement.count; i++)
                {
                    result = result.concat([currentElement.value]);
                }
                return result;
            }, []
        );

        const sauces = this.props.sauce ? this.props.sauce : undefined;
        const price = this.props.price.value;

        if(sauces !== undefined)
            return {pizza: pizzas, sauce: sauces, total: price};
        else
            return {pizza: pizzas, total: price};
    }

    submitOrder = e => 
    {
        // prevent default invoking
        e.preventDefault();

        this.setState({isLoading: true});

        // build order object
        const order = this.buildOrder();

        // set requst 
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(order)
        };

        // execute order request 
        fetch('http://localhost:3333/api/order', requestOptions)
            .then(async response => {
                const data = await response.json();

                if(!response.ok)
                {
                    return Promise.reject(data.status + " - " + data.message)
                }

                this.setState({isLoading: false, status: response.status, message: data.message});
                console.log(this.state);
            })
            .catch(error => {
                console.error(error);
            });
    }

    render(){
        const {isLoading} = this.state;

        return (
            <Container>
                <Grid columns={2}>
                    <Grid.Column width={7} style={{marginTop: '4rem'}}>
                        <Card.Group>
                        {
                            (this.props.basket !== undefined && this.props.basket.length > 0) ?
                                this.props.basket.map(
                                    element => <BasketElement product={element} key={Math.random()}/>                                                        
                                ):<div>no elements</div>
                        }
                        </Card.Group>
                    </Grid.Column>
                    <Grid.Column style={{marginTop: '4rem'}}>
                        <Button onClick={this.submitOrder} disabled={isLoading}>
                        {
                            isLoading ? <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />:<span>Zamów</span>
                        }
                        </Button>
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}

export default connect(mapStateToProps)(BasketContainer);