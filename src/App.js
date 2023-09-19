import './App.css';
import MainBanner from '../src/component/MainBanner';
import React from 'react';
import InfoPart from '../src/component/InfoPart';
import NavBar from '../src/UI/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <MainBanner></MainBanner>
      <InfoPart></InfoPart>
    </div>
  );
}

export default App;