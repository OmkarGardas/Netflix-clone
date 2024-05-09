import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import searchIcon from "../../assets/search_icon.svg";
import bellIcon from "../../assets/bell_icon.svg";
import profileImage from "../../assets/profile_img.png";
import caretIcon from "../../assets/caret_icon.svg";

const Navbar = () => {
  const navRef = useRef();

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark');
      }
      else{
        navRef.current.classList.remove('nav-dark');
      }
    })
  },[])
  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={Logo} alt="Netflix logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={searchIcon} alt="search icon" className="icons" />
        <p>Children</p>
        <img src={bellIcon} alt="" className="icons" />
        <div className="navbar-profile">
          <img src={profileImage} alt="" className="profile"/>
          <img src={caretIcon} alt="" />
          <div className="dropdown">
            <p>sign out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
