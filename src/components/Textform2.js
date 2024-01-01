import React from 'react'
import {useState} from 'react'


export default function Textform2(props) {
    const[text , setText] = useState('');
    const handleUpclick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleloclick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handlebnclick = () => {
        let newText = "";
        setText(newText)
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleCopy = () => {
      var text = document.getElementById("edit");
    
      // Check if the element exists
      if (text) {
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
      } else {
        console.error('Element with ID "mybox" not found.');
      }
    }
  return (
    <>
    <div className="mb-3 container">
      <h1>Text Summariser</h1>
      <label htmlFor="myBox" className="form-label">{props.heading}</label>
      <textarea className={`form-control text-${props.mode}`} value= {text} onChange={handleOnChange} id="edit" rows="8"></textarea>
    </div>
    <div>
      <button className= {`btn btn- ${props.color} mx-1`}  onClick={handleUpclick}>Covert to uppercase</button> 
      <button className = ' btn btn-primary mx-1' onClick={handleloclick}>convert to lower case</button>
      <button className = ' btn btn-primary mx-1' onClick={handlebnclick}>Clear</button>
      <button className = ' btn btn-primary mx-1' onClick={handleCopy}>Copy text</button>
    </div>
    <div className="container mt-3">
        <p>{text.split (" ") .length} words and { text.length} characters</p>
        <p>{0.008 * text.split (" ") .length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    
  </>
  )
}
