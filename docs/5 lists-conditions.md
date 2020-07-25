# Dinamična aplikacija


## Conditions
Ovako se postavljalju uslovi kada se proverava **state** u konkretnom primeru za pojavljivanje i sakrivanje `Person` elemenata komponenti. 
Postavi se {...} u JSX a zatim se piše interiary uslov kojim se definiše sadržaj za prikaz.


    <div className="App">
                <h1>Hide and show Persons 😁</h1>
                <button 
                style={style}
                onClick={this.togglePersonsHandler}>{this.state.showPersons ? 'Hide people' : 'Show people'}</button>
                { //ovako mozemo da dodajemo javascript kod
                  this.state.showPersons ? 
                    <div>
                    <Person 
                      name={this.state.persons[0].name}/>
                    <Person 
                      name={this.state.persons[1].name} 
                      age={this.state.persons[1].age}
                      > Dodatni tekst </Person>
                    <Person 
                      name={this.state.persons[2].name} 
                      age={this.state.persons[2].age}> i volim da jedem brokoli </Person>
                  </div> : null
                }
              </div>
**OVAJ NAČIN NIJE NAPRAVILNIJI ZATO JE BOLJE KORISTITI OVU METODU**

Pre return funkcije u variajblu postavimo uslov i ukoliko ispunjava smestimo JSX kod u varijablu koju kasnije renderujemo u **`render()`** funkciji

     let persons = null;
     if (this.state.showPersons) {
       persons = (
           <div>
             <Person 
               name={this.state.persons[0].name}/>
             <Person 
               name={this.state.persons[1].name} 
               age={this.state.persons[1].age}
               > Dodatni tekst </Person>
             <Person 
               name={this.state.persons[2].name} 
               age={this.state.persons[2].age}> i volim da jedem brokoli </Person>
           </div>
       );
     }
     
     return (
       <div className="App">
         <h1>Hide and show Persons 😁</h1>
         <button 
         style={style}
         onClick={this.togglePersonsHandler}>{this.state.showPersons ? 'Hide people' : 'Show people'}</button>
         {persons} //ovde smestamo varijablu
       </div>
     );

# Lists
Kao što smo malo pre renderovali varijablu `persons`.
Sada u nju smeštamo funkciju **`map()`** koja prolazi kroz niz `state.persons` i vraća `Person` komponentu svaki put kada prodje kroz niz.

    let persons = null;
    if (this.state.showPersons) {
      persons = (
          <div>
            {this.state.persons.map(person => {
              return <Person key={person.id}
                  name={person.name} 
                  age={person.age}
                />
            })}
          </div>
      );
    }

Brisanje osoba se koristi kada se uzima index svakog elementa u map funkciji

    deletePersonHandler = (personIndex) => {
      //kada se kopira niz iz state-a dobro je koristi slace() na kraju
          // const persons = this.state.persons.slice();
      // ili koristiti state operator
      const persons = [...this.state.persons]
      persons.splice(personIndex, 1);
      this.setState({persons: persons})
    }
	 let persons = null;
	 if (this.state.showPersons) {
	   persons = (
	       <div>
		      //ovde dodeljujemo index svakom elementu
	         {this.state.persons.map((person, index) => {
	           return <Person 
	               key={person.id}
	               click={() => this.deletePersonHandler(index)}
	               name={person.name} 
	               age={person.age}
	             />
	           
	         })}
	       </div>
	   );
	 }

Funkcija za izmenu imena za odredjeni element u listi **state.persons** funkcija izgleda ovako

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

dok smo u `Person` element dodali prop click koji sadrži funkciju
 `change={(event)  =>  this.nameChangedHandler(event, person.id)}`
