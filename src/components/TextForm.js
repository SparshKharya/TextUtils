import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=> {
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLowClick = ()=> {
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to Lowercase!", "success");
  }

    const handleClearClick = ()=> {
    let newText = text.c();
    setText(newText);
    props.showAlert("Text cleared!", "success");
}
    
    const handleOnChange = ()=> {
        //console.log("On change");
        setText(event.target.value);
    }

    const handleCopy  = () => {
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard!", "success");
    }

    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Remove Extra Spaces!", "success");
    }
    
    const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'?'white':'#dc3545' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'#dc3545'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>
    <div className='container my-3' style={{color: props.mode === 'dark'?'white':'#dc3545' }}>
      <h2>You text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something in the textbox above to preview it here!!"}</p>
    </div>
</>
  )
}