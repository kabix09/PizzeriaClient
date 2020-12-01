import React, { Component } from 'react';
import {Card, Container, Grid } from 'semantic-ui-react';

class BasketElement extends Component{

    render() {
        return (
            <React.Fragment>
                <Card>
                    <Card.Content>
                        <Card.Header style={{textAlign: 'center'}}>{this.props.product.name}</Card.Header>
                        <Card.Description>
                            Cena: {this.props.product.price} zl
                        </Card.Description>
                    </Card.Content>
                </Card>

            </React.Fragment>
        );
    }
}

export default BasketElement;