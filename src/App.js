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

  // const removeBodyClasses = () => {
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-success')
  // }

  const modeToggle = (cls) =>{
    // removeBodyClasses();
    // document.body.classList.add('bg-'+cls);
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
          <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra Spaces"/>
          {/* </Route>
          <Route exact path="/about" element={<About />}>
          </Route>
        </Routes>
    </Router> */}
    </>
  );
}

export default App;
