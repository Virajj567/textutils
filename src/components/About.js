// import React, { useState } from 'react'

export default function About(props) {
    // const [mystyle,setmyStyle]= useState({color:'white',
    // backgroundColor:'black'});

    let mystyle={
        color:props.mode==='dark'?'white':'#032558',
        backgroundColor:props.mode==='dark'?'#032558':'white',

    }
    // const [buttonName,setbuttonName]=useState("Enable Light Mode")
    // const darkMode=()=>{
    //     if (mystyle.color==='white'){
    //         setmyStyle({color:'black',
    //         backgroundColor:'white'})
    //         setbuttonName("Enable Dark Mode")
    //     }
    //     else{
    //         setmyStyle({color:'white',
    //      backgroundColor:'black'})
    //      setbuttonName("Enable Light Mode")

    //     }
    // }
    
  return (
            <div className='container' style={mystyle}>
                <h1>About Us</h1>
                <div className="accordion" id="accordionExample" style={mystyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyse Your Text</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show"  style={mystyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        TextUtils Gives you the way to analyse your text quickly, capitalise the text inserted, lowercase it, clear and alternate option.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to Use</strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse"style={mystyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        TextUtils is free Character count utility where user can preview and get instant count of characters words and average time required for a normal person to read the inserted text.

                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Browser Compatible</strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" style={mystyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        TextUtils is compatible for web browser, can be accessed from any device with web browser.
                    </div>
                    </div>
                </div>
                </div>
                <div className="container my-2">

                {/* <button type="button" onClick={darkMode} className="btn btn-primary">{buttonName}</button> */}
                </div>
            </div>
  )
}
