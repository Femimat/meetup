import meetuplogo from "./Assets/Images/meetup-logo.png"
import meetup from "./Assets/Images/rocket.png"
import meetlogo from "./Assets/Images/speaker-1.png"
import meetlog from "./Assets/Images/speaker-2.png"
import meetlogg from "./Assets/Images/speaker-3.png"
import meetpics from "./Assets/Images/speaker-4.png"
import meetpic from "./Assets/Images/speaker-5.png"
import meetuppics from "./Assets/Images/speaker-6.png"

import Header from "./Components/Header"
import Event from "./Components/Event"
import Grid from "./Components/Grid"
import Ticket from "./Components/Ticket"
import Schedule from "./Components/Schedule"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"

function App() {
  return (
    <div>
      <Header />
      <Event />
      <Grid />
      <Ticket />
      <Schedule />
      <Contact />
      <Footer />
    </div>
  );
}
    

export default App;
