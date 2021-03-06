import React, { Component } from 'react'
import './style.css'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <nav className="header-div navbar navbar-expand-lg  ">
          <a className="navbar-brand" href="/">
            <h2>SELLR.</h2>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="/">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Sign in
                </a>
              </li>
              <li class="nav-item" style={{ padding: '0px' }}>
                <a class="nav-link" href="/">
                  <div className="invite">
                    <span>Request an Invite</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header
