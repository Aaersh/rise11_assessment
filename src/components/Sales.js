import React from 'react'
import "../styles/Sales.css"
import DonutGraph from './DonutGraph';
import graph from '../images/graph.png'
import sde from '../images/sde.jpg'

const Sales = () => {
    
  return (
    <div className="stats">

        <div className="stats-donut-graph">
            <div className="stats-header">
                <div className="stats-title">Sale</div>
                <div className="stats-dots">.</div>
            </div>
            <div className="stats-graph">
                <DonutGraph/>
            </div>
            <div className="stats-body">
                <table className="first-table">
                    <tr>
                      <td className="first-row"><p className="first-text left-krna">Current Week</p></td>
                      <td className="first-row"><p>2000</p></td>
                      <td className="first-row right-krna"><button className="sales-up-graph">0.3%</button></td>
                      
                    </tr>
                    <tr>
                        <td className="first-row left-krna"><p className="first-text">Last Week</p></td>
                        <td className="first-row"><p>1500</p></td>
                        <td className="first-row right-krna"><button className="sales-down-graph">0.3%</button></td>
                    </tr>
                  </table>
            </div>
        </div>

        {/* 2nd */}
        <div className="stats-line-graph">
            <div className="stats-header">
                <div className="stats-title">Weekly Sales Stats</div>
                <div className="stats-dots">.</div>
            </div>
            <div className="sales-graph">
                <img className="sales-img" src={graph} alt="graph" />
            </div>
            <div className="sales-body">
                <table className="first-table">
                    <tr>
                      <td className="first-row left-krna"><img className="sde" src={sde} alt="sde" /></td>
                      <td className="first-row"><strong>Adobe XD Part 01</strong><br />UIUX Design</td>
                      <td className="first-row right-krna">
                        <button className="sales-btn green-btn">$20</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="first-row left-krna"><img className="sde" src={sde} alt="sde" /></td>
                      <td className="first-row"><strong>Adobe XD Part 02</strong><br />UIUX Design</td>
                      <td className="first-row right-krna">
                        <button className="sales-btn blue-btn">$20</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="first-row left-krna"><img className="sde" src={sde} alt="sde" /></td>
                      <td className="first-row"><strong>Adobe XD Part 03</strong><br />UIUX Design</td>
                      <td className="first-row right-krna">
                        <button className="sales-btn red-btn">$20</button>
                      </td>
                    </tr>
                  </table>
            </div>
        </div>

        {/* 3rd */}
        <div className="queries">
            <div className="stats-header">
                <div className="stats-title">Student Queries</div>
                <div className="stats-dots">.</div>
            </div>
            <div className="queries-body">
                <table className="first-table">
                    <tr>
                      <td className="first-row left-krna lesser-width"><img className="sde2" src={sde} alt="sde" /></td>
                      <td className="first-row left-krna extra-width" ><strong>Machine Learning Bootcamp</strong><br />By James Board</td>
                      <td className="first-row right-krna">
                        <button className="sales-btn blue-btn same-size-btn">View</button>
                        <button className="sales-btn red-btn same-size-btn">Decline</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="first-row left-krna lesser-width"><img className="sde2" src={sde} alt="sde" /></td>
                      <td className="first-row left-krna"><strong>Python & R in Data Science</strong><br />Data Science</td>
                      <td className="first-row right-krna">
                        <button className="sales-btn green-btn same-size-btn">Approval</button>
                        <button className="sales-btn red-btn same-size-btn">Decline</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="first-row left-krna lesser-width"><img className="sde2" src={sde} alt="sde" /></td>
                      <td className="first-row left-krna"><strong>SuperDataScience Support</strong><br />Data Science</td>
                      <td className="first-row right-krna">
                        <button className="sales-btn green-btn same-size-btn">Approval</button>
                        <button className="sales-btn red-btn same-size-btn">Decline</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="first-row left-krna lesser-width"><img className="sde2" src={sde} alt="sde" /></td>
                      <td className="first-row left-krna"><strong>Analyst Bootcamp 2020</strong><br />Data Science</td>
                      <td className="first-row right-krna">
                        <button className="sales-btn green-btn same-size-btn">Approval</button>
                        <button className="sales-btn red-btn same-size-btn">Decline</button>
                      </td>
                    </tr>
                  </table>
            </div>
        </div>

    </div>
  )
}

export default Sales