import meetlogo from "../Assets/Images/speaker-1.png"

export default function Speaker(props) {
    return(
        <div className="grid-row">
            <img className="body-image" src={props.speakerLogo} alt="speaker-1.png"/>
            <h3>{props.speakerName}</h3>
            <p>{props.speakerDescription}</p>
        </div>
    )
}