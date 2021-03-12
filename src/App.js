import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
import Losangeles from './markup/Cities/Losangeles';
import Losangelescarservices from './markup/Cities/Losangelescarservice';
import Losangeleslimousine from './markup/Cities/Losangeleslimousine';
import Losangelespartybus from './markup/Cities/Losangelespartybus';
import Houston from './markup/Cities/Houston';
import Houstoncarservice from './markup/Cities/Houstoncarservice';
import Houstonlimousine from './markup/Cities/Houstonlimousine';
import Houstonpartybus from './markup/Cities/Houstonpartybus';
import Sanfrancisco from './markup/Cities/Sanfrancisco';
import Sanfranciscocarservices from './markup/Cities/Sanfranciscocarservice';
import Sanfranciscolimousine from './markup/Cities/Sanfranciscolimousine';
import Sanfranciscopartybus from './markup/Cities/Sanfranciscopartybus';
import Newyork from './markup/Element/Newyork';
import Newyorkcarservice from './markup/Cities/Newyorkcarservice';
import Newyorklimousine from './markup/Cities/Newyorklimousine';
import Newyorkpartybus from './markup/Cities/Newyorkpartybus';
import Savannah from './markup/Cities/Savannah';
import Savannahcarservice from './markup/Cities/Savannahcarservice';
import Savannahlimousine from './markup/Cities/Savannahlimousine';
import Savannahpartybus from './markup/Cities/Savannahpartybus';
import Jacksonville from './markup/Cities/jacksonville';
import jacksonvillecarservice from './markup/Cities/jacksonvillecarservice';
import Jacksonvillelimousine from './markup/Cities/Jacksonvillelimousine';
import Jacksonvillepartybus from './markup/Cities/Jacksonvillepartybus';
import Dallasservice from './markup/Cities/Dallas';
import Nashville from './markup/Cities/Nashville';
import Phoenix from './markup/Cities/Phoenix';
import Macon from './markup/Cities/Macon';
import Maconcarservices from './markup/Cities/Maconcarservice';
import Maconlimousine from './markup/Cities/Maconimousine';
import Maconpartybus from './markup/Cities/Maconpartybus';
import Locations from './markup/Pages/Topcities';
import Augusta from './markup/Cities/Augusta';
import Augustacarservice from './markup/Cities/Augustacarservice';
import Augustalimousine from './markup/Cities/Augustalimousine';
import Augustapartybus from './markup/Cities/Augustapartybus';


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
          <Route exact path="/locations/" component={Locations} />
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
          <Route path="/locations/atlanta/" component={Atlanta} />
          <Route path="/locations/atlanta-car-service/" component={Atlantacarservices} />
          <Route path="/locations/atlanta-limousine/" component={Atlantalimousine} />
          <Route path="/locations/atlanta-party-bus/" component={Atlantapartybus} />
          <Route path="/locations/los-angeles/" component={Losangeles} />
          <Route path="/locations/los-angeles-car-service/" component={Losangelescarservices} />
          <Route path="/locations/los-angeles-limousine/" component={Losangeleslimousine} />
          <Route path="/locations/los-angeles-party-bus/" component={Losangelespartybus} />
          <Route path="/locations/houston/" component={Houston} />
          <Route path="/locations/houston-car-service/" component={Houstoncarservice} />
          <Route path="/locations/houston-limousine/" component={Houstonlimousine} />
          <Route path="/locations/houston-party-bus/" component={Houstonpartybus} />
          <Route path="/locations/san-francisco/" component={Sanfrancisco} />
          <Route path="/locations/san-francisco-car-service/" component={Sanfranciscocarservices} />
          <Route path="/locations/san-francisco-limousine/" component={Sanfranciscolimousine} />
          <Route path="/locations/san-francisco-party-bus/" component={Sanfranciscopartybus} />
          <Route path="/locations/new-york/" component={Newyork} />
          <Route path="/locations/new-york-car-service/" component={Newyorkcarservice} />
          <Route path="/locations/new-york-limousine/" component={Newyorklimousine} />
          <Route path="/locations/new-york-party-bus/" component={Newyorkpartybus} />
          <Route path="/locations/savannah/" component={Savannah} />
          <Route path="/locations/savannah-car-service/" component={Savannahcarservice} />
          <Route path="/locations/savannah-limousine/" component={Savannahlimousine} />
          <Route path="/locations/savannah-party-bus/" component={Savannahpartybus} />
          <Route path="/locations/jacksonville/" component={Jacksonville} />
          <Route path="/locations/jacksonville-car-service/" component={jacksonvillecarservice} />
          <Route path="/locations/jacksonville-limousine/" component={Jacksonvillelimousine} />
          <Route path="/locations/jacksonville-party-bus/" component={Jacksonvillepartybus} />
          <Route path="/dallas-airport-car-service-dallas-grand-limousine-corporate-transportation/" component={Dallasservice} />
          <Route path="/nashville-car-service-nashville-bna-airport/" component={Nashville} />
          <Route path="/phoenix-car-service-phx-airport/" component={Phoenix} />
          <Route path="/locations/macon/" component={Macon} />
          <Route path="/locations/macon-car-service/" component={Maconcarservices} />
          <Route path="/locations/macon-limousine/" component={Maconlimousine} />
          <Route path="/locations/macon-party-bus/" component={Maconpartybus} />
          <Route path="/locations/augusta/" component={Augusta} />
          <Route path="/locations/augusta-car-service/" component={Augustacarservice} />
          <Route path="/locations/augusta-limousine/" component={Augustalimousine} />
          <Route path="/locations/augusta-party-bus/" component={Augustapartybus} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
  