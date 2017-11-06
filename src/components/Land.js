import React, { Component } from 'react';
import {  Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { reset } from 'redux-form';
import { signUser } from '../actions/signin';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import Nav from './Nav';

class Land extends Component {
  forSubmit = ({email, password}) => {
    this.props.signInUser({ email, password });
  }



  renderAlert = () => {
    if(this.props.errorMessage){
      return (
        <div className="alert alert-danger">
            <p><strong>RUTROW RAGY:</strong> {this.props.errorMessage}</p>
        </div>
      )
    }
  }

  render () {

    const { fields: {email, password} } = this.props;

    return (
      <div className='App'>
        <Nav />
        <Row className="justify-content-center home">
        <h1>The Spot</h1>
        </Row>
        <Row className="justify-content-center login">
          <div className="col-4">
            <form onSubmit={this.props.handleSubmit(this.forSubmit)}>
              <label >Email</label>
              <Field {...email} className="form-control" type='text' name='email' component="input"/>
                <label >Create Password</label>
                <Field  {...password} className="form-control" type='password'  name='password' component="input"/>
                {this.renderAlert()}
              <button className="col-6 btn btn-dark"  action='submit'>Login</button>
            </form>
            <br />
            <p className="col-12"><Link to={'/signup/'}>No account? Register here!</Link></p>
          </div>
        </Row>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    signInUser: bindActionCreators(signUser, dispatch)
  }
}

function mapStateToProps(state){
  return {
    errorMessage: state.auth.error
  };
}

Land = reduxForm({
  form: 'land',
  fields: ["email", "password"]
})(Land)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Land));
