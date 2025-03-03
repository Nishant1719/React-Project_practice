import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');
    // Updating text variable :
    // text = "New text"; //Wrong way
    // setText("New Text"); //Right way
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () => {
        setText("");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    
  return (
    <>
        <div className="container">
            <h2>{props.heading}</h2>
            <div className="mb-4">
                <label htmlFor="MyBox" className="form-label">{props.subHeading}</label>
                <textarea className="form-control" id="MyBox" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-4">
            <h3>Text Analysis</h3>
            <p>Number of word : {text.split(" ").length}</p>
            <p>Number of Characters : {text.length}</p>
            <p>Time to read {0.008 * text.split(" ").length}</p>
        </div>
        <div className="container my-2">
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        
    </>
  )
}

