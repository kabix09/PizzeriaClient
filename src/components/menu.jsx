import React from 'react';
import {Card, Container, Grid} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Box from './pizzas/box';
import Pizza from './pizzas/pizza';
const { Component } = require("react");

const mapStateToProps = (state) => {
    return {
        pizzas: state.pizzas
    }
}

class Menu extends Component {

    render()
    {
        const currentPizza = 
            (this.props.pizzas !== undefined  && this.props.pizzas.length > 0) 
                ? this.props.pizzas.find(element => (element.name.toLowerCase() === this.props.match.params.name)) 
                : undefined;

        return (
            <React.Fragment>
                <Container style={{marginTop: "4rem"}}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={5} >
                                <Card.Group centered>
                                    <h1 style={{textAlign: 'center'}}>Pizzas menu:</h1>
                                    {
                                        this.props.pizzas !== undefined && this.props.pizzas.length > 0 &&
                                            this.props.pizzas.map(
                                                element =>  <Link to={`/menu/`+element.name.toLowerCase()} key={Math.random()} style={{margin: '5px'}}>
                                                                <Box name={element.name}/>
                                                            </Link>
                                            )
                                    }    
                                </Card.Group>
                            </Grid.Column>

                            <Grid.Column width={11}>
                                {
                                    <h1 style={{textAlign: 'center'}}>Pizza:</h1>
                                }
                                <Card.Group centered>
                                    {
                                        currentPizza !== undefined &&
                                            <Pizza pizza={currentPizza} style={{margin: 'auto'}}/>
                                    }
                                </Card.Group>
                            </Grid.Column>
                        </Grid.Row>
                        
                    </Grid>
                </Container>
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps)(Menu);