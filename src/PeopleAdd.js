import React, { Component } from "react";

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

  addPerson = event => {
    event.preventDefault();

    this.props.addPerson({
      name: this.state.name,
      age: this.state.age
    });

    // reset the form so its ready for the next person
    this.setState({ name: "", age: "" });
  };

  render() {
    const { name, age } = this.state;

    return (
      <div>
        <h2> Add Person </h2>
        <form className="peopleAdd" onSubmit={this.addPerson}>
          <input
            type="text"
            value={name}
            placeholder="name"
            onChange={this.onNameChange}
            required
          />
          <input
            type="text"
            value={age}
            placeholder="age"
            onChange={this.onAgeChange}
            required
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default PeopleAdd;
