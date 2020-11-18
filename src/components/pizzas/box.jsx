import React from 'react';
import {Card} from 'semantic-ui-react';

const { Component } = require("react");


class Box extends Component{

    constructor()
    {
        super();
    }

    render()
    {
        return (
            <React.Fragment>
                <Card>
                    <Card.Content>
                        <Card.Header style={{textAlign: 'center'}}>{this.props.name}</Card.Header>
                    </Card.Content>
                </Card>
            </React.Fragment>   
        );
    };
}

export default Box;