import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { signupUser } from '../actions/signup';
import Nav from './Nav';


class Signup extends Component {

  handleFormSubmit = (values) => {
    this.props.signUserUp(values);
  }

  renderAlert = () => {
    if (this.props.errorMessage){
    return (
        <div className="alert alert-danger">
          {this.props.errorMessage}
        </div>
    )
    }
  }

  renderField = ({ input, label, type, meta: { touched, error } }) => (
      <div>
        <label>{label}</label>
        <div>
          {touched && (error && <span><div className='alert alert-danger'>{error}</div></span>)}
          <input className='form-control' {...input} type={type}/>
        </div>
      </div>
    )

  render () {

    const {fields: {email,username, password, confirm, }} = this.props;

    return (
      <div className='App'>
        <Nav/>
        <h4 className='header'>Register below!</h4>
        <Row className="justify-content-center signup">
            <form className="formClass"
                onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
              <Field  className="form-control" type='text'   name='email' label='email' component={this.renderField}/>
              <Field  className="form-control" type='text'   name='username' label="username" component={this.renderField}/>
              <Field  className="form-control"type='password'  name='password' label="password" component={this.renderField}/>
              <Field  className="form-control"type='password' name='confirm' label="confirm" component={this.renderField}/>
              <br />
              {this.renderAlert()}
              <button className="col-6 btn btn-dark"  type='submit'>Sign Up</button>
            </form>
        </Row>
      </div>
    )
  }
}

const validate = (values) => {
  const errors = {};
  if (values.password !== values.confirm){
    errors.password = 'Passwords must match.'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    errors.email = "Must be valid email"
  }  else if (!values.email){
      errors.email = 'Email required.'
  } else if(!values.username) {
    errors.username = "Username required."
  }
  return errors
}

function mapDispatchToProps(dispatch){
  return {
    signUserUp: bindActionCreators(signupUser, dispatch)
  }
}

function mapStateToProps(state){
  return {errorMessage: state.auth.error}
}

const afterSubmit = (result, dispatch) =>
  dispatch(reset('signupForm'));


Signup = reduxForm({
  // a unique name for the form
  form: 'signupForm',
  fields: ['email', 'username', 'password', 'confirm'],
  validate,
  onSubmitSuccess: afterSubmit
})(Signup)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup));
