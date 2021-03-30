import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import Carservices from '../Element/Carservices';
import Havequestion from '../Element/Havequestion';
import Chicagobanner from '../Element/Chicagobanner';


var chicagoimg1 = require('../../images/cities/limo_chauffeur_service.jpg');


class Chicago extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <Chicagobanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title">Chicago Limousine Luxury Car & Party Bus</h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>Grand Limousine Chicago – The World’s Leading Provider of High-Quality Chauffeur & Limousine Transportation</p>
                        </div>
                    </div>
                </section>



                <section className="section-full cities-sec-one">
                    <div className="cities-content heading">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="left">
                                        <h4>Enjoy Premium Transportation Service in Augusta</h4>
                                        <p> <strong> Chicago Limousine Luxury Car & Party Bus – </strong> In Chicago, the demand for Limousine Service is increasing day by day. And Chicago Limousine is one of the nation’s fastest developing transportation service providers. Our advanced Limousine service is a reputed grand service provider in this locality. We will be on INC 5000’ѕ list of fastest-developing private companies. We offer the most diverse and fantastic range of luxury vehicles in the business of car services.</p>
                                        <p>We offer Chicago’s very best chauffeurs. Even one of our chauffeurs had the prestigious award of ‘Chauffeur of the year.’ Also, we have been the “Best <a href="https://www.augustacarservice.com/" target="_blank" className="anchor" rel="noopener noreferrer">Transportation </a> Provider.” The event professionals throughout the industry voted for us. Chicago Limousine owns and operates several new rides. We have various types of cars, including Sedans and Hybrids, 56 passenger motor coaches, SUVs.</p>
                                        <p>Also, we have Limousines, luxury minibusses for up to 39 passengers, executive vans, and party busses for 12 to 25 passengers. One of the most experienced and talented management teams in the industry supervises Chicago Limousine to ensure you get the best car and limousine service in Chicago.</p>

                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="right">
                                        <div className="allegiant-stadium text-center">
                                            <img src={chicagoimg1} alt="car service"></img>
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
                                <li> <Link to={"/locations/chicago-car-service/"} rel="noopener noreferrer" > Chicago Car Service </Link> </li>
                                <li> <Link to={"/locations/chicago-limousine/"} rel="noopener noreferrer"> Chicago Limousine </Link> </li>
                                <li> <Link to={"/locations/chicago-party-bus/"} rel="noopener noreferrer"> Chicago Party Bus </Link> </li>
                            </ul>
                        
                            <p>With us, you can explore some of the most beautiful places in Chicago. Enjoy the sights and take pleasure with our insider’s tours of the tourist attractions. We accompany your group on special events and offer you the best support along with Wi-Fi, refreshment, and a travel guide. Our chauffeurs know years of experience, dedication, sincerity, and passion.</p>
                            <p>Wherever you are traveling, we assure you of the utmost comfort and safety so you can enjoy the journey stress-freely. To ensure your safety, Chicago Limousine offers only certificate holders, professional chauffeurs. We maintain our fleet meticulously.</p>
                            <p>Our chauffeurs hold a valid license and drive insured grand limousines. For providing you with ultimate comfort and luxury, we offer credit card payment facilities. We are your travel guide, and we strive to provide you with a premium quality limousine and car service.</p>
                            <p>Chicago Limousine owns and has been operating multiple new rides. We have a wide range of vehicles, including limousines, 56 Passenger Motor Coaches, SUVs, Sedans, Hybrids, executive Vans, and luxury mini Buses for carrying up to 39 passengers. Also, we have party buses for 12-25 passengers.</p>

                            <h4>Experienced chauffeurs in Chicago</h4>
                            <p>To ensure you get a premium quality service, one of the most experienced and talented management teams leads the Chicago Limousine. Our reputation, development, and expansion allow us to get the attention of high management proficiency in the business. Offering the premium advantages along with the safest sense of dependability, we take the best care of our customers.</p>
                            <p>Our chauffeurs take pride in offering the town car service and customer support. Our highly proficient management crew has introduced an innovative trend of grand limousine service in Chicago. We aim at providing an extraordinary car and limousine service every time, every day, whenever you go for a trip. That is why our Grand Limousine is the best choice for the limousine service in Chicago.</p>
                            <p>No one in the business can beat the competitive rate and premium quality car service we provide. Check out why people throughout Chicago and in the surrounding area of the country prefer choosing us over anyone else for limousine service.</p>

                            <h4>The all-inclusive solution for transportation in Chicago</h4>
                            <p>With us, you will get a shared service for airport transfers, transport for a private trip, group travel, corporate outings, weddings, night-out, and various other facilities. We offer a one-stop solution for all town car services. From sedans to motor coaches–we have everything to meet your needs.</p>
                            <p>We offer our car and limousine services worldwide, and we are one of the trusted names in this business. We leave you no chance to find fault with our town car services. It is a seamless transport solution that you can enjoy with our Grand Limousine. Just one phone call and that is all. On the ground of transportation, we solve your problems with a finger click!</p>
                            <p>Check out our entire website to unveil the secrets why people in Chicago and the surrounding area prefer dealing only with Grand Limousine. Call us at (404) 424-4499 to contact us or if you have any queries about our car and limousine services.</p>

                        </div>
                    </div>
                </section>

                <section className="section-full cities-sec-three">
                    <div className="cities-content heading">
                        <div className="container">
                            <div className="car-services">
                                <div className="section-head text-black text-center">
                                    <h2 className="box-title">Check out our Car Services in Chicago</h2>
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
                                    <h2 className="box-title">Contact our local team in Orlando</h2>
                                    <div className="dlab-separator bg-primary"></div>
                                    <p>Limousine & Private chauffeur service in Orlando</p>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 text-center">
                                        <Havequestion />
                                    </div>
                                    <div className="col-md-6 text-center">
                                        <h5>Local Team</h5>
                                        <ul>
                                            <li>Address: <a href="https://goo.gl/maps/pUMc9rh13FTpiJ7z6">142 E Jackson St, Orlando, FL 32801, Florida, USA</a> </li>
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

export default Chicago;