import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup  from 'yup';
import * as UI from 'semantic-ui-react';
import Loader from 'react-loader-spinner';

import { store } from '../../store';
import { setLabel } from '../../store/data/label/label.actions';
import {clearBasket} from '../../store/data/basket/basket.actions';
const mapStateToProps = (state) => {
    return {
        basket: state.basket,
        price: state.price
    }
}

class OrderForm extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            initialValues: {
                name: "",
                surename: "",
                email: "",
                phoneNumber: "",
                town: "",
                address: ""
            },
            isLoading: false
        }
    }
    
    orderValidationShema = () => Yup.object().shape({
        name: Yup.string()
          .min(3, "Name is too short!")
          .max(15, "Name is too long!")
          .required("Name is required"),
      
        surename: Yup.string()
          .min(5, "Surename is too short!")
          .max(30, "Surename is too long!")
          .required("Surename is required"),
      
        email: Yup.string()
            .email()
            .required("Email is required"),

        phoneNumber: Yup.string()
          .required("Phone number is required")
          .matches(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/, "Invalid phone number"),
      
        town: Yup.string()
          .required("Town is required"),
        
        address: Yup.string()
            .required("Address is required")
      });

    buildOrder = () => {
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
            return {pizzas: pizzas, sauces: sauces, price: price};
        else
            return {pizzas: pizzas, sauces: [], price: price};
    }

    submitForm = () => {
        this.setState({isLoading: true});

        // build order object
        const order = this.buildOrder();
        
        console.log(order);

        // set requst 
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(order)
        };

        // execute order request 
        fetch('/api/order', requestOptions)
            .then(async response => {
                const data = await response.json();

                if(!response.ok)
                {
                    return Promise.reject(data.status + " - " + data.message)
                }

                this.setState({isLoading: false});

                // clear basket store
                store.dispatch(clearBasket);
                // save redirect sub path
                store.dispatch(setLabel(""));
                // redirec to / page
                this.props.history.push('/');  
            })
            .catch(error => {
                console.error(error);
            });            
    }     

    render()
    {
        const { isLoading } = this.state;

        return (<React.Fragment>
            <Formik
                initialValues = {this.state.initialValues}
                validationSchema={this.orderValidationShema}
                onSubmit = {async () => {this.submitForm();}}
            > 
                {({ isSubmitting }) => (
                    
                    <Form className="ui form">
                        <UI.Form.Group widths='equal'>
                            <UI.Form.Field>
                                <label htmlFor="name">First name</label>
                                <Field
                                    type="text"
                                    name="name"
                                    placeholder="Enter name"
                                />
                                    <ErrorMessage name="name" component="div" style={{color: "red"}}/>
                            </UI.Form.Field>                 

                            <UI.Form.Field>
                                <label htmlFor="surename">Surename</label>
                                <Field
                                    type="text"
                                    name="surename"
                                    placeholder="Enter surename"
                                />
                                <ErrorMessage name="surename" component="div" style={{color: "red"}} />
                            </UI.Form.Field>
                        </UI.Form.Group>

                        <UI.Form.Group widths='equal'>
                            <UI.Form.Field >
                                <label htmlFor="email">Email</label>
                                <Field 
                                    name="email" 
                                    type="text" 
                                    placeholder="example@email.com"
                                />
                                <ErrorMessage name="email" component="div" style={{color: "red"}} />
                            </UI.Form.Field>

                            <UI.Form.Field>
                                <label htmlFor="phoneNumber">Phone number</label>
                                <Field 
                                    name="phoneNumber" 
                                    type="tel" 
                                    placeholder="000 000 000"
                                />
                                <ErrorMessage name="phoneNumber" component="div" style={{color: "red"}} />
                            </UI.Form.Field>
                        </UI.Form.Group>

                        <UI.Form.Group widths='equal' >
                            <UI.Form.Field width={4}>
                                <label htmlFor="town">Town</label>
                                <Field 
                                    name="town" 
                                    type="text" 
                                    placeholder="Poznan"
                                />
                                <ErrorMessage name="town" component="div" style={{color: "red"}} />
                            </UI.Form.Field>

                            <UI.Form.Field width={10}>
                                <label htmlFor="address">Address</label>
                                <Field 
                                    name="address" 
                                    type="text" 
                                    placeholder="Enter street or estate"
                                />
                                <ErrorMessage name="address" component="div" style={{color: "red"}} />
                            </UI.Form.Field>
                        </UI.Form.Group>

                        <UI.Form.Button primary floated='right'
                            type="submit"
                            
                            disabled={ (this.props.basket.length === 0 ) || isSubmitting || isLoading}
                        >
                            {
                                isLoading ? <Loader type="TailSpin" color="#00BFFF" height={50} width={50} /> : <span>Send</span>
                            }                            
                        </UI.Form.Button>
                    </Form>    
                )}
            </Formik>
            </React.Fragment>);
    }
}

export default connect(mapStateToProps)(OrderForm);