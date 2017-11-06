import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export default function(ComposedComponent){
class  Auth extends Component {
  componentWillMount(){
    if(!this.props.authenticated){
      this.props.history.push('/');
    }
  }

  componentWillUpdate(nextProps){
    if(!nextProps.authenticated){
      this.props.history.push('/');
    }
  }
  render () {
    console.log(this.props, "PROPPS")
    return (
      <div>
        <ComposedComponent {...this.props}/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    authenticated: state.auth.authenticated
  }
}

return withRouter(connect(mapStateToProps, null)(Auth));

}
