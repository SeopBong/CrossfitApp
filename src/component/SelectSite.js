import React,{useState} from "react";
import '../component/SelectSite.scss'
import MainPage from '../component/MainPage';

const SelectSite = () => {
  const [showMainPage, setShowMainPage] = useState(false);
  const handleButtonClick = () => {
    setShowMainPage(true);
  }
    return (
        <div>
            <div class="button-container-1">
                <span class="mas">잠실 - ABLE</span>
              {showMainPage ? (<MainPage />) :
              (              
              <button type="button" name="Hover" onClick={handleButtonClick}>잠실 - ABLE</button>
              )
              }

            </div>
            <div class="button-container-2">
                <span class="mas">문정 - ABLE</span>
              <button type="button" name="Hover">문정 - ABLE</button>
            </div>
            <div class="button-container-3">
                <span class="mas">거여 - ABLE</span>
              <button type="button" name="Hover">거여 - ABLE</button>
            </div>        
            </div>
    )
}

export default SelectSite;