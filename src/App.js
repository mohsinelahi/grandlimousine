import React from 'react';
import './css/plugins.css';
import './css/style.css';
import './css/templete.css';
import './css/templete-backup.css';
import './css/skin/skin-1.css';


import Markup from './markup/Markup';
import Homepage from './markup/Pages/Homepage';
import Post from './markup/Pages/Post';
import About from './markup/Pages/About';
import Superbowl from './markup/Pages/Superbowl';
import Contact from './markup/Pages/Contact';
import Topcities from './markup/Pages/Topcities';
import Limousineservice from './markup/Services/Limousineservice';
import Corporatetransportation from './markup/Services/Corporatetransportation';
import Weddingtransportation from './markup/Services/Weddingtransportation';
import Airportcarservice from './markup/Services/Airportcarservice';
import Winetour from './markup/Services/Winetour';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Transportationcoordinator from './markup/Services/Transportationcoordinator';
import Churchlimo from './markup/Services/Churchlimo';
import Casinotrips from './markup/Services/Casinotrips';
import Partylimo from './markup/Services/Partylimo';
import Bachelorparty from './markup/Services/Bachelorparty';
import Bacheloretteparty from './markup/Services/Bacheloretteparty';
import Graduationlimo from './markup/Services/Graduationlimo';
import Concertlimo from './markup/Services/Concertlimo';
import Atlanta from './markup/Cities/Atlanta';
import Atlantacarservices from './markup/Cities/Atlantacarservices';
import Atlantalimousine from './markup/Cities/Atlantalimousine';
import Atlantapartybus from './markup/Cities/Atlantapartybus';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path="/super-bowl" component={Superbowl} />
          <Route path="/about-us" component={About} />
          <Route path="/posts" component={Post} /> 
          <Route path="/contact-us" component={Contact} /> 
          <Route path="/top-cities" component={Topcities} />
          <Route path="/limousine-service" component={Limousineservice} />
          <Route path="/corporate-transportation" component={Corporatetransportation} />
          <Route path="/wedding-transportation" component={Weddingtransportation} />
          <Route path="/airport-car-service" component={Airportcarservice} />
          <Route path="/wine-tour" component={Winetour} />
          <Route path="/Transportation-coordinator" component={Transportationcoordinator} />
          <Route path="/church-limo" component={Churchlimo} />
          <Route path="/casino-trips" component={Casinotrips} />
          <Route path="/party-limo" component={Partylimo} />
          <Route path="/bachelor-party" component={Bachelorparty} />
          <Route path="/bachelorette-party" component={Bacheloretteparty} />
          <Route path="/graduation-limo" component={Graduationlimo} />
          <Route path="/concert-limo" component={Concertlimo} />
          <Route path="/atlanta" component={Atlanta} />
          <Route path="/atlanta-car-services" component={Atlantacarservices} />
          <Route path="/atlanta-limousine" component={Atlantalimousine} />
          <Route path="/atlanta-party-bus" component={Atlantapartybus} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
  