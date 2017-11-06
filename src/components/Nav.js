import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Nav extends Component {
  renderLinks = () =>{
    if (this.props.authenticated && this.props.match.path === '/dashboard'){
      return <Link className="nav-link" to={'/signout'}>Logout</Link>
    } else {
      return [
      <Link key={1} className="nav-link" to={'/dashboard'}>Back to Dashboard</Link>,
      <Link key={2} className="nav-link" to={'/signout'}>Logout</Link>
      ]
    }
  }

  render () {
    console.log(this.props,"PROOPPSSSSPSPS");
    return (
      <div>
      <Navbar color="primary" light expand="md">
        <NavbarBrand href="/">Home</NavbarBrand>
        {this.renderLinks()}
      </Navbar>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    authenticated: state.auth.authenticated
  }
}
export default withRouter(connect(mapStateToProps,null)(Nav));
