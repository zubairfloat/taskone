import React from 'react'
import { Row, Col } from 'reactstrap'
import { AiOutlineArrowRight } from 'react-icons/ai'
import './style.css'

const Footer = () => {
  return (
    <Row style={{ justifyContent: 'center' }}>
      <Col lg="10" className="footer">
        <Row>
          <Col lg="8" className="footer-title">
            <h1>
              Collaborate with your <br />
              team today.
            </h1>
          </Col>
          <Col lg="4">
            <div className="footer-join-list">
              <h2>
                Join the Waitist &nbsp; <AiOutlineArrowRight />
              </h2>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Footer
