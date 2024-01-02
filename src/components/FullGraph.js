import React from 'react'
import "../styles/FullLine.css"
import LineGraph from './LineGraph'
import BarGraph from './BarGraph'

const FullGraph = () => {
  return (
    <div className="full-graph">

        <div className="full-line-graph">
            <div className="line-graph-header">
                <div className="line-graph-title">
                    <ul className="line-graph-list">
                        <li className='revenue'>
                            <p className="title-p"><strong>Revenue</strong></p>
                        </li>
                        <li>
                            <button className="title-p up-graph">0.3%</button>
                        </li>
                    </ul>
                </div>
                <div className="line-graph-options">
                    <ul className="line-graph-list">
                        <li>
                            <p className="options-p">Course Visit</p>
                        </li>
                        <li>
                            <span className="dot blue"></span>
                        </li>
                        <li>
                            <p className="options-p">Course Sale</p>
                        </li>
                        <li>
                            <span className="dot orange"></span>
                        </li>
                        <li>
                            <select name="month" id="cars">
                                <option value="1">This Month</option>
                                <option value="3">Three Months</option>
                                <option value="6">Six Months</option>
                                <option value="12">1 Year</option>
                            
                            </select>
                        </li>
                    </ul>
                </div>
                    
            </div>
            <div className="line-graph-body">
              <LineGraph/>
            </div>
        </div>

        <div className="full-bar-graph">
            <div className="line-graph-header">
                <div className="line-graph-title">
                    <ul className="line-graph-list">
                        <li className='revenue'>
                            <p className="title-p"><strong>Visitors</strong></p>
                        </li>
                        <li>
                            <button className="title-p down-graph">0.3%</button>
                        </li>
                    </ul>
                </div>
                <div className="line-graph-options">
                    <ul className="line-graph-list">
                        <li>
                            <button id="dots-button">.</button>
                        </li>
                    </ul>
                </div>
                
            </div>

            <div className="line-graph-body">
              <BarGraph />
            </div>
        </div>



    </div>
  )
}

export default FullGraph