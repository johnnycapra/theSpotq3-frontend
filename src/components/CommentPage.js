import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { reset } from 'redux-form';
import Nav from './Nav';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { singlePic } from '../actions/pictures';
import { getAllPosts } from '../actions/posts';
import { addedPost } from '../actions/posts';

class CommentPage extends Component {

  state = {
    content: null,
  }

  resetState = () => {
    this.setState({
      content: null,
    })
  }


  componentWillMount = () => {
    this.props.onePic(parseInt(this.props.match.params.id));
    this.props.getPost(parseInt(this.props.match.params.id));

  }


  render () {

    if(!this.props.solopic || !this.props.thispost ){
      return <div>{console.log("good place for spinner conditional")}</div>
    }
    console.log(this.props)
      let { title, image, description } = this.props.solopic;
      let { content } = this.props.thispost;
    return (
      <div >
      <Nav />
        <div className='imgDiv' >
          <img src={ image } alt="BROKEN IMG"/>
          <div className='cardInfo'>
            <h3>{ title }</h3>
            <p>{ description }</p>
          </div>
        </div>
        <div className='postSection'>
          <p>{ content }</p>
        </div>
        <div className='writePost'>
          <form className='formClass'
              onSubmit={ e => {this.props.addnewPost(
                this.state.content,
              )
              e.preventDefault();
              this.resetState();
              e.target.reset();
            }}
            >
            <input className="form-control" type='text' name='content' onChange={ e => this.setState({content: e.target.value})}/>
            <button className="btn btn-dark" type='submit'>Send Post</button>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    solopic: state.allPics.solopic,
    thispost: state.allPosts.allPost

  }
}

function mapDispatchToProps(dispatch){
  return{
    onePic: bindActionCreators(singlePic, dispatch),
    getPost: bindActionCreators(getAllPosts, dispatch),
    addnewPost: bindActionCreators(addedPost, dispatch)
  }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentPage));
