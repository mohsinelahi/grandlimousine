import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import Carservices from '../Element/Carservices';
import Orlandobanner from '../Element/Orlandobanner';


var Palmbeachimg1 = require('../../images/cities/atlanta-limousine.jpg');


class Palmbeachlimousine extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <Orlandobanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title">Palm Beach Limousine - Book Direct Since 2007</h2>
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
                                        <h4>Palm Beach</h4>
                                        <p> <strong> Palm Beach Limousine </strong> specializes іn Weddings, local including long-distance transportation іn Orlando statewide limousine service and palm Beach Chauffeur Tours. Frоm bachelor аnd bachelorette party tо wedding ceremony reception аnd еvеn thе anniversary party. Travel and tour stylishly in total comfort and always arrive on time with <strong> Grand Limousine Palm Beach, FL, </strong> the premier limousine company operating in Palm Beach, Florida, and the surrounding areas. We provide pick-up and drop-off service to both the domestic and international terminals at <strong> Palm Beach airport </strong>  and all the other executive and charter airports in Palm Beach and its surroundings.</p>
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
       
                            <h4>Palm Beach Tours</h4>
                            <p>Of course, this being Palm Beach, we can also take you to all resorts and beach hotels in the area. In today’s economy, with widely available ride-sharing apps joining the many already existing taxi services, you have more options available to you than ever before when it comes to getting from “point A to point B.”That’s why we are well aware that you’ve chosen a Limousine service for a particular reason.</p>

                            <h4>Palm Beach Limousine Service – Airport</h4>
                            <p>If you’re looking to make an impression with a luxurious night out on the town that includes stops at all of Palm Beach’s most excellent restaurants and hottest nightspots, we can easily make this a reality. Our clients include VIPs that work in entertainment and business and ordinary folks who want their time spent in Palm Beach to be a memorable one. We can accommodate single passengers up to groups with dozens of passengers.</p>
                            <p>At Palm Beach Limousine, our fleet includes Lincoln Town Cars and Cadillac Deville’s that are perfect for individuals, couples, and smaller groups, as well as stretch limousines that can transport up to 20 energetic party-goers in complete comfort and safety. Put, no matter what you’re planning, we have plenty of options available at different prices. We also realize that the Palm Beach Limo Service industry is highly competitive, and we are willing to match or beat the cost of any similar service offered by one of our competitors.</p>

               </div>
                    </div>
                </section>

                <section className="section-full cities-sec-three">
                    <div className="cities-content heading">
                        <div className="container">
                            <div className="car-services">
                                <div className="section-head text-black text-center">
                                    <h2 className="box-title">Our Car Services In Palm Beach Florida</h2>
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

export default Palmbeachlimousine;