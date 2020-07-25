# Styling
Postoje dva moguća načina za korišćenje CSS-a u Reactu.
### 1. Importovanje CSS fajla unutar komponente
- Person
-- Person.css
-- Person.js

Gde će se u Person.js koristiti `import "./Person.css"`

### 2. Inline 
 Untuar render funkcije se moze napraviti varijabla koja sadrži objekat CSS elemenata.
Razlika u odnosu na CSS je što nema ( **;** ) već se koristi **zarez**, i to što nema ( **-** ) izmedju naziva željenog atributa, već se koristi **veliko slovo.**

    const style = {
             //kada u cssu ima - onda se koristi capitalize slovo
             backgroundColor : 'Blue',
             color: 'white',
             font: 'inherit',
             border: '2px solid black',
             padding: '8px',
             cursor: 'pointer'
           }
A zatim je dodeliti JSX elementu kao prop.

    <button 
      style={style}
      onClick={() => this.switchNameHandler("Miloš")}>
     Switch name
    </button>
