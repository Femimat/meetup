import Speaker from "./Speaker"

import meetlogo from "../Assets/Images/speaker-1.png"
import meetlog from "../Assets/Images/speaker-2.png"
import meetlogg from "../Assets/Images/speaker-3.png"
import meetpics from "../Assets/Images/speaker-4.png"
import meetpic from "../Assets/Images/speaker-5.png"
import meetuppics from "../Assets/Images/speaker-6.png"
import "../Assets/Styles/Grid.css"

function Grid() {
    return(
      <div className="grid-container">
        <h2 className="sec-title">Meet The Speakers</h2>
        <div className="grid">
          <Speaker
            speakerLogo={meetlogo}
            speakerName="Simon Collins"
            speakerDescription="Simon is a designer and partner at fictivekin and has worked in a variety of situations for bands, record labels, government, polar explorers, and most other things..."
          />

          <Speaker
            speakerLogo={meetlog}
            speakerName="Stephanie Troeth"
            speakerDescription="Stephie is a user experience researcher and designer. In over 15 years of working on the web, she has worn many hats, including a product lead for a tech startup in publishing..."
          />

          <Speaker
            speakerLogo={meetlogg}
            speakerName="Harry Roberts"
            speakerDescription="Harry is a freelance designer, developer, writer, speaker and front-end architect from the UK, previously working as Senior UI Developer for Sky. He Tweets at..."
          />

          <Speaker
            speakerLogo={meetpics}
            speakerName="Geri Coady"
            speakerDescription="Coady is a freelance designer, developer, writer, speaker and front-end architect from the UK, previously working as Senior UI Developer for Sky. He Tweets at..."
          />

          <Speaker
            speakerLogo={meetpic}
            speakerName="Andy Budd"
            speakerDescription="Budd is a freelance designer, developer, writer, speaker and front-end architect from the UK, previously working as Senior UI Developer for Sky. He Tweets at..."
          />
          
          <Speaker
            speakerLogo={meetuppics}
            speakerName="Christian Lauke"
            speakerDescription="Lauke is a freelance designer, developer, writer, speaker and front-end architect from the UK, previously working as Senior UI Developer for Sky. He Tweets at..."
          /> 
        </div>
      </div>
    )
}

export default Grid
