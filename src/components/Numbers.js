import React from 'react'
import '../styles/Numbers.css'
import graph from '../images/graph.png'

const Numbers = () => {
  return (
    <div className="big-container">
        <div className="grid-container">
            <div className="small-container">
                <div className="txt"><p className="up"><strong>Impressions</strong></p></div>
                <div className="txt"><p className="down"><strong>832</strong></p></div>
            </div>
            <div className="small-container">
                <img className="graph" src={graph} alt="profilepic" />
            </div>
        </div>
        <div className="grid-container">
            <div className="small-container">
                <div className="txt"><p className="up"><strong>Total Audience</strong></p></div>
                <div className="txt"><p className="down"><strong>832</strong></p></div>
            </div>
            <div className="small-container">
                <img className="graph" src={graph} alt="profilepic" />
            </div>
        </div>
        <div className="grid-container">
            <div className="small-container">
                <div className="txt"><p className="up"><strong>Engagements</strong></p></div>
                <div className="txt"><p className="down"><strong>832</strong></p></div>
            </div>
            <div className="small-container">
                <img className="graph" src={graph} alt="profilepic" />
            </div>
        </div>
        <div className="grid-container">
            <div className="small-container">
                <div className="txt"><p className="up"><strong>Engaged Audience</strong></p></div>
                <div className="txt"><p className="down"><strong>832</strong></p></div>
            </div>
            <div className="small-container">
                <img className="graph" src={graph} alt="profilepic" />
            </div>
        </div>
    </div>
  )
}

export default Numbers