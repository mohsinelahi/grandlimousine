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
                            <li> <Link to={"/alpharetta-car-service-atlanta-atl-airport/"} > Alpharetta </Link> </li>
                            <li> <Link to={"/athens-car-service-atlanta-atl-airport/"} > Athens </Link> </li>
                            <li> <Link to={"/car-service-atlanta-airport/"} > Atlanta Airport </Link> </li>
                            <li> <Link to={"/auburn-car-service/"} > Auburn </Link> </li>
                            <li> <Link to={"/buford-car-service/"} > Buford </Link> </li>
                            <li> <Link to={"/Austin-car-service/"} > Austin </Link> </li>
                            <li> <Link to={"/buckhead-car-service-atlanta-atl-airport/"} > Buckhead </Link> </li>                           
                            <li> <Link to={"/cordele-car-service-atlanta-atl-airport/"} > Cordele </Link> </li>                          
                            <li> <Link to={"/dallas-car-service/"} >Dallas</Link> </li>
                            <li> <Link to={"/corpus-christi-car-service/"} > Corpus Christi </Link> </li>         
                            <li> <Link to={"/dublin-car-service-atlanta-atl/"} > Dublin </Link> </li>      
                            <li> <Link to={"/dunwoody-car-service-atlanta-atl-airport-limousine/"} > Dunwoody </Link> </li>
                            <li> <Link to={"/car-service-elp-el-paso-airport/"} > El Paso </Link> </li>
                            <li> <Link to={"/flowery-branch-car-service-atlanta-atl/"} > Flowery Branch </Link> </li>
                            <li> <Link to={"/garland-car-service-dallas-fort-worth-dfw/"} > Garland </Link> </li>  
                            <li> <Link to={"/Hiram-car-service/"} > Hiram </Link> </li>
                            <li> <Link to={"/jonesboro-car-service-atlanta-atl-airport-limousine/"} > Jonesboro </Link> </li>
                            <li> <Link to={"/marietta-car-service-atlanta-atl-airport/"} > Marietta </Link> </li> 
                            <li> <Link to={"/naples-car-service-southwest-rsw/"} > Naples </Link> </li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                            <li> <Link to={"/phoenix-car-service-phx-airport/"} > Phoenix </Link> </li>
                            <li> <Link to={"/the-woodlands-car-service/"} > The Woodlands </Link> </li>
                            <li> <Link to={"/tomball-car-service/"} > Tomball </Link> </li>
                            <li> <Link to={"/tuscaloosa-car-service-birmingham-bhm/"} > Tuscaloosa </Link> </li>
                        </ul>
                        <ul className="list-two">
                            <li><a href="#">Hampton Car Service Atlanta (ATL) Airport Limousine</a></li>
                            <li><a href="#">West University Place Car Service Houston (IAH) Airport</a></li>
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