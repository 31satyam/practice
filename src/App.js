import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform2 from './components/Textform2';
import { useState } from 'react';

function App() {
  const [mode , setMode]=useState('light');
 const toggleMode = () => {
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = 'grey';
  }else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
  }
 }

 const colorname = () =>{
   
 }
  return (
    // <Navbar title = "Satyam"/>
    <div >
      <Navbar title = "Satyam" mode = {mode} toggleMode = {toggleMode}/>
      {/* <About/> */}
      <div className="container">
       <Textform2 mode = {mode} color = {colorname}/>
       </div>
    </div>
  );
}

export default App;
