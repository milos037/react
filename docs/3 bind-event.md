# Bind
Kada koristimo klasno orijentisanu komponentu, i imamo metodu unutar nje, koja moze da prima argumente, u ovom primeru je to `newName`.

Primer metode:

    switchNameHandler = (newName) => {
            //uvek koristiti setState za menjanje state-a
            this.setState({persons :
              [
                {name: newName, age : 1},
                {name: "Ciganka", age : 222},
                {name: "Petrolejka", age : 113}
              ]
            })

Primer JSX-a gde dodeljujemo metodu

      <Person 
                  name={this.state.persons[1].name} 
                  age={this.state.persons[1].age}
                  //ovako mozemo dodeliti metodu (funkciju) kao prop
                  click={this.switchNameHandler.bind(this, 'Djeljana')} > Dodatni tekst </Person>
Postoje vise načina da dodelimo u prop samog JSX elementa :

 - `click={this.switchNameHandler.bind(this, 'Djeljana')}` - preporuka
 -  `click = {() => this.switchNameHandler.bind(this, "Test")}` - izbegavati

# Event
Ako u `Person` komponenti imamo input kojim želimo da updatujemo state pri svakom kiliku
moramo dodeliti odredjene funkcije koje će vršiti te izmene.

Person.js

     <div>
            <p onClick={props.click}>Ja sam {props.name} i imam {age} godina</p>
            <p>{props.children}</p>
            //ovde zadajemo onChange, dok value sluzi da odmah prikaze vrednost
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
App.js - metoda za izmeu state, gde je argument **event** čija se vrednost uzima.

    nameChangedHandler = (event) => {
            this.setState({persons :
              [
                {name: "Milos", age : 1},
                {name: event.target.value , age : 222},
                {name: "Petrolejka", age : 113}
              ]
            })
          }
Ova metoda je dodeljena Person JSX elementu.
 

    <Person 
       name={this.state.persons[1].name} 
       age={this.state.persons[1].age}
       //ovako mozemo dodeliti metodu (funkciju) kao prop
       click={this.switchNameHandler.bind(this, 'Djeljana')} 
       change = {this.nameChangedHandler}
       >
     Dodatni tekst
    </Person>
