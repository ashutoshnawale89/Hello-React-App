import React from 'react';
import './App.css';
import logo from './logo.svg'

class App extends React.Component {
  url = "https://www.google.com/"
  constructor(){
    super()
    this.state={
      title:"Hello From Bridgelabz"
    }
  }

  //onClick Function
  OnClick = ($event) => {
    console.log("save button is clicked!", $event);
    window.open(this.url, "_blank");
  }
  render(){
  return (
    <div className="App">
      <h2>{this.state.title}</h2>
      <img src={logo} OnClick={this.OnClick}  
        alt='The Bridgelabz logo: a Bridge to Employement through lab Works'/>
      </div>
  );
}
}
export default App;
