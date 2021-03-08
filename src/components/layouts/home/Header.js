import React, { useState, useEffect } from 'react'

import { Navbar } from 'react-bootstrap'
import './style.css'

const Header = () => {
  const [isOpen, toggleNavbar] = useState(true)
  const toggle = () => toggleNavbar(!isOpen)
  const closetoggle = () => toggleNavbar(true)
  return (
    <div>
      <Navbar className="navabrClass" expand="md" variant="dark">
        <a className="navbar-brand" href="/">
          <h2>
            SELLR<span style={{ color: 'green' }}>.</span>
          </h2>
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <ul class="navbar-nav ml-auto">
            <li onClick={closetoggle} class="nav-item">
              <a class="nav-link" href="/">
                About
              </a>
            </li>
            <li onClick={closetoggle} class="nav-item">
              <a class="nav-link" href="/">
                Sign in
              </a>
            </li>
            <li
              onClick={closetoggle}
              class="nav-item"
              style={{ padding: '0px' }}
            >
              <a class="nav-link" href="/">
                <div className="invite">
                  <span>Request an Invite</span>
                </div>
              </a>
            </li>
          </ul>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
