import React from "react";
import mainbanner from "../image/Logo.jpeg";
import "../component/MainBanner.css"

const MainUI = () => {
    return(
        <div className="main-banner">
            <img src={mainbanner} style={{height:"50vh"}}></img>
        </div>
    )
}
export default MainUI;