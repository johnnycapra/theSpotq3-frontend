import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/signout';




class Signout extends Component {
  componentWillMount(){
    this.props.signoutUser();
  }
  render () {
    return (
      <div className="App">
        <p>Logout successful... See you next time.</p>
      </div>
    )
  }
}








export default connect(null, actions)(Signout);
