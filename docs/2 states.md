# States
### Klasno orijentisane komponente
U komponentama koji su klasnog tipa, dovoljno je napraviti propreti state i dodelite sve statove.
Kada želimo da menjamo taj state, koristimo funkciju `setState()` -> npr. `this.setState({var  : 123})`

Neophodno je u importu uzeti `Component` klasu iz 'react-a'

    
    //Classed based
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

### Funkcionalno orijentisane komponente
U komponenti funkcionalnog tipa za state se morati definisati constanta koja je tipa niza.
Gde je prvi element naziv state (sama varijabla koja ce sadržati vrednost), dok je drugi element funkcija koja će služiti za izmenu tog state-a.

Ukoliko smo u jednoj konstanti dodelili više propretija kao u primeru u kodu gde imamo `persons` i `animals` unutar `personState`, kada budemo koristili funkciju za izmenu samog state-a `setPersonsState`
 morali bi da dodelimo novu vrednost statu i da prepišemo `animals` kako `personState` ne bi ostao **bez** tog propretija.

Zato je dobra preporuka da se za svaki state definše posebno varijabla i funkcija koja će je menjati.

Za korišćenje ovakvog tipa state-a neophodno je importovati `useState` klasu iz react-a.
  

        import React, { useState } from 'react';
	    import Person from './Person/Person'
        import './App.css';
        //function based component sa stateovima 
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
