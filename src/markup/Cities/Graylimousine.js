import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import Carservices from '../Element/Carservices';
import Graybanner from '../Element/Graybanner';
import Havequestion from '../Element/Havequestion';


var Grayimg1 = require('../../images/cities/atlanta-limousine.jpg');


class Graylimousine extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <Graybanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title">Gray Limousine</h2>
                            <div className="dlab-separator bg-primary"></div>
                           <p>Gray Limousine</p>
                        </div>
                    </div>
                </section>


                <section className="section-full cities-sec-one">
                    <div className="cities-content heading">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="left">
                                    <p> <strong>Gray Limousine </strong> understands it is often necessary to drive for your trip with loved ones without giving them total attention when you are worried about parking, directions, and so forth. If you’re in for a trip with buddies, you want to earn a headcount as a way to understand what type and size you will need to book. In reality, <Link to={"/locations/houston/"} className={"anchor"} rel="noopener noreferrer"> Grand Limousine </Link> Gray can give you a luxurious ride at the most competitive price which you never imagined.</p>
                                    <p>Our Chauffeurs know various places around their area so if you are not familiar with the roads, don’t worry. It is possible to rely on a skilled Chauffeur which they will be on time. Thus, be certain to check a couple of days before you intend to sell your unwanted automobile. A lot of individuals are also turning to limos to boost their special moments with nearest and dearest and families.</p>                        
                            
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="right">
                                        <div className="allegiant-stadium text-center">
                                            <img src={Grayimg1} alt="Gray limousine and car service"></img>
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
       
                            <h4>Gray Limousine</h4>
                            <p>Gray Limousine understands it is often necessary to drive for your trip with loved ones without giving them total attention when you are worried about parking, directions, and so forth. If you’re in for a trip with buddies, you want to earn a headcount as a way to understand what type and size you will need to book. In reality, Grand Limousine Gray can give you a luxurious ride at the most competitive price which you never imagined.</p>
                            <p>Our Chauffeurs know various places around their area so if you are not familiar with the roads, don’t worry. It is possible to rely on a skilled Chauffeur which they will be on time. Thus, be certain to check a couple of days before you intend to sell your unwanted automobile. A lot of individuals are also turning to limos to boost their special moments with nearest and dearest and families.</p>
                          
               </div>
                    </div>
                </section>

                <section className="section-full cities-sec-three">
                    <div className="cities-content heading">
                        <div className="container">
                            <div className="car-services">
                                <div className="section-head text-black text-center">
                                    <h2 className="box-title"> Our Car Service Gray Georgia </h2>
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
                                        <Havequestion />
                                    </div>
                                    <div className="col-md-6 text-center">
                                        <h5>Local Team</h5>
                                        <ul>
                                            <li>Address: <a href="https://goo.gl/maps/7FkobaRW15z9NzTN7" rel="noopener noreferrer">110 Dolly St, Gray, GA 31032, Georgia, USA</a> </li>
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

export default Graylimousine;