import React from "react";
import Footer from "./Footer";
import '../components/header.css'

function Header() {
  return (
    <>
      <div className="header"> 
        <h1 id="topic">This is Header</h1>
        <p style={{color: "blue"}}>this is footer paragraph</p>
        <Footer></Footer>
      </div>
    </>
  );
}

export { Header };
export default Footer;
