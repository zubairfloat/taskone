import React, { useState, useEffect } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
} from 'reactstrap'
import './style.css'

const Header = () => {
  const [isOpen, toggleNavbar] = useState(true)
  const toggle = () => toggleNavbar(!isOpen)
  const closetoggle = () => toggleNavbar(true)
  return (
    <div>
      <Navbar className="navabrClass" dark expand="md">
        <a className="navbar-brand" href="/">
          <h2>SELLR.</h2>
        </a>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={!isOpen} navbar>
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
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header
