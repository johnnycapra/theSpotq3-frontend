import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Nav extends Component {
  renderLinks = () =>{
      if (this.props.authenticated && this.props.match.path === '/dashboard'){
        return [ <NavbarBrand key={1} href="/">Home</NavbarBrand>,
        <Link key={2} className="nav-link" to={'/signout'}>Logout</Link>]
      } else if (!this.props.authenticated && this.props.match.path === '/signout'){
        return <NavbarBrand href="/">Home</NavbarBrand>
      } else if (this.props.authenticated && this.props.match.path === `/dashboard/:id`) {
        return [
          <NavbarBrand key={0} href="/">Home</NavbarBrand>,
          <Link key={1} className="nav-link" to={'/dashboard'}>Back to Dashboard</Link>,
          <Link key={3} className="nav-link" to={'/signout'}>Logout</Link> ]
      } else if (!this.props.authenticated && this.props.match.path === '/'){
            return <Link className='nav-link' to={'/signup/'}>Register Now</Link>
      } else if (this.props.authenticated && this.props.match.path === '/'){
        return [ <Link key={1} className="nav-link" to={'/dashboard'}>Back to Dashboard</Link>,
          <Link key={2} className="nav-link" to={'/signout'}>Logout</Link> ]
      } else if (this.props.authenticated){
        return [
        <NavbarBrand key={1} href="/">Home</NavbarBrand>,
        <Link key={2} className="nav-link" to={'/dashboard'}>Back to Dashboard</Link>,
        <Link key={3} className="nav-link" to={'/signout'}>Logout</Link>
        ]
      } else {
        return [
        <NavbarBrand key={1} href="/">Home</NavbarBrand>,
        <Link key={2} className="nav-link" to={'/'}>Log In</Link> ]
      }
  }

  render () {
    return (
      <div>
        <Navbar color="primary" light expand="md">
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
