import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import './style.css'

class AboutUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      card: [
        {
          title: 'Alec McCain',
          heading: 'Client Executive IBM',
          text:
            'As an account executinve, knowing all the sellers within my organizaion I need to work with and quickly understanding their experties and when to bring them in on client conversations is critical to my success.',
        },
        {
          title: 'Alec McCain',
          heading: 'Client Executive IBM',
          text:
            'As an account executinve, knowing all the sellers within my organizaion I need to work with and quickly understanding their experties and when to bring them in on client conversations is critical to my success.',
        },
        {
          title: 'Alec McCain',
          heading: 'Client Executive IBM',
          text:
            'As an account executinve, knowing all the sellers within my organizaion I need to work with and quickly understanding their experties and when to bring them in on client conversations is critical to my success.',
        },
      ],
    }
  }
  render() {
    return (
      <>
        <div className="about-heading">
          <h1>What our users say</h1>
        </div>
        <div className="about-lowhead">
          <h1>about us</h1>
        </div>
        <div className="multiple-cards">
          <Row style={{ justifyContent: 'center' }}>
            {this.state.card.map((data) => {
              return (
                <Col lg={3} className="about-card-col">
                  <Col lg={12}>
                    <Row>
                      <Col
                        lg={3}
                        sm={3}
                        xs={3}
                        style={{ margin: '0px 20px 0px 0px' }}
                      >
                        <div className="about-circle"></div>
                      </Col>
                      <Col lg={8} sm={8} xs={8}>
                        <Row>
                          <h1>{data.title}</h1>
                        </Row>
                        <Row>
                          <h2>{data.heading}</h2>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p>{data.text}</p>
                      </Col>
                    </Row>
                  </Col>
                </Col>
              )
            })}
          </Row>
        </div>
      </>
    )
  }
}

export default AboutUser
