import React from 'react';
import {Card, Container, Grid, Segment, Header} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Label from './pizzas/label';
import Pizza from './pizzas/pizza';
import Loader from 'react-loader-spinner';
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
                                    <Header as='h1' style={{textAlign: 'center'}}>Pizzas menu:</Header>
                                    {
                                        (this.props.pizzas !== undefined && this.props.pizzas.length > 0) ? 
                                            this.props.pizzas.map(
                                                element =>  <Link to={`/menu/`+element.name.toLowerCase()} key={Math.random()} style={{margin: '5px'}}>
                                                                <Label name={element.name}/>
                                                            </Link>
                                            ): 
                                            <Segment raised style={{ width: '20rem', height: '25rem', display: 'flex', justifyContent: 'space-around', alignItems: 'center',
                                                                     WebkitBoxShadow: '8px 10px 20px 0px rgba(0,0,0,0.3)', 
                                                                     MozBoxShadow: '8px 10px 20px 0px rgba(0,0,0,0.3)', 
                                                                     boxShadow: '8px 10px 20px 0px rgba(0,0,0,0.3)' }}>
                                                <Loader type="Circles" color="#00BFFF" height={80} width={80}/>
                                            </Segment>
                                    }    
                                </Card.Group>
                            </Grid.Column>

                            <Grid.Column width={11}>
                                {
                                    <Header as='h1' style={{textAlign: 'center'}}>Pizza:</Header>
                                }
                                <Card.Group centered>
                                    {
                                        (currentPizza !== undefined) ?
                                            <Pizza pizza={currentPizza} style={{margin: 'auto'}}/>:
                                            <Segment raised style={{ width: '25rem', height: '18rem', marginTop: '5rem', display: 'flex', justifyContent: 'space-around', alignItems: 'center',
                                                                        WebkitBoxShadow: '10px 10px 5px 0px rgba(0,0,0,0.3)', 
                                                                        MozBoxShadow: '10px 10px 5px 0px rgba(0,0,0,0.3)', 
                                                                        boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.3)' }}>
                                                <Header as='h2'>
                                                    No Pizza selected
                                                </Header>
                                            </Segment>
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