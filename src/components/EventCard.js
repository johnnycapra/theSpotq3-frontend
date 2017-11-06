import { CardImg, CardText, CardBody,
 Row, Col, CardTitle, CardSubtitle, Button } from 'reactstrap';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EventCard extends Component {

  render () {

    return (
        <div className="cardDiv">
          <div className="row">
            <div className="col-sm-12">
              <div className="theCard">
                <CardImg className="img" top width="100%" src="" alt="Broken Picture" />
                <CardBody>
                  <CardTitle></CardTitle>
                  <CardText></CardText>
                    <Link to={'/dashboard/' + this.props.picture.id }><Button>Comment On Spot</Button></Link>
                </CardBody>
              </div>
            </div>
          </div>
        </div>
    )
  }
}


export default EventCard;
