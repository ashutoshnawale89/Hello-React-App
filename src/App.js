import React from 'react';
import './App.css';
import logo from './logo.svg'
import Bridgelabz from './components/Bridgelabz'
import Home from './components/Home';
import About from './components/About';
import { Route, Routes, Link } from "react-router-dom"

class App extends React.Component {
  url = "https://www.google.com/"
  constructor(){
    super()
    this.state={
      userName:'',
      nameError:''
    }
  }

  //onClick Function
  onClicks = ($event) => {
    console.log('save button is clicked!', $event);
    window.open(this.url, '_blank');
  }

  onNameChange = (event) => {
    console.log("value is ",event.target.value);
    const nameRegex = RegExp("^[A-Z]{1}[a-zA-Z]{2,}$");
    //set the title using setState method
    this.setState({ userName:event.target.value})
    if(nameRegex.test(event.target.value)){
      this.setState({nameError:''})
    }
    else{
      this.setState({nameError:'Name is Incorrect'})
    }
  }

  render(){
  return (
    <div>
      <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/section' element={<Bridgelabz/>}/>
      </Routes>
      <header></header>
      <div id="main">
        <article>
          <div className="App">
            <div>
              <h2>Hello {this.state.userName} from Bridgelabz</h2>
              <img src={logo} onClick={this.onClicks} alt='The Bridgelabz logo: a Bridge to Employement through lab Works'/>
            </div>
            <div>
              <input onChange={this.onNameChange} />
              <span className='error_output'>{this.state.nameError}</span>
              <br></br>
            </div>
          </div>
          <Bridgelabz></Bridgelabz>
        </article>
        <nav></nav>
        <aside></aside>
      </div>
      <footer></footer>
    </div>);
}
}

export default App;
