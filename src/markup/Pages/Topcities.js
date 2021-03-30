import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import Toplimousine from '../Element/Toplimousine';
import Quotebox from '../Element/Quotebox';
import Topcitiesbanner from '../Element/Topcitiesbanner';


class Locations extends Component {
	render(){
		return(
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">

                <Topcitiesbanner />

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
                                <li> <Link to={"/locations/san-francisco/"} rel="noopener noreferrer"> San Francisco, California </Link> </li>
                                <li> <Link to={"/locations/los-angeles/"} rel="noopener noreferrer"> Los Angeles, California</Link> </li>
                                <li> <Link to={"/locations/houston/"} rel="noopener noreferrer"> Houston, Texas </Link> </li>
                                <li> <Link to={"/locations/chicago/"} rel="noopener noreferrer">Chicago, Illinois</Link></li>
                                <li> <Link to={"/locations/new-york/"} rel="noopener noreferrer"> New York </Link> </li>
                                <li> <Link to={"/locations/orlando/"} rel="noopener noreferrer"> Orlando, Florida </Link> </li>
                                <li> <Link to={"/locations/miami/"} rel="noopener noreferrer"> Miami, Florida </Link> </li>
                                <li> <Link to={"/locations/destin/"} rel="noopener noreferrer"> Destin, Florida </Link> </li>
                                <li> <Link to={"/locations/jacksonville/"} rel="noopener noreferrer"> Jacksonville, Florida </Link> </li>
                                <li> <Link to={"/locations/atlanta/"} rel="noopener noreferrer"> Atlanta, Georgia </Link> </li>
                                <li> <Link to={"/locations/columbus/"} rel="noopener noreferrer"> Columbus, Georgia </Link> </li>
                                <li> <Link to={"/locations/augusta/"} rel="noopener noreferrer"> Augusta, Georgia </Link> </li>
                                <li> <Link to={"/locations/macon/"} rel="noopener noreferrer"> Macon, Georgia </Link> </li>
                                <li> <Link to={"/locations/savannah/"} rel="noopener noreferrer"> Savannah, Georgia </Link> </li>
                                <li> <Link to={"/locations/gray/"} rel="noopener noreferrer"> Gray, Georgia </Link> </li>
                                <li> <Link to={"/locations/palm-beach/"} rel="noopener noreferrer"> Palm Beach, FL </Link> </li>
                                <li> <Link to={"/locations/kentucky-car-service/"} rel="noopener noreferrer"> Kentucky </Link> </li>
                            </ul>
                    </div>
                </section>


                <section className="section-full car-services links">
                    <div className="container">
                    <h4 className="heading pt-4">Car Services</h4>
                        <ul className="list-one">
                            <li> <Link to={"/alpharetta-car-service-atlanta-atl-airport/"} rel="noopener noreferrer"> Alpharetta </Link> </li>
                            <li> <Link to={"/athens-car-service-atlanta-atl-airport/"} rel="noopener noreferrer"> Athens </Link> </li>
                            <li> <Link to={"/car-service-atlanta-airport/"} rel="noopener noreferrer"> Atlanta Airport </Link> </li>
                            <li> <Link to={"/auburn-car-service/"} rel="noopener noreferrer"> Auburn </Link> </li>
                            <li> <Link to={"/buford-car-service/"} rel="noopener noreferrer"> Buford </Link> </li>
                            <li> <Link to={"/Austin-car-service/"} rel="noopener noreferrer"> Austin </Link> </li>
                            <li> <Link to={"/buckhead-car-service-atlanta-atl-airport/"} rel="noopener noreferrer"> Buckhead </Link> </li>                           
                            <li> <Link to={"/cordele-car-service-atlanta-atl-airport/"} rel="noopener noreferrer"> Cordele </Link> </li>                          
                            <li> <Link to={"/dallas-car-service/"} rel="noopener noreferrer">Dallas</Link> </li>
                            <li> <Link to={"/corpus-christi-car-service/"} rel="noopener noreferrer"> Corpus Christi </Link> </li>         
                            <li> <Link to={"/dublin-car-service-atlanta-atl/"} rel="noopener noreferrer"> Dublin </Link> </li>      
                            <li> <Link to={"/dunwoody-car-service-atlanta-atl-airport-limousine/"} rel="noopener noreferrer"> Dunwoody </Link> </li>
                            <li> <Link to={"/car-service-elp-el-paso-airport/"} rel="noopener noreferrer"> El Paso </Link> </li>
                            <li> <Link to={"/flowery-branch-car-service-atlanta-atl/"} rel="noopener noreferrer"> Flowery Branch </Link> </li>
                            <li> <Link to={"/garland-car-service-dallas-fort-worth-dfw/"} rel="noopener noreferrer"> Garland </Link> </li>  
                            <li> <Link to={"/Hiram-car-service/"} rel="noopener noreferrer"> Hiram </Link> </li>
                            <li> <Link to={"/jonesboro-car-service-atlanta-atl-airport-limousine/"} rel="noopener noreferrer"> Jonesboro </Link> </li>
                            <li> <Link to={"/marietta-car-service-atlanta-atl-airport/"} rel="noopener noreferrer"> Marietta </Link> </li> 
                            <li> <Link to={"/naples-car-service-southwest-rsw/"} rel="noopener noreferrer"> Naples </Link> </li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                            <li> <Link to={"/phoenix-car-service-phx-airport/"} rel="noopener noreferrer"> Phoenix </Link> </li>
                            <li> <Link to={"/the-woodlands-car-service/"} rel="noopener noreferrer"> The Woodlands </Link> </li>
                            <li> <Link to={"/tomball-car-service/"} rel="noopener noreferrer"> Tomball </Link> </li>
                            <li> <Link to={"/tuscaloosa-car-service-birmingham-bhm/"} rel="noopener noreferrer"> Tuscaloosa </Link> </li>
                        </ul>
                        <ul className="list-two">
                        <li> <Link to={"/hampton-car-service-atlanta-atl-airport/"} rel="noopener noreferrer"> Hampton Car Service Atlanta (ATL) Airport Limousine </Link> </li>
                        <li> <Link to={"/west-university-place-car-service-houston/"} rel="noopener noreferrer"> West University Place Car Service Houston (IAH) Airport </Link> </li>
                        <li> <Link to={"/charlotte-car-service-charlotte-clt-airport/"} rel="noopener noreferrer"> Charlotte Car Service (CLT) – Book Direct Since 2007 </Link> </li>

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