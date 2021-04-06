import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import Newyorkbanner from '../Element/SanfranciscoBanner';
import Bookyourlimousine from '../Element/Bookyourlimousine';
import Havequestion from '../Element/Havequestion';

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
                                            <img src={Limochauffeurservice} alt="New York Limousine and Private Chauffeur Service"></img>
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
                                <div className="car-services">
                                    <div className="row">
                                        <div className="col-md-4 border-right border-bottom">
                                            <h4> Limousine Service</h4>
                                            <p>We offer premium Limousine Services and exceptional Car Service near you. Grand Limousine has employed the most professional and motivated personnel supported by the latest technological facilities. We provide all forms of Chauffeur service & Luxury Limousine, as well as a driver only service, for both families and business people who need to move from one meeting to the next.</p>
                                        </div>
                                        <div className="col-md-4 border-right border-bottom">
                                            <h4>Airport & Hotel Transfers</h4>
                                            <p>We offer reliable and affordable transfers to or from your hotel to any airport. Grand Limousine is your best choice for affordable chauffeur transfer services. Our experienced chauffeurs will drive you through the heavy daily traffic and make sure you arrive on time to board your flight. With Grand Limousine, you will be on time every time!</p>
                                        </div>
                                        <div className="col-md-4 border-bottom">
                                            <h4>Corporate Transportation</h4>
                                            <p>We offer high-end transport solutions adapted to the constraints of your business needs. Get the confidence to sign that multi-million dollar deal. Our corporate cars are of VIP standards and will provide you with the best means of transport to your next business engagement.</p>
                                        </div>
                                        <div className="col-md-4 border-right ">
                                            <h4>Wedding</h4>
                                            <p>There is no more excellent way to arrive at your big day than in a grand limousine. The drive to your wedding venue will, in itself, be a special treat and will give you in the best mood as you say “I do.” For your wedding day, you deserve nothing short of the very best as your transportation service provider. We have a wide selection of limousines to make your wedding day great</p>
                                        </div>
                                        <div className="col-md-4 border-right ">
                                            <h4>Prom</h4>
                                            <p>No day is more memorable in high school than your prom day. And what better way is it to make a statement than arriving in a posh limousine. With our car service, you will begin enjoying the night even before you get to the venue. With your limo or party bus, you will well be on the path to prom king or queen.</p>
                                        </div>
                                        <div className="col-md-4">
                                            <h4>Bachelor / Bachelorette</h4>
                                            <p>Your last celebration with your friends before tying the knot should be an experience to remember for life. With our party buses, we make that possible by giving you the best way to travel around your different party spots no matter where you are. Grand Limousine offers the most awesome party buses in your area.</p>
                                        </div>
                                    </div>
                                </div>

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
                                    <h2 className="box-title"> Contact our local team in New York </h2>
                                    <div className="dlab-separator bg-primary"></div>
                                    <p>Limousine & Private chauffeur service in New York</p>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 text-center">
                                        <Havequestion />
                                    </div>
                                    <div className="col-md-6 text-center">
                                        <h5>Local Team</h5>
                                        <ul>
                                            <li>Address: <a href="https://goo.gl/maps/9uubc7FoP6nw9JN28" rel="noopener noreferrer">38 E 37th St, New York, NY 10016, USA</a> </li>
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