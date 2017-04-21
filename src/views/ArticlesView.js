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

  componentWillMount() {
    const { match } = this.props;
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

  handleSort(event) {
    const { match } = this.props;
    event.preventDefault();
    const val = event.target.value;
    NewsActions.getNews(`${match.params.id}&sortBy=${val}`);
  }
   /**
   * @return {object}
   */

  render() {
    const { match } = this.props;
    const sort = match.params.sort.split(',');
    const option = sort.map(type => <option value={type} > {type} </option>);
    return (
      <div>
        <div>
          <div className="left">
            <h1>{match.params.id}</h1>
          </div>
          <div className="right">
            <Form className="order">
              <FormGroup>
                <Input type="select" name="select" id="exampleSelect" onChange={this.handleSort.bind(this)}>
                  <option>Sort News By</option>
                  {option}
                </Input>
              </FormGroup>
            </Form>
          </div>
        </div>

        <div className="clear" />

        <Row>
          {this.state.allItems.map((news) => {
            const cssStyle = {
              height: '350px',
              background: `url(${news.image}) center center`,
              width: '100%',
              'background-size': 'cover',
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
        </Row>
      </div>
    );
  }

}

ArticlesView.propTypes = {
  match: PropTypes.routes,
};


export default ArticlesView;
