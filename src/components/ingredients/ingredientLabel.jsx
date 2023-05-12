import React, { Component } from "react";
import {Card, Button} from 'semantic-ui-react';

class IngredientLabel extends Component{

    render(){
        return(<React.Fragment>
            <Card style={{width: '12rem'}}>
                <Card.Content>
                    <Card.Header>
                        {this.props.ingredient.name}: {this.props.ingredient.price} zl
                    </Card.Header>
                    <Card.Description>
                        <Button.Group compact floated='right'>
                            <Button onClick={
                                (e) => this.props.removeIngredient(this.props.ingredient, e)}
                            >-</Button>
                            <Button.Or text={this.props.amount}/>
                            <Button positive onClick={
                                (e) => this.props.addIngredient(this.props.ingredient, e)
                            }>+</Button>
                        </Button.Group>
                    </Card.Description>
                </Card.Content>
                
            </Card>
            </React.Fragment>);
    }
}
export default IngredientLabel;