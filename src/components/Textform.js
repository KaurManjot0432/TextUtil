import React, { useState } from 'react';

export default function Textform(props) {
    const [text, setText] = useState("Enter text here");
    // text = "sdkafafaj"//wrong way to change the state
    // setText("sfdagsd");//right wat to change the state
    const handleUPClick = ()=>{
        console.log("Uppercase was clicked");
        let uppercaseText = text.toUpperCase();
        setText(uppercaseText);
    }
    const handleOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    return (
        <div>
            <h2>{props.heading}</h2>
            <div class="mb-3">
                <textarea class="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button class="btn btn-primary" onClick={handleUPClick}>convert to UpperCase</button>
        </div>
    )
}
