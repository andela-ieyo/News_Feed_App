import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { InputGroup, Input, Card, CardText, CardTitle, Row, Col } from 'reactstrap';
import NewsSourcesStore from '../stores/NewsSourcesStore';
import NewsActions from '../actions/NewsActions';
import '../../public/style.scss';

class SourcesView extends Component {
  constructor() {
    super();
    this.state = {
      sources: [],
      search: '',
    };

    this.getItemsState = this.getItemsState.bind(this);
    this._onChange = this._onChange.bind(this);
  }

// Method to retrieve state from Stores
  getItemsState() {
    return {
      sources: NewsSourcesStore.getAll(),
    };
  }

// Get initial state from stores
  getInitialState() {
    return getItemsState();
  }

  _onChange() {
    const itemState = this.getItemsState();
    this.setState({
      sources: itemState.sources || [],
    });
  }

  componentDidMount() {
    NewsSourcesStore.addChangeListener(this._onChange);
    NewsActions.getSources();
  }

  componentWillUnMount() {
    NewsSourcesStore.removeChangeListener(this._onChange);
  }

  updateSearch(event) {
    this.setState({ search: event.target.value });
  }

  handleQueryValue(href) {
    browserHistory.push(href);
  }

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
                onClick={this.handleQueryValue.bind(this, source.href)}
              >
                <CardTitle>{source.title}</CardTitle>
<<<<<<< Updated upstream
                <CardText>{source.description}</CardText>
=======
                <CardText className="desc">{source.description}</CardText>
                <CardText className="category">{source.category}</CardText>
>>>>>>> Stashed changes
              </Card>
            </Col>
          ))}
        </Row>

      </div>
    );
  }
}


export default SourcesView;
