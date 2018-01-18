import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


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
    return (
      <div>
        <ComposedComponent {...this.props}/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    authenticated: state.auth.authenticated,
  }
}

return withRouter(connect(mapStateToProps, null)(Auth));

}
