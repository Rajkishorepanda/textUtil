import React from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './component/navBar'
import TextForm from './component/textfrom'

function App() {
  return (
   <>
   <Navbar title="Application Text"/>

    <div className="container">
      <TextForm heading="Enter text to analyze"/>
    </div>
   
   </>
  );
}

export default App;
