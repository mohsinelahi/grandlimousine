import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import Toplimousine from '../Element/Toplimousine';
import Quotebox from '../Element/Quotebox';


class Locations extends Component {
	render(){
		return(
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">

                <InnerBanner />

                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title">Locations</h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>The World’s Leading Provider of High-Quality Chauffeur & Limousine Transportation</p>
                        </div>
                    </div>
                </section>


                <section className="section-full north-america links">
                    <div className="container">
                        <h4 className="heading pt-4">North America</h4>
                            <ul>
                                <li> <Link to={"/locations/san-francisco/"}> San Francisco, California </Link> </li>
                                <li> <Link to={"/locations/los-angeles/"}> Los Angeles, California</Link> </li>
                                <li> <Link to={"/locations/houston/"}> Houston, Texas </Link> </li>
                                <li> <Link to={"/locations/chicago/"}>Chicago, Illinois</Link></li>
                                <li> <Link to={"/locations/new-york/"}> New York </Link> </li>
                                <li> <Link to={"/locations/orlando/"}> Orlando, Florida </Link> </li>
                                <li> <Link to={"/locations/miami/"}> Miami, Florida </Link> </li>
                                <li> <Link to={"/locations/destin/"}> Destin, Florida </Link> </li>
                                <li> <Link to={"/locations/jacksonville/"}> Jacksonville, Florida </Link> </li>
                                <li> <Link to={"/locations/atlanta/"}> Atlanta, Georgia </Link> </li>
                                <li> <Link to={"/locations/columbus/"}> Columbus, Georgia </Link> </li>
                                <li> <Link to={"/locations/augusta/"}> Augusta, Georgia </Link> </li>
                                <li> <Link to={"/locations/macon/"}> Macon, Georgia </Link> </li>
                                <li> <Link to={"/locations/savannah/"}> Savannah, Georgia </Link> </li>
                                <li> <Link to={"/locations/gray/"}> Gray, Georgia </Link> </li>
                                <li> <Link to={"/locations/palm-beach/"}> Palm Beach, FL </Link> </li>
                                <li> <Link to={"/locations/kentucky-car-service/"}> Kentucky </Link> </li>
                            </ul>
                    </div>
                </section>


                <section className="section-full car-services links">
                    <div className="container">
                    <h4 className="heading pt-4">Car Services</h4>
                        <ul className="list-one">
                            <li><a href="#">Alpharetta</a></li>
                            <li><a href="#">Athens</a></li>
                            <li><a href="#">Atlanta Airport</a></li>
                            <li><a href="#">Auburn</a></li>
                            <li><a href="#">Buford</a></li>
                            <li><a href="#">Austin</a></li>
                            <li><a href="#">Buckhead</a></li>
                            <li><a href="#">Cordele</a></li>
                            <li> <Link to={"/dallas-airport-car-service-dallas-grand-limousine-corporate-transportation"} >Dallas</Link> </li>
                            <li><a href="#">Corpus Christi</a></li>
                            <li><a href="#">Dublin</a></li>
                            <li><a href="#">Dunwoody</a></li>
                            <li><a href="#">El Paso</a></li>
                            <li><a href="#">Flowery Branch</a></li>
                            <li><a href="#">Garland</a></li>
                            <li><a href="#">Hiram</a></li>
                            <li><a href="#">Jonesboro</a></li>
                            <li><a href="#">Marietta</a></li>
                            <li><a href="#">Naples</a></li>
                            <li> <Link to={"/phoenix-car-service-phx-airport"} > Phoenix </Link> </li>
                            <li><a href="#">The Woodlands</a></li>
                            <li><a href="#">Tomball</a></li>
                            <li><a href="#">Tuscaloosa</a></li>
                        </ul>
                        <ul className="list-two">
                            <li><a href="#">Garland Car Service – Book Direct Since 2007</a></li>
                            <li> <Link to={"/dallas-airport-car-service-dallas-grand-limousine-corporate-transportation"}> Dallas Car Service Dallas Fort Worth (DFW) Airport Limousine </Link> </li>
                            <li><a href="#">Flowery Branch Car Service Atlanta (ATL) Book Direct Since 2007</a></li>
                            <li><a href="#">Corpus Christi Car Service Houston (IAH) Airport Limousine</a></li>
                            <li>  <Link to={"/phoenix-car-service-phx-airport"} > Phoenix Car Service Phoenix (PHX) Book Direct Since 2007 </Link> </li>
                            <li><a href="#">Hampton Car Service Atlanta (ATL) Airport Limousine</a></li>
                            <li><a href="#">West University Place Car Service Houston (IAH) Airport</a></li>
                            <li><a href="#">Athens Car Service Atlanta (ATL) Airport Limousine</a></li>
                            <li><a href="#">Charlotte Car Service (CLT) – Book Direct Since 2007</a></li>
                        </ul>
                    </div>
                </section>

                <Quotebox />

                <Toplimousine />

            </div>
            <Footer  />
        </div>
		)
	}
}

export default Locations;