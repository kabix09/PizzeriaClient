import {Container, Segment, Header, Icon} from 'semantic-ui-react';
import React, { Component } from "react"

class Home extends Component
{
    render(){
        return(<React.Fragment>
            <Container style={{minHeight: '40rem',  padding: '3rem'}}>
                <Segment placeholder style={{height: '40rem', background: `url(${process.env.PUBLIC_URL + '/pizzaWallpaper.jpg'})` }}>
                    <Header icon as='h1'>
                        <Icon name='food' size='huge'/>
                        <Header >
                            The best Pizza in Your town!!
                        </Header>
                    </Header>
                </Segment>
            </Container>
            
            </React.Fragment>);
    }
}
export default Home;