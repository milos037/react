import React, { useState } from 'react';
import Person from './Person/Person'
import './App.css';
/*
//Classed based
import React, { Component } from 'react';
// bez  { useState } kada su klase u pitanju
class App extends Component { 

  state = {
    persons : [
      {name: "Milos", age : 21},
      {name: "Marija", age : 22},
      {name: "Petra", age : 13}
    ]
  }

  switchNameHandler = () => {
    //uvek koristiti setState za menjanje state-a
    this.setState({persons :
      [
        {name: "Pilajka", age : 1},
        {name: "Ciganka", age : 222},
        {name: "Petrolejka", age : 113}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, i am React App</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}> i volim da jedem brokoli </Person>
        
      </div>
    );
  }
}
*/
const App = props => { 
  const [ personsState , setPersonsState ] = useState({
    persons : [
      {name: "Milos", age : 21},
      {name: "Marija", age : 22},
      {name: "Petra", age : 13}
    ],
    animals : "Loly"
  })

  const [ otherState, setOtherState ] = useState("neki drugi state")

  console.log(personsState)
  console.log(otherState)

  const switchNameHandler = () => {
    //uvek koristiti setState za menjanje state-a
    setPersonsState({
      persons :  [
        {name: "Pilajka", age : 1},
        {name: "Ciganka", age : 222},
        {name: "Petrolejka", age : 113}
      ],
      //mora se ubaciti i prethodni jer setState radi replace
      animals : personsState.animals
    })

    setOtherState("izmenio sam state")
  }
    return (
      <div className="App">
        <h1>Hi, i am React App</h1>
        <button onClick={switchNameHandler}>Switch name</button>
        <Person name={personsState.persons[0].name}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}> i volim da jedem brokoli </Person>
        
      </div>
    );
}





export default App;
