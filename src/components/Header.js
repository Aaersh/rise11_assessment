import React from 'react'
import "../styles/Header.css"
import profilePic from '../images/ProfilePic.jpeg';

const Header = ({ toggleSidebar }) => {
  return (
    <div className="header">
        <button className="side" onClick={toggleSidebar}>.</button>
        <div className="hello">
            Hello Mad 🖐
        </div>
        
        <div className="search-bar">
            <input className="search" type="search" placeholder="Search Here" />
        </div>

        <div className="right-navbar">
            <ul>
                <li>
                    <button className="upload">New Upload</button>
                </li>
                <li><button className="box one">.</button></li>
                <li><button className="box two">.</button></li>
                <li><button className="box three">.</button></li>
                <li>
                    <button className="profile">
                        <div className="profile-name">
                            <strong>TheMad</strong> Designer
                        </div>
                        <img className="profile-pic" src={profilePic} alt="my profile pic" />
                    </button>
                </li>
            </ul>
        </div>
    </div>

  )
}

export default Header