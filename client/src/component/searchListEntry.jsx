import React from 'react';
import { connect } from 'react-redux';

const SearchListEntry = (props) => {
  let url = (this.props.recipe.title).split(' ').join('-');

  return (
    <div id="card">
      <a href={"https://spoonacular.com/" + url + '-' + this.props.recipe.id}>
        <img src={this.props.recipe.image} alt={this.props.recipe.title} />
      </a>
      <h1>{this.props.recipe.title}</h1>
    </div>
  );
};

export default connect(null, null)(SearchListEntry);