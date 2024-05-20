import React,{useState} from 'react'


export default function Textfrom(textprop) {
    const handleUpClick =()=>{
        let newText= text.toUpperCase()
        setText(newText)

    }
    const handleLowClick =()=>{
        let newText= text.toLowerCase()
        setText(newText)

    }
    const handleCopy =()=>{
        
        navigator.clipboard.writeText(text)
    }
    const handleOnChange =(event)=>{
setText(event.target.value)
    }
    const [text,setText]=useState("");
  return (
    <>
   
<div className="mb-3">
    <h1>{textprop.heading}</h1>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange} placeholder="Enter text here"></textarea>
  <button className="btn btn-primary my-3 mx-2"  onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary my-3 mx-2"  onClick={handleLowClick}>Convert to Lowercase</button>
  <button className="btn btn-primary my-3 mx-2"  onClick={handleCopy}>Copy</button>

</div>
<div className="mb-3 my-3">
    <h1>Text Summury</h1>
    <hr />
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.08* text.split(" ").length} Minutes read</p>
    <h3>Preview</h3>
    <hr />
    <p>{text}</p>

</div>
</>
  )
}
