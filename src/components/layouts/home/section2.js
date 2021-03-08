import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import sectionImg from '../../../assets/images/section2.PNG'
import './style.css'

class Section2 extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        <div class="section-div">
          <Row style={{ justifyContent: 'center' }}>
            <Col
              class="section-col2"
              style={{ margin: '50px' }}
              lg={5}
              sm={12}
              xs={12}
            >
              <Row>
                <Col className="section2-collaborate" sm={12} xl={12} lg={12}>
                  <p>COLABORATE</p>
                </Col>
              </Row>
              <Row>
                <Col className="section2-recommand" sm={12} xs={12} lg={12}>
                  Recommendations on
                </Col>
              </Row>
              <Row>
                <Col
                  className="section2-recommand-coverage"
                  sm={12}
                  xs={12}
                  lg={12}
                >
                  account coverage
                </Col>
              </Row>
              <Row>
                <Col className="section2-ipsum" sm={12} xs={12} lg={12}>
                  <p>
                    Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                    elit, sed do <br />
                    eiusmod tempor incididunt ut <br />
                    labore et dolore magna aliqua.
                  </p>
                </Col>
              </Row>
            </Col>
            <Col class="section-col2" lg={5} sm={12} xs={12}>
              <div className="section-image">
                <img src={sectionImg} />
              </div>
            </Col>
          </Row>
        </div>

        <div class="section-div" style={{ backgroundColor: '#FFFFFF' }}>
          <Row style={{ justifyContent: 'center' }}>
            <Col
              class="section-col2"
              style={{ margin: '50px' }}
              lg={5}
              sm={12}
              xs={12}
            >
              <div className="section-image">
                <img src={sectionImg} />
              </div>
            </Col>
            <Col class="section-col2" lg={5} sm={12} xs={12}>
              <Row>
                <Col className="section2-collaborate" sm={12} xl={12} lg={12}>
                  <p>CONNECT</p>
                </Col>
              </Row>
              <Row>
                <Col className="section2-recommand" sm={12} xs={12} lg={12}>
                  Pipeline tracking
                </Col>
              </Row>
              <Row>
                <Col
                  className="section2-ipsum"
                  style={{ padding: '20px 0px 0px 20px' }}
                  sm={12}
                  xs={12}
                  lg={12}
                >
                  <p>
                    Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                    elit, sed do <br />
                    eiusmod tempor incididunt ut <br />
                    labore et dolore magna aliqua.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div class="section-div">
          <Row style={{ justifyContent: 'center' }}>
            <Col
              class="section-col2"
              style={{ margin: '50px' }}
              lg={5}
              sm={12}
              xs={12}
            >
              <Row>
                <Col className="section2-collaborate" sm={12} xl={12} lg={12}>
                  <p>COLABORATE</p>
                </Col>
              </Row>
              <Row>
                <Col className="section2-recommand" sm={12} xs={12} lg={12}>
                  Centralized account
                </Col>
              </Row>
              <Row>
                <Col
                  className="section2-recommand-coverage"
                  sm={12}
                  xs={12}
                  lg={12}
                >
                  information
                </Col>
              </Row>
              <Row>
                <Col className="section2-ipsum" sm={12} xs={12} lg={12}>
                  <p>
                    Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                    elit, sed do <br />
                    eiusmod tempor incididunt ut <br />
                    labore et dolore magna aliqua.
                  </p>
                </Col>
              </Row>
            </Col>
            <Col class="section-col2" lg={5} sm={12} xs={12}>
              <div className="section-image">
                <img src={sectionImg} />
              </div>
            </Col>
          </Row>
        </div>
      </>
    )
  }
}

export default Section2
