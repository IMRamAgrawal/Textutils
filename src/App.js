// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import About from './Components/About';
 import React, {useState} from 'react';
 import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
// let name = 9;
function App() {
  const [mode,setMode] = useState("light")
  const toggleMode = () =>{
    if(mode === 'light') {
      setMode('dark')
    document.body.style.backgroundColor = "#042743"
    showAlert("Success"," dark mode is enabled!")
    document.getElementById("Toggle").innerHTML = "Disable dark mode"
    document.getElementById("copytext").style.backgroundColor = "#042743"
    document.getElementById("copytext").style.color = "white"
    document.getElementById("copytext").style.borderColor = "white"
    document.getElementById("summary").style.color = "white"
    document.getElementById("heading").style.color = "white"
    document.title = "Textutils-dark mode"
    }
   else{
      setMode('light')
    document.body.style.backgroundColor = 'white'
  showAlert("Success"," dark mode is desabled!")
    document.getElementById("Toggle").innerHTML = "Enable dark mode"
    document.getElementById("copytext").style.backgroundColor = "white"
    document.getElementById("copytext").style.color = "black"
    document.getElementById("copytext").style.borderColor = "black"
    document.getElementById("summary").style.color = "black"
    document.getElementById("heading").style.color = "black"
    document.title = "Textutils-light mode"
    }
  }
  const [alert,setAlert] = useState(null)
  const showAlert =(type,msg)=> {
    setAlert({
    type: type,
    msg:  msg
  })
  setTimeout(()=>{
    setAlert(null)
  },1500);
  }

  
  return (
    <div>
  
     <BrowserRouter>
     <Navbar title="Home" aboutText="About" showAlert={showAlert} mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert} style={{height:'50px'}}/>
     
        <Routes>
         
         <Route path="/about" element={<About mode={mode}/>} />
         <Route path="/" element={<Textform mode={mode}/>} />
       </Routes>
     </BrowserRouter>
     </div>

  );
}
export default App;
