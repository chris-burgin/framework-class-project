import React, { Component, Fragment } from "react";
import Person from "./Person";
import PeopleAdd from "./PeopleAdd";

class People extends Component {
  constructor() {
    super();

    this.state = {
      people: [
        { id: "1", name: "Sally W.", age: 23 },
        { id: "2", name: "Rick S.", age: 30 },
        { id: "3", name: "Samantha T.", age: 52 }
      ]
    };
  }

  updatePersonName = (id, name) => {
    this.setState(state => {
      const newPeople = state.people.map(person => {
        // if this is the same user, lets update them.
        if (person.id === id) {
          // lets return a new person with an updated name.
          return {
            ...person,
            name: name
          };
        }

        // return the same person, no reason to update
        return person;
      });

      // return the new state
      return { people: newPeople };
    });
  };

  getNextId = () => {
    const { people } = this.state;
    return people[people.length - 1].id + 1;
  };

  addPerson = ({ name, age }) => {
    const person = {
      name,
      age,
      id: this.getNextId()
    };

    this.setState(state => {
      const people = [...state.people, person];
      return { people };
    });
  };

  removeUser = id => {
    this.setState(state => {
      const filteredPeople = state.people.filter(p => p.id !== id);
      return { people: filteredPeople };
    });
  };

  render() {
    const { people } = this.state;

    return (
      <Fragment>
        <h2> People </h2>

        <ul className="people">
          {people.map(p => (
            <Person
              key={p.id}
              id={p.id}
              name={p.name}
              updatePersonName={this.updatePersonName}
              removeUser={this.removeUser}
            />
          ))}
        </ul>

        <PeopleAdd addPerson={this.addPerson} />
      </Fragment>
    );
  }
}

export default People;
