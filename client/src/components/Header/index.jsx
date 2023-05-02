import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { navigationLinks } from './navigationlinks';

import Auth from '../../utils/auth';

function createLinks() {
    return navigationLinks.map((e, idx) => (
      <Nav.Link key={idx} href={e.ref} style={{ backgroundColor: `var(--nav-back)`, color: `var(--text-color)` }} className="nav-link">
        {e.name}
      </Nav.Link>
    ));
  }

const Header = () => {
    
    return (
        <div id="home">
      <Navbar
        className="navigation__container"
        style={{ zIndex: '2', position: 'fixed', top: '0', width: '100%', backgroundColor: `var(--nav-back)`, color: `var(--text-color)` }}
        collapseOnSelect
        expand="md"
      >
        <Navbar.Brand style={{ marginLeft: '1rem', backgroundColor: `var(--nav-back)`, color: `var(--text-color)` }} href="#home">
          Alexander Weiss
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar__toggle" />
        <Navbar.Collapse style={{ justifyContent: 'flex-end', marginRight: '1rem', borderColor: 'none' }}>
          <Nav className="links" style={{ margin: '0 1rem' }}>
            {createLinks()}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    )
}

export default Header