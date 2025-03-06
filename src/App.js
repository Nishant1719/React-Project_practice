import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }
    , 3000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success")
    }
  }

  // functions like setIntervals and setTimeout are useful
  // Git-pages have some issues with Routers thats why removing routing some deployment
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path="/About" element={<About mode={mode}/>}></Route>
          <Route exact path="/" element={<TextForm heading = "Enter the text to analyze below" mode={mode} showAlert={showAlert}/>}></Route>
        </Routes>
        {/* <TextForm/>
        <About/> */}
      </div>
    </>
  );
}
export default App;
