import React, { Component } from 'react';
import { Form, FormGroup, Input, Card, CardText, CardBlock,
  CardTitle, CardSubtitle, Row, Col, Container } from 'reactstrap';
import PropTypes from 'prop-types';
import newsStore from '../stores/NewsStore';
import NewsActions from '../actions/NewsActions';


/**
 * represents the NewsArticles component
 * 
 * @class NewsArticles
 * @extends {Component}
 */
class NewsArticles extends Component {

  /**
   * Creates an instance of NewsArticles.
   * 
   * @memberof NewsArticles
   */
  constructor() {
    super();
    this.state = {
      articles: [],
    };
    this.onChange = this.onChange.bind(this);
  }

  /**
   * 
   * @desc calls getArticles()
   * @returns object
   * 
   * @memberof NewsArticles
   */
  getInitialArticlesState() {
    return getArticles();
  }

  componentDidMount() {
    const { params } = this.props;
    newsStore.addChangeListener(this.onChange);
    NewsActions.getNews(params.id);
  }

  componentWillUnmount() {
    newsStore.removeChangeListener(this.onChange);
  }

  /**
   * @desc changes the state of newsArticles
   * 
   * 
   * @memberof NewsArticles
   */
  onChange() {
    this.setState({ articles: newsStore.getAll() });
  }

  /**
   * 
   * 
   * @returns object
   * 
   * @memberof NewsArticles
   */
  getArticles() {
    return {
      articles: newsStore.getAll(),
    };
  }


  /**
   * @desc makes an api call to sort news articles
   * @return {void}
   * @param {function} event 
   * 
   * @memberof NewsArticles
   */
  handleSort(event) {
    const { params } = this.props;
    event.preventDefault();
    const val = event.target.value;
    NewsActions.getNews(params.id, val);
  }

  render() {
    const { params } = this.props;
    const sortOrder = params.sort.split(',');
    const option = sortOrder.map((type, index) => <option value={type} key={index}> {type} </option>);
    return (
      <div>
        <Container>
        <Row className="art-head">
          <Col xs="6" md="4"> 
            <h1>{params.id}</h1>
          </Col>

          <Col xs="6" md="4" className="right">
            <Form className="order">
              <FormGroup>
                <Input type="select" name="select" id="exampleSelect" onChange={this.handleSort.bind(this)}>
                  {option}
                </Input>
              </FormGroup>
            </Form>
          </Col>

          <Col xs="6" md="4" className="back">
              <a className="" href="/home"><i className="fa fa-angle-double-left icon-back" 
              aria-hidden="true">
              </i> Back</a>
          </Col>

        </Row>
        </Container>


        <Container>
        <Row className="justify-content-center">
         
          {this.state.articles.map((news) => {
            const cssStyle = {
              height: '350px',
              background: `url(${news.image}) center center`,
              width: '100%',
              backgroundSize: 'cover',
              borderTop: '#24AEDF 2px solid',
              borderBottom: '#24AEDF 2px solid',

            };
            return (       
              <Col xs="12" sm="6" md="4" className="news-frame">
                <Card className="headline">
                  <CardBlock>
                    <CardTitle className="title">{news.meta}</CardTitle>
                    <CardSubtitle className="subtitle">{news.header}</CardSubtitle>
                  </CardBlock>
                  <div style={cssStyle} />
                  <CardBlock>
                    <CardText>{news.description}</CardText>
                    <a href={news.href} rel="noopener noreferrer" target="_blank" >Read More</a>
                  </CardBlock>
                </Card>
              </Col>
            );
          })}
        </Row>
       </Container>
      </div>
    );
  }

}

NewsArticles.defaultProps = {
  params: {sort:'top'},
  articles: [],
};

NewsArticles.propTypes = {
  params: PropTypes.object,
};


export default NewsArticles;
