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
import Maconlimousine from './markup/Cities/Maconlimousine';
import Maconpartybus from './markup/Cities/Maconpartybus';
import Locations from './markup/Pages/Topcities';
import Augusta from './markup/Cities/Augusta';
import Augustacarservice from './markup/Cities/Augustacarservice';
import Augustalimousine from './markup/Cities/Augustalimousine';
import Augustapartybus from './markup/Cities/Augustapartybus';
import Chicago from './markup/Cities/Chicago';
import Chicagocarservice from './markup/Cities/Chicagocarservice';
import Chicagolimousine from './markup/Cities/Chicagolimousine';
import Chicagopartybus from './markup/Cities/Chicagopartybus';
import Miami from './markup/Cities/Miami';
import Miamicarservice from './markup/Cities/Miamicarservice';
import Miamilimousine from './markup/Cities/Miamilimousine';
import Miamipartybus from './markup/Cities/Miamipartybus';
import Orlando from './markup/Cities/Orlando';
import Orlandocarservice from './markup/Cities/Orlandocarservice';
import Orlandolimousine from './markup/Cities/Orlandolimousine';
import Orlandopartybus from './markup/Cities/Orlandopartybus';
import Palmbeach from './markup/Cities/Palmbeach';
import Palmbeachcarservice from './markup/Cities/Palmbeachcarservice';
import Palmbeachlimousine from './markup/Cities/Palmbeachlimousine';
import Palmbeachpartybus from './markup/Cities/Palmbeachpartybus';
import Destin from './markup/Cities/Destin';
import Destincarservice from './markup/Cities/Destincarservice';
import Destinlimousine from './markup/Cities/Destinlimousine';
import Destinpartybus from './markup/Cities/Destinpartybus';
import Columbus from './markup/Cities/Columbus';
import Columbuscarservice from './markup/Cities/Columbuscarservice';
import Gray from './markup/Cities/Gray';
import Graycarservice from './markup/Cities/Graycarservice';
import Graylimousine from './markup/Cities/Graylimousine';
import Louisville from './markup/Cities/Louisville';
import Alpharetta from './markup/Carservices/Alpharetta';
import Athens from './markup/Carservices/Athens';
import Atlantaairport from './markup/Carservices/Atlantaairport';
import Auburn from './markup/Carservices/Auburn';
import Buford from './markup/Carservices/Buford';
import Austin from './markup/Carservices/Austin';
import Buckhead from './markup/Carservices/Buckhead';
import Cordele from './markup/Carservices/Cordele';
import Corpuschristi from './markup/Carservices/Corpuschristi';
import Dublin from './markup/Carservices/Dublin';
import Dunwoody from './markup/Carservices/Dunwoody';
import Elpaso from './markup/Carservices/Elpaso';
import Flowerybranch from './markup/Carservices/Flowerybranch';
import Garland from './markup/Carservices/Garland';
import Hiram from './markup/Carservices/Hiram';
import Jonesboro from './markup/Carservices/Jonesboro';
import Marietta from './markup/Carservices/Marietta';
import Naples from './markup/Carservices/Naples';
import Woodlands from './markup/Carservices/Woodlands';
import Tomball from './markup/Carservices/Tomball';
import Tuscaloosa from './markup/Carservices/Tuscaloosa';
import Hampton from './markup/Carservices/Hampton';
import Westuniversity from './markup/Carservices/Westuniversity';
import Charlotte from './markup/Carservices/Charlotte';
import Help from './markup/Pages/Help';
import Benefitsairportcarservice from './markup/Pages/Benefitsairportcarservice';
import Warnerrobins from './markup/Carservices/Warnerrobins';
import Atlantahartsfieldjackson from './markup/Carservices/Atlantahartsfieldjackson';
import Chauffeur from './markup/Services/Chauffeur';
import Atlantahawkslimo from './markup/Services/Atlantahawkslimo';
import Valdosta from './markup/Carservices/Valdosta';
import Houstonsprinter from './markup/Services/Houstonsprinter';
import Bestairporthouston from './markup/Services/Bestairporthouston';
import Sanantonio from './markup/Carservices/Sanantonio';
import Houstonexecutiveshuttle from './markup/Carservices/Houstonexecutiveshuttle';
import Augustagolftransportation from './markup/Services/Augustagolftransportation';
import Nomistakeswithsanfrancisco from './markup/Services/Nomistakeswithsanfrancisco';
import Carolinapanthersfootball from './markup/Services/Carolinapanthersfootball';
import Greaterhouston from './markup/Services/Greaterhouston';
import Notfound from './markup/Pages/Notfound';
import Galveston from './markup/Carservices/Galveston';
import Riveroaks from './markup/Carservices/Riveroaks';
import Leaguecity from './markup/Carservices/Leaguecity';
import Greaterheights from './markup/Carservices/Greaterheights';
import Arlingtonairport from './markup/Carservices/Arlingtonairport';
import Dallasfortworth from './markup/Carservices/Dallasfortworth';
import Summertraveltips from './markup/Carservices/Summertraveltips';
import Masterstournament from './markup/Pages/Masterstournament';
import Atlantabachelorette from './markup/Pages/Atlantabachelorette';
import Newyorkcitytravel from './markup/Pages/Newyorkcitytravel';
import Sugarland from './markup/Carservices/Sugarland';
import Houstontexansfootball from './markup/Services/HoustonTexansFootball';
import RaymondJamesstadium from './markup/Pages/RaymondJamesstadium';
import Fortmyers from './markup/Carservices/Fortmyers';
import Dallasairport from './markup/Carservices/Dallasairport';
import Johnscreek from './markup/Carservices/Johnscreek';
import Birthdaylimo from './markup/Pages/Birthdaylimo';
import Atlantafalconsfootball from './markup/Services/Atlantafalconsfootball';


function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path="/super-bowl/" component={Superbowl} />
          <Route path="/about-us/" component={About} />
          <Route path="/posts/" component={Post} /> 
          <Route path="/contact-us/" component={Contact} /> 
          <Route path="/locations/" exact component={Locations} />
          <Route path="/limousine-service/" component={Limousineservice} />
          <Route path="/corporate-transportation" component={Corporatetransportation} />
          <Route path="/wedding-transportation/" component={Weddingtransportation} />
          <Route path="/airport-car-service/" component={Airportcarservice} />
          <Route path="/wine-tour/" component={Winetour} />
          <Route path="/Transportation-coordinator/" component={Transportationcoordinator} />
          <Route path="/church-limo/" component={Churchlimo} />
          <Route path="/casino-trips/" component={Casinotrips} />
          <Route path="/party-limo/" component={Partylimo} />
          <Route path="/bachelor-party/" component={Bachelorparty} />
          <Route path="/bachelorette-party/" component={Bacheloretteparty} />
          <Route path="/graduation-limo/" component={Graduationlimo} />
          <Route path="/concert-limo/" component={Concertlimo} />
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
          <Route path="/dallas-car-service/" component={Dallasservice} />
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
          <Route path="/locations/chicago/" component={Chicago} />
          <Route path="/locations/chicago-car-service/" component={Chicagocarservice} />
          <Route path="/locations/chicago-limousine/" component={Chicagolimousine} />
          <Route path="/locations/chicago-party-bus/" component={Chicagopartybus} />
          <Route path="/locations/miami/" component={Miami} />
          <Route path="/locations/miami-car-service/" component={Miamicarservice} />
          <Route path="/locations/miami-limousine/" component={Miamilimousine} />
          <Route path="/locations/miami-party-bus/" component={Miamipartybus} />
          <Route path="/locations/orlando/" component={Orlando} />
          <Route path="/locations/orlando-car-service/" component={Orlandocarservice} />
          <Route path="/locations/orlando-limousine/" component={Orlandolimousine} />
          <Route path="/locations/orlando-party-bus/" component={Orlandopartybus} />
          <Route path="/locations/palm-beach/" component={Palmbeach} />
          <Route path="/locations/palm-beach/" component={Palmbeachcarservice} />
          <Route path="/locations/palm-beach-limousine/" component={Palmbeachlimousine} />
          <Route path="/locations/palm-beach-party-bus/" component={Palmbeachpartybus} />
          <Route path="/locations/destin/" component={Destin} />
          <Route path="/locations/destin-car-service/" component={Destincarservice} />
          <Route path="/locations/destin-limousine/" component={Destinlimousine} />
          <Route path="/locations/destin-party-bus/" component={Destinpartybus} />
          <Route path="/locations/columbus/" component={Columbus} />
          <Route path="/locations/columbus-car-service/" component={Columbuscarservice} />
          <Route path="/locations/gray/" component={Gray} />
          <Route path="/locations/gray-car-service/" component={Graycarservice} />
          <Route path="/locations/gray-limousine/" component={Graylimousine} />
          <Route path="/locations/kentucky-car-service/" component={Louisville} />
          <Route path="/alpharetta-car-service-atlanta-atl-airport/" component={Alpharetta} />
          <Route path="/athens-car-service-atlanta-atl-airport/" component={Athens} />
          <Route path="/car-service-atlanta-airport/" component={Atlantaairport} />
          <Route path="/auburn-car-service/" component={Auburn} />
          <Route path="/buford-car-service/" component={Buford} />
          <Route path="/Austin-car-service/" component={Austin} />
          <Route path="/buckhead-car-service-atlanta-atl-airport/" component={Buckhead} />
          <Route path="/cordele-car-service-atlanta-atl-airport/" component={Cordele} />
          <Route path="/corpus-christi-car-service/" component={Corpuschristi} />
          <Route path="/dublin-car-service-atlanta-atl/" component={Dublin} />
          <Route path="/dunwoody-car-service-atlanta-atl-airport-limousine/" component={Dunwoody} />
          <Route path="/car-service-elp-el-paso-airport/" component={Elpaso} />
          <Route path="/flowery-branch-car-service-atlanta-atl/" component={Flowerybranch} />
          <Route path="/garland-car-service-dallas-fort-worth-dfw/" component={Garland} />
          <Route path="/Hiram-car-service/" component={Hiram} />
          <Route path="/jonesboro-car-service-atlanta-atl-airport-limousine/" component={Jonesboro} />
          <Route path="/marietta-car-service-atlanta-atl-airport/" component={Marietta} />
          <Route path="/naples-car-service-southwest-rsw/" component={Naples} />
          <Route path="/the-woodlands-car-service/" component={Woodlands} />
          <Route path="/tomball-car-service/" component={Tomball} />
          <Route path="/tuscaloosa-car-service-birmingham-bhm/" component={Tuscaloosa} />
          <Route path="/hampton-car-service-atlanta-atl-airport/" component={Hampton} />
          <Route path="/west-university-place-car-service-houston/" component={Westuniversity} />
          <Route path="/charlotte-car-service-charlotte-clt-airport/" component={Charlotte} />
          <Route path="/tips-for-fast-and-easy-departures-airport-car-service/" component={Help} />
          <Route path="/benefits-of-an-airport-car-service/" component={Benefitsairportcarservice} />
          <Route path="/warner-robins-car-service/" component={Warnerrobins} />
          <Route path="/atlanta-hartsfield-jackson-airport/" component={Atlantahartsfieldjackson} />
          <Route path="/chauffeur/" component={Chauffeur} />
          <Route path="/atlanta-hawks-limo/" component={Atlantahawkslimo} />
          <Route path="/valdosta-car-service/" component={Valdosta} />
          <Route path="/houston-sprinter-shuttle-services/" component={Houstonsprinter} />
          <Route path="/best-airport-car-service-deal-in-houston-tx/" component={Bestairporthouston} />
          <Route path="/san-antonio-airport-car-service-san-antonio-grand-limousine-corporate-transportation/" component={Sanantonio} />
          <Route path="/houston-executive-shuttle-service/" component={Houstonexecutiveshuttle} />
          <Route path="/augusta-golf-transportation/" component={Augustagolftransportation} />
          <Route path="/no-more-mistakes-with-san-francisco-limousine-service/" component={Nomistakeswithsanfrancisco} />
          <Route path="/carolina-panthers-football-limo-service/" component={Carolinapanthersfootball} />
          <Route path="/greater-houston/" component={Greaterhouston} />
          <Route path="/404/" component={Notfound} />
          <Route path="/galveston-car-service-houston-iah-airport/" component={Galveston} />
          <Route path="/river-oaks-car-service-houston-iah-airport/" component={Riveroaks} />
          <Route path="/league-city-car-service-houston-iah-airport/" component={Leaguecity} />
          <Route path="/greater-heights-car-service-houston-iah/" component={Greaterheights} />
          <Route path="/arlington-airport-car-service/" component={Arlingtonairport} />
          <Route path="/dallas-car-service-dallas-fort-worth-dfw/" component={Dallasfortworth} />
          <Route path="/summer-travel-tips-usa/" component={Summertraveltips} />
          <Route path="/the-masters-tournament/" component={Masterstournament} />
          <Route path="/atlanta-bachelorette-party-limo/" component={Atlantabachelorette} />
          <Route path="/new-york-city-travel-tours/" component={Newyorkcitytravel} />
          <Route path="/sugar-land-car-service-houston-iah-airport/" component={Sugarland} />
          <Route path="/houston-texans-football-limo-service/" component={Houstontexansfootball} />
          <Route path="/raymond-james-stadium-limo-transportation/" component={RaymondJamesstadium} />
          <Route path="/fort-myers-car-service-fort-myers-rsw/" component={Fortmyers} />
          <Route path="/dallas-airport-car-service-dallas-grand-limousine-corporate-transportation/" component={Dallasairport} />
          <Route path="/johns-creek-car-service-atlanta-atl/" component={Johnscreek} />
          <Route path="/birthday-limo/" component={Birthdaylimo} />
          <Route path="/atlanta-falcons-football-limo-service/" component={Atlantafalconsfootball} />







        </Switch>
      </div>
    </Router>
  );
}

export default App;
  