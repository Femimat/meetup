import meetlogo from "../Assets/Images/speaker-1.png"
import meetlog from "../Assets/Images/speaker-2.png"
import "../Assets/Styles/Schedule.css"

function Schedule() {
    return(
      <div className="event-container">
        <h2>Event Schedule</h2>
        <div className="event-guide">
          <a href="http://designerdada.com" className="active">Day 01 (20<sup>th</sup>, October)</a>
          <a href="http://designerdada.com" className="active">Day 02 (21<sup>st</sup>, October)</a>
          <a href="http://designerdada.com" className="active">Day 03 (22<sup>nd</sup>, October)</a>
        </div>

        <div className="body-guide">
          <div className="row">
            <a>
              <img className="media-object" src={meetlogo} alt="speaker-1.png"/>
            </a>
          </div>

          <div className="row-pack">
            <h4>10am to 10:30am</h4>
            <h5>THE DESIGNER'S GUIDE TO BEING ESSENTIAL</h5>
            <p>Simon is a designer and partner at Fictivekin and has worked in a variety of situations for bands, record labels, governments, polar explorers, and most other things.</p>
          </div>

          <div className="row">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
            <a>
              <img className="media-object" src={meetlog} alt="speaker-2.png"/>
            </a>
          </div>

          <div className="row-pack">
            <h4>10:45am to 11:30am</h4>
            <h5>THE DESIGNER'S GUIDE TO BEING ESSENTIAL</h5>
            <p>Simon is a designer and partner at Fictivekin and has worked in a variety of situations for bands, record labels, governments, polar explorers, and most other things.</p>
          </div>
        </div>
      </div>
    )
}

export default Schedule