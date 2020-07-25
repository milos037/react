
# Styling

Postoje dva moguća načina za korišćenje CSS-a u Reactu.

### 1. Importovanje CSS fajla unutar komponente

-   Person -- Person.css -- Person.js

Gde će se u Person.js koristiti  `import "./Person.css"`

### 2. Inline

Untuar render funkcije se moze napraviti varijabla koja sadrži objekat CSS elemenata. Razlika u odnosu na CSS je što nema (  **;**  ) već se koristi  **zarez**, i to što nema (  **-**  ) izmedju naziva željenog atributa, već se koristi  **veliko slovo.**

```
const style = {
         //kada u cssu ima - onda se koristi capitalize slovo
         backgroundColor : 'Blue',
         color: 'white',
         font: 'inherit',
         border: '2px solid black',
         padding: '8px',
         cursor: 'pointer'
       }

```

A zatim je dodeliti JSX elementu kao prop.

```
<button 
  style={style}
  onClick={() => this.switchNameHandler("Miloš")}>
 Switch name
</button>
```
---
Ukoliko želimo u nekom uslovu da izmenimo css dinamično, možemo pristupiti variabjli **style** kao objektu i izvršiti promenu `style.backgroundColor  =  "red"`
Takodje se može pristupi preko klase dinamično

    let classes = ['red', 'bold'].join(' ')
upotreba niza

    <p className={classes}>Array styling here</p>

ili ovakav primer

    const classes = []
    if (this.state.persons.length <=2) {
      classes.push('red') // classes = ['red']
    }
    if (this.state.persons.length <=1) {
      classes.push('bold') // classes = ['red bold']
    } 
### Radium
Poznat inline css package sa sudo selektorima i media querima

    npm install --save radium
Nakon instalacije se mora importovati u komponentu u bilo koju, najbolje je u `App.js`

    import Radium from  'radium'
Takodje export se mora obuhvatiti funkciom Radium -> `export  default  Radium(App);`

**Upotreba**

    const style = {
      backgroundColor : 'green',
      color: 'white',
      //radium omogucava sudo izmene
      ':hover' : {
        backgroundColor : 'lightGreen',
        color: 'black'
      }
    }
Izmena preko objekta izgleda ovako

    style[":hover"]  =  {
	    backgroundColor :  "salmon"
    }

Kada se koristi za media query nije dovoljno staviti funkciu Rediu u exportu, već celu aplikaciju programa u `StyleRoot` klasu

    import Radium, { StyleRoot } from  'radium'
Kao i celu aplikacju staviti u taj tag

    <StyleRoot>
         <div className="App">
           <h1>Hide and show people</h1>
           .
           .
           . 
          </div>
    </StyleRoot>

## Styled Commponents
Package koji takodje sluzi za css, koristi se sintaksa iz css-a a ne css iz JavaScripta

    npm install --save styled-components
Import i upotreba

    import styled from 'styled-components'
    // import "./Person.css"
    const StyledDiv = styled.div`
            width: 60%;
            margin: 20px auto;
            border: 1px solid #eee;
            box-shadow: 0 2px 3px #ccc;
            padding: 16px;
            text-align: center;
	                  
	       @media (min-width: 500px)  {
	           width: '450px'
	       }
	   `;
a kasnije koristiti varijablu `StyledDiv` kao JSX element

    <StyledDiv>
	    <p></p>
	    .
	    .
	    .
    </StyledDiv>
**Opcija postavljanja uslova**

     const StyledButton = styled.button`
      background-color : ${props => props.alt ? 'red' : 'green'};
      color: white;
      font: inherit;
      border: 2px solid black;
      padding: 8px;
      cursor: pointer;
      
      &:hover  {
        background-color : ${props => props.alt ? 'salmon' : 'lightgreen'};
        color: black;
      }
      `
      
## CSS Moduli
Za korišćenje modula potrebno je malo više TWEAK-inga same aplikacije
mora se stopirati server `npm stop`
Zatim izvršiti komanda `npm run eject` , ako prikazuje greške mora se sve komitovati preko git-a.
Pojaviće se folder config u projektu,  zatim ući u fajl ***/config/webpack.config.dev.js***
Pronaći deo gde piše

    test: /\.css$/,
    
 i u sekciji **options** izvršiti sledeće izmene
 

  

    options: {
      importLoaders: 1,
      modules: true,
      localIdentName : '[name]__[local]__[hash:base64:5]'
    },
sve to kopirati u fajl ***/config/webpack.config.prod.js***

    options: {
      importLoaders: 1,
      minimize: true,
      sourceMap: shouldUseSourceMap,
      modules: true,
      localIdentName : '[name]__[local]__[hash:base64:5]'
    },
Kada smo to uradili 
potrebno je da u importu stavimo da uzimamo 'objekat' iz CSS fajla (naziv je po izboru)

    import styles from './App.css';
sada sve ***.klase*** koje smo koristili u css fajlu postaju kao propreti od importovanog objketa `styles`

i kada želimo da dodelimo odredjenu klasu nekom elementu koristimo ovakvu sintaksu

    <div className={styles.App}>
Tako možemo raditi razne izmene u ReactKodu igrajući se napravljenim propretiima unutar CSS fajla.

Ako je verzija react-scripts 2 ili više 
### Dovoljno je da css fajl nazovemo samo **Person.css -> Person.module.css**, bez `npm run eject`

ako zelimo da vratimo klasičnu klasu kako bi mogla svuda da se koristi onda je moramo ovako formirati `:global .Post { ... }`