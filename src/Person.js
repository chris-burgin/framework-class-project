import React, { Component } from "react";

class Person extends Component {
  onNameChange = event => {
    const { id } = this.props;
    this.props.updatePersonName(id, event.target.value);
  };

  removeUser = () => {
    const { id } = this.props;
    this.props.removeUser(id);
  };

  render() {
    const { name } = this.props;

    return (
      <li className="person">
        <input type="text" value={name} onChange={this.onNameChange} />
        <button onClick={this.removeUser}> Remove </button>
      </li>
    );
  }
}

export default Person;
