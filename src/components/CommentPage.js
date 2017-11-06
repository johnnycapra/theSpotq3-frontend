import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { reset } from 'redux-form';
import Nav from './Nav';


class CommentPage extends Component {

  render () {

    return (
      <div>
      <Nav />
        <div className='imgDiv'>
          <img src="" alt="BROKEN IMG"/>
          <div className='cardInfo'>
            <h3></h3>
            <p></p>
          </div>
        </div>
        <div className='postSection'>
          <p></p>
        </div>
        <div className='writePost'>
          <form className='formClass'>
            <input className="form-control" type='text' name='content'/>
            <input className="form-control" type='hidden' value=""/>
            <button className="btn btn-dark" type='submit'>Send Post</button>
          </form>
        </div>
      </div>
    )
  }
}


export default CommentPage;
