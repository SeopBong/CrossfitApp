import React from "react";


import MainBanner from '../component/MainBanner';
import InfoPart from '../component/InfoPart';
import NavBar from '../UI/NavBar';


const MainPage = (props) => {


    return(
        <div>

        <NavBar></NavBar>
        <MainBanner></MainBanner>
        <InfoPart></InfoPart>
        </div>
    )
}

export default MainPage;