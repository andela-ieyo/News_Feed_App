import { Button, Row, Container } from 'reactstrap';
import React from 'react';


const Home = () => (
    <div className="home-view">
      <Container className="tron">
        <Row className="sub-view" >
          <Row className="home-feed">
            <h1 className="app-name">News Feed</h1><br />
            <span> ... News on the go from over 50 news sources</span>
          </Row>

          <Row className="home-feed">
            <a href="/auth/google" >
              <Button className="logobtn">
                <i className="fa fa-google-plus plus-icon" aria-hidden="true"></i>
                  Sign in with Google
              </Button>
            </a>
          </Row>
        </Row>
      </Container>
    </div>
);

export default Home;
