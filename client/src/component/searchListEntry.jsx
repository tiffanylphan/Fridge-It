import React from 'react';
import { connect } from 'react-redux';

const SearchListEntry = (props) => (
  <div id="card">
    <img src={this.props.recipe.image} />
    <h2>{this.props.recipe.title}</h2>
  </div>
);

export default connect(null, null)(SearchListEntry);