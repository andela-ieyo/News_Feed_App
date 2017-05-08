import React, { Component } from 'react';
import { InputGroup, Input, Row } from 'reactstrap';


/**
 * @desc Represents a search bar.
 * @class {Component}
 * @extends React.Component
 */
class Search extends Component {
  render(){
    return (
      <Row className="home-feed">
        <InputGroup className="searchBar">
          <Input
          className="app-input" placeholder="search base on news source"
          value={this.props.searchValue} onChange={this.props.handleSearch}
          />
            <i className="fa fa-search search-icon" aria-hidden="true"></i>
          </InputGroup>
      </Row>
    )
  }
}

export default Search;