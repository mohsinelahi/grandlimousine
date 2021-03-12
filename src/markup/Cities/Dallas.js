import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import Savannahgeorgiaservices from '../Element/Savannahservices';
import Savannahheader from '../Element/Savannahbanner';
import Toplimousine from '../Element/Toplimousine';

var Dallasserviceimg1 = require('../../images/cities/atlanta-limousine.jpg');

class Dallasservice extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <Savannahheader />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title">Dallas Car Service </h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p> Dallas’s Leading Provider of High-Quality Chauffeur & Limousine Transportation </p>
                        </div>
                    </div>
                </section>



                <section className="section-full cities-sec-one">
                    <div className="cities-content heading">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="left">
                                        <p> <strong> Dallas Airport Car Service – Dallas Corporate Transportation – </strong>  A proven record of excellence as a leading provider of taxi, limo and car service in the Dallas, Texas area. We take great pride in offering the award-winning level of transportation service we have become known for at flat rates that are even lower than <Link to={"/super-bowl"} > our metered taxi </Link> rates. </p>
                                        <p><Link to={"/"} >Grand Limousine </Link> Services is your quality transportation service provider of choice for the Texas area. Whether you are in Central Texas for business or pleasure, you’ll probably need ground transportation at some time. Why not let us help you travel in style? And don’t forget to check out our Specials.</p>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="right">
                                        <div className="allegiant-stadium text-center">
                                            <img src={Dallasserviceimg1}></img>
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



                <section className="section-full cities-sec-two pb-4">
                    <div className="cities-content heading">
                        <div className="container">
                               
                            <p> <strong>  Dallas Airport Car Service – </strong> Are you looking for a reliable limousine near you? If yes, then we are here to help. Grand Limousine is one of the best companies specializing in offering chauffeur-driven Car and Limousine services in Georgia, Florida, New York, California, and Texas. Also, we have been in this town car service business for more than 15 years. That is why you can entirely rely on us. It is a sincere, custom <Link to={"/"} > limousine service </Link>.</p>
                            <p>Here at Grand Limousine, we have designed our limousine and car services with great care and attention. Whether you need our assistance for an airport transfer, private tour, particular event transfer, or limousine tour, we are here to help. Whether you are in Arlington or Grapevine, call us on <a href="tel:4044244499">(404) 424-4499</a>.</p>

                            <h4>Dallas Corporate Transportation</h4>
                            <p>We are one of the most trusted moderate and ready to take you to your destination with the latest fleet and state-of-the-art vehicle technology. We offer an all-inclusive limousine and car service, including cars, Sprinter, Bus, stretched limousine, and more. You can enjoy customized town car services for a single or large group for travel and tour in Dallas with us.</p>
                            <p>All our car services are available at reasonable rates, and you will get a variety of options from us. We take pride in our customer services and offer some of the most beautiful grand limousines to you. Our services are available in the Dallas and metropolitan areas, including the rural territory areas.</p>

                        </div>
                    </div>
                </section>
                
                <Toplimousine />

                 </div>
            <Footer /> </div>
        )
    }
}

export default Dallasservice;