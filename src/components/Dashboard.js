import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'reactstrap';
import EventCard  from './EventCard';
import { Row, Col } from 'reactstrap';
import { Navbar, NavbarBrand } from 'reactstrap';
import Nav from './Nav';
import { withRouter } from 'react-router-dom';
import { getAllPics } from '../actions/pictures';
import { getAllPosts } from '../actions/posts';

class Dashboard extends Component {
  componentWillMount() {
    this.props.showPics();
  }

  render () {
    let thePictures = this.props.pics.map(picture => <EventCard key={picture.id} picture={picture} />)
    return (
      <div >
        <Nav />
        <div className='card-wrapper'>
          {thePictures}
        </div>
      </div>
    )
  }
}
function mapStateToProps(state){
  return {
    pics: state.allPics.all,
  }
}

function mapDispatchToProps(dispatch){
  return {
      showPics: bindActionCreators(getAllPics, dispatch),
    }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
