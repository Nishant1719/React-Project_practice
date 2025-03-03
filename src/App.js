//import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'


//let name = "Nishant";
//any external javascript is comming from outside in the app function it will sanitize it means removes it.
//Example :
//let name1 = "<b>Shreya</b>";
//Reason Babel compiles JSX down to React.createElement() calls.

function App() {

  const [mode,setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light' ){
      setMode('dark');
    }else{
      setMode('light');
    }
  };

  return ( // entire code in the block is called JSX its 95% HTML : //JS is written in Curly brackets
    //It should always return only one element like in this case div className = app
    //But if there is a senario where you have to send to elements like <h1>Headings</h1>.
    //Then start the code with the empty JSX fragment which is like an empty tag <></> and wrapp all the elements with it.
    //For Example : 
    <>
    {/* <h1>Headings</h1>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}
    {/*
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contacts</li>
    </nav>
    <div className="container">
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis odio possimus non modi delectus eaque ratione explicabo illo, voluptatem vel impedit maiores ipsa fugit quas magnam rem odit tenetur autem dolorem veritatis aliquam voluptate.</p>
      {/* This is how you can add images (source of logo is present at the top) 
      <img src={logo} className="App-logo" alt="logo" /> 

      {/* This is how you can add Variables (source of logo is present at the top) 
      <h1>Hello {name}</h1>
      <h2>Heyy {name1}</h2>
    </div>
    */}

    {/* Bootstrap implementations :
    Incase of Error : 
      - Close all the tags that are remain open
      - replace class to className (Use Control F to find all and replace)
      
    */}
    {/* Shifting this navbar to components folder for applicing function based components */}
    {/* 
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">TextUtils</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">About</a>
          </li>

          {/* Dropdown 
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another action</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li> */}
          

          {/* Disabled anchor
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
          </li> *
          
        </ul>
        <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
    </nav> */}
    
    {/* Adding navbar from the components and adding props */}
    <Navbar tittle = 'TextUtils' aboutText = 'About us' mode = {mode} toggleMode = {toggleMode}/>

    {/* Default props examples
    <Navbar/>
    */}
    {/* <TextForm/> */}
    {/* Using the same thing with container class of Bootstrap */}
      <div className="container my-4" >
        <TextForm heading = "Enter the text" subHeading = "Example: About you"/>
      </div>
      
      <div className="container my-3">
        <About/>
      </div>
    </>
  );
}




export default App;
