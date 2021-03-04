import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import Toplimousine from '../Element/Toplimousine';
import Quotebox from '../Element/Quotebox';
import Carservices from '../Element/Carservices';


class Airportcarservice extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <InnerBanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title">Car Service</h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>LOCATIONS IN NEW YORK – AUGUSTA – SAVANNAH – COLUMBUS – MACON SERVING ORLANDO – SAN FRANCISCO – DESTIN – MIAMI – ATLANTA AND SURROUNDING AREAS</p>
                        </div>
                    </div>
                </section>
                <section className="section-full services-one">
                    <div className="services-content heading">
                        <div className="container">
                            <h4>Airport Car Service – Locations</h4>
                            <p><strong>Car Service – </strong> Book Direct Ground Transportation <a href="#">Grand Limousine</a> delivers top-quality to all significant U. S. cities with the finest and newest fleet. Available. Our quality and attention to detail are our primary focus. Our Airport Car transportation is affordable, convenient, and safe. We pride ourselves on providing professional, timely, experienced, and fast service, chauffeurs. We offer the best round the clock reservations for private airport travel. You will enjoy the savings and security of style and comfort relaxed while gas, parking fees, and rental car costs. We are always here for you, so you never have to hail a taxi or games with your Uber <a href="#">App</a>. When it comes to fast <b>Airport Car Service</b>, we are the <a href="https://www.facebook.com/carservicehouston/" target="_blank" rel="noopener">best</a>.</p>
                            <h4>Professional Chauffeurs</h4>
                            <p>Chauffeurs, not drivers.&nbsp; All chauffeurs are highly trained and courteous and will get you to your <a href="#">destination </a>with efficient routes in and around the city.</p>
                            <h4>We are the Professionals:</h4>
                            <ul>
                                <li>No Surge in Pricing</li>
                                <li>Reliable and Timely</li>
                                <li>Airport Curbside Service.</li>
                                <li>Clear and direct Upfront Pricing</li>
                                <li>Professionally safe and knowledgeable Chauffeurs</li>
                                <li>Pure Secure and Quality online booking</li>
                                <li>Priority Private Airport Travel is just a call away.</li>
                                <li>Newest, Well-Maintained inventory bringing you comfort</li>
                                <li>Confirmed Reservations in Advanced to ensure your <a href="#">limousine </a>is on-time when you’re ready.</li>
                                <li>Avoid all the hassles of self-driving – No stress from traffic wows</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="section-full services-two">
                    <div className="services-content heading">
                        <div className="container">
                            <div className="premium-luxury">
                                <div className="section-head text-black text-center">
                                    <h2 className="box-title">Check out our Premium Luxury Cars</h2>
                                    <div className="dlab-separator bg-primary"></div>
                                </div>
                                <Carservices />
                                <div className="book-your-car text-center">
                                    <p>We offer high-end solutions for transport that we have designed to suit your business needs. You can rely on our strong business ethics. With us, you will arrive at your business meeting or corporate event in style. Also, you will get the confidence to sign that million dollar contract. All of our corporate cars are of high quality, and we provide you with an exclusive means of transport to your business deals.</p>
                                    <h5> Call now at <a href="4044244499"> (404) 424-4499 </a> to book your limousine! </h5> </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-full services-three">
                    <div className="services-content heading">
                        <div className="container">
                            <div className="contact-local-teams">
                                <div className="section-head text-black text-center">
                                    <h2 className="box-title">Contact one of our local teams near you</h2>
                                    <div className="dlab-separator bg-primary"></div>
                                    <p>Limousine & Private chauffeur service</p>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 text-center">
                                        <h5>Have Questions?</h5>
                                        <p>We are here to <a href="#" className="anchor"> help</a>.</p> <a href="/contact-us/" className="custom-btn">Contact Us</a> </div>
                                    <div className="col-md-6 text-center">
                                        <h5>Local Team</h5>
                                        <ul>
                                            <li>Address: <a href="https://goo.gl/maps/QiiY9394xx1zn2V5A">2401 Nance St, Houston, TX 77020, Texas, USA.</a> </li>
                                            <li>Phone: <a href="tel:4044244499"> (404) 424-4499</a> </li>
                                            <li>Corporate: <a href="tel:4044244499"> (404) 424-4499</a> EXT. 4</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Quotebox />
                <Toplimousine /> </div>
            <Footer /> </div>
        )
    }
}

export default Airportcarservice;