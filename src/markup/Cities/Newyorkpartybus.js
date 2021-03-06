import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import Sanfranciscoservices from '../Element/Sanfranciscoservices';
import Newyorkbanner from '../Element/SanfranciscoBanner';

var Limochauffeurservice = require('../../images/cities/limo_chauffeur_service.jpg');

class Newyorkpartybus extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <Newyorkbanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title"> New York Party Bus </h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p> New York’s Leading Provider of High-Quality Chauffeur & Limousine Transportation </p>
                        </div>
                    </div>
                </section>



                <section className="section-full cities-sec-one">
                    <div className="cities-content heading">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="left">
                                        <h4> New York Party Bus </h4>
                                        <p> <strong>New York Party Bus – </strong> We provide trips for all sporting events. Travel to and From Your Concert in Style. For a truly fantastic experience, book your concert trip with New York City Party Bus! Our professional drivers will get you to your concert and back to your home safely on our party bus so you can focus on just enjoying the show.</p>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="right">
                                        <div className="allegiant-stadium text-center">
                                            <img src={Limochauffeurservice}></img>
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

                            <h4>Party Bus</h4>
                            <p>Arrive at Your Event Safely While Having Fun.</p>
                            <p>No matter what type of event you’re going to, rely on the professionals at New York Party Bus to get you to your destination and back home safely. Your <Link to={"https://www.augustacarservice.com/"}> special </Link> event will into an experience you’ll remember forever with our customer-oriented services. We’re also one of the few companies in town which provide buses equipped with bathrooms!</p>

                            <strong>From weddings to birthday parties, we provide transportation services for all events, including:</strong>
                                <ul>
                                    <li>Bachelor/bachelorette parties</li>
                                    <li>Holiday parties</li>
                                    <li>Birthday parties</li>
                                    <li>Casino Trips</li>
                                    <li>Airport shuttle service</li>
                                    <li>Golf outings</li>
                                    <li>Evening extravaganzas</li>
                                </ul>
                                <p>Get to the Game With All of Your Friends Whether you’re going to a local sporting event, minor-league event, or any other sporting event, Motor City Party Bus can drive you and your group of friends with prompt party bus services!</p>
                                <p>Contact New York City Party Bus today for pricing and availability call us or book online to receive a quote.</p>
                        </div>
                    </div>
                </section>

                <section className="section-full services-three">
                    <div className="services-content heading">
                        <div className="container">
                            <div className="premium-luxury">
                                <div className="section-head text-black text-center">
                                    <h2 className="box-title"> Our Car Services In New York </h2>
                                    <div className="dlab-separator bg-primary"></div>
                                </div>
                                <Sanfranciscoservices />
                                <div className="book-your-car text-center">
                                    <p>We offer high-end solutions for transport that we have designed to suit your business needs. You can rely on our strong business ethics. With us, you will arrive at your business meeting or corporate event in style. Also, you will get the confidence to sign that million dollar contract. All of our corporate cars are of high quality, and we provide you with an exclusive means of transport to your business deals.</p>
                                    <h5> Call now at <a href="4044244499"> (404) 424-4499 </a> to book your limousine! </h5> </div>
                            </div>
                        </div>
                    </div>
                </section>

                
                <section className="section-full cities-sec-four">
                    <div className="cities-content heading">
                        <div className="container">
                            <div className="contact-local-teams">
                                <div className="section-head text-black text-center">
                                    <h2 className="box-title"> Contact our local team in New York </h2>
                                    <div className="dlab-separator bg-primary"></div>
                                    <p>Limousine & Private chauffeur service in New York</p>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 text-center">
                                        <h5>Have Questions?</h5>
                                        <p>We are here to <a href="#" className="anchor"> help</a>.</p> <a href="/contact-us/" className="custom-btn">Contact Us</a> </div>
                                    <div className="col-md-6 text-center">
                                        <h5>Local Team</h5>
                                        <ul>
                                            <li>Address: <a href="https://goo.gl/maps/9uubc7FoP6nw9JN28">38 E 37th St, New York, NY 10016, USA</a> </li>
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

export default Newyorkpartybus;