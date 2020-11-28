import React from 'react';
import {Card, Container, Grid} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Box from './pizzas/box';
import Pizza from './pizzas/pizza';
import {store} from '../store';
const { Component } = require("react");



class Menu extends Component{

    constructor()
    {
        super();
        this.state = {
            pizzas: store.getState().pizzas,
            name: ''
        };
        console.log(this.state.pizzas);
    }
    
    render()
    {
        let currentPizza = this.state.pizzas.find(element => (element.name.toLowerCase() === this.props.match.params.name));

        return (
            <React.Fragment>
                <Container style={{marginTop: "4rem"}}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={5} >
                                <Card.Group centered>
                                    <h1 style={{textAlign: 'center'}}>Pizzas menu:</h1>
                                    {
                                        this.state.pizzas.map(
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
/* 
<Pizza pizza={this.state.pizzas.map(element => element.name === this.state.name)}>
 */
/* <li><a href={element.name} key={element.id}>{element.name}</a></li> */
export default Menu;