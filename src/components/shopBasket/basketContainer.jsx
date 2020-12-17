import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button, Container , Label} from 'semantic-ui-react';
import BasketElement from './basketElement';
import { store } from '../../store';
import * as basketActions from '../../store/data/basket/basket.actions'; 

const mapStateToProps = (state) => {
    return {
        basket: state.basket
    }
}

class BasketContainer extends Component {

    /* fixed reducing function from StackOverflow
        https://stackoverflow.com/questions/5732043/javascript-reduce-on-array-of-objects
    */
    countByProperty(inputArray, key) { 
        return inputArray.reduce(
                (result, element) => { 
                    let value = key instanceof Function ? key(element) : element[key]; 
                    let object = result.find((r) => r && r.key === value)

                    if (object) 
                    { 
                        result.find(el => el.key === value).count++;    /* increment amount */
                    } else 
                    { 
                        result.push({ key: value, value: element, count: 1});   /* add new element */
                    }

                    return result; 
                }, []); 
    }

    render(){
        return (
            <React.Fragment>
                <Container style={{marginTop: "4rem"}}>
                    {
                        (this.props.basket !== undefined && this.props.basket.length > 0) ?
                            this.props.basket.map(
                                element => <div key={Math.random()} style={{ width: '50%', display: 'flex', flexWrap: 'no-wrap', alignItems: 'center'}}>
                                                <BasketElement product={element.value} />
                                                
                                                <Button onClick={ () => {
                                                    store.dispatch(basketActions.decrement(element.key)); 
                                                }}>-</Button>

                                                <Label color={'violet'}>{element.count}</Label>
                                                
                                                <Button onClick={ () => {
                                                    store.dispatch(basketActions.increment(element.key));
                                                }}>+</Button>
                                                
                                            </div>

                            ):<div>no elements</div>
                    }
                </Container>
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps)(BasketContainer);