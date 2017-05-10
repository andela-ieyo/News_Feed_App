import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import { InputGroup, Input, Card, CardText, CardTitle, Container, Row, Col, Button } from 'reactstrap';
import newsSourcesStore from '../stores/NewsSourcesStore';
import NewsActions from '../actions/NewsActions';
import Search from './Search.jsx';


/**
 * @desc represents NewsSources component 
 * 
 * @class NewsSources
 * @extends {Component}
 */
class NewsSources extends Component {

  /**
   * Creates an instance of NewsSources.
   * 
   * @memberof NewsSources
   */
  constructor() {
    super();
    this.state = {
      sources: [],
      search: '',
    };

    this.getNewsSources = this.getNewsSources.bind(this);
    this.onChange = this.onChange.bind(this);
  }

/**
 * @function
 * @returns {object} 
 * @description calls getNewsSources
 * */
  getInitialSourcesState() {
    return getNewsSources();
  }

/**
 * @function
 * @returns {object} state
 * @description update sources state by listening for 
 * change in the state of the sources store.
 * */
  onChange() {
    const SourcesState = this.getNewsSources();
    this.setState({
      sources: SourcesState.sources || [],
    });
  }

  componentDidMount() {
    newsSourcesStore.addChangeListener(this.onChange);
    NewsActions.getSources();
  }

  componentWillUnMount() {
    newsSourcesStore.removeChangeListener(this.onChange);
  }

  /**
   * 
   * @desc Get sources state from stores
   * @returns object
   * 
   * @memberof NewsSources
   */
  getNewsSources() {
    return {
      sources: newsSourcesStore.getAll(),
    };
  }

  /**
   * 
   * @desc update state of search property
   * @param {function} event onchange event is passed as parameter 
   * 
   * @memberof NewsSources
   */
  updateSearch(event) {
    this.setState({ search: event.target.value });
  }

  /**
   * 
   * @desc passes sort parameter via route
   * @param {string} href news sources id and sorttype are passed as a string.
   * 
   * @memberof NewsSources
   */
  getSortValue(href) {
    browserHistory.push(href);
  }

// render function
  render() {
    const filteredSources = this.state.sources.filter(source => source.title.toLowerCase()
    .indexOf(this.state.search.toLowerCase()) !== -1);

    return (
      <div>
        <Container>
           <Search searchValue={this.state.search} 
           handleSearch={this.updateSearch.bind(this)} />
        </Container>

        <Container>
        <Row className="card-row" justify-content-center>
          {filteredSources.map(source => (
            <Col xs="12" sm="6" md="4" className="tile" key={source.id}>
              <Card
                block
                className="bl" inverse color="info"
              >
                <CardTitle>{source.title}</CardTitle>

                <CardText className="desc">{source.description}</CardText>
                <div className="float-left">
                <CardText className="category">{source.category}</CardText></div>
                <div className="float-right">
                 <Button className="Read" 
                 onClick={this.getSortValue.bind(this, `${source.href}/${source.sortBysAvailable}`)}
                 >Read</Button>
                 </div>
              </Card>
            </Col>
          ))}
        </Row>
        </Container>

      </div>
    );
  }
}

NewsSources.defaultProps = {
  sources: [],
  search: '',
};

NewsSources.propTypes = {
  sources: PropTypes.array,
  search: PropTypes.string,
};

const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
const columnProps = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.bool,
  PropTypes.shape({
    size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
    push: stringOrNumberProp,
    pull: stringOrNumberProp,
    offset: stringOrNumberProp
  })
]);

Col.propTypes = {
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
}

export default NewsSources;
