import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'reactstrap';
import EventCard  from './EventCard';
import { Row, Col } from 'reactstrap';
import { Navbar, NavbarBrand } from 'reactstrap';
import Nav from './Nav';
import { fetchMessage } from '../actions/signin';
import { withRouter } from 'react-router-dom';

class Dashboard extends Component {
  componentWillMount() {
    this.props.fetched();
  }

  render () {

    return (
      <div >
        <Nav />
        {this.props.message}
        <div className='card-wrapper'>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state){
  return {
    message: state.auth.message
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetched: bindActionCreators(fetchMessage, dispatch)
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
