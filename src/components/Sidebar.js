import React from 'react'
import '../styles/Sidebar.css'
import go from '../images/grandOpening.jpg'
const Sidebar = () => {
  return (
    <div id="sidebar">
        <div id="header"><strong>🔥Skillfy Admin</strong></div>
        <div className="contents">
            <ul>
                <li className="item">
                    <button className="dashboard">Dashboard</button>                    
                </li>
                <li className="item">
                    <button className="course">My Course</button>
                </li>
                <li className="item">
                    <button className="calendar">Calendar</button>
                </li>
                <li className="item">
                    <button className="resource">Resource</button>
                </li>
                <li className="item">
                    <button className="quiz">Quiz</button>
                </li>
                <li className="item">
                    <button className="message">Message</button>
                </li>
                <li className="item">
                    <button className="status">My Status</button>
                </li>
                <li className="item">
                    <button className="wallet">Wallet</button>
                </li>
                <li className="item">
                    <button className="account">My Account</button>
                </li>
            </ul>
        </div>
        <div className="card">
            <img src={go} alt="subscribe"/>
            <button>Get Subscription</button>
        </div>
        <div className="foot">
            <p><strong>Skillfy Teacher Dashboard Admin</strong></p>
            <p>© 2020 All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Sidebar