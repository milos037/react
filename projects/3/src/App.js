  import React, { Component } from 'react';
  import Person from './Person/Person'
  import './App.css';
  // bez  { useState } kada su klase u pitanju

  class App extends Component { 
  
    state = {
      persons : [
        {id: 1, name: "Milos", age : 21},
        {id: 2, name: "Marija", age : 22},
        {id: 3, name: "Petra", age : 13}
      ],
      showPersons: false
    }
  
    nameChangedHandler = (event, id) => {

      const personIndex = this.state.persons.findIndex(p => {
          return p.id === id;
      })

      const person = {
        ...this.state.persons[personIndex]
      }
      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person

      this.setState({persons : persons  })
    }

    deletePersonHandler = (personIndex) => {
      //kada se kopira niz iz state-a dobro je koristi slace() na kraju
          // const persons = this.state.persons.slice();
      // ili koristiti state operator
      const persons = [...this.state.persons]
      persons.splice(personIndex, 1);
      this.setState({persons: persons})
    }


    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons
        this.setState({showPersons: !doesShow})
    }
  
    render() {
      let persons = null;

      if (this.state.showPersons) {
        persons = (
            <div>
              {this.state.persons.map((person, index) => {
                return <Person 
                    key={person.id}
                    click={() => this.deletePersonHandler(index)}
                    name={person.name} 
                    age={person.age}
                    change={(event) => this.nameChangedHandler(event, person.id)}
                  />
                
              })}
            </div>
        );

        
        
      }

      const classes = []
      if (this.state.persons.length <=2) {
        classes.push('red') // classes = ['red']
      }
      if (this.state.persons.length <=1) {
        classes.push('bold') // classes = ['red bold']
      } 
      return (
        <div className="App">
          <h1>Hide and show people <span role="img" aria-label="jsx-a11y/accessible-emoji">😁</span></h1>
          <p className={classes.join(" ")}>Array styling here</p>
          <button className="button" onClick={this.togglePersonsHandler}>{this.state.showPersons ? 'Hide all people' : 'Show all people'}</button>
          {persons}
        </div>
      );
    }
  }
export default App;
