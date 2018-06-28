import React, { Component } from "react";
import Person from "./Person";

class PeopleAdd extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      age: ""
    };
  }

  onNameChange = event => {
    this.setState({ name: event.target.value });
  };

  onAgeChange = event => {
    this.setState({ age: event.target.value });
  };

  addPerson = () => {
    this.props.addPerson({
      name: this.state.name,
      age: this.state.age
    });
  };

  render() {
    const { name, age } = this.state;

    return (
      <div className="peopleAdd">
        <input
          type="text"
          value={name}
          placeholder="name"
          onChange={this.onNameChange}
        />
        <input
          type="text"
          value={age}
          placeholder="age"
          onChange={this.onAgeChange}
        />
        <button onClick={this.addPerson}> Add </button>
      </div>
    );
  }
}

export default PeopleAdd;
