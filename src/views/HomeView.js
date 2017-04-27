import { Button, Col, Row, Jumbotron } from 'reactstrap';
import React from 'react';


function HomeView() {
  return (
    <div className="home-view">
      <Jumbotron className="tron">
        <div className="sub-view" xs="6">
          <h1 className="app-name">News Feed</h1><br />
          <span>Sign in</span>
          <Row>
            <Col className="l-bar" xs="6">
              <a href="/auth/google" >
                <Button className="logobtn" />
              </a>
            </Col>

            <Col className="l-right" xs="6">
              <p>
                News on the go<br /> from over 50 news<br /> sources
            </p>
            </Col>
          </Row>
        </div>
      </Jumbotron>
    </div>
  );
}

export default HomeView;
