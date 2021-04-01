import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import Toplimousine from '../Element/Toplimousine';
import Tampabaytable from '../Element/Tampabaytable';


class Tampabay extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <InnerBanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title">Tampa Bay Buccaneers Football Limo Service</h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p> The World’s Leading Provider of High-Quality Chauffeured Car & Limousine Service</p>
                        </div>
                    </div>
                </section>
                <section className="section-full services-main">
                    <div className="services-content heading">
                        <div className="container">

                            <p> Grand Limousine carries a variety of Tampa Bay Buccaneers VIP entertainment packages. Pre-event hospitality. A private upscale dinner or tailgate party. First-class limousine service, VIP parking, celebrity autograph, and meet and greet sessions. Official gift items and more Rest easy knowing you’ve come to the experts for creating VIP sports, concert and theatre entertainment packages that we remember for a lifetime! Order online or call us toll-free at 404-424-4499 to speak with an experienced event specialist who will be glad to assist you with your next event.</p>                           
                           
                            <Tampabaytable />

                            <h4>Tampa Bay Buccaneers Football Limo Service</h4>
                            <p>Orlando  Airport Transportation – We understand that our Chauffeurs are the face of our business. All of our Chauffeur trained in traditional etiquette. New luxury units will ensure that you get the little touch of luxury that you so richly deserve.    All staff is skilled, knowledgeable, friendly, and conscientious.  Chauffeurs, in particular, are hand-picked for their exceptional driving skills, friendly and warm demeanor, and their comprehensive knowledge of the City of Tampa.</p>

                            <h4>What Do You Get With This Service?</h4>
                            <p> A professional uniformed driver/chauffeur will meet you at your doorstep or in the baggage claim area of the Airport with your personalized greeting sign. You will experience individual assistance with your luggage and personally escorted to your Taxi Sedan, Luxury Towncar, SUV, or Van. The Airport meets ​& greet service is the perfect choice for guests traveling with small children or elderly passengers who need or want individual assistance. Free 15 Minute Grocery Stop. No Charge for the use of booster/car seat. No Charge for gate fees, tolls or traffic. NO HIDDEN FEES, NO GIMMICKS.</p>

                        </div>
                    </div>
                </section>
                <Toplimousine />
                 </div>
            <Footer /> </div>
        )
    }
}

export default Tampabay;