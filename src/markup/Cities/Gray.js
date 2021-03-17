import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import Carservices from '../Element/Carservices';
import InnerBanner from '../Element/Innerbanner';


var Grayimg1 = require('../../images/cities/limo_chauffeur_service.jpg');


class Gray extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <InnerBanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title">Gray – Official Website</h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>24/7 transfer chauffeur company to contact</p>
                        </div>
                    </div>
                </section>


                <section className="section-full cities-sec-one">
                    <div className="cities-content heading">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="left">
                                    <p> <strong> Gray – </strong>  Are you in search of a limousine service provider in Gray? For Car Service to the airport, or for rail transport, we Grand Limousine can help. Whether you are searching for the best transportation from Gray or you want to go to any other well-known destination, we will get you there on time. Come and deal with us to enjoy safe and secure rides.</p>
                                    <p>Gray Grand Limousine services are always available to cruise terminals and all major airports. You can reserve our private car services online. Chauffeurs with proper training and years of experience drive all our cars. Gray Grand Limousine offers transports to and from ship harbors. This gives you unlimited access to airports and other travel venues that you can access.</p>
                                    <p>Grand Limousine Service Gray transportation resolves all the hassles that travelers encounter while visiting the airports and harbors. We assure comfortable and safe transportation. After you have a trip by the sea or the air, journeying with Gray Grand Limousine will be a calming experience. Also, you can choose one of our rides from the house or the hotel.</p>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="right">
                                        <div className="allegiant-stadium text-center">
                                            <img src={Grayimg1}></img>
                                            <div className="allegiant-stadium-btn custom-btn">
                                                <a href="/contact-us">Contact Us</a>
                                                <a href="tel:4044244499"> Call (404) 424-4499  </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                        </div>
                    </div>
                </section>



                <section className="section-full cities-sec-two">
                    <div className="cities-content heading">
                        <div className="container">
       
                            <ul className="atlanta-serivces">
                                <li> <Link to={"/locations/gray-car-service/"}> Gray Car Service </Link> </li>
                                <li> <Link to={"/locations/gray-limousine/"}> Gray Limousine </Link> </li>

                            </ul>
                        
                            <p>With our car and limousine services, you can explore some of the most exotic places in Gray. Enjoy the sights and take pleasure with our insider’s tours of the tourist attractions. We accompany your group on special events and offer you the best support in Wi-Fi, refreshment, and a travel guide. Our chauffeurs know, years of experience, dedication, sincerity, and passion.</p>
                            <p>Wherever you are traveling, we assure you of the utmost comfort and safety so you can enjoy the journey stress-freely. To ensure your safety, Gray Grand Limousine offers only certificate holders, professional chauffeurs. We maintain our fleet meticulously.</p>
                            <p>Our chauffeurs hold a valid license and drive insured vehicles. For providing you with ultimate comfort and luxury, we offer credit card payment facilities. We are your travel guide, and we strive to provide you with premium quality and a memorable solution.</p>
                            <p>Gray Grand Limousine owns and has been operating multiple new rides. We have a wide range of vehicles including limousines, 56 Passenger Motor Coaches along with SUVs, Sedans, and Hybrids, executive Vans, luxury mini Buses for carrying up to 39 passengers. Also, we have party buses for 12-25 passengers.</p>

                            <h4>Experienced chauffeurs in Gray</h4>
                            <p>To assure you get a premium quality car and limousine service, one of the most experienced and talented management teams leads the Gray limousine. Our reputation, development, and expansion allow us to get the attention of high management proficiency in the business. Offering the premium advantages along with the safest sense of dependability, we take the best care of our customers.</p>
                            <p>Our chauffeurs take pride in offering the best transport and customer support. Our highly proficient management crew has introduced an innovative trend of limousine service in Gray. We aim at offering an extraordinary town car service every time, every day, whenever you go for a trip. That is why our Grand Limousine is the best choice for transport in Gray.</p>
                            <p>No one in the business can beat the competitive rate and premium quality limousine service we provide. Check out why people throughout Gray and in the surrounding area of the country prefer choosing us over anyone else for their transport.</p>

                            <h4>The all-inclusive solution for transportation in Gray</h4>
                            <p>With us, you will get shared airport transfers, transport for a private trip, group travel, corporate outings, weddings, night-out, and various other facilities. We offer a one-stop solution for all transport needs. From sedans to motor coaches–we have everything to meet your needs.</p>
                            <p>We offer our car and limousine services worldwide, and we are one of the trusted names in this business. We leave you no chance to find fault with our town car services. It is a seamless transport solution that you can enjoy with our Grand Limousine. Just one phone call and that is all. On the ground of transportation, we solve your problems with a finger click!</p>
                            <p>Check out our entire website to unveil the secrets why people in Gray and the surrounding area prefer dealing only with Grand Limousine.with Grand Limousine. Call us at (404) 424-4499 to contact us or if you have any queries about our services.</p>

               </div>
                    </div>
                </section>

                <section className="section-full cities-sec-three">
                    <div className="cities-content heading">
                        <div className="container">
                            <div className="car-services">
                                <div className="section-head text-black text-center">
                                    <h2 className="box-title">Check out our Car Services in Gray
</h2>
                                    <div className="dlab-separator bg-primary"></div>
                                </div>
                                <Carservices />
                            </div>
                        </div>
                    </div>
                </section>

                
                <section className="section-full cities-sec-four">
                    <div className="cities-content heading">
                        <div className="container">
                            <div className="contact-local-teams">
                                <div className="section-head text-black text-center">
                                    <h2 className="box-title">Contact our local team in Gray</h2>
                                    <div className="dlab-separator bg-primary"></div>
                                    <p>Limousine & Private chauffeur service in Gray</p>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 text-center">
                                        <h5>Have Questions?</h5>
                                        <p>We are here to <a href="#" className="anchor"> help</a>.</p> <a href="/contact-us/" className="custom-btn">Contact Us</a> </div>
                                    <div className="col-md-6 text-center">
                                        <h5>Local Team</h5>
                                        <ul>
                                            <li>Address: <a href="https://goo.gl/maps/7FkobaRW15z9NzTN7">110 Dolly St, Gray, GA 31032, Georgia, USA</a> </li>
                                            <li>Phone: <a href="tel:4044244499"> (404) 424-4499</a> </li>
                                            <li>Corporate: <a href="tel:4044244499"> (404) 424-4499</a> EXT. 4</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                 </div>
            <Footer /> </div>
        )
    }
}

export default Gray;