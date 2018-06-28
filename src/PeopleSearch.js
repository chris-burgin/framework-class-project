import React, { Component } from "react";

class PeopleSearch extends Component {
  onSearchChange = event => {
    this.props.onSearchStringChange(event.target.value);
  };

  render() {
    const { searchString } = this.props;

    return (
      <div className="search">
        <input
          type="text"
          value={searchString}
          onChange={this.onSearchChange}
          placeholder="Search"
        />
      </div>
    );
  }
}

export default PeopleSearch;
