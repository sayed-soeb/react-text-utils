import React,{useState} from 'react'

export default function Main(props) {


    const [text,setText] = useState("hi this is first react function logic");
    // setText = "deiwkjsbdekj"; wrong way 
    // setText("nkjdffbeors"); correct way



    const upperClickHandler = () =>{
      console.log("Upper clicked");
      let upperText = text.toUpperCase();
      setText(upperText);

    }

    const lowerClickHandler = () =>{
      let lowerText = text.toLowerCase();
      setText(lowerText);
    }

    const ClearHandler =()=>{
      setText("");
    }


    const texthandler = (e) =>{
        setText(e.target.value)
    }


  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
      <div className='container'>
      <textarea className='form-control' onChange={texthandler} value={text} rows="9"></textarea>
        <div className='container my-3 d-flex justify-content-around'>
          <button className='btn btn-primary' onClick={upperClickHandler}>Convert to UpperCase</button>
          <button className='btn btn-secondary' onClick={lowerClickHandler}>Convert to LowerCase</button>
          <button className='btn btn-warning' onClick={ClearHandler}>Clear Textarea</button>
        </div>
        <div className='container my-4'>
          <p>{text}</p>
          <div className='contauner'>
            <p>{text.split(" ").length} : words,  {text.length} : Characters</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
