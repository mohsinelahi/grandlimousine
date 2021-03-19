import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import Toplimousine from '../Element/Toplimousine';
import Hiramtable from '../Element/Hiramtable';


var atlantaimg1 = require('../../images/cities/atlanta_transportation.jpg');


class Hiram extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <InnerBanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title">Hiram Car Service Atlanta (ATL) Airport Limousine</h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p> Grand Limousine – The World’s Leading Provider of High-Quality Car & Limousine Transportation</p>
                        </div>
                    </div>
                </section>
                <section className="section-full services-main">
                    <div className="services-content heading">
                        <div className="container">

                            <p><strong> Hiram Car Service – </strong> Atlanta (ATL) Airport Limousine provides professional business class chauffeured transportation services for travelers and corporations as well as special occasions for Hiram, GA. Our West Georgia limousine services are available 24 hours, 365 days a year and we understand that a punctual and reliable chauffeur service is a vital component to making any special occasion or event go smoothly. Our customer service representatives are ready to answer any questions that you may have or to point you in the right direction for a particular service or vehicle. Everything Grand Limousine does is centered on helping our clients achieve the absolute best-chauffeured transportation experience.</p>
                           
                            <Hiramtable />

                            <p> <strong> Hiram Car Service – </strong>  We understand that our Chauffeurs are the face of our business. All of our Chauffeur trained in traditional etiquette. New luxury units will ensure that you get the little touch of luxury that you so richly deserve.    All staff is skilled, knowledgeable, friendly, and conscientious.  Chauffeurs, in particular, are hand-picked for their exceptional driving skills, friendly and warm demeanor, and their comprehensive knowledge of the City of Atlanta.</p>
                
                            <h4>Included With This Service?</h4>
                            <p>A professional uniformed driver/chauffeur will meet you at your doorstep or in the baggage claim area of the Airport with your personalized greeting sign. You will experience individual assistance with your luggage and personally escorted to your Taxi Sedan, Luxury Towncar, SUV, or Van. Atlanta Affiliate Transportation meets ​& greet service is the perfect choice for guests traveling with small children or elderly passengers who need or want individual assistance. Free 15 Minute Grocery Stop. No Charge for the use of <Link to={"/tuscaloosa-car-service-birmingham-bhm/"} className={"anchor"} rel="noopener noreferrer">booster</Link>/car seat. No Charge for gate fees, tolls or traffic. NO HIDDEN FEES, NO <a href="https://www.facebook.com/carservicemiamimiami/" target="_blank" className={"anchor"} rel="noopener noreferrer">GIMMICKS</a>.</p>
              
                            </div>
                    </div>
                </section>
                <Toplimousine />
                 </div>
            <Footer /> </div>
        )
    }
}

export default Hiram;