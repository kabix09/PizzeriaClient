import { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as UI from 'semantic-ui-react';

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
            }
        }
    }

    validate = (values) => {
        let errors = {};

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const phoneNumberRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
        
        if(values.name === ""){
            errors.name = "Name is required";
        }

        if(values.surename === ""){
            errors.surename = "Surename is required";
        }

        if (!values.email) {
          errors.email = "Email is required";
        } else if (!emailRegex.test(values.email)) {
          errors.email = "Invalid Email";
        }
        if (!values.phoneNumber) {
            errors.phoneNumber = "Phone number is required";
        } else if (!phoneNumberRegex.test(values.phoneNumber)) {
            errors.phoneNumber = "Invalid phone number";
        }

        if(values.town === ""){
            errors.town = "Town is required";
        }

        if(values.address === ""){
            errors.address = "Full address is required";
        }

        return errors;
    };
      
    submitForm = (formValues) => {
        console.log(formValues);
    };

    render()
    { 
        return (
            
            <Formik
                initialValues = {this.state.initialValues}
                validate = {(values) => this.validate(values)}
                isSubmitting = {false}
                onSubmit = {async (fields) => {this.submitForm(fields);}}
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
                                    <ErrorMessage name="name" component="div" style={{text: "red"}} />
                            </UI.Form.Field>                 

                            <UI.Form.Field>
                                <label htmlFor="surename">Surename</label>
                                <Field
                                    type="text"
                                    name="surename"
                                    placeholder="Enter surename"
                                />
                                <ErrorMessage name="surename" component="div" className="invalid-feedback" />
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
                                <ErrorMessage name="email" component="div" className="invalid-feedback" />
                            </UI.Form.Field>

                            <UI.Form.Field>
                                <label htmlFor="phoneNumber">Phone number</label>
                                <Field 
                                    name="phoneNumber" 
                                    type="tel" 
                                    placeholder="000 000 000"
                                />
                                <ErrorMessage name="phoneNumber" component="div" className="invalid-feedback" />
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
                                <ErrorMessage name="town" component="div" className="invalid-feedback" />
                            </UI.Form.Field>

                            <UI.Form.Field width={10}>
                                <label htmlFor="address">Address</label>
                                <Field 
                                    name="address" 
                                    type="text" 
                                    placeholder="Enter street or estate"
                                />
                                <ErrorMessage name="address" component="div" className="invalid-feedback" />
                            </UI.Form.Field>
                        </UI.Form.Group>

                        <UI.Form.Button floated='right'
                            type="submit"
                            className="btn btn-primary btn-block"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Please wait..." : "Submit"}
                        </UI.Form.Button>
                    </Form>
                    
                    
                )}
                </Formik>
            
        );
    }
}
export default OrderForm;