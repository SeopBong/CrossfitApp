import React from "react";
import Nav from 'react-bootstrap/Nav';

const InfoPart = () =>{
    return(
        <div className="info-container"> 
          <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
      {/*<Nav.Link href="/board">공지</Nav.Link>*/}
      <Nav.Link href="/notice">지점선택</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="board">공지</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">게시판</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="link-3">Contact Us</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
      </div>
    )
}
export default InfoPart;