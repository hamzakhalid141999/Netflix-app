import React, { useEffect, useState } from 'react';
import netflix from "./netflix.png";
import profile from "./profile.jpg";
import "./Nav.css";
import { useHistory } from 'react-router';

function Nav() {
    
    const [show, handleShow] = useState(false);
    const history = useHistory();
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if (window.scrollY > 100){
                handleShow(true);
            }
            else handleShow(false);
        });
       
    },[]);
    
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                style={{cursor: 'pointer'}}
                onClick={()=>{history.push("/")}}
                className="nav__logo"
                src={netflix}
                alt="Netflix logo"
            />

            <img
                style={{cursor: 'pointer'}}
                onClick={()=>{history.push("/profile")}}
                className="nav__profile"
                src={profile}
                alt="Profile"
            />

        </div>
    );
}

export default Nav;