import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import Carservices from '../Element/Carservices';
import Orlandobanner from '../Element/Orlandobanner';


var Palmbeachimg1 = require('../../images/cities/limo_chauffeur_service.jpg');


class Palmbeachcarservice extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <Orlandobanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title">Palm Beach Car Service (PBI)</h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>The World’s Leading Provider of High-Quality Chauffeur & Limousine Service</p>
                        </div>
                    </div>
                </section>



                <section className="section-full cities-sec-one">
                    <div className="cities-content heading">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="left">
                                        <h4>Car Service Orlando (MDO) Airport</h4>
                                        <p>Palm Beach Car Service is one of the leading transportation service providers specialized in corporate transportation, limousine service, party bus, wedding limousine, airport transfer service. We are here to bring luxury and comfort to you. <Link to={"/locations/palm-beach-party-bus/"} className={"anchor"}> Our Party Bus </Link> and other luxury vehicles are e plenty of amenities that will make you want to opt for our services again.</p>
                                        <p>We have highly trained chauffeurs with many years of experience in the transportation industry. Also, all our chauffeurs are background-checked. They are 100% reliable and highly punctual. The chauffeur can pick you up from any location in Palm Beach. They are comprehensively knowledgeable about the local area and traffic patterns. So, you can be sure that your chauffeur will take you to your destination safely.</p>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="right">
                                        <div className="allegiant-stadium text-center">
                                            <img src={Palmbeachimg1}></img>
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
       
                            <h4>Why use Palm Beach Car Service?</h4>
                            <p>When you need to reach a business meeting or the airport on time, using Palm Beach <Link to={"/limousine-service/"} className={"anchor"}> Car Service  </Link> takes a huge load off your mind. It is no doubt the best alternative to public transportation. You don’t need to worry about being stuck in traffic anymore. Our experienced and professional chauffeur will take you to your destination in Palm Beach on time.</p>
                            <p>Palm Beach limousine service aims to make your experience truly unique. Our amenities will make your ride unforgettable. The facilities include large and comfortable seating arrangements, sound systems, armrests, ample legroom, leather interior, reading lights, and more.</p>
                            <p>You can book our limousine service to make your wedding special. Luxury vehicles like stretch limousines, sedans, etc., make for great wedding pictures. You can use the Palm Beach town car service to transport a wedding party. We will take care of the needs of your wedding guests. We have been providing <Link to={"/wedding-transportation/"} className={"anchor"}> wedding Palm Beach Car Service </Link> in Palm Beach for several years. So, if you are looking for the most reliable <Link to={"/wedding-transportation/"} className={"anchor"}> wedding transportation </Link> service provider in the city, you can count on us.</p>
                            <p>You can book our party bus to get around the city and see the top attractions, including Henry Morrison Flagler Museum, Worth Avenue, Lake Trail, Paramount Theater Building, Phipps Ocean Park, etc. You can book a party bus for a night out, prom, bachelor party, etc. as well. Our party bus has all the great amenities and can comfortably accommodate you and your group.</p>
                            <p>We offer a wide array of transportation options to suit any occasion and budget. Our fleet vehicles <Link to={"https://grandlimousinedotblog.wordpress.com/2017/08/11/news/"} target={"_blank"} className={"anchor"}> include </Link> SUV, town car, party bus, sedan, <Link to={"/locations/palm-beach-limousine//"} className={"anchor"}> limousines </Link>, etc.</p>

               </div>
                    </div>
                </section>

                <section className="section-full cities-sec-three">
                    <div className="cities-content heading">
                        <div className="container">
                            <div className="car-services">
                                <div className="section-head text-black text-center">
                                    <h2 className="box-title">Check out our Car Services in Palm Beach</h2>
                                    <div className="dlab-separator bg-primary"></div>
                                </div>
                        
                                <Carservices />
                                <div className="book-your-car text-center">
                                    <p>We offer high-end solutions for transport that we have designed to suit your business needs. You can rely on our strong business ethics. With us, you will arrive at your business meeting or corporate event in style. Also, you will get the confidence to sign that million dollar contract. All of our corporate cars are of high quality, and we provide you with an exclusive means of transport to your business deals.</p>
                                    <h5> Call now at <a href="4044244499"> (404) 424-4499 </a> to book your limousine! </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                
                <section className="section-full cities-sec-four">
                    <div className="cities-content heading">
                        <div className="container">
                            <div className="contact-local-teams">
                                <div className="section-head text-black text-center">
                                    <h2 className="box-title">Contact our local team in Palm Beach</h2>
                                    <div className="dlab-separator bg-primary"></div>
                                    <p>Limousine & Private chauffeur service in Palm Beach</p>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 text-center">
                                        <h5>Have Questions?</h5>
                                        <p>We are here to <a href="#" className="anchor"> help</a>.</p> <a href="/contact-us/" className="custom-btn">Contact Us</a> </div>
                                    <div className="col-md-6 text-center">
                                        <h5>Local Team</h5>
                                        <ul>
                                            <li>Address: <a href="https://goo.gl/maps/XSNMVSnwnQTrWC3h9">204 Royal Palm Way, Palm Beach, FL 33480, Florida, USA</a> </li>
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

export default Palmbeachcarservice;