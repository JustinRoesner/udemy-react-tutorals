import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends React.Component {
    //destructing error, and touched from meta
    renderError({ error, touched }){
        if (touched && error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    //can destructure out input from formProps
    //renderInput(formProps){

    

    //onChange={formProps.input.onChange} 
    //value={formProps.input.value} 
    // instead of these two lines can use input 
    //<input {...input}/>


    //error cannot read poperty rendererror of undefined means i need arrow function

    renderInput = ({ input, label, meta }) => {
        const className=`field ${meta.error && meta.touched ? 'error': ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                <div>{meta.error}</div>
            </div>
        );
    }

    onSubmit(formValues){
        console.log(formValues);
        //going to make a request to 3001 to the api
        //going to call an action creator from here 
        //npm install --save axios redux-thunk
    }

    render(){
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

//called from outside of my class. validation for input
//validate is part of redux form
//when i return an empty object the users input is valid
//if i return an object it will have description of error the user made
const validate = (formValues) => {
    const errors = {};

    //the error names need to be the same as field properties
    //for them to recieve the errors
    if (!formValues.title){
        errors.title = 'You must enter a title';
    }
    if (!formValues.description){
        errors.description = 'You must enter a description';
    }

    return errors;
};

export default reduxForm({
    form: 'streamCreate',
    validate
    //validate: validate    this is the long way
})(StreamCreate);