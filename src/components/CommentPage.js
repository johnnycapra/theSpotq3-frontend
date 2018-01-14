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
import { fetchAny } from '../actions/signin';

class CommentPage extends Component {




  componentWillMount = () => {
    this.props.onePic(parseInt(this.props.match.params.id));
    this.props.getPost(parseInt(this.props.match.params.id));
    this.props.fetchUser();
    console.log(this.props.fetchUser());

  }

  state = {
    content: null,
    user_id: null,
    picture_id: parseInt(this.props.match.params.id)

  }


  resetState = () => {
    this.setState({
      content: null,
      user_id: this.props.user_id,
      picture_id:null
    })
  }


  render () {

    if(!this.props.solopic || !this.props.thispost ){
      return <div>{console.log("good place for spinner conditional")}</div>
    }
    console.log(this.props)
      let { title, image, description } = this.props.solopic;
      console.log("THISPOST", this.props.thispost);
      console.log("djfla", parseInt(this.props.match.params.id));
      let content = this.props.thispost.map((post, i)=> <p key={post.id[i]}>{post.content}</p> );
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
          {content}
        </div>
        <div className='writePost'>
          <form className='formClass'
              onSubmit={ e => {this.props.addnewPost(
                 {content: this.state.content,
                 user_id: this.props.user_id,
                 picture_id: this.state.picture_id}
              )
              e.preventDefault();
              this.resetState();
              e.target.reset();
            }}
            >
            <input className="form-control" type='text' name='content' onChange={e => this.setState({content: e.target.value})}/>
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
    thispost: state.allPosts.allPost,
    user_id: state.auth.user,
    post: state.allPosts.content

  }
}

function mapDispatchToProps(dispatch){
  return{
    onePic: bindActionCreators(singlePic, dispatch),
    addnewPost: bindActionCreators(addedPost, dispatch),
    fetchUser: bindActionCreators(fetchAny, dispatch),
    getPost: bindActionCreators(getAllPosts, dispatch),
  }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentPage));
