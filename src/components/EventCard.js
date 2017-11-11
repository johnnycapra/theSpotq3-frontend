import { CardImg, CardText, CardBody,
 Row, Col, CardTitle, CardSubtitle, Button } from 'reactstrap';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class EventCard extends Component {

  render () {
      let { id, title, image, description } = this.props.picture;
    return (
        <div className="cardDiv">
          <div className="row">
            <div className="col-sm-12">
              <div className="theCard">
                <CardImg className="img" top width="100%" src={ image } alt="Broken Picture" />
                <CardBody>
                  <CardTitle>{ title }</CardTitle>
                  <CardText>{ description }</CardText>
                    <Link to={'/dashboard/' + this.props.picture.id }><Button>Comment On Spot</Button></Link>
                </CardBody>
              </div>
            </div>
          </div>
        </div>
    )
  }
}



export default withRouter(connect(null, null)(EventCard));
