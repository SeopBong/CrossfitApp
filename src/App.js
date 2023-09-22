import './App.css';
import React, {useState} from 'react';
import SelectSite from './component/SelectSite';
import Button from 'react-bootstrap/Button';

import MainPage from './component/MainPage';


function App(props) {

  const [showMainPage, setShowMainPage] = useState(false);
  const handleButtonClick = () => {
    setShowMainPage(true);
  }

  return (
   
      <div className='App'>
      
       {/*
        {showMainPage ? (
        <MainPage />
      ) : (
        <Button variant="primary" size="lg" onClick={handleButtonClick}>
        Block level button
      </Button>
      )}
      */}
    <SelectSite></SelectSite>
      </div>
   
  
  );
}

export default App;