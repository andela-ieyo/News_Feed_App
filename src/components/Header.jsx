import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem
, Row, Col, Container}
from 'reactstrap';
import { Link } from 'react-router';

/**
 * represents Header component
 * 
 * @export
 * @class Header
 * @extends {Component}
 */
export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div>
        <Container fluid>
        <Row>
        <Col className="newsBar">
          <Navbar color="blue" light>
          <NavbarToggler onClick={this.toggleNavbar} />
          <NavbarBrand className="navBrand" href="/">News Feed | Andela</NavbarBrand>
          <Collapse className="navbar-toggleable-md" isOpen={!this.state.collapsed}>
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
        </Col>
        </Row>
        </Container>

        <div className="src-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}
