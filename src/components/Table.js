import React from 'react'
import "../styles/Table.css"
import sde from '../images/sde.jpg'

const Table = () => {
  return (
    <div id="full-table">
        <div className="table-header">
            <div className="table-title">
                <strong>Course Status</strong>
            </div>
            <div className="table-options">
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
        <div className="table-body">
            <table className="table-last">

                <tr className="heading-row">
                    <td >Name</td>
                    <td className="second">Category</td>
                    <td className="third">Sale</td>
                    <td className="fourth">Rating</td>
                    <td className="fifth">Earning</td>
                    <td className="sixth">Visitor</td>
                </tr>
                <tr className="table-ki-row">
                    <td className="first">
                        <div className="pehla-div">
                            <img className="first-img" src={sde} alt="course"/>
                            <div className="pp-div">
                                Complete Python Bootcamp in Python<br/>
                                Development
                            </div>
                        </div>
                    </td>
                    <td className="second">Design</td>
                    <td className="third">150</td>
                    <td className="fourth">⭐4.5</td>
                    <td className="fifth">$610.50</td>
                    <td className="sixth">24,512</td>
                </tr>
                <tr className="table-ki-row">
                    <td className="first">
                        <div className="pehla-div">
                            <img className="first-img" src={sde} alt="course"/>
                            <div className="pp-div">
                                Advanced Excel Formulas & Functions<br/>
                                Learn Backend
                            </div>
                        </div>
                    </td>                    
                    <td className="second">Development</td>
                    <td className="third">20</td>
                    <td className="fourth">⭐5.0</td>
                    <td className="fifth">$55.50</td>
                    <td className="sixth">6,200</td>
                </tr>
                <tr className="table-ki-row">
                    <td className="first">
                        <div className="pehla-div">
                            <img className="first-img" src={sde} alt="course"/>
                            <div className="pp-div">
                                Video Editor in Filmora9<br/>
                                Video-Creation
                            </div>
                        </div>
                    </td>
                    <td className="second">Photography</td>
                    <td className="third">56</td>
                    <td className="fourth">⭐4.5</td>
                    <td className="fifth">$610.50</td>
                    <td className="sixth">24,512</td>
                </tr>
                <tr className="table-ki-row">
                    <td className="first">
                        <div className="pehla-div">
                            <img className="first-img" src={sde} alt="course"/>
                            <div className="pp-div">
                                Online Meeting Facilitation: The 4 Secret Keys<br/>
                                Marketing-Courses
                            </div>
                        </div>
                    </td>
                    <td className="second">Marketing</td>
                    <td className="third">150</td>
                    <td className="fourth">⭐4.5</td>
                    <td className="fifth">$610.50</td>
                    <td className="sixth">24,512</td>
                </tr>
                <tr className="table-ki-row">
                    <td className="first">
                        <div className="pehla-div">
                            <img className="first-img" src={sde} alt="course"/>
                            <div className="pp-div">
                                Intermediate Blues Rhythm Guitar<br/>
                                Music Fundamentals
                            </div>
                        </div>
                    </td>
                    <td className="second">Music</td>
                    <td className="third">30</td>
                    <td className="fourth">⭐5.0</td>
                    <td className="fifth">$110.50</td>
                    <td className="sixth">6,512</td>
                </tr>
                <tr className="table-ki-row">
                    <td className="first">
                        <div className="pehla-div">
                            <img className="first-img" src={sde} alt="course"/>
                            <div className="pp-div">
                                B2B Sales Masterclass: People-Focused Selling<br/>
                                Business Courses
                            </div>
                        </div>
                    </td>
                    <td className="second">Business</td>
                    <td className="third">90</td>
                    <td className="fourth">⭐4.5</td>
                    <td className="fifth">$240.50</td>
                    <td className="sixth">512</td>
                </tr>

            </table>
        </div>
    </div>
  )
}

export default Table