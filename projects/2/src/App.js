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
    
      // switchNameHandler = (newName) => {
      //   //uvek koristiti setState za menjanje state-a
      //   this.setState({persons :
      //     [
      //       {name: newName, age : 1},
      //       {name: "Ciganka", age : 222},
      //       {name: "Petrolejka", age : 113}
      //     ]
      //   })
      // }

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

        const style = {
          //kada u cssu ima - onda se koristi capitalize slovo
          backgroundColor : 'Blue',
          color: 'white',
          font: 'inherit',
          border: '2px solid black',
          padding: '8px',
          cursor: 'pointer',
        }

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
        return (
          <div className="App">
            <h1>Hide and show Persons 😁</h1>
            <button 
            style={style}
            onClick={this.togglePersonsHandler}>{this.state.showPersons ? 'Hide people' : 'Show people'}</button>
            {persons}
          </div>
        );
      }
    }
export default App;
