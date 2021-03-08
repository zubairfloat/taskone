import React, { Component } from 'react'
import Content from '../../../assets/images/home-content.png'
import { Row } from 'react-bootstrap'
import './style.css'

class Connect extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        <div className="connect-div">
          <h1>
            Connect and collaborate <br />
            with your extended team
          </h1>
        </div>
        <div className="connect-div2">
          <Row className="connect-div2-row">
            <h4>Sellr automates collaboration between sellers at the</h4>
          </Row>
          <Row className="connect-div2-row">
            <h4>same organization by integrating with your CRM </h4>
          </Row>
        </div>
        <div className="connect-input">
          <input placeholder="Enter your email" id="lname" name="lname" />
          <div className="connect-input-div">
            <span>Request an invite</span>
          </div>
        </div>
        <div className="content-img">
          <div>
            <img src={Content} />
          </div>
        </div>
      </>
    )
  }
}

export default Connect
