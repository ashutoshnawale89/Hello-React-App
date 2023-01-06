import React from 'react';
import './App.css';
import logo from './logo.svg'

class App extends React.Component {
  url = "https://www.google.com/"
  constructor(){
    super()
    this.state={
      userName:''
    }
  }

  //onClick Function
  OnClick = ($event) => {
    console.log("save button is clicked!", $event);
    window.open(this.url, "_blank");
  }

  onNameChange = (event) => {
    console.log("value is ",event.target.value);
    //set the title using setState method
    this.setState({ userName:event.target.value})
  }

  render(){
  return (
    <div className="App">
      <h2>Hello {this.state.userName} from Bridgelabz</h2>
      <img src={logo} OnClick={this.OnClick}  
        alt='The Bridgelabz logo: a Bridge to Employement through lab Works'/>
        <div>
          <input onChange={this.onNameChange} />
        </div>
      </div>
  );
}
}
export default App;
