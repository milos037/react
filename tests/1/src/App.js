import React, {Component} from 'react'
import UserOutput from "./UserOutput/UserOutput"
import UserInput from "./UserInput/UserInput"
import './App.css'

class App extends Component {

  state = {
    username : "Pera",
    password: "Pera123"
  }

  changeUsername = (event) => {
    this.setState({username : event.target.value})
  }
  changePassword = (event) => {
    this.setState({password : event.target.value})
  }

  render(){
    //inline styling for output
    const userOutputStyle = {
      backgroundColor: '#ff0000aa',
      margin: '50px auto',
      border : '3px solid #1a1a1a',
      padding: '50px',
      color: 'white',
      width: '50%'
    }
    return (
      <div className="App" style={userOutputStyle}  >
        <h1>LOGIN DATA</h1>
        <UserOutput username={this.state.username} password={this.state.password}/>
        <UserInput changeUsername={this.changeUsername} name={this.state.username}/>
        <UserInput changePassword={this.changePassword} name={this.state.password}/>
      </div>
    );
  }
}

export default App;
