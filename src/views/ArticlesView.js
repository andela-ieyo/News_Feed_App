import React, { Component } from 'react';
import { Form, FormGroup, Input, Card, CardText, CardBlock,
  CardTitle, CardSubtitle, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import NewsStore from '../stores/NewsStore';
import NewsActions from '../actions/NewsActions';


class ArticlesView extends Component {

  constructor() {
    super();
    this.state = {
      allItems: [],
    };
    this.onChange = this.onChange.bind(this);
  }

  getInitialState() {
    return { allItems: null };
  }

  componentDidMount() {
    const { params } = this.props;
    NewsStore.addChangeListener(this.onChange);
    NewsActions.getNews(params.id);
  }

  componentWillUnmount() {
    NewsStore.removeChangeListener(this.onChange);
  }

  getItemsState() {
    return {
      allItems: NewsStore.getAll(),
    };
  }

  onChange() {
    this.setState({ allItems: NewsStore.getAll() });
  }

<<<<<<< Updated upstream
=======
  handleSort(event) {
    const { params } = this.props;
    event.preventDefault();
    const val = event.target.value;
    NewsActions.getNews(`${params.id}&sortBy=${val}`);
  }
>>>>>>> Stashed changes
   /**
   * @return {object}
   */

  render() {
<<<<<<< Updated upstream
    const { match } = this.props;
=======
    const { params } = this.props;
    const sort = params.sort.split(',');
    const option = sort.map((type, index) => <option value={type} key={index}> {type} </option>);
>>>>>>> Stashed changes
    return (
      <div>
        <div>
          <div className="left">
            <h1>{params.id}</h1>
          </div>
          <div className="right">
            <Form className="order">
              <FormGroup>
                <Input type="select" name="select" id="exampleSelect">
                  <option>Sort News By</option>
                  <option>Top</option>
                  <option>Latest</option>
                  <option>Popular</option>
                </Input>
              </FormGroup>
            </Form>
          </div>
        </div>

        <div className="clear" />

        <Row>
<<<<<<< Updated upstream
          {this.state.allItems.map(news => (
            <Col xs="3" sm="3" className="news-frame">
              <Card className="headline">
                <CardBlock>
                  <CardTitle className="title">{news.meta}</CardTitle>
                  <CardSubtitle className="subtitle">{news.header}</CardSubtitle>
                </CardBlock>
                <img width="100%" src={news.image} />
                <CardBlock>
                  <CardText>{news.description}</CardText>
                  <a href={news.href} rel="noopener noreferrer" target="_blank" >Read More</a>
                </CardBlock>
              </Card>
            </Col>
         ))}
=======
          {this.state.allItems.map((news) => {
            const cssStyle = {
              height: '350px',
              background: `url(${news.image}) center center`,
              width: '100%',
              backgroundSize: 'cover',
            };
            return (
              <Col xs="3" sm="3" className="news-frame">
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
>>>>>>> Stashed changes
        </Row>
      </div>
    );
  }

}

ArticlesView.propTypes = {
<<<<<<< Updated upstream
  match: PropTypes.object,
=======
  params: PropTypes.object,
>>>>>>> Stashed changes
};


export default ArticlesView;
