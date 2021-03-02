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
import Header from './markup/Layout/Header';
import history from './markup/Pages/History';


function App() {
  return (
    <Router history={history}>
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
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
  