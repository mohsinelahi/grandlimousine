import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import Toplimousine from '../Element/Toplimousine';
import Portcanaveraltable from '../Element/Portcanaveraltable';



class Portcanaveral extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <InnerBanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title">Port Canaveral Limousine</h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>Grand Limousine - The World’s Leading Provider of High-Quality Car & Limousine Transportation</p>
                        </div>
                    </div>
                </section>
                <section className="section-full services-main">
                    <div className="services-content heading">
                        <div className="container">

                            <p>At Port Canaveral is nothing more romantic and fun than a cruise. You get to see many different places and spend nights under the starry blue sky above the endless sea with that one particular person or a group of dear friends.</p>
                            <p>So why wait to get that fun started or, even worse, risk starting it in a bad mood just because you happened to catch lousy transportation at the Airport? Broadway Limousine is proud to be the leading provider of limousine service to Port Canaveral from Orlando airport and vice versa.</p>
                            <p>​Orlando airport can be a pretty hectic place, especially during peak season when crowds rush to Disney World, their cruise lines, or a vacation at Daytona Beach. We have a wide range of limos available for hire at any time, day and night, even during holidays, perfect for parties of all sizes and driven by experienced chauffeurs that will make your ride as pleasant as possible.</p>

                            <Portcanaveraltable />

                            <p>​Orlando Port Canaveral Transportation – We understand that our Chauffeurs are the face of our business. All of our Chauffeur trained in traditional etiquette. New luxury units will ensure that you get the little touch of luxury that you so richly deserve.    All staff is skilled, knowledgeable, friendly, and conscientious.  Chauffeurs, in particular, are hand-picked for their exceptional driving skills, friendly and warm demeanor, and their comprehensive knowledge of the City of ​Port Canaveral.​​​​</p>
                
                            <h4>Exclusives With This Service???​​</h4>
                            <p>A professional uniformed driver/chauffeur will meet you at your doorstep or in the baggage claim area of the Airport with your personalized greeting sign. You will experience individual assistance with your luggage and personally escorted to your Taxi Sedan, Luxury Towncar, SUV, or Van. The Airport meets ​& greet service is the perfect choice for guests traveling with small children or elderly passengers who need or want individual assistance. Free 15 Minute Grocery Stop. No Charge for the use of booster/car seat. No Charge for gate fees, tolls or traffic. NO HIDDEN FEES, NO GIMMICKS.</p>
              
                            </div>
                    </div>
                </section>
                <Toplimousine />
                 </div>
            <Footer /> </div>
        )
    }
}

export default Portcanaveral;