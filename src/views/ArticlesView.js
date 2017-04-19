import React, { Component, PropTypes } from 'react';
import { Form, FormGroup, Input, Card, CardText, CardBlock,
  CardTitle, CardSubtitle, Row, Col } from 'reactstrap';
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
    const { match } = this.props;
    NewsStore.addChangeListener(this.onChange);
    NewsActions.getNews(match.params.id);
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

   /**
   * @return {object}
   */

  render() {
    const { match } = this.props;
    return (
      <div>
        <div>
          <div className="left">
            <h1>{match.params.id}</h1>
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
        </Row>
      </div>
    );
  }

}

ArticlesView.propTypes = {
  match: PropTypes.object,
};


export default ArticlesView;
