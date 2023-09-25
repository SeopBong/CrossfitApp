import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import SelectSite from './component/SelectSite';

import MainPage from './component/MainPage';


function App(props) {

  return (
    <div className='App'>
      <SelectSite></SelectSite>
      
    </div>
  
  );
}

export default App;