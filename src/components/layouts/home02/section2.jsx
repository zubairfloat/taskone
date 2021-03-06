import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
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
            <Col class="section-col2" lg="5" sm="12" xs="12">
              <Row>
                <Col className="section2-collaborate" sm="12" xl="12" lg="12">
                  <p>COLABORATE</p>
                </Col>
              </Row>
              <Row>
                <Col className="section2-recommand" sm="12" xs="12" lg="12">
                  Recomandation on <br /> Account covrage
                </Col>
              </Row>
              <Row>
                <Col className="section2-ipsum" sm="12" xs="12" lg="12">
                  <p>
                    Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                    elit, sed do <br />
                    eiusmod tempor incididunt ut <br />
                    labore et dolore magna aliqua.
                  </p>
                </Col>
              </Row>
            </Col>
            <Col class="section-col2" lg="5" sm="12" xs="12">
              <div className="section-image">
                <img src={sectionImg} />
              </div>
            </Col>
          </Row>
        </div>
        <div class="row section-div" style={{ backgroundColor: 'white' }}>
          <div class="section-col2 col-lg-6 col-sm-12">
            <div className="section-image">
              <img src={sectionImg} />
            </div>
          </div>
          <div
            class="section-col2 col-lg-6 col-sm-12"
            style={{ padding: '50px 0px 0px 70px' }}
          >
            <Row>
              <Col className="section2-conenct" sm="12" xl="12" lg="12">
                <p>CONNECT</p>
              </Col>
            </Row>
            <Row>
              <Col className="section2-pipeline" sm="12" xs="12" lg="12">
                Pipeline tracking <br />
              </Col>
            </Row>
            <Row>
              <Col className="section2-ipsum" sm="12" xs="12" lg="12">
                <p>
                  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                  elit, sed do <br />
                  eiusmod tempor incididunt ut <br />
                  labore et dolore magna aliqua.
                </p>
              </Col>
            </Row>
          </div>
        </div>

        <div class="section-div">
          <Row style={{ justifyContent: 'center' }}>
            <Col class="section-col2" lg="5" sm="12" xs="12">
              <Row>
                <Col className="section2-collaborate" sm="12" xl="12" lg="12">
                  <p>COLABORATE</p>
                </Col>
              </Row>
              <Row>
                <Col className="section2-recommand" sm="12" xs="12" lg="12">
                  Recomandation on <br /> Account covrage
                </Col>
              </Row>
              <Row>
                <Col className="section2-ipsum" sm="12" xs="12" lg="12">
                  <p>
                    Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                    elit, sed do <br />
                    eiusmod tempor incididunt ut <br />
                    labore et dolore magna aliqua.
                  </p>
                </Col>
              </Row>
            </Col>
            <Col class="section-col2" lg="5" sm="12" xs="12">
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
