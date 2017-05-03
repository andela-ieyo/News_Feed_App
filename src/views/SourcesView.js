import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import { InputGroup, Input, Card, CardText, CardTitle, Row, Col, Button } from 'reactstrap';
import newsSourcesStore from '../stores/NewsSourcesStore';
import NewsActions from '../actions/NewsActions';

/**
  * @class
  * @extends Component
*/
class SourcesView extends Component {
/** @constructor */
  constructor() {
    super();
    this.state = {
      sources: [],
      search: '',
    };

    this.getItemsState = this.getItemsState.bind(this);
    this._onChange = this._onChange.bind(this);
  }

// Get initial state from stores
/**
 * @function
 * @returns {object} state
 * @description calls getItemsState
 * */
  getInitialState() {
    return getItemsState();
  }

/**
 * @function
 * @returns {object} state
 * @description update state
 * */
  _onChange() {
    const itemState = this.getItemsState();
    this.setState({
      sources: itemState.sources || [],
    });
  }

  componentDidMount() {
    newsSourcesStore.addChangeListener(this._onChange);
    NewsActions.getSources();
  }

  componentWillUnMount() {
    newsSourcesStore.removeChangeListener(this._onChange);
  }

  // Method to retrieve state from Stores
  getItemsState() {
    return {
      sources: newsSourcesStore.getAll(),
    };
  }

  updateSearch(event) {
    this.setState({ search: event.target.value });
  }

  handleQueryValue(href) {
    browserHistory.push(href);
  }

// render function
  render() {
    const filteredSources = this.state.sources.filter(source => source.title.toLowerCase()
    .indexOf(this.state.search.toLowerCase()) !== -1);

    return (
      <div>
        <div className="searchBar">
          <InputGroup>
            <Input
              className="input" placeholder="Search based on news source"
              value={this.state.search} onChange={this.updateSearch.bind(this)}
            />
          </InputGroup>
        </div>

        <Row>
          {filteredSources.map(source => (
            <Col xs="6" sm="4" className="tile" key={source.id}>
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
                 onClick={this.handleQueryValue.bind(this, `${source.href}/${source.sortBysAvailable}`)}
                 >Read</Button>
                 </div>
              </Card>
            </Col>
          ))}
        </Row>

      </div>
    );
  }
}

SourcesView.defaultProps = {
  sources: [],
  search: '',
};

SourcesView.propTypes = {
  sources: PropTypes.object,
  search: PropTypes.string
};

export default SourcesView;
