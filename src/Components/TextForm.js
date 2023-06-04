import React, { useState } from "react"

export default function TextForm(props) {

const handleUpClick = () =>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase" , "success");

}

const handleLoClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase" , "success");

}

const handleClearClick = () =>{
    let newText = ''
    setText(newText);
    props.showAlert("Cleared Text" , "success");

}

const handleOnChange = (event) =>{

    setText(event.target.value)
}

    const [text, setText] = useState('');

    
  return (
    <>
    <div className="container" style={{color: props.mode === "dark" ? "white" : "brown"}}>

        <h1 className="mb-2">{props.heading}</h1>

         <div className="mb-3" style={{color: props.mode === "dark" ? "white" : "brown"}}>

          <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="9" style={{backgroundColor: props.mode === "dark" ? "pink" : "white"}}> </textarea>

         </div>

         <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
          <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick} >Convert To Lowercase</button>
           <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick} >Clear Text</button>

           <div className="container" style={{color: props.mode === "dark" ? "white" : "brown"}}>

            <h2>Your Text Summery</h2>

            <p>{text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and {text.trim() === "" ? 0 : text.trim().length} characters</p>
            <p>{0.001 *   text.split(" ").length} Minutes read</p>
            {/* <p>{0.008 *  text.split(" ").length} Minutes read</p> */}
            <h1>Preview</h1>
            <p>{text.length>0?text: "Enter something"}</p>



           </div>


    </div>      


</>

  )

}
