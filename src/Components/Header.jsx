import meetuplogo from "../Assets/Images/meetup-logo.png"
import meetup from "../Assets/Images/rocket.png"
import "../Assets/Styles/Header.css"

function Header(props) {
    return(
      <div className="App" style={{backgroundColor:props.color}}>
        <header>
          <img className="img" src={meetuplogo} alt="meetup-log.png"/>
          <p>Attend the most awaited conference of 2015</p>
          <h3>to start you up with your business!</h3>
          <h4>20th to 22nd October, 2015</h4>
          <button className="btn">BUY TICKETS NOW</button>
        </header>

        <div>
          <img src={meetup} alt="rocket.png"/>
        </div>
      </div>
    )
}

export default Header