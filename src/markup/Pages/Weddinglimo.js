import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import Toplimousine from '../Element/Toplimousine';
import Weddinglimotable from '../Element/Weddinglimotable';




class Weddinglimo extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <InnerBanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title"> Wedding Limo </h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p>  Grand Limousine - The World’s Leading Provider of High-Quality Car & Limousine Transportation</p>
                        </div>
                    </div>
                </section>
                <section className="section-full services-main">
                    <div className="services-content heading">
                        <div className="container">

                        <p>A wedding day is one of the most important days of your life, which meant to be cherished forever. On this day, you want to create beautiful memories without any compromises. We want everything to be the best. Therefore, we offer an exceptional wedding limo service that is bound to make your wedding a big success and very special for you. We cover Atlanta, Norcross, Alpharetta, and other surrounding areas.</p>
                        <p>Limo Service in Atlanta, Ga. provided by ​Grand Limousine​ of Atlanta, GA, is full-service transportation and limousine service, provider. We provide high-quality professional Limousine service at competitive rates. We are committed to serving your Rental Limo & Town Car needs for your Wedding Day.</p>     

                            <Weddinglimotable />

                            <p>​​Atlanta Airport Transportation – We understand that our Chauffeurs are the face of our business. All of our Chauffeur trained in traditional etiquette. New luxury units will ensure that you get the little touch of luxury that you so richly deserve.    All staff is skilled, knowledgeable, friendly, and conscientious.  Chauffeurs, in particular, are hand-picked for their exceptional driving skills, friendly and warm demeanor, and their comprehensive knowledge of the City of ​​McDonough.​​</p> 

                            <h4>Exclusives Included With This Service?​​</h4> 
                            <p>A professional uniformed driver/chauffeur will meet you at your doorstep or in the baggage claim area of the airport with your personalized greeting sign. You will experience individual assistance with your luggage and personally escorted to your Taxi Sedan, Luxury Towncar, SUV, or Van. The airport meets ​& greet service is the perfect choice for guests traveling with small <Link to={"/valdosta-car-service/"} className="anchor" rel="noopener noreferrer"> children </Link> or elderly <Link to={"/warner-robins-car-service/"} className="anchor" rel="noopener noreferrer"> passengers </Link> who need or want individual <Link to={"/hiram-car-service-atlanta-atl-airport/"} className="anchor" rel="noopener noreferrer"> assistance</Link>. Free 15 Minute <Link to={"/locations/savannah-party-bus/"} className="anchor" rel="noopener noreferrer"> Grocery </Link> Stop. No <Link to={"/wedding-transportation/"} className="anchor" rel="noopener noreferrer"> Charge </Link> for the use of booster/car seat. No Charge for gate fees, tolls or traffic. NO <Link to={"/locations/chicago-limousine/"} className="anchor" rel="noopener noreferrer"> HIDDEN </Link> FEES, NO <Link to={"/brewery-tours-atlanta/"} className="anchor" rel="noopener noreferrer"> GIMMICKS</Link>.</p> 

                            </div>
                    </div>
                </section>
                <Toplimousine />
                 </div>
            <Footer /> </div>
        )
    }
}

export default Weddinglimo;