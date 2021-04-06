import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import Bookyourlimousine from '../Element/Bookyourlimousine';
import Havequestion from '../Element/Havequestion';
import Palmbeachbanner from '../Element/Palmbeachbanner';


var Palmbeachimg1 = require('../../images/cities/atlanta-limousine.jpg');


class Palmbeachlimousine extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <Palmbeachbanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title">Palm Beach Limousine Service</h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>Palm Beach’s Leading Provider of High-Quality Chauffeur & Limousine Transportation</p>
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
                                            <img src={Palmbeachimg1} alt="Palm Beach Limousine Service"></img>
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
       
                            <h4>Palm Beach Tours</h4>
                            <p>Of course, this being Palm Beach, we can also take you to all resorts and beach hotels in the area. In today’s economy, with widely available ride-sharing apps joining the many already existing taxi services, you have more options available to you than ever before when it comes to getting from “point A to point B.”That’s why we are well aware that you’ve chosen a Limousine service for a particular reason.</p>

                            <h4>Palm Beach Limousine Service – Airport</h4>
                            <p>If you’re looking to make an impression with a luxurious night out on the town that includes stops at all of Palm Beach’s most excellent restaurants and hottest nightspots, we can easily make this a reality. Our clients include VIPs that work in entertainment and business and ordinary folks who want their time spent in Palm Beach to be a memorable one. We can accommodate single passengers up to groups with dozens of passengers.</p>
                            <p>At Palm Beach Limousine, our fleet includes Lincoln Town Cars and Cadillac Deville’s that are perfect for individuals, couples, and smaller groups, as well as stretch limousines that can transport up to 20 energetic party-goers in complete comfort and safety. Put, no matter what you’re planning, we have plenty of options available at different prices. We also realize that the Palm Beach Limo Service industry is highly <a href="https://grandlimousinedotblog.wordpress.com/2017/08/11/news/" target="_blank" className="anchor" rel="noopener noreferrer">competitive</a>, and we are willing to match or beat the cost of any similar service offered by one of our competitors.</p>

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
                        
                                <div className="car-services">
                                    <div className="row">
                                        <div className="col-md-4 border-right border-bottom">
                                            <h4> Limousine Service</h4>
                                            <p>We offer premium Limousine Services and exceptional Car Service near you. Grand Limousine has employed the most professional and motivated personnel supported by the latest technological facilities. We provide all forms of Chauffeur service & Luxury Limousine, as well as a driver only service, for both families and business people who need to move from one meeting to the next.</p>
                                        </div>
                                        <div className="col-md-4 border-right border-bottom">
                                            <h4>Airport & Hotel Transfers</h4>
                                            <p>We offer reliable and affordable transfers to or from your hotel to any airport. Grand Limousine is your best choice for affordable chauffeur transfer services. Our experienced chauffeurs will drive you through the heavy daily traffic and make sure you arrive on time to board your flight.</p>
                                        </div>
                                        <div className="col-md-4 border-bottom">
                                            <h4>Corporate Transportation</h4>
                                            <p>We offer high-end transport solutions adapted to the constraints of your business needs. With Grand Limousine, you will arrive at that business meeting or corporate gala in style and get the confidence to sign that multi-million dollar deal. Our corporate cars are of VIP standards and will provide you with the best means of transport to your next business engagement.</p>
                                        </div>
                                        <div className="col-md-4 border-right ">
                                            <h4>Wedding</h4>
                                            <p>There is no more excellent way to arrive at your big day than in a grand limousine. The drive to your wedding venue will, in itself, be a special treat and will give you in the best mood as you say “I do.” For your wedding day, you deserve nothing short of the very best as your transportation service provider. We have a wide selection of limousines to make your wedding day great.</p>
                                        </div>
                                        <div className="col-md-4 border-right ">
                                            <h4>Prom</h4>
                                            <p>No day is more memorable in high school than your prom day. And what better way is it to make a statement than arriving in a posh limousine. With our car service, you will begin enjoying the night even before you get to the venue. With your limo or party bus, you will well be on the path to prom king or queen.</p>
                                        </div>
                                        <div className="col-md-4">
                                            <h4>Bachelor / Bachelorette</h4>
                                            <p>Your last celebration with your friends before tying the knot should be an experience to remember for life. With our party buses, we make that possible by giving you the best way to travel around your different party spots no matter where you are. Grand Limousine offers the most awesome party buses in your <Link to={"/new-york-city-travel-tours/"} className="anchor" rel="noopener noreferrer"> area</Link>.</p>
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
                                    <h2 className="box-title">Contact our local team in Palm Beach</h2>
                                    <div className="dlab-separator bg-primary"></div>
                                    <p>Limousine & Private chauffeur service in Palm Beach</p>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 text-center">
                                        <Havequestion />
                                    </div>
                                    <div className="col-md-6 text-center">
                                        <h5>Local Team</h5>
                                        <ul>
                                            <li>Address: <a href="https://goo.gl/maps/XSNMVSnwnQTrWC3h9" rel="noopener noreferrer">204 Royal Palm Way, Palm Beach, FL 33480, Florida, USA</a> </li>
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