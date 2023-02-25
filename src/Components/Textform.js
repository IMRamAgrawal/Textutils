 import React, {useState} from 'react'


export default function Textform(props) {
  
  const [text, setText] = useState("Enter text here")
   
    const handleUpClick= () => {
    let newtext = text.toUpperCase()
     setText(newtext)
    props.showAlert("Success"," converted to Upper Case!")
  }
  const handleonchange= (event) => {
     setText(event.target.value)
  }
  const handleLoClick= () => {
    let newtext = text.toLowerCase()
     setText(newtext)
     props.showAlert("Success"," converted to Lower Case!")
  }
  const Cleartext= () => {
    let newtext = " "
     setText(newtext)
     props.showAlert("Success"," cleared text!")
  }
  const Copytext= () => {
    let text = document.getElementById("copytext")
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Success"," text is copied!")
     
  }
  const removespaces= () => {
    // let text = document.getElementById("copytext")
    // let Text =  text.select();
    let newtext = text.split(" ").join("")
    setText(newtext)
    props.showAlert("Success"," extra space is removed!")
  }

 const style = {
  padding:'5px',
  margin:'5px 5px 5px 20px',
  backgroundColor:'blue',
  color:'white',
  border:'none'
 }

  return (
    <>
    <h2 id="heading" style={{marginLeft:'20px'}}>Enter the text to analyze</h2>
   <textarea value={text} id="copytext" onChange={handleonchange} style={{width:'70vw',width:'70vw',margin:'20px'}} rows="10"></textarea><br/> 
   <button disabled={text.length===0} style={style}  onClick={handleUpClick}>Convert to uppercase</button>
   <button disabled={text.length===0} style={style} onClick={handleLoClick}>Convert to lowercase</button>
   <button disabled={text.length===0} style={style} onClick={Cleartext}>Cleartext</button>
   <button disabled={text.length===0} style={style} onClick={Copytext}>Copytext</button>
   <button disabled={text.length===0} style={style} onClick={removespaces}>Remove extra spaces</button>
   <div id="summary">
   <h2 style={{marginLeft:'20px'}}>Your text Summary</h2>
    <p style={{marginLeft:'20px'}}>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <h2 style={{marginLeft:'20px'}}>Preview</h2>
    <p style={{marginLeft:'20px'}}>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
    </div>

   </>
  )
}
