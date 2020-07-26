# Deep dive into components
### Struktura fajlova kao u *`projects/4`*
Grupisati pametno komponente, i praviti foldere za se komponente.
A onda samo preko prop-ova dodeljivati im vrednost i povezati sve u jednu celinu.
Suština je da sve bude pregledno i lako izmenljivo.
### Kako znati da li koristiti klasne ili funkcionalne komponente

 Po nekom mom mišljnju `App.js` bih koristio kao klasnu komponentu, dok sve druge koje imaju isključivo svojstvo prikaza koristio kao funkcionalnu komponentu.
 Preporuka sa kursa je sledeća:
 **Ukoliko nam je potrebno da radimo sa State-om ili su nam potrebni Lifeczcle Hook a ne želimo da koristimo React Hooks, onda koristimo Klasne Komponente; u svim drugim slučajevima se mogu koristif funkcionalne**
 ** Funkcionalne komponente takođe imaju mogućnost izmene state-ova ali jedino nemaju lifecycle hooks.
 

## Lifecycle
Nije isto što i React Hooks!
1. Kada je komponenta napravljena prvi konstruktor je
`constructor(props)` sa `super()` funkcijom jer je klasa nasledjena iz React-a
2. `getDerivedStateFromProps(props, state)` sluzi da syncuje state, ne koristi se toliko često
3. `render()` pripremljeni JSX za renderovanje, ne koristiti HTTP request u tom hooku
4. Onda se renderuje kod
5. `componentDidMount()` Nikako updatovati state u ovom hooku jer ce samo rerenderovati stranu

--update na kursu

1. `shouldComponentUpdate(nexProps, nexState)` Može da poslui da prekine updatovanje 
2.  rendereuje se strana nakon `render()`
3. `getSnapshotBeforeUpdate(prevProps, prevState)` prethodni DOM sadržaj
4. `componentDidUpdate()`
## React hooks

Koriste se u funkcionalnim komponentama
Korisne su:
1. `useEffect()` za svaki update u komponenti, pogodan za http request, ukoliko se doda argument u vidu **niza** na kraju funkcije onda ce se izvrisiti samo kada se taj izabrani element izmeni.
Moguća opcija je i [] samo prvi put kada se renderuje komponenta, 
Moguće je i vise parametara unutar niza

Primer `useEffect()`za updatovanje odredjenog elementa:

     useEffect(() => {
        console.log("[Cockpit.js] useEfect...");
        //http request
        setTimeout(() => {
          alert("Saved data to cloud!");
        }, 1000);
      }, [props.persons]);

2. `export default React.memo(klasa)` sluzi za cuvanje sadrzaja komponente u memoriji browsera, prevencija od rerendera ako nije nista izmenjeno
3. PureComponent umesto Component za klase ima shoudComponentUpdate koji proverava da li su izmenjni propovi, sve ostalo isto radi, samo nema potrebe za tom funkciom
## Kako React Updatuje DOM
ako `shoudComponentUpdate()` vrati true onda dolazi do funkcije `render()` koja proverava stari DOM i uporedjuje da li je izmenjen.
Ako nadje izmene onda ce renderovati novi DOM, u suprotnom neće.

### High order components
u glavnom */src* folderu napraviti folder **hoc** koji će sadžati fajl sa funkciom koja bi samo renderovala elemente unutar nje.
Axuiality.js bez klasa je u primeru,
Takodje se mogu napraviti i sa propovima klase.
**Pogledati u 4. projektu**

## PropTypes

Za definisanje proptypes kada je projekat veliki, lakse i pregledniji pregled propova koji se dodeljuju komponentama. 
Ovako se instalira

    npm install --save prop-types
Zatim se importuje

    import PropTypes from "prop-types";
I ispod definisanje klase ili funkcije se definisu tipovi propova, konkretno je primer napisan u **Person.js**

    Person.propTypes = {
      click: PropTypes.func,
      name: PropTypes.string,
      age: PropTypes.number,
      changed: PropTypes.func,
    };

## Selektovanje odredjenog elementa u DOM-u

Koriscenjem posebnog prop-a **ref={}**
### Klasna komponenta

    <input
	    type="text"
	    ref={(inputEl) => {
	      this.inputElement = inputEl;
	    }}
    />
Mozemo postaviti funkciju da se fokusira taj element

    componentDidMount() {
      this.inputElement.focus();
    }
### Funkcionalna komponenta
Postaviti varijablu

    const toggleBtnRef = useRef(null);
Refenrcu moramo dodeliti dugmetu

    <button ref={toggleBtnRef} className={btnClass}

u useEffectu(), kada se komponenta samo prvi put izrenderuje pokrece se funkcija

    toggleBtnRef.current.click();
## Prosledjivanje propova

Da ne bi kroz svaki parent-child nasledjiva i prosledjivao prop
Koristi se **CONTEXT API**
Potrebno je u src folderu napraviti folder ***context***
zatim u njega smestiti naziv kog propretija ili state zelimo da sacuvamo.
u primeru smo **auth-context.js**
Kod:

    import React from "react";
    
    const authContext = React.createContext({
      authenticated: false,
      login: () => {},
    });
    
    export default authContext;

Zatim je potrebno importovati taj fajl gde zelimo da koristimo

    import AuthContext from "../context/auth-context";
Napraviti providera kao element gde ce da se koristi taj context
App.js

    <AuthContext.Provider
              value={{
                authenticated: this.state.authenticated,
                login: this.loginHandler,
              }}
            >
            ...
            <div>...</div>
    </AuthContext.Provider>
A zatim ako je u pitanju klasna komponenta kao sto je `Person,js`
importujemo takodje *auth-context* fajl
smestimo varijablu u staticku varijablu

    static contextType = AuthContext;
I u JSXu mozemo koristiti vrednosti unutar contexta

    {this.context.authenticated ? (
      <p>Authenticated!</p>
    ) : (
      <p>Please login</p>
    )}


**Ako je u pitanju funkcionalna komponenta**

Onda u import recat moramo dodati i `useContext`
I takodje importovati context fajl

zatim napravimo constantu koja ce da cuva vrednost contexta

    const authContext = useContext(AuthContext);

I zatim je iskoristiti gde god zelimo

    <button onClick={authContext.login}>Log in</button>
