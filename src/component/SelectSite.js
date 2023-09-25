import React,{useState} from "react";
import '../component/SelectSite.scss'
import MainPage from '../component/MainPage';
import { Link } from "react-router-dom";

const SelectSite = () => {
  const [showMainPage, setShowMainPage] = useState(false);
  const [showButton1, setShowButton1] = useState(true);
  const [showButton2, setShowButton2] = useState(true);
  const [showButton3, setShowButton3] = useState(true);
  const handleButtonClick = () => {
    setShowMainPage(true);
    setShowButton1(false);
    setShowButton2(false);
    setShowButton3(false);
  }
    return (
        <div>
         {showMainPage ? (
        <MainPage />
      ) : (
        <div>
          {showButton1 && (
            <div className="button-container-1">
              <span className="mas">잠실 - ABLE</span>
              <button type="button" name="Hover" onClick={handleButtonClick}>잠실 - ABLE</button>
            </div>
          )}
          {showButton2 && (
            <div className="button-container-2">
              <span className="mas">문정 - ABLE</span>
              <button type="button" name="Hover" onClick={handleButtonClick}>문정 - ABLE</button>
            </div>
          )}
          {showButton3 && (
            <div className="button-container-3">
              <span className="mas">거여 - ABLE</span>
              <button type="button" name="Hover" onClick={handleButtonClick}>거여 - ABLE</button>
            </div>
          )}
        </div>
      )}
    </div>
    );
  }

export default SelectSite;