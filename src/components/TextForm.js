import React, {useState} from 'react'
document.body.style.backgroundColor='#032558';
export default function TextForm(props) {
    const [textu, setTexty]=useState('');
    const newFunc = () =>{
        
        let newText = textu.toUpperCase();
        setTexty(newText);
        props.showAlert("text has been converted to uppercase", "success");
    }
    const newFuncLo = () =>{
        
        let newText = textu.toLowerCase();
        setTexty(newText);
        props.showAlert("text has been converted to lowercase", "success");
    }
    const newFuncal= () =>{

        let array =textu.split('');

        for(let i=0;i<array.length;i++){
            if(i%2===0){
                array[i]=array[i].toUpperCase();
                
            }
            else{
                array[i]=array[i].toLowerCase();
            }
        }
        setTexty(array.join(''));
        props.showAlert("text has been converted to alternate", "success");
    }
    const clear=()=>{
        setTexty('');
        props.showAlert("text has been cleared", "success");
    }

    const handleOnChange = (event)=>{
        
        setTexty(event.target.value); 
    }
  return (
    <>
    <div>
        <div className="container" style={{color: props.mode==='dark'?'white':'#032558'}}>
            <h1>{props.heading}</h1>
        <div className="mb-3">
        
        <textarea className="form-control" value={textu} style={{backgroundColor: props.mode==='dark'?'#032558':'white', color: props.mode==='dark'?'white':'#032558'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={newFunc}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={newFuncLo}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={newFuncal}>Convert to aLtErNaTe</button>
        <button className="btn btn-primary mx-1 my-1" onClick={clear}>Clear</button>
    </div>
    </div>
    <div className="container my-3"  style={{color: props.mode==='dark'?'white':'#032558'}}>
        <h1>Your text summary</h1>
        <p>{textu.split(" ").length} words {textu.length} characters</p>
            <p>{0.008*textu.split(" ").length} Minutes</p>
        <h3>Preview</h3>
        <p>{textu.length>0?textu:"Enter Some Text to preview here"}</p>
    </div>
    </>)

}

