// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const modeToggle = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor= '#343a40'
      document.body.style.color='white'
      showAlert("Woo...! Dark Mode is On", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor= 'white'
      document.body.style.color='black'
      showAlert("Woo...! Light Mode is On", "success")

    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" aboutTitle="About" mode={mode} modeToggle={modeToggle}/>
      <Alert alert={alert}/>
        {/* <Routes>
          <Route exact path="/" element={   }> */}
          <TextForm showAlert={showAlert} heading="Enter The Text to Analyze"/>
          {/* </Route>
          <Route exact path="/about" element={<About />}>
          </Route>
        </Routes>
    </Router> */}
    </>
  );
}

export default App;
