import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import React,{useState} from 'react';
import TextForm from './components/TextForm'
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
function App() {
  
  const [mode, setMode]=useState('dark');
  const [alert, setAlert]=useState(null);

  const showAlert=(message, type)=>{
      setAlert({
        msg: message,
        type: type
      });
      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }
  const toogleMode=()=>{
      if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor='#032558';
        showAlert("light mode has been enabled", "success");
        document.title="textUtils dark mode";
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='white';
        showAlert("dark mode has been enabled", "success");
        document.title="textUtils light mode";
      }
  }
  return (
    <>
    <Router>
    <Navbar title="HACKED" aboutText="hekk" mode={mode} toggleMode={toogleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}>
            
          </Route>
          
          <Route exact path="/" element={<TextForm heading="Enter The Text"  mode={mode} showAlert={showAlert}/>}>

          </Route>
        </Routes> 
    
    
    </div>
     </Router> 
    </>
  );
}

export default App;
