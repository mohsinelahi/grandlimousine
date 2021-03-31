import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import Sanfranciscoservices from '../Element/Sanfranciscoservices';
import Savannahgeorgiaservices from '../Element/Savannahservices';
import Jacksonvilleheader from '../Element/Jacksonvillebanner';
import Bookyourlimousine from '../Element/Bookyourlimousine';
import Havequestion from '../Element/Havequestion';

var Jacksonvilleimg1 = require('../../images/cities/limo_chauffeur_service.jpg');

class Jacksonvillepartybus extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <Jacksonvilleheader />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title"> Jacksonville Party Bus Rentals </h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>The World’s Leading Provider of High-Quality Chauffeur & Limousine Transportation</p>
                        </div>
                    </div>
                </section>



                <section className="section-full cities-sec-one">
                    <div className="cities-content heading">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="left">
                                        <h4>Jacksonville Party Bus</h4>
                                        <p> <strong> Jacksonville Party Bus Rentals Jacksonville - </strong>  Since 2007, our focus and trust for Jacksonville Party Bus need to be simple, fun, and safe. You can enjoy going on vacation with your family, companions, and the unique somebody by hiring our limousine service. Our mystery is simple. Whether it is about an event chauffeur or a new Limousine or party bus, all our limousine service is a pocket-friendly option. It shows why one should opt for our limousine service.</p>
                                       
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="right">
                                        <div className="allegiant-stadium text-center">
                                            <img src={Jacksonvilleimg1} alt="Gray Car Service"></img>
                                            <div className="allegiant-stadium-btn custom-btn">
                                                <Link to={"/contact-us/"} rel="noopener noreferrer"> Contact Us </Link>
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
       
                            <h4>The Advantage Of Jacksonville Party Bus</h4>
                            <p>There are many advantages you can get by hiring our Party Bus. Firstly, Grand Limousine provides car service, including town car service, party bus, and more. We will lift you from a secluded area and will drop you off in your desired destination. Are you heading off to a concert in Savannah from surrounding metro Jacksonville? Don’t worry about it! We will pick you up and drop you to your destination safely. A party bus is one of our best in class custom-constructed bus transports.</p>

                            <h4>Singles Parties -birthday Parties—night On The Town</h4>
                            <p>Secondly, with our Party Bus Service, you can make your birthday parties, unhitched singles parties, wearing occasions, corporate occasions, and others. A chauffeur driver in a $150k party bus will take you around for the scheduled time. Party Bus in Jacksonville is a top-rated and the best in class <Link to={"/wedding-transportation/"} className="anchor" rel="noopener noreferrer"> wedding transportation </Link> provider. In conclusion, we provide new Limousines, themed buses with highly trained chauffeurs, and a well-conditioned workforce.</p>

                            <h4 className="text-center">We, as ‘Jacksonville Party Bus’ company, also provide many other limousine services like airport transfer, wedding, and town car service.</h4>


                        </div>
                    </div>
                </section>

                <section className="section-full services-three">
                    <div className="services-content heading">
                        <div className="container">
                            <div className="premium-luxury">
                                <div className="section-head text-black text-center">
                                    <h2 className="box-title"> Our Car Services In Jacksonville Florida </h2>
                                    <div className="dlab-separator bg-primary"></div>
                                </div>
                                <Savannahgeorgiaservices />
                                <Bookyourlimousine />
                            </div>
                        </div>
                    </div>
                </section>

                
                <section className="section-full cities-sec-four">
                    <div className="cities-content heading">
                        <div className="container">
                            <div className="contact-local-teams">
                                <div className="section-head text-black text-center">
                                    <h2 className="box-title">CContact our local team in Jacksonville</h2>
                                    <div className="dlab-separator bg-primary"></div>
                                    <p>Limousine & Private chauffeur service in Jacksonville</p>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 text-center">
                                        <Havequestion />
                                    </div>
                                    <div className="col-md-6 text-center">
                                        <h5>Local Team</h5>
                                        <ul>
                                            <li>Address: <a href="https://goo.gl/maps/nzHwRPit6FZSxaPB7" rel="noopener noreferrer">701 W Adams Street, Jacksonville, FL 32202, Florida, USA</a> </li>
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

export default Jacksonvillepartybus;