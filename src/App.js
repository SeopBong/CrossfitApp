import './App.css';
import React, {useState} from 'react';

import Button from 'react-bootstrap/Button';

import MainPage from './component/MainPage';


function App(props) {

  const [showMainPage, setShowMainPage] = useState(false);
  const handleButtonClick = () => {
    setShowMainPage(true);
  }

  return (
   
      <div className='App'>
      
        {showMainPage ? (
        <MainPage />
      ) : (
        <button onClick={handleButtonClick}>MainPage 불러오기</button>
      )}

      </div>
   
  
  );
}

export default App;