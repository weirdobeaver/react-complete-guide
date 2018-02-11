import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'JJ', age: 32 },
      { name: 'Medzik', age: 31 },
      { name: 'Lili', age: 2},
      { name: 'Tytus', age: 2 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('clicked');
    this.setState({
      persons: [
        { name: newName, age: 32 },
        { name: 'Medzik', age: 33 },
        { name: 'Lili', age: 2 },
        { name: 'Tytus', age: 2 }
      ]
    })
  }

  nameChangedHanlder = (event) => {
    this.setState({
      persons: [
        { name: 'JJ', age: 32 },
        { name: event.target.value, age: 33 },
        { name: 'Lili', age: 2 },
        { name: 'Tytus', age: 2 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person
              name={person.name}
              age={person.age}/>
          })}
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}/>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Jedras')}
            changed={this.nameChangedHanlder} >Hobby: Racing</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
          <Person name={this.state.persons[3].name} age={this.state.persons[3].age} />
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working.</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
