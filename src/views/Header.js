import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem }
from 'reactstrap';
import { Link } from 'react-router';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    if (window.location.pathname === '/') {
      return null; // do not show header content
    }
    return (
      <div>
        <div className="newsBar">
          <Navbar toggleable>
            <NavbarToggler right onClick={this.toggle} />
            <NavbarBrand className="navBrand" href="/">News Feed | Andela</NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link activeClassName="active" className="home-link" to="/home">Home</Link>
                </NavItem>
                <NavItem>
                  <a className="active" href="/logout">Logout</a>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>

        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
