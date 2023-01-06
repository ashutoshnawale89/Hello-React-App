import React from 'react';
import './App.css';
import logo from './logo.svg'

class App extends React.Component {

  constructor(){
    super()
    this.state={
      title:"Hello From Bridgelabz"
    }
  }
  render(){
  return (
    <div className="App">
      <h2>{this.state.title}</h2>
      <img src={logo} />
      </div>
  );
}
}
export default App;
