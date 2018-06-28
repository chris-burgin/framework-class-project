import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        { name: "Sally W.", age: 23 },
        { name: "Rick S.", age: 30 },
        { name: "Samantha T.", age: 52 }
      ]
    };
  }

  render() {
    const { people } = this.state;
    return (
      <div className="App">
        <h1> People - Names </h1>
        <ul className="people">
          {people.map(person => (
            <li className="person">
              <input type="text" value={person.name} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
