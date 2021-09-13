import React, { useState } from 'react';

export default function Textform(props) {
    const [text, setText] = useState("");
    // text = "sdkafafaj"//wrong way to change the state
    // setText("sfdagsd");//right wat to change the state
    const handleUPClick = ()=>{
        let uppercaseText = text.toUpperCase();
        setText(uppercaseText);
    }
    const handleLCClick = ()=>{
        let uppercaseText = text.toLowerCase();
        setText(uppercaseText);
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleClearClick = ()=>{
        setText('');
    }
    return (
        <>
        <div class="container">
            <h2>{props.heading}</h2>
            <div class="mb-3">
                <textarea class="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button class="btn btn-primary mx-1" onClick={handleUPClick}>Convert to UpperCase</button>
            <button class="btn btn-primary mx-1" onClick={handleLCClick}>Convert to LowerCase</button>
            <button class="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
        </div>
        <div class="container my-4">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} min read</p>
            <h3>Preview</h3>
            <p>{text}</p>
            </div>
        </>
    )
}
