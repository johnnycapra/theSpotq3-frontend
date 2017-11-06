import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Signup from './components/Signup';
import CommentPage from './components/CommentPage';
import Dashboard from './components/Dashboard';
import Land from './components/Land';

class App extends Component {

  render() {

    return (
        <div>
          <Land/>
        </div>
    );
  }
}


export default App;
