import React, { Component } from 'react';
    import Person from './Person/Person'
    import './App.css';
    // bez  { useState } kada su klase u pitanju
    class App extends Component { 
    
      state = {
        persons : [
          {name: "Milos", age : 21},
          {name: "Marija", age : 22},
          {name: "Petra", age : 13}
        ]
      }
    
      switchNameHandler = (newName) => {
        //uvek koristiti setState za menjanje state-a
        this.setState({persons :
          [
            {name: newName, age : 1},
            {name: "Ciganka", age : 222},
            {name: "Petrolejka", age : 113}
          ]
        })
      }

      nameChangedHandler = (event) => {
        this.setState({persons :
          [
            {name: "Milos", age : 1},
            {name: event.target.value , age : 222},
            {name: "Petrolejka", age : 113}
          ]
        })
      }
    
      render() {

        const style = {
          //kada u cssu ima - onda se koristi capitalize slovo
          backgroundColor : 'Blue',
          color: 'white',
          font: 'inherit',
          border: '2px solid black',
          padding: '8px',
          cursor: 'pointer'
        }

        return (
          <div className="App">
            <h1>Hi, i am React App</h1>
            <button 
            style={style}
            onClick={() => this.switchNameHandler("Nebojshaa")}>Switch name</button>
            <Person 
              name={this.state.persons[0].name}/>
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              //ovako mozemo dodeliti metodu (funkciju) kao prop
              click={this.switchNameHandler.bind(this, 'Djeljana')} 
              change = {this.nameChangedHandler}
              > Dodatni tekst </Person>
              
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}> i volim da jedem brokoli </Person>
            
          </div>
        );
      }
    }
export default App;
