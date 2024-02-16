    import React from "react";
import './Header.css';
import logo from "../Header/logo.png";

function Header(){
    return(
        <>
        <div className="header-content container">
        <div className="logo"><img src={logo}/></div>
        <div className="srach-box">
        <input type="Search"
               id="test" placeholder="What are you looking for?" />

        </div>
        <div className="wishlist">Sign in</div>
        </div>
        </>

        
    );
}

export default Header; 