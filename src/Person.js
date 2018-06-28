import React, { Component } from "react";

class Person extends Component {
  onNameChange = event => {
    const { id } = this.props;
    this.props.updatePersonName(id, event.target.value);
  };

  render() {
    const { name } = this.props;

    return (
      <li>
        <input type="text" value={name} onChange={this.onNameChange} />
      </li>
    );
  }
}

export default Person;
