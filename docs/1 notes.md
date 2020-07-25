# Osnovne ES 6
### let ili const
**VAR** se deli na *let* i *const*
**let** se koristi za kreiranje varijabli
**const** se koristi za cuvanje trajnih varijabli

Testiranje je izvršavano na [ovom sajtu](http://jsbin.com/?js,output).

    const myName = "Miloš";
    console.log(myName)

    myName = "Test"
    console.log(myName)
    //prikazace gresku jer const ne moze da se menja

### Arrow funkcije
Prednost je što ne zadaje glavobolje kada se koristi refernca ***this***.
| *Normalna funkcija* |*Arrow funkcija*  |
|--|--|
| function funct() { ... } | const funct = () => {...}  |






**Primer:**

  

    function print(myName){
      console.log(myName)
    }
    print("Milos1");
Može i bez zagrada myName ako je jedan argument
Ako je prazna () => isto radi kao (){}
Ako ima vise argumenata moraju se koristiti zagrade

    const printArrow = (myName) => {
      console.log(myName)
    }
    printArrow("Milos2")
    
Ako funkciju koristimo samo za return

    const multiply = (number) => {
        return number * 2
    }
    console.log(multiply(3))
Možemo je dosta skratiti i uprostiti

    const multiplyBetter = number => number * 2
    console.log(multiplyBetter(4))

### Export i Import (Modules)
person.js

    const person  = {
    	name: "Milos"
    }
    export default person
utility.js

    export const clean = () => { ... }
    export const baseData = 10

Zatim u drugom fajlu ćemo importovati module
app.js

    import person from './person.js'
ili se može zadati ime po želji
  

      import prs from './person.js'
  

 U ovom slučaju smo importovali     default vrednosti unutar person.js fajla.
    
    import { baseData } from './utility.js'
    import { clean as cln } from './utility.js'
    import * as bundled from './utility.js'
 U ovom slučaju smo importovali pojedinačne elemente unutar utility.js fajla.

### Klase
Blueprint za javascript objekte

    class Person {
    	name = "Milos"
    	call = () => {...}
    }
    //pozivanje
    const myPerson = new Person()
    	myPerson.call()
    console.log(myPerson.name)

Takodje postoji i nasledjivanje klasa

    class Person extends Master

**Primer**

     class Human {
       constructor(){
         this.gender = "male"
       }
       printGender(){
         console.log(this.gender)
       }
     }
     class Person extends Human{
        constructor() {
          //mora se dodati super zbog nasledjivanja
          super()
          this.name = "Milos"
          //izmenjen gender
          //this.gender = "female"
        }
       printMyName(){
         console.log(this.name)
       }
     }
    
    const myPerson = new Person();
    myPerson.printMyName()
    myPerson.printGender()

### Klase, propreties i metode
Proprety je kao variajbla koja je dodeljena klasi ili objektu.
Korišćenjem ES7 standarda može se olakšati prethodno napisan kod.

     class Human {
      gender = "male"
       printGender = () => {
         console.log(this.gender)
       }
     }
     class Person extends Human{
    
       name = "Milos"
        
       printMyName = () => {
         console.log(this.name)
       }
     }
    
    const myPerson = new Person();
    myPerson.printMyName()
    myPerson.printGender()
### Spread i Rest operatori
Operator je **...**
**Spred** se koristi da se podele elementi niza ili propreti objekata, ili za dodavanje novih takodje.

    const newArray = [...OldArray, 1, 2]
    const newObject = {...oldObject, newProp : 5 }

**Rest** se koristi za mergovanje liste argumenata funkcije u niz.

    function sortArgs(...args){
    	return args.sort()
    }

**Primer**

    // SPREAD OPERATOR
    const numbers = [1,2,3]
    const newNumbers = [...numbers, 4]
    console.log(newNumbers);
Objedinjeni numbers i nova vrednost.
Ako se koristi bez ... onda ce se newNumbers sastojati od 2 elementa, niza i broja
    
    
    const person = {
      name : "Milos"
    }
    const newPerson = {
      ...person,
      age : 21
    }
    console.log(newPerson)

Dodati su elementi iz person objekta.
    
    // REST OPERATOR
    const filter = (...args) => {
      return args.filter(el => el === 1);
    }
    console.log(filter(1,2,3))

### Destrukturisanje
Extractovanje elemenata nizova, ili propretija objkeata i cuvanje u varijable
**Niz**

    [a,b] = ["Hello", "Milos"]
    console.log(a) // Hello
    console.log(b) // Milos

**Objekat**

    { name } = { name : "Milos", age : 21 }
    console.log(name) // Milos
    console.log(age) // undefined
  
  **Primer**

    //Primer niza
    const numbers = [1, 2, 3];
    [num1 ,  , num3] = numbers;
    console.log(num1, num3)
### Primitivni tipovi i reference varijabli, map funkcija

*Primitivi*
    
    const number = 1
    const num2 = number
    console.log(num2);
    
*Reference - ovo vazi i za nizove i za objekte*
    
    const person = {
      name : 'Milos'
    }
    const secondPerson = person;
    person.name = "Neko drugi"
    console.log(secondPerson)
secondPerson je pointer na person
bukvalno je isto kao person objekat

Problem rešavamo na ovaj način
   
    
    const thirdPerson = {
      // spread operator
      ...person 
    }
    person.name= "Neko treci"
    console.log(thirdPerson)

*Map funkcija*

    const numbers = [1,2,3]
    const numbers2 = numbers.map(num => num * 2)
    console.log(numbers)
    console.log(numbers2)
Reference korisnih NEXT GEN funkcija
-   `map()` => [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
-   `find()` => [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
-   `findIndex()` => [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
-   `filter()` => [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
-   `reduce()` => [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b)
-   `concat()` => [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b)
-   `slice()` => [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
-   `splice()` => [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)