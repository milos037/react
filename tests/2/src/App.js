import React, {Component} from 'react';
import ValidationComponent from "./ValidationComponent/ValidationComponent"
import CharComponent from "./CharComponent/CharComponent"
import './App.css';

class App extends Component {

  state = {
    text : ''
  }

  inputChangeHandler = (event) => {
    this.setState({text: event.target.value})
  }

  removeCharHandler = (index) => {
    let arr = this.state.text.split("")
    arr.splice(index, 1)
    
    let stringToState = arr.join("")

    this.setState({text : stringToState})
  }

  render(){
    let charComponents = this.state.text.split("")
    let count = -1
    charComponents = charComponents.map( (char, index) => {
      count++
      return <CharComponent char={char} key={count} click={(index) => this.removeCharHandler(index)} />
    })
    return (
      <div className="App">
       <input onChange={(event) => this.inputChangeHandler(event)} value={this.state.text}/>
        <p>Broj unetih karaktera: {this.state.text.length}</p>
        <ValidationComponent textLength= {this.state.text.length} />
        {charComponents}
      </div>
    );
  }
  
}

export default App;
