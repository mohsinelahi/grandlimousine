import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import Carservices from '../Element/Carservices';
import Miamibanner from '../Element/Miamibanner';


var Miamiimg1 = require('../../images/cities/atlanta-limousine.jpg');


class Miamipartybus extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <Miamibanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title">Miami Party Bus - Book Direct Since 2007</h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>Miami’s Leading Provider of High-Quality Chauffeur & Limousine Transportation</p>
                        </div>
                    </div>
                </section>



                <section className="section-full cities-sec-one">
                    <div className="cities-content heading">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="left">
                                        <h4>Miami Party Bus</h4>
                                        <p> <Link to={"/locations/new-york-party-bus/"} className={"anchor"}> Miami Party Bus Rental Service </Link> is a perfect option for partying in Miami, FL. Here the weather is hot, and the nightlife is scorching too. You will love the strong Latin influence and spicy salsa culture here. You will also miss the best thing if you don’t enjoy the knees-up party in a Miami nightclub. Apart from that, don’t forget to enjoy fancy food and drink at one of the city’s celebrity-owned restaurants!! However, poor transport can be a problem if you are not smart enough to choose a reputable transport provider. For party bus, town car service, limousine service in Miami, contact Grand Limousine.</p>
                                        <p>Hit the beach and have yourself a walkabout while exploring Miami’s colourful art decoration architecture. Don’t miss grabbing a Cuban sandwich in Little Havana. Ride the classic carousel at Virginia Key element Beach Park. Miami Party Bus pricing starts at the lowest rate, and these are readily available in South Florida. Grand limousine offers the Best Party Bus, car service, and town car service in Miami.</p>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="right">
                                        <div className="allegiant-stadium text-center">
                                            <img src={Miamiimg1}></img>
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
       
                            <h4>Get a Miami Party Bus–In Miami and Around South Florida</h4>
                            <p>Miami is one of the world’s most popular vacation spots. Every tourist hotspot offers something for everyone, and everyone wants to explore that place in their way. Stay relaxed. Miami Beach Party Bus will take you to the <a href="https://www.augustacarservice.com/" target="_blank" className="anchor"> destinations </a>  you want to study. Many sites are worth watching. You can enjoy the nightlife in Southerly Beach. It features the eye candy of the Art Deco district. Explore Miami with town car service, limousine service, and more.</p>
                            <p>The din of Calle Ocho and the highly caffeinated energy of Little Havana will win your heart. The plush hotels of Miami Beach and the historic hideaways of Coral reefs Gables are the other attractions you should explore. There are seemingly endless shopping opportunities in modern, welcoming malls. You will also enjoy the calm, personal attention that the family-owned shops of Coconut Grove and many other corners of the region offer. With the town car service from Grand Limousine, you can enjoy exploring Miami to the fullest.</p>
                            <p>It is impossible to ignore the lure of deep-sea fishing, golf, and tennis. You can also enjoy Miami’s major category football, basketball, hockey, baseball, boat shows, and auto racing. Don’t miss the art conventions, free food, and wine extravaganzas. Here you can explore a global international airport and the world’s most frantic cruise port. The Miami South Florida area offers this all–and there is also much more to explore.</p>
                            <p>Contact Miami Party Bus today to take your group to the next level in style, safety, and comfort. Click here for Pricing and Booking. Contact Grand Limousine to enjoy a complete transport solution that offers limousine facilities, town car service, party bus, and <Link to={"/locations/miami-limousine/"} target={"_blank"} className={"anchor"}>more</Link> .</p>
                                        
               </div>
                    </div>
                </section>

                <section className="section-full cities-sec-three">
                    <div className="cities-content heading">
                        <div className="container">
                            <div className="car-services">
                                <div className="section-head text-black text-center">
                                    <h2 className="box-title">Our Car Services In Miami Florida</h2>
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
                                    <h2 className="box-title">Contact our local team in Miami</h2>
                                    <div className="dlab-separator bg-primary"></div>
                                    <p>Limousine & Private chauffeur service in Palm Beach Florida</p>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 text-center">
                                        <h5>Have Questions?</h5>
                                        <p>We are here to <a href="#" className="anchor"> help</a>.</p> <a href="/contact-us/" className="custom-btn">Contact Us</a> </div>
                                    <div className="col-md-6 text-center">
                                        <h5>Local Team</h5>
                                        <ul>
                                            <li>Address: <a href="https://goo.gl/maps/kheqmApLCEujdrvSA">3225 NW 204th Terrace, Miami Gardens, FL 33056, USA</a> </li>
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

export default Miamipartybus;