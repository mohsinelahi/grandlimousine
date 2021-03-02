import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import Toplimousine from '../Element/Toplimousine';
import Quotebox from '../Element/Quotebox';


class Topcities extends Component {
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
                                <li><a href="#">San Francisco, California</a></li>
                                <li><a href="#">Los Angeles, California</a></li>
                                <li><a href="#">Houston, Texas</a></li>
                                <li><a href="#">Chicago, Illinois</a></li>
                                <li><a href="#">New York</a></li>
                                <li><a href="#">Orlando, Florida</a></li>
                                <li><a href="#">Miami, Florida</a></li>
                                <li><a href="#">Destin, Florida</a></li>
                                <li><a href="#">Jacksonville, Florida</a></li>
                                <li><a href="#">Atlanta, Georgia</a></li>
                                <li><a href="#">Columbus, Georgia</a></li>
                                <li><a href="#">Augusta, Georgia</a></li>
                                <li><a href="#">Macon, Georgia</a></li>
                                <li><a href="#">Savannah, Georgia</a></li>
                                <li><a href="#">Gray, Georgia</a></li>
                                <li><a href="#">Palm Beach, FL</a></li>
                                <li><a href="#">Kentucky</a></li>
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
                            <li><a href="#">Dallas</a></li>
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
                            <li><a href="#">Phoenix</a></li>
                            <li><a href="#">The Woodlands</a></li>
                            <li><a href="#">Tomball</a></li>
                            <li><a href="#">Tuscaloosa</a></li>
                        </ul>
                        <ul className="list-two">
                            <li><a href="#">Garland Car Service – Book Direct Since 2007</a></li>
                            <li><a href="#">Dallas Car Service Dallas Fort Worth (DFW) Airport Limousine</a></li>
                            <li><a href="#">Flowery Branch Car Service Atlanta (ATL) Book Direct Since 2007</a></li>
                            <li><a href="#">Corpus Christi Car Service Houston (IAH) Airport Limousine</a></li>
                            <li><a href="#">Phoenix Car Service Phoenix (PHX) Book Direct Since 2007</a></li>
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

export default Topcities;