import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Card, Container, Grid, Header} from 'semantic-ui-react';
import BasketElement from './basketElement';

import OrderForm from '../form/orderForm';

const mapStateToProps = (state) => {
    return {
        basket: state.basket,
        price: state.price
    }
}

class BasketContainer extends Component {

    render(){     
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
                        <Header as='h2' style={{textAlign: 'center'}}>Order Pizza</Header>
                        <OrderForm history = { this.props.history }/>
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}

export default connect(mapStateToProps)(BasketContainer);