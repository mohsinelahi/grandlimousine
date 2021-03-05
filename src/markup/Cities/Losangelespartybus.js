import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import Carservices from '../Element/Carservices';
import Losangelesheader from './../Element/Losangelesbanner';


var LosAngelesPartybusimg = require('../../images/cities/Los-Angeles-Partybus.png');


class Losangelespartybus extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <Losangelesheader />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title"> Los Angeles Party Bus </h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p> The World’s Leading Provider of High-Quality Chauffeured Car & Limousine Service </p>
                        </div>
                    </div>
                </section>



                <section className="section-full cities-sec-one">
                    <div className="cities-content heading">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="left">
                                        <h4> Party Bus in Los Angeles </h4>
                                    <p> Los Angeles Party Bus offers lots of services that simplify the complications of making your transport entourage for events. </p>
                                    <p> "At the time I began to learn more about party buses, I was in need of a party bus rental near me that offered accommodation to 25 guests, and that is how I learned about the 24/7 services of Grand Limousine. They have diligent drivers who ensure the safety of you and your crew along with the benefits of a great tour around some of the city’s hotspots." </p>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="right">
                                        <div className="allegiant-stadium text-center">
                                            <img src={LosAngelesPartybusimg}></img>
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
       
                        
                            <h4>GROUP EVENTS </h4>
                            <strong>They offer party buses that accommodate 14 to 50 passengers at a time. Some of the services offered include:</strong>
                            <ul><li>Night on the town service</li></ul>
                            <p>Los Angeles Party Bus – The best way to enjoy the night scene is to rent a party bus from a reputable company. All across the map of L.A., many companies are bringing their A-game for the night club hoppers. However, party buses offer a great arranged party experienced. Call up the company and reserve the vehicle for a few hours. The drivers are tasked with stocking the bar, the mini-fridge, and the ice bucket. This is for when you and your friends desire a unique experience outside the sweaty spaces of bars and nightclubs. Have a personal bartender to mix all your drinks and cocktails for a night full of buzz and revelry.</p>
                            <p>Talk about the ultimate time to ask about our deals on limo party bus prices. Party buses are pretty much a creative way of having a surprisingly successful event. While booking, you have the opportunity to have the party bus tailored according to g to your wedding theme. The party bus is a giant leap of faith and will leave your guests amazed and having a wonderful time. From the music to the refreshing bar stocked with all types of preordered drinks and a relaxed environment for banter and socializing.</p>
                            <ul><li>Bachelor party service</li></ul>
                            <p>The safety assurances on the fun bus offer a comfortable place for your last party with your friends and family. It is spacious and facilitated with all the requirements of a good entertainment center.  You may hire a live band, a D.J., and a bartender to keep the party going on till the dawn. Seating arrangements are spacious, and the limo bus is well lit with overhead strobe lights and more.</p>
                            <ul><li>Winery tour service</li></ul>
                            <p>Rent a party bus when you and your friends have a passion for wine. Knowing that you deserve a great winery tour, you may split the party bus rental prices with them and have a fun cruise around the vineyards and wineries. </p>
                            <ul><li>Birthday PartyBus services</li></ul>
                            <p> If most restaurants are reserved and you lack a place to celebrate, consider the party bus. The party guests will more than just love it because it is a unique way of turning one year older. Make memories on the road and celebrate your greatest achievements as the city rolls by your windows. So how much is a party bus in L.A.? Well, a price tag of $560 to $750 is applied depending on the number of guests.</p>

                        </div>
                    </div>
                </section>

                <section className="section-full cities-sec-three">
                    <div className="services-content heading">
                        <div className="container">
                            <div className="premium-luxury">
                                <div className="section-head text-black text-center">
                                    <h2 className="box-title">Our Car Services In San Francisco California</h2>
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

                <section className="section-full cities-sec-four">
                    <div className="cities-content heading">
                        <div className="container">
                            <div className="contact-local-teams">
                                {/* <div className="section-head text-black text-center">
                                    <h2 className="box-title">Contact our local team in Orlando</h2>
                                    <div className="dlab-separator bg-primary"></div>
                                    <p>Limousine & Private chauffeur service in Orlando</p>
                                </div> */}
                                <div className="row">
                                    <div className="col-md-6 text-center">
                                        <h5>Have Questions?</h5>
                                        <p>We are here to <a href="#" className="anchor"> help</a>.</p> <a href="/contact-us/" className="custom-btn">Contact Us</a> </div>
                                    <div className="col-md-6 text-center">
                                        <h5>Local Team</h5>
                                        <ul>
                                            <li>Address: <a href="https://goo.gl/maps/Dkscp4jQCSftW54Y6">240 S Main St, Los Angeles, CA 90012, California, USA</a> </li>
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

export default Losangelespartybus;