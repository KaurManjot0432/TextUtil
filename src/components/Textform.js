import React, { useState } from 'react';

export default function Textform(props) {
    const [text, setText] = useState("");
    // text = "sdkafafaj"//wrong way to change the state
    // setText("sfdagsd");//right wat to change the state
    const handleUPClick = ()=>{
        let uppercaseText = text.toUpperCase();
        setText(uppercaseText);
        props.showAlert("Converted to Uppercase!","success");
    }
    const handleLCClick = ()=>{
        let uppercaseText = text.toLowerCase();
        setText(uppercaseText);
        props.showAlert("Converted to Lowercase!","success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleClearClick = ()=>{
        setText('');
        props.showAlert("Text is cleared!","success");
    }
    const handleCopyClick = ()=>{
        let copyText = document.getElementById("mybox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Copied to Clipboard!","success");
    }
    const handleSpacesClick = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces!","success");
    }
    return (
        <>
        <div className="container"  style={{backgroundColor:(props.mode==='light'?'white':'#042743'), color : (props.mode==='light'?'#042743':'white')}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"  style={{backgroundColor:(props.mode==='light'?'white':'#042743'), color : (props.mode==='light'?'#042743':'white')}}></textarea>
            </div>
                <button className="btn btn-primary mx-1" onClick={handleUPClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLCClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy text</button>
            <button className="btn btn-primary mx-1" onClick={handleSpacesClick}>Remove extra spaces</button>
        </div>
        <div className="container my-4" style={{color : (props.mode==='light'?'#042743':'white')}}>
            <h2>Your Text Summary</h2>
            <p>{text.length==0 || text.charAt(text.length-1)==' '?text.split(" ").length-1: text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} min read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter your text into textbox to preview it here!    "}</p>
            </div>
        </>
    )
}
